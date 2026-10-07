import React from "react";
import { motion } from "framer-motion";
import logo3dBackground from "../assets/dmanbray-3d-logo.png";

const BackgroundCanvas = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#121316] select-none flex items-center justify-center">
      {/* Dynamic ambient background glow pulses */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [-20, 20, -20],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[15%] left-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#1d4ed8]/20 via-[#47484c]/20 to-transparent blur-[160px]"
      />

      <motion.div
        animate={{
          scale: [1.1, 0.95, 1.1],
          opacity: [0.12, 0.22, 0.12],
          x: [20, -20, 20],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-[15%] right-[10%] w-[650px] h-[650px] rounded-full bg-gradient-to-tl from-[#2563eb]/20 via-[#d4af37]/15 to-transparent blur-[180px]"
      />

      {/* Subtle DNR Monogram Watermark Background */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.025, 0.05, 0.025],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative flex items-center justify-center pointer-events-none select-none"
      >
        <img
          src={logo3dBackground}
          alt=""
          aria-hidden="true"
          className="w-[180px] h-[180px] sm:w-[260px] sm:h-[260px] lg:w-[340px] lg:h-[340px] object-contain rounded-full pointer-events-none select-none filter drop-shadow-[0_0_30px_rgba(37,99,235,0.12)]"
        />
      </motion.div>

      {/* Smooth edge vignettes for contrast and readability across all pages */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-transparent to-[#121316]/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#121316]/80 via-transparent to-[#121316]/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#121316_90%)] opacity-70" />
    </div>
  );
};

export default BackgroundCanvas;
