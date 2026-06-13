import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GALLERY_DATA } from "../data";
import { GalleryItem } from "../types";
import { Compass, Eye, X, SwitchCamera, ArrowRight, Sparkles } from "lucide-react";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [showBefore, setShowBefore] = useState(false); // For Before/After transformation comparison

  const categories = ["All", "Interior Projects", "Large Furniture", "Commercial Spaces", "Before/After"];

  // Filter gallery items
  const filteredGallery = activeCategory === "All"
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === activeCategory);

  const triggerLightbox = (item: GalleryItem) => {
    setSelectedItem(item);
    setShowBefore(false); // Default to "After" view
  };

  const handleWhatsAppInquiry = (projectTitle: string) => {
    const msg = encodeURIComponent(
      `Hello Prestige Furniture System & Interiors, I saw your spectacular gallery image of "${projectTitle}" and would like to build something similar. Please assist me.`
    );
    window.open(`https://wa.me/919066226918?text=${msg}`, "_blank");
  };

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-[#050505] overflow-hidden border-t border-white/5">
      {/* Visual spotlights */}
      <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] bg-gold-accent/4 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[5%] w-[450px] h-[450px] bg-gold-accent/3 rounded-full blur-[110px] pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[9px] sm:text-[10px] font-display text-gold-accent tracking-[0.3em] font-bold uppercase block">
            PREMIUM PROJECT DOSSIER
          </span>
          <h3 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-tight">
            Our Architectural <span className="italic text-gold-accent text-gold-gradient font-serif font-light">Showroom & Home</span> Portfolio
          </h3>
          <p className="font-sans text-xs sm:text-sm font-light text-gray-400 max-w-xl mx-auto leading-relaxed">
            Witness the immaculate execution curves, natural wood varnishes, and custom spatial fittings commissioned by elite residential and corporate circles in South Bengaluru.
          </p>
        </div>

        {/* Gallery Tab Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2.5 font-display text-[9px] sm:text-[10px] uppercase tracking-widest cursor-pointer transition-colors duration-300 rounded-full focus:outline-hidden ${
                activeCategory === cat
                  ? "bg-gold-accent text-black font-bold"
                  : "bg-white/5 text-gray-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Masonry-like grid using Tailwind columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 relative z-10">
          {filteredGallery.map((item) => (
            <motion.div
              key={item.id}
              onClick={() => triggerLightbox(item)}
              className="break-inside-avoid relative bento-card glass border border-white/10 rounded-3xl overflow-hidden group cursor-pointer hover:border-gold-accent/30 transition-all duration-300 p-0 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 12px 30px rgba(197, 164, 91, 0.12)",
              }}
            >
              {/* Image Frame */}
              <div className="overflow-hidden relative bg-black">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-auto object-cover group-hover:scale-103 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Cover Layer on Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                  {/* Top tag */}
                  <div className="flex justify-between items-center">
                    <span className="text-[8px] font-display text-gold-accent tracking-widest uppercase font-bold border border-gold-accent/20 bg-gold-950/20 px-2.5 py-1 rounded-full">
                      {item.category}
                    </span>
                    {item.beforeUrl && (
                      <span className="flex items-center gap-1 text-[8px] font-display text-[#25D366] tracking-widest uppercase font-bold border border-[#25D366]/20 bg-[#25D366]/5 px-2.5 py-1 rounded-full">
                        <Sparkles className="w-2.5 h-2.5" /> Before / After
                      </span>
                    )}
                  </div>

                  {/* Mid Icon */}
                  <div className="self-center p-3 rounded-full border border-white/10 bg-white/5 text-white scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Eye className="w-5 h-5 text-gold-accent" />
                  </div>

                  {/* Bottom Text block */}
                  <div className="text-left space-y-1">
                    <p className="font-serif text-base text-white">{item.title}</p>
                    <p className="text-[9px] font-display text-gray-400 tracking-wider uppercase">Click to open showcase</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal with Before/After comparison toggle and spec list */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Dark background */}
            <motion.div
              className="fixed inset-0 bg-black/95 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
            />

            {/* Lightbox content panel */}
            <motion.div
              className="relative w-full max-w-4xl bg-[#0a0a0a] border border-gold-accent/20 rounded-3xl overflow-hidden z-10 shadow-4xl flex flex-col md:flex-row h-auto md:h-[550px]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              {/* Close Button tag */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2.5 text-gray-400 hover:text-white border border-white/10 bg-white/5 hover:bg-white/10 rounded-full z-30 transition-colors focus:outline-hidden"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Left Display - Showroom image / Before image comparison split */}
              <div className="md:col-span-8 flex-1 bg-black relative flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={showBefore ? "before" : "after"}
                    src={showBefore && selectedItem.beforeUrl ? selectedItem.beforeUrl : selectedItem.imageUrl}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>

                {/* Banner watermark indicating Before or After state */}
                {selectedItem.beforeUrl && (
                  <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                    <button
                      onClick={() => setShowBefore(true)}
                      className={`px-4 py-2 text-[9px] font-display uppercase tracking-widest font-bold border rounded-full transition-all focus:outline-hidden ${
                        showBefore
                          ? "bg-gold-accent text-black border-gold-accent"
                          : "bg-black/60 text-white border-white/10 hover:bg-black/80"
                      }`}
                    >
                      Original (Before)
                    </button>
                    <button
                      onClick={() => setShowBefore(false)}
                      className={`px-4 py-2 text-[9px] font-display uppercase tracking-widest font-bold border rounded-full transition-all focus:outline-hidden ${
                        !showBefore
                          ? "bg-gold-accent text-black border-gold-accent"
                          : "bg-black/60 text-white border-white/10 hover:bg-black/80"
                      }`}
                    >
                      Bespoke Upgrade (After)
                    </button>
                  </div>
                )}
              </div>

              {/* Right Side description specifications and quick callback CTA */}
              <div className="w-full md:w-80 p-6 sm:p-8 flex flex-col justify-between text-left bg-[#070707] border-t md:border-t-0 md:border-l border-white/5">
                <div className="space-y-6">
                  <div className="space-y-1.5">
                    <span className="text-[8px] font-display text-gold-accent tracking-widest uppercase font-bold">
                      {selectedItem.category}
                    </span>
                    <h4 className="font-serif text-xl text-white">{selectedItem.title}</h4>
                  </div>

                  {selectedItem.description && (
                    <p className="font-sans text-xs font-light text-gray-400 leading-relaxed">
                      {selectedItem.description}
                    </p>
                  )}

                  <div className="space-y-2 font-display text-[10px] text-gray-500 leading-relaxed">
                    <p>• Completed by Prestige Artisans</p>
                    <p>• Engineered with seasoned waterproof materials</p>
                    <p>• Execution span: JP Nagar / Banashankari, B'lore</p>
                  </div>
                </div>

                {/* WhatsApp Enquiry button */}
                <div className="pt-6 border-t border-white/5 mt-6 space-y-3">
                  <button
                    onClick={() => handleWhatsAppInquiry(selectedItem.title)}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-gold-900 to-gold-700 hover:from-gold-800 text-white font-display uppercase font-bold text-[10px] tracking-widest py-3 px-4 rounded-xs border border-gold-accent/20 transition-all shadow-md focus:outline-hidden"
                  >
                    Inquire This Conception
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
