import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PRODUCTS_DATA } from "../data";
import { ProductItem } from "../types";
import { Heart, Compass, CheckCircle2, MessageSquare, Clipboard, ArrowRight, X } from "lucide-react";

export default function FeaturedProducts() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const categories = ["All", "Sofa Sets", "Dining Tables", "Bedroom Furniture", "Wardrobes", "Study Tables", "TV Units & Cabinets"];

  // Filter items based on active tabs
  const filteredProducts = activeCategory === "All"
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter((product) => product.category === activeCategory);

  const handleWhatsAppInquiry = (productTitle: string) => {
    const msg = encodeURIComponent(
      `Hello Prestige Furniture System & Interiors, I am interested in building a custom "${productTitle}". Please send me pricing and finish options.`
    );
    window.open(`https://wa.me/919066226918?text=${msg}`, "_blank");
  };

  return (
    <section id="products" className="relative py-24 sm:py-32 bg-[#050505] overflow-hidden border-t border-white/5">
      {/* Background spotlights */}
      <div className="absolute top-[30%] left-[-10%] w-[500px] h-[500px] bg-gold-accent/4 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-gold-accent/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 text-left">
            <div className="text-[9px] sm:text-[10px] font-display text-gold-accent tracking-[0.3em] font-bold uppercase">
              LUXURY FURNITURE SHOWROOM
            </div>
            <h3 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-tight">
              Bespoke <span className="italic text-gold-accent text-gold-gradient font-serif font-light">Featured</span> Masterpieces
            </h3>
            <p className="font-sans text-xs sm:text-sm font-light text-gray-400 max-w-xl leading-relaxed">
              Every detail is meticulously hand-tailored configuration in Banashankari. Pick a category to filter our signature high-end creations.
            </p>
          </div>

          {/* Quick Stats badge */}
          <div className="hidden lg:flex items-center gap-3 glass-premium py-2 px-4 rounded-sm border-gold-accent/15">
            <span className="w-2 h-2 rounded-full bg-gold-accent animate-pulse" />
            <span className="text-[10px] font-display text-gold-accent tracking-widest uppercase font-bold">100% Solid Solid Teak & Plywood</span>
          </div>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-12 pb-4 border-b border-white/5">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 font-display text-[10px] sm:text-[11px] uppercase tracking-widest cursor-pointer transition-all duration-300 rounded-full focus:outline-hidden ${
                activeCategory === category
                  ? "bg-gold-accent text-black font-bold shadow-md shadow-gold-500/15"
                  : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid Layout */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group relative bento-card glass border border-white/10 rounded-3xl overflow-hidden h-[450px] flex flex-col justify-between hover:border-gold-accent/25 transition-all duration-500 p-0"
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  boxShadow: "0 12px 30px rgba(197, 164, 91, 0.12)",
                }}
              >
                {/* Product Image Stage */}
                <div className="relative h-64 w-full overflow-hidden bg-black flex items-center justify-center">
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/80 to-transparent z-10" />
                  
                  {/* Category Chip Badge */}
                  <span className="absolute top-4 left-4 z-20 bg-[#050505]/80 backdrop-blur-md border border-gold-accent/20 px-3 py-1 rounded-full font-display text-[8px] uppercase tracking-widest text-[#dac080] font-bold">
                    {product.category}
                  </span>

                  {/* Smooth Zoom Image */}
                  <motion.img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />

                  {/* Hover Quick View Overlays */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-25 gap-3">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="px-5 py-2.5 bg-white text-black font-display font-medium text-[9px] tracking-widest uppercase transition-transform scale-95 group-hover:scale-100 duration-300 rounded-full shadow-md focus:outline-hidden cursor-pointer"
                    >
                      Quick View Spec
                    </button>
                  </div>
                </div>

                {/* Card Content Footer */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5 text-left">
                    <h4 className="font-serif text-lg text-white group-hover:text-gold-accent transition-colors duration-300">
                      {product.title}
                    </h4>
                    <p className="font-sans text-xs font-light text-[#888888] line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <div className="text-left">
                      <span className="block text-[8px] font-display text-gray-500 tracking-widest uppercase">Pricing Tier</span>
                      <span className="font-display text-[9px] text-gold-accent uppercase font-bold tracking-widest">
                        {product.priceRange}
                      </span>
                    </div>

                    <button
                      onClick={() => handleWhatsAppInquiry(product.title)}
                      className="p-2 border border-gold-accent/20 hover:border-gold-accent/80 hover:bg-gold-accent/5 text-gold-accent rounded-full transition-all focus:outline-hidden cursor-pointer"
                      title="Enquire on WhatsApp"
                    >
                      <MessageSquare className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Product Quick View Detail Modal Sheet */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Modal background overlay */}
            <motion.div
              className="fixed inset-0 bg-black/93 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
            />

            {/* Modal Body container */}
            <motion.div
              className="relative w-full max-w-4xl bg-[#0a0a0a] border border-gold-accent/20 rounded-3xl overflow-hidden z-10 shadow-3xl"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              {/* Gold Top line highlight */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-gold-900 via-gold-accent to-gold-900" />
              
              {/* Close Button element */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2.5 z-40 text-gray-400 hover:text-white border border-white/10 bg-white/5 hover:bg-white/10 rounded-full transition-colors focus:outline-hidden"
              >
                <X className="w-4.5 h-4.5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                
                {/* Left side Image stage */}
                <div className="md:col-span-6 h-64 md:h-[500px] relative bg-black">
                  <img
                    src={selectedProduct.imageUrl}
                    alt={selectedProduct.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent hidden md:block" />
                </div>

                {/* Right side specifications details */}
                <div className="md:col-span-6 p-6 sm:p-10 flex flex-col justify-between h-auto md:h-[500px] overflow-y-auto">
                  <div className="space-y-6 text-left">
                    
                    {/* Tags */}
                    <div className="space-y-1.5">
                      <span className="text-[8px] font-display text-gold-accent tracking-[0.25em] uppercase font-bold block">
                        SHOWROOM INVENTORY CARD
                      </span>
                      <h4 className="font-serif text-2xl text-white">{selectedProduct.title}</h4>
                      <span className="inline-block bg-white/5 border border-white/10 px-3 py-1 rounded-full text-[9px] text-gray-400 uppercase tracking-widest font-mono">
                        {selectedProduct.category}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="font-sans text-xs font-light text-gray-400 leading-relaxed">
                      {selectedProduct.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                      {/* Craft Materials */}
                      <div className="space-y-2">
                        <span className="text-[9px] font-display text-gold-accent tracking-widest uppercase font-bold block border-b border-white/5 pb-1">
                          Craft Wood & Materials
                        </span>
                        <ul className="space-y-1">
                          {selectedProduct.materials.map((mat, mIdx) => (
                            <li key={mIdx} className="flex gap-1.5 text-[11px] text-gray-300 font-light items-start">
                              <CheckCircle2 className="w-3.5 h-3.5 text-gold-accent shrink-0 mt-0.5" />
                              <span>{mat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Prime Features */}
                      <div className="space-y-2">
                        <span className="text-[9px] font-display text-gold-accent tracking-widest uppercase font-bold block border-b border-white/5 pb-1">
                          Showroom Highlights
                        </span>
                        <ul className="space-y-1">
                          {selectedProduct.features.map((feat, fIdx) => (
                            <li key={fIdx} className="flex gap-1.5 text-[11px] text-gray-300 font-light items-start">
                              <Compass className="w-3.5 h-3.5 text-gold-accent shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="pt-6 border-t border-white/5 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-left w-full sm:w-auto">
                      <span className="block text-[8px] font-display text-gray-500 tracking-widest uppercase">Custom Construction Pricing</span>
                      <span className="font-display text-xs text-gold-accent uppercase font-bold tracking-widest">
                        {selectedProduct.priceRange}
                      </span>
                    </div>

                    <button
                      onClick={() => handleWhatsAppInquiry(selectedProduct.title)}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-gold-900 to-gold-700 hover:from-gold-800 text-white font-display uppercase font-bold text-[10px] tracking-widest py-3 px-6 rounded-xs border border-gold-accent/20 transition-all shadow-md"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Inquire Custom Order
                    </button>
                  </div>

                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
