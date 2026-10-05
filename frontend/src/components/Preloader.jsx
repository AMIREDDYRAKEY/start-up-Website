import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/dhanvira-circle-logo.png";

const Preloader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            if (onFinish) onFinish();
          }, 600);
          return 100;
        }
        const increment = Math.floor(Math.random() * 6) + 3;
        const next = prev + increment;
        return next > 100 ? 100 : next;
      });
    }, 110);

    return () => clearInterval(timer);
  }, [onFinish]);

  const circumference = 2 * Math.PI * 56; // radius = 56, circumference ≈ 351.86

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#121316] text-white overflow-hidden select-none px-4"
        >
          {/* Subtle Ambient Glow */}
          <motion.div
            animate={{ scale: [1, 1.25, 1], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[#d4af37]/20 via-[#47484c]/20 to-transparent blur-[120px] pointer-events-none"
          />

          <div className="relative z-10 flex flex-col items-center">
            {/* Circular Progress & Round Logo */}
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center">
              {/* Outer Circular SVG Progress Ring */}
              <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 144 144">
                {/* Background Ring Track */}
                <circle
                  cx="72"
                  cy="72"
                  r="56"
                  stroke="#47484c"
                  strokeWidth="3.5"
                  fill="none"
                  opacity="0.35"
                />
                {/* Animated Gold Progress Ring */}
                <motion.circle
                  cx="72"
                  cy="72"
                  r="56"
                  stroke="#d4af37"
                  strokeWidth="3.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  animate={{
                    strokeDashoffset: circumference - (circumference * Math.min(progress, 100)) / 100,
                  }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                />
              </svg>

              {/* Inner Round Logo Frame */}
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-20 h-20 sm:w-26 sm:h-26 rounded-full overflow-hidden bg-white p-2 sm:p-2.5 border-2 border-[#d4af37] shadow-[0_0_35px_rgba(212,175,55,0.25)] flex items-center justify-center relative z-10"
              >
                <img
                  src={logo}
                  alt="DHANVIRA Logo"
                  className="w-full h-full object-contain rounded-full"
                />
              </motion.div>
            </div>

            {/* Brand Title & Percentage Counter */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mt-6"
            >
              <h1 className="text-xl sm:text-2xl md:text-3xl font-display font-extrabold tracking-[0.25em] uppercase text-white">
                DHANVIRA
              </h1>
              <p className="text-xs sm:text-sm font-mono text-[#d4af37] font-bold tracking-widest mt-2">
                {progress}%
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
