import React from "react";
import { Compass, ArrowUp, Phone, MessageSquare, Instagram, Facebook, CreditCard } from "lucide-react";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onPayOnline: () => void;
}

export default function Footer({ onNavigate, onPayOnline }: FooterProps) {

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSocialClick = (platform: string) => {
    if (platform === "WhatsApp") {
      const msg = encodeURIComponent("Hello Prestige Furniture System, I would like to book a consultation.");
      window.open(`https://wa.me/919066226918?text=${msg}`, "_blank");
    } else {
      window.open("tel:+919066226918");
    }
  };

  return (
    <footer className="bg-[#030303] text-gray-400 py-16 px-4 border-t border-white/5 relative z-10 overflow-hidden">
      
      {/* Visual background vector accent */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-gold-accent/2 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-left">
          
          {/* Brand Card Column */}
          <div className="md:col-span-5 space-y-6">
            <button
              onClick={() => onNavigate("hero")}
              className="flex items-center gap-3 group text-left cursor-pointer focus:outline-hidden"
            >
              <div className="w-9 h-9 border border-gold-accent/30 flex items-center justify-center rounded-xl">
                <Compass className="w-5 h-5 text-gold-accent group-hover:rotate-45 transition-transform duration-500" />
              </div>
              <div>
                <span className="block font-serif text-lg tracking-[0.2em] text-white font-semibold">
                  PRESTIGE
                </span>
                <span className="block font-display text-[9px] uppercase tracking-[0.3em] text-gold-accent/80 font-bold">
                  Furniture & Interiors
                </span>
              </div>
            </button>

            <p className="font-sans text-xs font-light text-gray-500 leading-relaxed max-w-sm">
              An elite custom furniture manufacturer and turnkey space renovator based in Banashankari, Bengaluru. Fulfilling modern, commercial, and high-density household requirements since 2007.
            </p>

            {/* Social connections */}
            <div className="flex gap-3">
              {[
                { name: "WhatsApp", icon: <MessageSquare className="w-4 h-4" /> },
                { name: "Phone", icon: <Phone className="w-4 h-4" /> },
                { name: "Instagram", icon: <Instagram className="w-4 h-4" /> },
                { name: "Facebook", icon: <Facebook className="w-4 h-4" /> }
              ].map((soc) => (
                <button
                  key={soc.name}
                  onClick={() => handleSocialClick(soc.name)}
                  className="p-2.5 border border-white/5 bg-white/5 rounded-full hover:border-gold-accent hover:text-gold-accent transition cursor-pointer focus:outline-hidden"
                  aria-label={`Connect with us on ${soc.name}`}
                >
                  {soc.icon}
                </button>
              ))}
            </div>

            {/* Secures Direct Payment CTA */}
            <div className="pt-2">
              <button
                id="footer-pay-online"
                onClick={onPayOnline}
                className="flex items-center gap-2 px-5 py-3 bg-[#0c0c0c] hover:bg-stone-900 border border-gold-accent/40 text-gold-accent hover:text-white rounded-full font-display text-[10px] tracking-widest uppercase font-bold transition duration-300 focus:outline-hidden cursor-pointer shadow-lg"
              >
                <CreditCard className="w-3.5 h-3.5 text-gold-accent" />
                Secure Pay Online
              </button>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="col-span-6 md:col-span-3 space-y-4">
            <span className="block font-display text-[10px] uppercase text-gold-accent tracking-widest font-bold border-b border-white/5 pb-2">
              SHOWROOM NAVIGATION
            </span>
            <ul className="space-y-2.5 text-xs font-light">
              {[
                { id: "hero", label: "Home Base" },
                { id: "services", label: "Spatial Services" },
                { id: "products", label: "Bespoke Collection" },
                { id: "why-choose-us", label: "Our Statistics" },
                { id: "gallery", label: "Project Dossier" },
                { id: "reviews", label: "Client Vouchers" },
                { id: "contact", label: "Showroom Entry" }
              ].map((ln) => (
                <li key={ln.id}>
                  <button
                    onClick={() => onNavigate(ln.id)}
                    className="hover:text-gold-accent transition cursor-pointer text-gray-400 focus:outline-hidden"
                  >
                    {ln.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate Core specs details */}
          <div className="col-span-6 md:col-span-4 space-y-4">
            <span className="block font-display text-[10px] uppercase text-gold-accent tracking-widest font-bold border-b border-white/5 pb-2">
              ESTABLISHMENT METADATA
            </span>
            <div className="space-y-3 font-sans text-xs font-light text-gray-500 leading-relaxed">
              <p>• Banashankari Showroom Hub, Bengaluru, Karnataka, 560085</p>
              <p>• Workshop: Specialized sal-wood & modular panel milling machinery</p>
              <p>• Mobile Support Hotline: +91 90662 26918</p>
              <p>• Project Delivery Range: Greater Bengaluru Sector (JP Nagar, Jayanagar, Banashankari, Whitefield, Electronicity)</p>
            </div>
          </div>

        </div>

        {/* Floating action back to top & copyright details */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="font-sans text-[11px] text-gray-600 text-center sm:text-left leading-relaxed">
            © {new Date().getFullYear()} Prestige Furniture System & Interiors. All rights reserved. <br className="hidden sm:block" />
            Designed with elite luxury showroom standards. Crafts engineered in Banashankari, Bengaluru since 2007.
          </p>

          <button
            onClick={handleBackToTop}
            className="group py-2.5 px-4 rounded-full border border-gold-accent/20 hover:border-gold-accent/90 bg-gold-950/5 hover:bg-gold-accent/15 text-gold-accent font-display text-[9px] uppercase tracking-widest font-bold flex items-center gap-2 transition cursor-pointer focus:outline-hidden"
            title="Scroll Back to Top"
          >
            BACK TO TOP
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
