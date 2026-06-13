import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    // Show logo shortly after loading starts
    const timerLogo = setTimeout(() => setShowLogo(true), 200);

    // Progress counter animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Wait a brief moment at 100 before completing for styling impact
          setTimeout(() => {
            onComplete();
          }, 600);
          return 100;
        }
        // Random incremental hops for authentic luxury feel
        const step = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + step, 100);
      });
    }, 100);

    return () => {
      clearTimeout(timerLogo);
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-[#050505] z-50 flex flex-col items-center justify-center p-4 overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-gold-accent/20 to-transparent"></div>
      <div className="absolute top-[20%] left-[25%] w-96 h-96 bg-gold-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="w-full max-w-md flex flex-col items-center">
        {/* Animated Chair Outline Drawing */}
        <div className="relative w-28 h-28 mb-8 flex items-center justify-center">
          <svg
            className="w-full h-full text-gold-accent/30"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Outline draw animates via stroke dash */}
            <motion.path
              d="M 25 80 L 25 35 L 75 35 L 75 80 M 20 50 L 80 50 M 35 50 L 35 80 M 65 50 L 65 80"
              initial={{ pathLength: 0, opacity: 0.2 }}
              animate={{ pathLength: 1, opacity: [0.2, 0.8, 1] }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            {/* Curved Cushion Accent */}
            <motion.path
              d="M 20 50 Q 50 42 80 50"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 0.9 }}
              transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
              stroke="#c5a45b"
              strokeWidth="2"
            />
          </svg>

          {/* Shimmer Gold Core Light */}
          <motion.div
            className="absolute inset-0 bg-radial from-gold-accent/15 to-transparent rounded-full"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: [0.6, 1.1, 0.9], opacity: [0, 0.6, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
          />
        </div>

        {/* Company Title with Sweep Effect */}
        <AnimatePresence>
          {showLogo && (
            <div className="text-center relative">
              <motion.h1
                className="font-serif text-3xl font-light tracking-[0.25em] text-white select-none mr-[-0.25em]"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                P R E S T I G E
              </motion.h1>

              <motion.p
                className="text-gold-accent font-display text-[9.5px] uppercase tracking-[0.4em] mt-2 mr-[-0.4em] font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Furniture System & Interiors
              </motion.p>

              {/* Gold light sweep on text overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent pointer-events-none mix-blend-overlay"></div>
            </div>
          )}
        </AnimatePresence>

        {/* Progress Bar & Numeric Indicator */}
        <div className="w-64 mt-16 relative">
          <div className="flex justify-between items-center mb-2 font-display text-[10px] tracking-widest text-[#666666] uppercase">
            <span>SHOWROOM INGRESS</span>
            <span className="text-gold-accent font-medium">{progress}%</span>
          </div>

          <div className="h-[2px] w-full bg-white/5 overflow-hidden rounded-full relative">
            <motion.div
              className="h-full bg-gradient-to-r from-gold-900 via-gold-accent to-gold-100 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>

          {/* Gold Glowing point running along progress */}
          <div
            className="absolute top-[20px] left-0 h-4 w-4 bg-gold-accent/30 rounded-full blur-md transition-all duration-100"
            style={{ left: `calc(${progress}% - 8px)` }}
          />
        </div>

        {/* Establishment Accent */}
        <motion.div
          className="mt-12 text-[#444444] font-display text-[9px] tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1, duration: 1 }}
        >
          ANSHANKARI, BENGALURU • ESTD 2007
        </motion.div>
      </div>
    </div>
  );
}
