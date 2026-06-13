import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TESTIMONIALS_DATA } from "../data";
import { Star, ChevronLeft, ChevronRight, Quote, Compass } from "lucide-react";

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto scroll testimonials slower for luxurious scannability
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const currentTestimonial = TESTIMONIALS_DATA[currentIndex];

  return (
    <section id="reviews" className="relative py-24 sm:py-32 bg-[#080808] overflow-hidden border-t border-white/5">
      {/* Background radial overlays */}
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-gold-accent/4 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-[20%] left-[-15%] w-[500px] h-[500px] bg-gold-accent/3 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-[9px] sm:text-[10px] font-display text-gold-accent tracking-[0.3em] font-bold uppercase block">
            CLIENT VOUCHERS
          </span>
          <h3 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-tight">
            Vouched by <span className="italic text-gold-accent text-gold-gradient font-serif font-light">Bengaluru's Elite</span> Homes
          </h3>
          <p className="font-sans text-xs sm:text-sm font-light text-gray-400 max-w-md mx-auto leading-relaxed">
            Read stories of how we matched individual budget constraints without sacrificing borer-free wood structures or soft-close German fittings.
          </p>
        </div>

        {/* Carousel frame */}
        <div className="relative z-10">
          
          <div className="absolute top-1/2 -left-4 sm:-left-12 transform -translate-y-1/2 z-20">
            <button
              onClick={handlePrev}
              className="p-3 border border-gold-accent/20 hover:border-gold-accent bg-black/60 hover:bg-gold-accent/10 text-gold-accent rounded-full transition-all focus:outline-hidden cursor-pointer"
              aria-label="Previous review slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          <div className="absolute top-1/2 -right-4 sm:-right-12 transform -translate-y-1/2 z-20">
            <button
              onClick={handleNext}
              className="p-3 border border-gold-accent/20 hover:border-gold-accent bg-black/60 hover:bg-gold-accent/10 text-gold-accent rounded-full transition-all focus:outline-hidden cursor-pointer"
              aria-label="Next review slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bento-card glass p-8 sm:p-16 rounded-3xl border border-white/10 text-center sm:text-left relative flex flex-col sm:flex-row gap-8 items-center"
              whileHover={{
                scale: 1.01,
                boxShadow: "0 10px 30px rgba(197, 164, 91, 0.08)",
              }}
            >
              {/* Giant quote decorator */}
              <div className="absolute right-8 bottom-6 text-gold-accent/5 pointer-events-none select-none">
                <Quote className="w-40 h-40 transform rotate-180" />
              </div>

              {/* Profile Avatar Frame with Golden Dot */}
              <div className="relative shrink-0 flex items-center justify-center w-20 h-20 rounded-full border border-gold-accent/30 bg-gold-950/10">
                <Compass className="w-8 h-8 text-gold-accent" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#25D366] border-2 border-black" title="Verified Customer" />
              </div>

              {/* Review details */}
              <div className="space-y-4 flex-1 text-left">
                {/* Stars ratings */}
                <div className="flex gap-1 justify-center sm:justify-start">
                  {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-accent text-gold-accent" />
                  ))}
                </div>

                {/* Review Message Quote */}
                <p className="font-serif text-lg sm:text-xl font-light text-gray-200 leading-relaxed italic">
                  "{currentTestimonial.text}"
                </p>

                {/* Reviewer Meta info */}
                <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <h4 className="font-sans text-sm font-semibold text-white">{currentTestimonial.name}</h4>
                    <span className="block text-[10px] font-display text-gold-accent uppercase tracking-widest font-bold">
                      {currentTestimonial.projectType}
                    </span>
                  </div>
                  
                  <span className="text-[10px] font-mono text-gray-500">{currentTestimonial.date}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indexes Indicator */}
          <div className="flex justify-center gap-2 mt-8 z-10 relative">
            {TESTIMONIALS_DATA.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "w-6 bg-gold-accent" : "w-1.5 bg-white/20"
                }`}
                aria-label={`Go to review slide ${i + 1}`}
              />
            ))}
          </div>

        </div>

        {/* Localized maps Trust Badge */}
        <div className="mt-16 inline-flex items-center gap-4 py-3 px-6 glass rounded-full border border-white/10">
          <div className="text-left font-display">
            <span className="block text-white text-[11px] font-bold tracking-widest uppercase">Verified Showroom Rating</span>
            <span className="block text-gray-400 text-[10px]">Estd 2007 • Banashankari Workshop</span>
          </div>
          <div className="h-8 w-[1px] bg-white/10" />
          <div className="flex items-center gap-1.5">
            <span className="text-white font-bold font-serif text-lg">4.9</span>
            <div className="flex">
              <Star className="w-3.5 h-3.5 fill-gold-accent text-gold-accent" />
              <Star className="w-3.5 h-3.5 fill-gold-accent text-gold-accent" />
              <Star className="w-3.5 h-3.5 fill-gold-accent text-gold-accent" />
              <Star className="w-3.5 h-3.5 fill-gold-accent text-gold-accent" />
              <Star className="w-3.5 h-3.5 fill-gold-accent text-gold-accent" />
            </div>
            <span className="text-[10px] text-gray-500 font-mono">(400+ Local Reviews)</span>
          </div>
        </div>

      </div>
    </section>
  );
}
