import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import FeaturedProducts from "./components/FeaturedProducts";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import PaymentSection from "./components/PaymentSection";
import { MessageSquare, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");
  const [isPaymentActive, setIsPaymentActive] = useState(false);

  // Auto-scroll to top when payment section activates
  useEffect(() => {
    if (isPaymentActive) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [isPaymentActive]);

  // Mouse spotlight coords
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Viewport scroll section tracking via IntersectionObserver
  useEffect(() => {
    if (isLoading) return;

    const sections = ["hero", "services", "products", "why-choose-us", "gallery", "reviews", "contact"];
    const observers = sections.map((sectionId) => {
      const el = document.getElementById(sectionId);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId);
          }
        },
        {
          rootMargin: "-25% 0px -60% 0px", // Trigger when section passes midpoint
          threshold: 0,
        }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, [isLoading]);

  // Smooth scroll callback function
  const handleNavigation = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      const navbarHeight = document.getElementById("navbar-container")?.offsetHeight || 80;
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  const triggerPersistentWhatsApp = () => {
    const msg = encodeURIComponent(
      "Hello Prestige Furniture System & Interiors, I would like to book a consultation regarding furniture/interior work."
    );
    window.open(`https://wa.me/919066226918?text=${msg}`, "_blank");
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <Loader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative min-h-screen text-white bg-[#050505] overflow-x-hidden select-text"
        >
          {/* Continuous premium mouse spotlight element */}
          <div
            className="hidden pointer-events-none lg:block fixed w-[400px] h-[400px] rounded-full bg-radial from-gold-accent/[0.045] to-transparent blur-3xl z-30 transition-all duration-300"
            style={{
              left: `${mousePos.x - 200}px`,
              top: `${mousePos.y - 200}px`,
            }}
          />

          {/* Aesthetic background static gold blobs */}
          <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-gold-accent/[0.015] blur-3xl pointer-events-none" />
          <div className="absolute top-[60%] right-[-10%] w-[450px] h-[450px] rounded-full bg-gold-accent/[0.015] blur-3xl pointer-events-none" />

          {/* Luxury Sticky Navigation */}
          <Navbar 
            activeSection={activeSection} 
            onNavigate={(sectionId) => {
              setIsPaymentActive(false);
              setTimeout(() => handleNavigation(sectionId), 50);
            }} 
            onPayOnline={() => setIsPaymentActive(true)}
          />

          {/* Showroom Content Grid Sections */}
          <main className="relative z-10">
            {isPaymentActive ? (
              <PaymentSection onBack={() => setIsPaymentActive(false)} />
            ) : (
              <>
                <Hero
                  onExploreProducts={() => handleNavigation("products")}
                  onBookConsultation={() => handleNavigation("contact")}
                />

                <Services />

                <FeaturedProducts />

                <WhyChooseUs />

                <Gallery />

                <Reviews />

                <ContactSection />
              </>
            )}
          </main>

          {/* Footer Component */}
          <Footer 
            onNavigate={(sectionId) => {
              setIsPaymentActive(false);
              setTimeout(() => handleNavigation(sectionId), 50);
            }} 
            onPayOnline={() => setIsPaymentActive(true)}
          />

          {/* Floating Persistent WhatsApp Ring Widget and Call Ring Indicator */}
          <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
            {/* Quick Call Link widget */}
            <motion.a
              href="tel:+919066226918"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-stone-900 border border-gold-accent/30 text-gold-accent hover:bg-gold-accent hover:text-black transition-colors shadow-lg shadow-black/50"
              aria-label="Direct Phone Consultation Hot-line Call link"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <PhoneCall className="w-4.5 h-4.5" />
            </motion.a>

            {/* Glowing Custom WhatsApp Consultation Link */}
            <motion.button
              onClick={triggerPersistentWhatsApp}
              className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#128C7E] hover:bg-[#25D366] text-white shadow-xl shadow-black/40 cursor-pointer focus:outline-hidden"
              aria-label="Interactive floating WhatsApp button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Pulsing ring indicator */}
              <div className="absolute inset-0 rounded-full border border-[#25D366] animate-ping opacity-75 pointer-events-none" />
              <MessageSquare className="w-6 h-6 fill-white text-transparent" />
            </motion.button>
          </div>
        </motion.div>
      )}
    </>
  );
}
