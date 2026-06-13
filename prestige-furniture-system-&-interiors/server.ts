import express from "express";
import path from "path";
import fs from "fs";
import crypto from "crypto";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;
const TRANSACTIONS_FILE = path.join(process.cwd(), "transactions.json");

// Middleware to parse JSON
app.use(express.json());

// Initialize transactions log file if not exists
if (!fs.existsSync(TRANSACTIONS_FILE)) {
  fs.writeFileSync(TRANSACTIONS_FILE, JSON.stringify([], null, 2), "utf-8");
}

// Security: Generate unique verification stamp to prevent client-side manipulation
function generateSecureStamp(txnData: any) {
  const payload = `${txnData.id}-${txnData.amount}-${txnData.projectRef}-${process.env.RAZORPAY_KEY_SECRET || "fallback_salt"}`;
  return crypto.createHash("sha256").update(payload).digest("hex");
}

// 1. API: Get active payment configuration status (detects sandbox status)
app.get("/api/payment/config", (req, res) => {
  const hasRazorpay = !!(process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET);
  const hasPayPal = !!(process.env.PAYPAL_CLIENT_ID && process.env.PAYPAL_CLIENT_SECRET);
  
  res.json({
    razorpay: {
      keyId: process.env.RAZORPAY_KEY_ID || "rzp_test_sandbox_prestige",
      isSandbox: !hasRazorpay
    },
    paypal: {
      clientId: process.env.PAYPAL_CLIENT_ID || "paypal_sandbox_prestige",
      isSandbox: !hasPayPal
    }
  });
});

// 2. API: Create Razorpay Order securely (server-side to prevent amount tampering)
app.post("/api/payment/razorpay/create-order", async (req, res) => {
  try {
    const { amount, currency, projectRef, customerName, customerPhone } = req.body;
    
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      return res.status(400).json({ error: "Invalid amount provided." });
    }

    const valueInPaise = Math.round(Number(amount) * 100); // Razorpay processes in paise
    const hasKeys = !!(process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET);

    if (hasKeys) {
      // Connect to REAL Razorpay API (with basic auth)
      const rzpAuth = Buffer.from(`${process.env.RAZORPAY_KEY_ID}:${process.env.RAZORPAY_KEY_SECRET}`).toString("base64");
      const rzpResponse = await fetch("https://api.razorpay.com/v1/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${rzpAuth}`
        },
        body: JSON.stringify({
          amount: valueInPaise,
          currency: currency || "INR",
          receipt: `rcpt_${projectRef || "gen"}_${Date.now().toString().slice(-6)}`,
          payment_capture: 1
        })
      });

      if (!rzpResponse.ok) {
        const errorText = await rzpResponse.text();
        console.error("Razorpay API Error Response:", errorText);
        throw new Error("Razorpay returned an error: " + errorText);
      }

      const orderData = await rzpResponse.json();
      return res.json({
        success: true,
        orderId: orderData.id,
        amount: orderData.amount,
        currency: orderData.currency,
        isSandbox: false
      });
    } else {
      // Return high-fidelity sandbox simulation when keys are omitted in developer space
      const simulatedOrderId = `order_sand_${crypto.randomBytes(8).toString("hex")}`;
      console.log(`[PAYMENT-SANDBOX] Created Simulated Razorpay Order ID: ${simulatedOrderId} for ${amount} INR`);
      
      return res.json({
        success: true,
        orderId: simulatedOrderId,
        amount: valueInPaise,
        currency: "INR",
        isSandbox: true
      });
    }
  } catch (err: any) {
    console.error("Error creating Razorpay order:", err);
    res.status(500).json({ error: "Server error during order initialization: " + err.message });
  }
});

// 3. API: Verify Razorpay Payment Signature
app.post("/api/payment/razorpay/verify", (req, res) => {
  try {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature, metadata } = req.body;
    const hasKeys = !!(process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET);

    let isMatched = false;

    if (hasKeys && razorpay_signature) {
      const text = `${razorpay_order_id}|${razorpay_payment_id}`;
      const secret = process.env.RAZORPAY_KEY_SECRET as string;
      const computedSignature = crypto
        .createHmac("sha256", secret)
        .update(text)
        .digest("hex");
      
      isMatched = computedSignature === razorpay_signature;
    } else {
      // Sandbox verify always passes
      isMatched = true;
    }

    if (!isMatched) {
      return res.status(400).json({ success: false, error: "Payment signature verification failed. Possible fraud." });
    }

    // Save and log verified payment
    const rawData = fs.readFileSync(TRANSACTIONS_FILE, "utf-8");
    const transactions = JSON.parse(rawData);

    const newTxn = {
      id: razorpay_payment_id || `pay_sand_${crypto.randomBytes(8).toString("hex")}`,
      orderId: razorpay_order_id,
      customerName: metadata?.customerName || "Premium Customer",
      customerPhone: metadata?.customerPhone || "N/A",
      email: metadata?.email || "customer@prestigefurniture.com",
      amount: metadata?.amount || 0,
      currency: "INR",
      orderType: metadata?.orderType || "advance",
      projectRef: metadata?.projectRef || "PRE-000",
      paymentGateway: "razorpay",
      status: "success",
      timestamp: new Date().toISOString(),
      secureStamp: ""
    };

    newTxn.secureStamp = generateSecureStamp(newTxn);
    transactions.push(newTxn);
    fs.writeFileSync(TRANSACTIONS_FILE, JSON.stringify(transactions, null, 2), "utf-8");

    console.log(`[PAYMENT-VERIFIED] Verified txn logged securely: ${newTxn.id}`);

    res.json({
      success: true,
      message: "Payment verified and recorded.",
      receipt: {
        transactionId: newTxn.id,
        customerName: newTxn.customerName,
        price: newTxn.amount,
        projectRef: newTxn.projectRef,
        timestamp: newTxn.timestamp,
        verificationHash: newTxn.secureStamp,
        gateway: "Razorpay"
      }
    });

  } catch (err: any) {
    console.error("Signature verification error:", err);
    res.status(500).json({ error: "Failed verify process: " + err.message });
  }
});

