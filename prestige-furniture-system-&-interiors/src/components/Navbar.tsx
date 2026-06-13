import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, MessageSquare, Compass, CreditCard } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onPayOnline: () => void;
}

export default function Navbar({ activeSection, onNavigate, onPayOnline }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "services", label: "Services" },
    { id: "products", label: "Products" },
    { id: "why-choose-us", label: "About" },
    { id: "gallery", label: "Gallery" },
    { id: "reviews", label: "Reviews" },
    { id: "contact", label: "Contact" },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  const handleWhatsAppConsultation = () => {
    const msg = encodeURIComponent(
      "Hello Prestige Furniture System & Interiors, I would like to book a consultation regarding furniture/interior work."
    );
    window.open(`https://wa.me/919066226918?text=${msg}`, "_blank");
  };

  return (
    <>
      <motion.nav
        id="navbar-container"
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "glass-nav py-3 shadow-xl shadow-black/30"
            : "bg-transparent py-5"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Brand Logo & Name */}
          <button
            onClick={() => handleLinkClick("hero")}
            className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-hidden"
          >
            <div className="relative flex items-center justify-center w-10 h-10 border border-gold-accent/40 rounded-xl group-hover:border-gold-accent/80 transition-colors duration-300">
              <Compass className="w-5 h-5 text-gold-accent group-hover:rotate-45 transition-transform duration-500" />
              <div className="absolute -inset-1 border border-gold-accent/10 scale-0 group-hover:scale-100 transition-all duration-300 rounded-xl" />
            </div>

            <div>
              <span className="block font-serif text-lg tracking-[0.2em] text-white leading-tight font-medium">
                P R E S T I G E
              </span>
              <span className="block font-display text-[8.5px] uppercase tracking-[0.35em] text-gold-accent/80 font-bold">
                Furniture & Interiors
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`relative px-4 py-2 text-[11px] font-display uppercase tracking-widest cursor-pointer transition-colors duration-300 focus:outline-hidden ${
                      isActive ? "text-white" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-4 right-4 h-[1px] bg-gold-accent"
                        layoutId="activeNavIndicator"
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Book Now Instant Callback CTA */}
            <button
              onClick={handleWhatsAppConsultation}
              className="relative overflow-hidden group cursor-pointer bg-gradient-to-r from-gold-900 to-gold-700 hover:from-gold-800 hover:to-gold-600 border border-gold-300/30 font-display text-[10px] tracking-widest text-white uppercase font-bold py-2.5 px-5 rounded-full transition-all duration-300 shadow-md shadow-gold-950/20 hover:shadow-gold-900/35 focus:outline-hidden"
            >
              <div className="absolute inset-0 bg-white/10 translate-y-full hover:translate-y-0 group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5" />
                Book Consultation
              </span>
            </button>

            {/* Pay Online Secured CTA */}
            <button
              id="nav-pay-online-desktop"
              onClick={onPayOnline}
              className="relative overflow-hidden group cursor-pointer bg-[#0c0c0c] hover:bg-stone-900 border border-gold-accent/40 font-display text-[10px] tracking-widest text-gold-accent hover:text-white uppercase font-bold py-2.5 px-5 rounded-full transition-all duration-300 shadow-md focus:outline-hidden"
            >
              <div className="absolute inset-0 bg-gold-accent/5 translate-y-full hover:translate-y-0 group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative flex items-center gap-1.5">
                <CreditCard className="w-3.5 h-3.5 text-gold-accent" />
                Pay Online
              </span>
            </button>
          </div>

          {/* Tablet & Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-3.5">
            {/* Quick Secure Payment Link on Mobile */}
            <button
              id="nav-pay-online-mobile-quick"
              onClick={onPayOnline}
              className="p-2 border border-gold-accent/40 rounded-full text-gold-accent hover:bg-gold-accent/5 transition-colors focus:outline-hidden"
              aria-label="Secure online payment mobile quick link"
            >
              <CreditCard className="w-4 h-4" />
            </button>

            {/* Quick Consultation Ring on Mobile */}
            <button
              onClick={handleWhatsAppConsultation}
              className="p-2 border border-gold-accent/20 rounded-full text-gold-accent hover:bg-gold-accent/5 transition-colors focus:outline-hidden"
              aria-label="Direct WhatsApp Consultation Link"
            >
              <MessageSquare className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white transition-colors focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Panel Sidebar */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 lg:hidden flex justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu container */}
            <motion.div
              className="relative w-72 max-w-[80vw] h-full bg-[#080808] border-l border-gold-accent/15 py-24 px-6 flex flex-col justify-between"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
            >
              <div className="space-y-6">
                <div className="font-serif text-[11px] uppercase tracking-[0.35em] text-[#666666] border-b border-white/5 pb-4">
                  PRESTIGE SHOWROOM
                </div>

                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.id;
                    return (
                      <button
                        key={link.id}
                        onClick={() => handleLinkClick(link.id)}
                        className={`text-left font-display uppercase tracking-widest text-[13px] py-2 focus:outline-hidden transition-colors ${
                          isActive
                            ? "text-gold-accent font-medium pl-2 border-l border-gold-accent"
                            : "text-gray-400 hover:text-white pl-0"
                        }`}
                      >
                        {link.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Details */}
              <div className="space-y-6">
                <div className="text-[10px] font-mono text-gray-500 space-y-1.5 leading-relaxed">
                  <p>Banashankari, Bengaluru</p>
                  <p>Open • 9:30 AM – 8:30 PM</p>
                  <p>Tel: +91 90662 26918</p>
                </div>

                <button
                  id="nav-pay-online-mobile-sidebar"
                  onClick={() => { setMobileMenuOpen(false); onPayOnline(); }}
                  className="w-full flex items-center justify-center gap-2 bg-[#0c0c0c] hover:bg-stone-950 border border-gold-accent/45 text-gold-accent hover:text-white font-display uppercase text-[11px] tracking-widest py-3 rounded-full transition duration-300 focus:outline-hidden"
                >
                  <CreditCard className="w-4 h-4" />
                  Secure Pay Online
                </button>

                <button
                  onClick={handleWhatsAppConsultation}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-gold-900 to-gold-700 text-white font-display uppercase text-xs tracking-widest py-3 rounded-full border border-gold-accent/20 hover:from-gold-800 transition"
                >
                  <MessageSquare className="w-4 h-4" />
                  WhatsApp Now
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
