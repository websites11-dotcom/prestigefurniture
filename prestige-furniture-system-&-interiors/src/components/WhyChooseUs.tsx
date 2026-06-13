import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Award, Layers, Clock, Settings, ShieldCheck, Compass } from "lucide-react";

export default function WhyChooseUs() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  // Counters state management
  const [years, setYears] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [delivery, setDelivery] = useState(0);

  useEffect(() => {
    if (isInView) {
      // Animate years count smoothly
      const startYears = 0;
      const endYears = 19;
      const durationY = 1500;
      let startTimestampY: number | null = null;

      const stepYears = (timestamp: number) => {
        if (!startTimestampY) startTimestampY = timestamp;
        const progress = Math.min((timestamp - startTimestampY) / durationY, 1);
        setYears(Math.floor(progress * (endYears - startYears) + startYears));
        if (progress < 1) {
          window.requestAnimationFrame(stepYears);
        }
      };
      window.requestAnimationFrame(stepYears);

      // Animate customers count smoothly
      const startCust = 0;
      const endCust = 200;
      const durationC = 1800;
      let startTimestampC: number | null = null;

      const stepCust = (timestamp: number) => {
        if (!startTimestampC) startTimestampC = timestamp;
        const progress = Math.min((timestamp - startTimestampC) / durationC, 1);
        setCustomers(Math.floor(progress * (endCust - startCust) + startCust));
        if (progress < 1) {
          window.requestAnimationFrame(stepCust);
        }
      };
      window.requestAnimationFrame(stepCust);

      // Animate ontime delivery percent smoothly
      const startDel = 0;
      const endDel = 100;
      const durationD = 1700;
      let startTimestampD: number | null = null;

      const stepDel = (timestamp: number) => {
        if (!startTimestampD) startTimestampD = timestamp;
        const progress = Math.min((timestamp - startTimestampD) / durationD, 1);
        setDelivery(Math.floor(progress * (endDel - startDel) + startDel));
        if (progress < 1) {
          window.requestAnimationFrame(stepDel);
        }
      };
      window.requestAnimationFrame(stepDel);
    }
  }, [isInView]);

  const valueAesthetics = [
    {
      icon: <Layers className="w-5 h-5 text-gold-accent" />,
      title: "Premium Quality Materials",
      description: "We work strictly with boiling-waterproof ISO-certified marine plywoods, genuine seasoned teak wood, and scratchproof surfaces."
    },
    {
      icon: <Settings className="w-5 h-5 text-gold-accent" />,
      title: "Fully Customized Designs",
      description: "No template shapes. Every modular compartment, bed side panel, and walk-in wardrobe shelf is customized to fit your room dimensions precisely."
    },
    {
      icon: <Clock className="w-5 h-5 text-gold-accent" />,
      title: "On-Time Standard Delivery",
      description: "Our engineered Gantt timelines track production schedules tightly, guaranteeing neat on-site handovers with no structural delays."
    }
  ];

  return (
    <section id="why-choose-us" ref={containerRef} className="relative py-24 sm:py-32 bg-[#080808] overflow-hidden border-t border-white/5">
      {/* Decorative vector background */}
      <div className="absolute top-[50%] left-[-15%] w-[600px] h-[600px] bg-gold-accent/2 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[10%] right-[5%] w-80 h-80 border border-gold-accent/5 rotate-12 rounded-sm pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Interactive counters and showroom values */}
          <div className="lg:col-span-6 space-y-10">
            <div className="space-y-4">
              <span className="text-[9px] sm:text-[10px] font-display text-gold-accent tracking-[0.3em] font-bold uppercase block">
                OUR STATISTICAL LEGACY
              </span>
              <h3 className="font-serif text-3xl sm:text-5xl font-light text-white leading-tight">
                Two Decades of <br />
                <span className="italic text-gold-gradient font-serif">Aesthetic Integrity</span>
              </h3>
              <p className="font-sans text-xs sm:text-sm font-light text-gray-400 leading-relaxed max-w-xl">
                Founded in 2007, Prestige Furniture System & Interiors operates with a dedicated team of master wood carpenters and modern spatial designers. From our Banashankari workshop, we deliver spectacular residential and workplace installations.
              </p>
            </div>

            {/* Core Stats values block */}
            <div className="bento-card gold-bg text-black p-8 rounded-3xl mt-6 border border-gold-accent/20">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="space-y-1">
                  <div className="font-serif text-3xl sm:text-5xl font-bold text-black flex items-baseline justify-center">
                    <span>{years}</span>
                    <span className="text-xl sm:text-2xl font-bold text-black/80 ml-0.5">+</span>
                  </div>
                  <p className="font-display text-[9px] sm:text-[10px] uppercase tracking-wider text-black/70 font-bold">
                    Years Exp
                  </p>
                </div>

                <div className="border-x border-black/15 px-2 space-y-1">
                  <div className="font-serif text-3xl sm:text-5xl font-bold text-black flex items-baseline justify-center">
                    <span>{customers}</span>
                    <span className="text-xl sm:text-2xl font-bold text-black/80 ml-0.5">+</span>
                  </div>
                  <p className="font-display text-[9px] sm:text-[10px] uppercase tracking-wider text-black/70 font-bold">
                    Elite Clients
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="font-serif text-3xl sm:text-5xl font-bold text-black flex items-baseline justify-center">
                    <span>{delivery}</span>
                    <span className="text-xl sm:text-2xl font-bold text-black/80 ml-0.5">%</span>
                  </div>
                  <p className="font-display text-[9px] sm:text-[10px] uppercase tracking-wider text-black/70 font-bold">
                    On-Time
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side values details card with glowing accent lines */}
          <div className="lg:col-span-6 space-y-6">
            {valueAesthetics.map((val, idx) => (
              <motion.div
                key={idx}
                className="bento-card glass p-6 sm:p-8 rounded-3xl hover:border-gold-accent/30 hover:bg-[#0c0c0c] transition-all duration-300 flex gap-5 text-left border border-white/10 relative overflow-hidden"
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{
                  y: -6,
                  scale: 1.01,
                  boxShadow: "0 10px 25px rgba(197, 164, 91, 0.08)",
                }}
              >
                {/* Visual back glow */}
                <div className="absolute -left-10 -bottom-10 w-24 h-24 bg-gold-accent/5 rounded-full blur-xl pointer-events-none" />

                <div className="flex-shrink-0 w-11 h-11 rounded-xl border border-gold-accent/15 flex items-center justify-center bg-gold-950/10">
                  {val.icon}
                </div>

                <div className="space-y-1.5">
                  <h4 className="font-serif text-base sm:text-lg text-white font-normal group-hover:text-gold-accent">
                    {val.title}
                  </h4>
                  <p className="font-sans text-[11px] sm:text-xs font-light text-gray-400 leading-relaxed font-light">
                    {val.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
