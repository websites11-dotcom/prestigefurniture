import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SERVICES_DATA } from "../data";
import { ServiceItem } from "../types";
import * as Icons from "lucide-react";

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Dynamic Icon resolver helper
  const renderIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    if (!IconComponent) return <Icons.Sparkles className="w-6 h-6" />;
    return <IconComponent className="w-6 h-6 text-gold-accent transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />;
  };

  const handleWhatsAppForService = (serviceTitle: string) => {
    const msg = encodeURIComponent(
      `Hello Prestige Furniture System & Interiors, I want to inquire about custom "${serviceTitle}" services.`
    );
    window.open(`https://wa.me/919066226918?text=${msg}`, "_blank");
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#050505] overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-gold-accent/3 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-15%] w-[600px] h-[600px] bg-gold-accent/3 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <motion.div
            className="text-[9px] sm:text-[10px] font-display text-gold-accent tracking-[0.3em] font-bold uppercase"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            OUR SPATIAL CAPABILITIES
          </motion.div>

          <motion.h3
            className="font-serif text-3xl sm:text-5xl font-light text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Tailored <span className="italic text-gold-accent text-gold-gradient font-serif font-light">Furniture & Interior</span> Excellence
          </motion.h3>

          <motion.p
            className="font-sans text-xs sm:text-sm font-light text-gray-400 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Since 2007, we have manufactured and curated luxury settings. Click on any of our key services below to inspect customized workflows and structural blueprints.
          </motion.p>
        </div>

        {/* Services Grid (8 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group cursor-pointer bento-card glass border border-white/10 hover:border-gold-accent/40 hover:bg-[#0c0c0c] flex flex-col justify-between h-[300px] relative overflow-hidden focus:outline-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              whileHover={{ 
                y: -6,
                scale: 1.02,
                boxShadow: "0 12px 30px rgba(197, 164, 91, 0.12)",
              }}
            >
              {/* Corner golden glow indicator on hover */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-gold-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="space-y-6">
                {/* Icon Circle Frame */}
                <div className="w-12 h-12 rounded-2xl border border-gold-accent/20 flex items-center justify-center bg-gold-950/5 group-hover:border-gold-accent/50 group-hover:bg-gold-950/20 transition-all duration-300">
                  {renderIcon(service.iconName)}
                </div>

                <div className="space-y-2">
                  <h4 className="font-serif text-lg font-normal text-white group-hover:text-gold-accent transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="font-sans text-[11px] sm:text-xs font-light text-gray-400 group-hover:text-gray-200 transition-colors duration-300 line-clamp-3 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Read specifications button link */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-display text-gray-500 group-hover:text-gold-accent font-bold tracking-widest uppercase transition-colors duration-300">
                <span>View Specifications</span>
                <Icons.ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Detail slide Drawer overlay */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Modal backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/90 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
            />

            {/* Modal Body Container */}
            <motion.div
              className="relative w-full max-w-2xl bg-[#0a0a0a] border border-gold-accent/20 rounded-3xl overflow-hidden z-10 shadow-2xl"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              {/* Premium top bar */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-gold-900 via-gold-accent to-gold-900" />
              
              {/* Close Button Trigger */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white border border-white/5 bg-white/5 hover:bg-white/10 rounded-full transition-colors focus:outline-hidden"
              >
                <Icons.X className="w-4 h-4" />
              </button>

              <div className="p-6 sm:p-10 space-y-6">
                <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                  <div className="w-14 h-14 rounded-sm border border-gold-accent/30 flex items-center justify-center bg-gold-950/20">
                    {(() => {
                      const IconComponent = (Icons as any)[selectedService.iconName];
                      return IconComponent ? (
                        <IconComponent className="w-7 h-7 text-gold-accent" />
                      ) : (
                        <Icons.Sparkles className="w-7 h-7 text-gold-accent" />
                      );
                    })()}
                  </div>

                  <div>
                    <h4 className="font-serif text-xl sm:text-2xl text-white">{selectedService.title}</h4>
                    <p className="text-[9px] font-display text-gold-accent tracking-widest uppercase font-bold">PRESTIGE ARCHITECTURE SPECIFICATIONS</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="font-sans text-xs sm:text-sm font-light text-gray-400 leading-relaxed">
                    {selectedService.longDescription}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[10px] font-display text-gold-accent tracking-widest uppercase font-bold block mb-1">
                      WHY IT STANDS OUT:
                    </span>
                    <ul className="space-y-2">
                      {selectedService.benefits.map((benefit, bIndex) => (
                        <li key={bIndex} className="flex gap-2 text-xs text-gray-300 font-light items-start">
                          <Icons.Check className="w-4 h-4 text-gold-accent shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Action items */}
                <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row gap-3 justify-end items-center">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="w-full sm:w-auto px-6 py-2.5 font-display text-[10px] uppercase tracking-widest text-[#999999] hover:text-white transition"
                  >
                    Close spec sheet
                  </button>

                  <button
                    onClick={() => handleWhatsAppForService(selectedService.title)}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-gold-900 to-gold-700 hover:from-gold-800 text-white font-display uppercase font-bold text-[10px] tracking-widest py-3 px-6 rounded-xs border border-gold-accent/20 transition-all shadow-md"
                  >
                    <Icons.MessageSquare className="w-4 h-4" />
                    Consult On WhatsApp
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