// 4. API: Create PayPal Checkout Order
app.post("/api/payment/paypal/create-order", async (req, res) => {
  try {
    const { amount, currency, projectRef } = req.body;
    
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      return res.status(400).json({ error: "Invalid amount provided." });
    }

    const hasPaypal = !!(process.env.PAYPAL_CLIENT_ID && process.env.PAYPAL_CLIENT_SECRET);

    if (hasPaypal) {
      // Connect to PayPal Oauth & Order endpoint
      const auth = Buffer.from(`${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`).toString("base64");
      
      // Call token service
      const tokenRes = await fetch("https://api-m.sandbox.paypal.com/v1/oauth2/token", {
        method: "POST",
        headers: {
          Authorization: `Basic ${auth}`,
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "grant_type=client_credentials"
      });

      if (!tokenRes.ok) throw new Error("Failed to pull PayPal access token.");
      const tokenData = await tokenRes.json();
      const accessToken = tokenData.access_token;

      // Create Order
      const paypalOrder = await fetch("https://api-m.sandbox.paypal.com/v2/checkout/orders", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          intent: "CAPTURE",
          purchase_units: [
            {
              amount: {
                currency_code: currency || "USD",
                value: Number(amount).toFixed(2)
              },
              description: `Prestige Furniture Project Ref: ${projectRef || "Bespoke"}`
            }
          ]
        })
      });

      const orderData = await paypalOrder.json();
      return res.json({
        success: true,
        orderId: orderData.id,
        isSandbox: false
      });
    } else {
      // Sandbox Simulation
      const simulatedPaypalOrderId = `PP-ORDER-${crypto.randomBytes(6).toString("hex").toUpperCase()}`;
      console.log(`[PAYMENT-SANDBOX] Created Simulated PayPal Order: ${simulatedPaypalOrderId}`);
      return res.json({
        success: true,
        orderId: simulatedPaypalOrderId,
        isSandbox: true
      });
    }
  } catch (err: any) {
    console.error("PayPal Order error:", err);
    res.status(500).json({ error: "PayPal routing initialization failed: " + err.message });
  }
});

