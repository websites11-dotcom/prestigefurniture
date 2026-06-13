import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { Compass, MessageSquare, ArrowRight, CornerDownRight } from "lucide-react";

interface HeroProps {
  onExploreProducts: () => void;
  onBookConsultation: () => void;
}

export default function Hero({ onExploreProducts, onBookConsultation }: HeroProps) {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; duration: number }[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  // High-res luxury interior imagery
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1920",
      tagline: "SOPHISTICATED RESIDENCES",
      subtitle: "Custom Living Room Spaces"
    },
    {
      url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=1920",
      tagline: "OPULENT BEDROOMS",
      subtitle: "Bespoke Master Bedrooms"
    },
    {
      url: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1920",
      tagline: "MODERN INTERIORS",
      subtitle: "Smart Customized Wardrobes"
    }
  ];

  useEffect(() => {
    // Generate organic floating gold dust particles
    const createdParticles = Array.from({ length: 28 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 15 + 10,
    }));
    setParticles(createdParticles);

    // Auto-advance slides slower for epic showcase feel
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(slideInterval);
  }, []);

  const handleWhatsAppNow = () => {
    const msg = encodeURIComponent("Hello Prestige Furniture! I am visiting your luxury website and want to ask about custom designs.");
    window.open(`https://wa.me/919066226918?text=${msg}`, "_blank");
  };

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#030303]">
      
      {/* Background Cinematic Slide Engine with slow zoom */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, idx) => (
          <motion.div
            key={idx}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: idx === currentSlide ? 0.35 : 0,
              scale: idx === currentSlide ? 1.05 : 1.0
            }}
            transition={{ 
              opacity: { duration: 2.0, ease: "linear" },
              scale: { duration: 7.0, ease: "easeOut" }
            }}
          >
            <img
              src={slide.url}
              alt={slide.subtitle}
              className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.05]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        ))}
        {/* Rich dark vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-black/80" />
        <div className="absolute inset-0 bg-radial-gradient(circle, transparent 30%, #030303 90%)" />
      </div>

      {/* Floating Gold Particles Dust */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-gold-accent/40"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
            animate={{
              y: ["0px", "-120px", "0px"],
              x: ["0px", "30px", "0px"],
              opacity: [0, 0.7, 0]
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Hero Content Display */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left mt-16 sm:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            {/* Tagline / Establishment */}
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 border border-gold-300/20 bg-gold-950/20 rounded-full"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Compass className="w-3.5 h-3.5 text-gold-accent animate-spin-slow" />
              <span className="text-[9px] sm:text-[10px] font-display text-gold-accent tracking-[0.3em] uppercase font-bold">
                ESTABLISHED 2007 • BENGALURU
              </span>
            </motion.div>

            {/* Headline and Narrative */}
            <div className="space-y-4">
              <motion.h2
                className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extralight tracking-tight text-white leading-[1.1]"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.4 }}
              >
                Crafting <span className="font-light italic text-gold-accent text-gold-gradient font-serif">Beautiful Private</span> Spaces <span className="block mt-1 font-serif">Since 2007</span>
              </motion.h2>

              <motion.p
                className="font-sans text-xs sm:text-sm lg:text-base font-light text-gray-400 max-w-2xl leading-relaxed tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.6 }}
              >
                Custom Furniture & Interior Solutions for Modern Homes and Offices. Engineered with premium borer-free marine ply, seasoned teak, and German soft-close fittings inside Banashankari showroom.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap justify-center sm:justify-start gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.8 }}
            >
              <button
                onClick={onExploreProducts}
                className="group relative px-6 py-3.5 bg-white text-black font-display font-bold text-[10px] tracking-widest uppercase rounded-xs overflow-hidden transition px-8 flex items-center gap-2 cursor-pointer focus:outline-hidden"
              >
                <div className="absolute inset-x-0 h-0 bottom-0 bg-gold-accent/20 group-hover:h-full transition-all duration-300 pointer-events-none" />
                View Collection
                <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1.5 transition-transform" />
              </button>

              <button
                onClick={onBookConsultation}
                className="relative px-6 py-3.5 bg-transparent border border-gold-accent/40 text-gold-accent hover:border-gold-accent font-display text-[10px] uppercase font-bold tracking-widest rounded-xs hover:bg-gold-accent/5 transition flex items-center gap-1.5 cursor-pointer focus:outline-hidden"
              >
                Book Consultation
              </button>

              <button
                onClick={handleWhatsAppNow}
                className="px-6 py-3.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] font-display text-[10px] uppercase font-bold tracking-widest rounded-xs transition flex items-center gap-1.5 cursor-pointer focus:outline-hidden"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                WhatsApp Now
              </button>
            </motion.div>
          </div>

          {/* Luxury Showcase Indicator Card */}
          <div className="hidden lg:block lg:col-span-4 justify-self-end">
            <motion.div
              className="glass-premium p-6 rounded-sm w-76 space-y-6 relative border-gold-accent/20 overflow-hidden"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, delay: 0.7 }}
            >
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-gold-gradient opacity-10 blur-xl rounded-full" />
              
              <div className="text-left font-display">
                <span className="text-[10px] tracking-widest text-[#a88a44] uppercase font-bold">Featured Showcase</span>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="mt-2"
                  >
                    <p className="text-lg font-serif text-white">{slides[currentSlide].subtitle}</p>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">
                      {slides[currentSlide].tagline}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="pt-4 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-gray-500">
                <span>0{currentSlide + 1} / 0{slides.length}</span>
                <div className="flex gap-1.5">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === currentSlide ? "w-6 bg-gold-accent" : "w-1.5 bg-white/20"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Ambient gold line on bottom */}
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-gold-accent/15 to-transparent z-10" />
      
      {/* Decorative arrow pointing down */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1.5 z-10 text-gold-accent/50">
        <span className="text-[8px] font-display uppercase tracking-widest text-gold-accent/50">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2.0, repeat: Infinity }}
          className="w-[1px] h-8 bg-gradient-to-b from-gold-accent/50 to-transparent"
        />
      </div>
    </section>
  );
}
