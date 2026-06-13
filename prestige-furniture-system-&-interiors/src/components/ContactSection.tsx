import React, { useState } from "react";
import { MessageSquare, Phone, MapPin, Clock, Calendar, CheckSquare, Send } from "lucide-react";

export default function ContactSection() {
  const [interest, setInterest] = useState("Home Interiors");
  const [customDetail, setCustomDetail] = useState("");

  const handleBookConsultation = () => {
    let text = "Hello Prestige Furniture System & Interiors, I would like to book a consultation regarding furniture/interior work.";
    if (customDetail.trim()) {
      text = `Hello Prestige Furniture System & Interiors, I would like to book a consultation regarding custom ${interest} works. Details: ${customDetail}`;
    } else {
      text = `Hello Prestige Furniture System & Interiors, I would like to book a consultation regarding custom ${interest} works.`;
    }
    const msg = encodeURIComponent(text);
    window.open(`https://wa.me/919066226918?text=${msg}`, "_blank");
  };

  const handleDirectCall = () => {
    window.open("tel:+919066226918");
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#050505] overflow-hidden border-t border-white/5">
      {/* Background spotlights */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-gold-accent/4 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-gold-accent/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Coordinates & Quick Configurator */}
          <div className="lg:col-span-6 space-y-10">
            <div className="space-y-4 text-left">
              <span className="text-[9px] sm:text-[10px] font-display text-gold-accent tracking-[0.3em] font-bold uppercase block">
                BENGALURU HEADQUARTERS
              </span>
              <h3 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-tight">
                Visit Our <span className="italic text-gold-accent text-gold-gradient font-serif font-light">Showroom & Workshop</span>
              </h3>
              <p className="font-sans text-xs sm:text-sm font-light text-gray-400 max-w-xl leading-relaxed">
                Experience first-hand our premium joinery standards, veneer selections, and luxury fabric selections in person. Call us or book an instant designer slot below.
              </p>
            </div>

            {/* Address & Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              
              <div className="bento-card glass p-6 rounded-3xl border border-white/10 relative overflow-hidden">
                <div className="absolute -right-4 -bottom-4 w-12 h-12 bg-gold-accent/5 rounded-full blur-md" />
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-gold-accent" />
                  <h4 className="font-serif text-base text-white">Our Address</h4>
                </div>
                <p className="font-sans text-xs font-light text-gray-400 leading-relaxed font-light">
                  Prestige Furniture System & Interiors,<br />
                  Banashankari,<br />
                  Bengaluru, Karnataka - 560085
                </p>
              </div>

              <div className="bento-card glass p-6 rounded-3xl border border-white/10 relative overflow-hidden">
                <div className="absolute -right-4 -bottom-4 w-12 h-12 bg-gold-accent/5 rounded-full blur-md" />
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-gold-accent" />
                  <h4 className="font-serif text-base text-white">Business Hours</h4>
                </div>
                <p className="font-sans text-xs font-light text-gray-400 leading-relaxed font-light">
                  Monday – Sunday<br />
                  9:30 AM – 8:30 PM<br />
                  <span className="text-gold-accent">Open on weekends for consultation</span>
                </p>
              </div>

            </div>

            {/* Quick Interactive Workspace Pre-Configurator */}
            <div className="bento-card glass p-6 sm:p-8 rounded-3xl border border-white/10 text-left space-y-6 relative">
              <div className="absolute top-0 right-0 w-24 h-[1px] bg-gradient-to-l from-gold-accent/30 to-transparent" />
              
              <div className="space-y-1.5">
                <span className="text-[8px] font-display text-gold-accent tracking-widest uppercase font-bold">Smart Callback Configurator</span>
                <h4 className="font-serif text-lg text-white">Structure Your Spatial Consultation</h4>
              </div>

              <div className="space-y-4">
                {/* Interest Select */}
                <div className="space-y-2">
                  <label className="block text-[9px] font-display text-[#888888] uppercase tracking-wider">I am interested in:</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {["Home Interiors", "Sofa Sets", "Dining Tables", "Wardrobes", "Study Tables", "Office Setups"].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setInterest(item)}
                        className={`py-2 px-3 text-center font-display text-[10px] uppercase tracking-wider rounded-full transition-all duration-300 cursor-pointer ${
                          interest === item
                            ? "bg-gold-accent text-black font-semibold"
                            : "bg-white/5 border border-transparent text-gray-400 hover:text-white"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Additional notes box */}
                <div className="space-y-2">
                  <label className="block text-[9px] font-display text-[#888888] uppercase tracking-wider">Particular requirements (Optional):</label>
                  <input
                    type="text"
                    value={customDetail}
                    onChange={(e) => setCustomDetail(e.target.value)}
                    placeholder="e.g., L-shape green sofa, 6-seater marble dining, etc."
                    className="w-full bg-white/5 border border-white/10 rounded-full text-xs font-sans px-5 py-3 text-white placeholder-gray-600 focus:outline-hidden focus:border-gold-accent/50 transition-colors"
                  />
                </div>

                {/* Confirmations and Direct WhatsApp Dispatch */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleBookConsultation}
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-gold-900 to-gold-700 hover:from-gold-800 text-white font-display uppercase font-bold text-[10px] tracking-widest py-3.5 px-6 rounded-full border border-gold-accent/20 transition-all shadow-md focus:outline-hidden cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Book Consultation Via WhatsApp
                  </button>

                  <button
                    onClick={handleDirectCall}
                    className="py-3.5 px-6 border border-white/15 hover:border-gold-accent text-gray-300 hover:text-white rounded-full transition-colors font-display text-[10px] tracking-widest uppercase flex items-center justify-center gap-1.5 focus:outline-hidden cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5 text-gold-accent animate-pulse" />
                    Call Showroom
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Showcase Frame */}
          <div className="lg:col-span-6 w-full h-[540px] relative rounded-3xl overflow-hidden border border-white/10 shadow-lg">
            {/* Ambient gold line on border */}
            <div className="absolute inset-0 bg-transparent pointer-events-none border border-gold-accent/10 z-10 rounded-3xl" />
            
            {/* Fully responsive Google Map embed centering Prestige coordinates */}
            <iframe
              src="https://maps.google.com/maps?q=Prestige%20Furniture%20System%20%26%20Interiors%20Banashankari%20Bengaluru&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full grayscale-[25%] invert-[5%] contrast-[110%]"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Prestige Showroom Map Coordinate"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