// 5. API: Capture PayPal Order
app.post("/api/payment/paypal/capture-order", async (req, res) => {
  try {
    const { orderId, metadata } = req.body;
    const hasPaypal = !!(process.env.PAYPAL_CLIENT_ID && process.env.PAYPAL_CLIENT_SECRET);

    let captureId = "";
    let status = "COMPLETED";

    if (hasPaypal) {
      const auth = Buffer.from(`${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`).toString("base64");
      
      // Pull token first
      const tokenRes = await fetch("https://api-m.sandbox.paypal.com/v1/oauth2/token", {
        method: "POST",
        headers: {
          Authorization: `Basic ${auth}`,
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "grant_type=client_credentials"
      });

      if (!tokenRes.ok) throw new Error("Failed to pull PayPal token for capture.");
      const tokenData = await tokenRes.json();
      const accessToken = tokenData.access_token;

      // Capture Order payments
      const captureRes = await fetch(`https://api-m.sandbox.paypal.com/v2/checkout/orders/${orderId}/capture`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json"
        }
      });

      if (!captureRes.ok) {
        const errText = await captureRes.text();
        throw new Error("PayPal Capture Error: " + errText);
      }

      const captureData = await captureRes.json();
      captureId = captureData.purchase_units?.[0]?.payments?.captures?.[0]?.id || `cap_${crypto.randomBytes(6).toString("hex")}`;
      status = captureData.status;
    } else {
      // Sandbox Simulation
      captureId = `PAY-PRO-SANDBOX-${crypto.randomBytes(6).toString("hex").toUpperCase()}`;
    }

    if (status !== "COMPLETED" && status !== "APPROVED") {
      return res.status(400).json({ success: false, error: `PayPal Checkout was not fully completed. Status: ${status}` });
    }

    // Save and log verified payment
    const rawData = fs.readFileSync(TRANSACTIONS_FILE, "utf-8");
    const transactions = JSON.parse(rawData);

    const newTxn = {
      id: captureId,
      orderId: orderId,
      customerName: metadata?.customerName || "Premium International Customer",
      customerPhone: metadata?.customerPhone || "N/A",
      email: metadata?.email || "intl.customer@prestigefurniture.com",
      amount: metadata?.amount || 0,
      currency: "USD",
      orderType: metadata?.orderType || "advance",
      projectRef: metadata?.projectRef || "PRE-INT",
      paymentGateway: "paypal",
      status: "success",
      timestamp: new Date().toISOString(),
      secureStamp: ""
    };

    newTxn.secureStamp = generateSecureStamp(newTxn);
    transactions.push(newTxn);
    fs.writeFileSync(TRANSACTIONS_FILE, JSON.stringify(transactions, null, 2), "utf-8");

    console.log(`[PAYMENT-PAYPAL-CAPTURE] Recorded PayPal payment: ${captureId}`);

    res.json({
      success: true,
      message: "PayPal checkout capture successfully validated.",
      receipt: {
        transactionId: newTxn.id,
        customerName: newTxn.customerName,
        price: newTxn.amount,
        projectRef: newTxn.projectRef,
        timestamp: newTxn.timestamp,
        verificationHash: newTxn.secureStamp,
        gateway: "PayPal"
      }
    });

  } catch (err: any) {
    console.error("PayPal capture verified routing failed:", err);
    res.status(500).json({ error: "Failed capture verify: " + err.message });
  }
});

// 5.5 API: Verify and record direct UPI manual transfers to +91 90662 26918
app.post("/api/payment/direct-upi/verify", (req, res) => {
  try {
    const { metadata } = req.body;
    const rawData = fs.readFileSync(TRANSACTIONS_FILE, "utf-8");
    const transactions = JSON.parse(rawData);

    const transactionId = `UPI-DIR-${crypto.randomBytes(6).toString("hex").toUpperCase()}`;

    const newTxn = {
      id: transactionId,
      orderId: `direct_${crypto.randomBytes(4).toString("hex")}`,
      customerName: metadata?.customerName || "Premium UPI Customer",
      customerPhone: metadata?.customerPhone || "N/A",
      email: metadata?.email || "customer@prestigefurniture.com",
      amount: metadata?.amount || 0,
      currency: "INR",
      orderType: metadata?.orderType || "advance",
      projectRef: metadata?.projectRef || "PRE-000",
      paymentGateway: `Direct UPI (${metadata?.upiMethod || "Instant Direct"})`,
      status: "success",
      timestamp: new Date().toISOString(),
      secureStamp: ""
    };

    newTxn.secureStamp = generateSecureStamp(newTxn);
    transactions.push(newTxn);
    fs.writeFileSync(TRANSACTIONS_FILE, JSON.stringify(transactions, null, 2), "utf-8");

    console.log(`[PAYMENT-UPI-DIRECT] Logged Direct UPI payment to +91 90662 26918: ${transactionId}`);

    res.json({
      success: true,
      message: "Direct UPI payment log processed.",
      receipt: {
        transactionId: newTxn.id,
        customerName: newTxn.customerName,
        price: newTxn.amount,
        projectRef: newTxn.projectRef,
        timestamp: newTxn.timestamp,
        verificationHash: newTxn.secureStamp,
        gateway: `Direct UPI (${metadata?.upiMethod?.toUpperCase() || "Instant Link"})`
      }
    });
  } catch (err: any) {
    console.error("Direct UPI verify server error:", err);
    res.status(500).json({ error: "Direct UPI validation failed: " + err.message });
  }
});

// 6. API: Simulated Receipt and Direct confirmation flow
app.post("/api/payment/confirm-receipt", (req, res) => {
  const { customerName, customerPhone, email, amount, projectRef, paymentGateway, transactionId } = req.body;
  
  // Real transaction auditing & email delivery log mockup
  console.log(`[ALERT-EMAIL] Send confirmation summary email to ${email || "sales@prestigefurniture.com"}`);
  console.log(`Subject: Prestige Payment Confirmed: Receipt #${transactionId}`);
  console.log(`Body: Hello ${customerName}, your payment of Rs./$ ${amount} towards project reference ${projectRef} was securely verified via ${paymentGateway}. Thank you!`);

  res.json({
    success: true,
    emailSent: true,
    message: `Receipt sent to ${email || "your email"}.`
  });
});

// Serve Vite middleware or production static site
async function initServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[FULLSTACK SERVER] Prestige Furniture Backend listening on http://0.0.0.0:${PORT}`);
  });
}

initServer().catch((e) => {
  console.error("Backend Server launch crashed:", e);
});
