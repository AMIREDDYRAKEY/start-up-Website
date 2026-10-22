import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = ({ onFinish }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
      if (onFinish) onFinish();
    }, 3200);

    return () => clearTimeout(timeout);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden select-none"
          style={{ backgroundColor: "#121316" }}
        >
          {/* ── Subtle ambient glow ── */}
          <motion.div
            animate={{ scale: [1, 1.25, 1], opacity: [0.06, 0.16, 0.06] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              width: "26rem",
              height: "26rem",
              borderRadius: "9999px",
              background:
                "radial-gradient(circle, rgba(212,175,55,0.15) 0%, rgba(71,72,76,0.08) 55%, transparent 80%)",
              filter: "blur(90px)",
              pointerEvents: "none",
            }}
          />

          {/* ── Loader content ── */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              zIndex: 10,
            }}
          >
            {/* ── Dual Ring Spinner ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: "relative",
                width: "120px",
                height: "120px",
                marginBottom: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Outer Gold Ring */}
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  border: "4px solid transparent",
                  borderTopColor: "#d4af37",
                  borderBottomColor: "#d4af37",
                  animation:
                    "preloaderSpin 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite",
                  boxShadow: "0 0 18px rgba(212,175,55,0.12)",
                }}
              />

              {/* Inner Silver Ring */}
              <div
                style={{
                  position: "absolute",
                  width: "70%",
                  height: "70%",
                  borderRadius: "50%",
                  border: "4px solid transparent",
                  borderLeftColor: "#9ea5b0",
                  borderRightColor: "#9ea5b0",
                  animation:
                    "preloaderSpinReverse 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite",
                  boxShadow: "0 0 12px rgba(158,165,176,0.08)",
                }}
              />

              {/* Center Graduation Cap Icon */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d4af37"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  width: "32px",
                  height: "32px",
                  zIndex: 10,
                  animation: "preloaderFloat 3s ease-in-out infinite",
                  filter: "drop-shadow(0 2px 6px rgba(212,175,55,0.25))",
                }}
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </motion.div>

            {/* ── Brand Text ── */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{
                color: "#ffffff",
                fontSize: "28px",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                margin: 0,
                fontFamily: "'Outfit', 'Inter', sans-serif",
                animation: "preloaderPulseText 2s ease-in-out infinite",
              }}
            >
              DMAN<span style={{ color: "#d4af37" }}>BRAY</span>
            </motion.h1>

            {/* ── Subtitle ── */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 0.8, delay: 0.65, ease: "easeOut" }}
              style={{
                color: "#6d737d",
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.3em",
                marginTop: "8px",
                textTransform: "uppercase",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              Pathway to transform
            </motion.p>
          </div>

          {/* ── Keyframe Animations ── */}
          <style>{`
            @keyframes preloaderSpin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }

            @keyframes preloaderSpinReverse {
              0% { transform: rotate(360deg); }
              100% { transform: rotate(-360deg); }
            }

            @keyframes preloaderPulseText {
              0%, 100% {
                opacity: 0.7;
                transform: scale(0.98);
                text-shadow: 0 0 0 rgba(212,175,55,0);
              }
              50% {
                opacity: 1;
                transform: scale(1.02);
                text-shadow: 0 4px 12px rgba(212,175,55,0.18);
              }
            }

            @keyframes preloaderFloat {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-4px); }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
