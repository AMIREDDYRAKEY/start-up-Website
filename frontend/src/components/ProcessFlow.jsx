import React from "react";
import { motion } from "framer-motion";
import {
  SearchCheck,
  Lightbulb,
  Palette,
  Settings,
  ShieldCheck,
  Target,
} from "lucide-react";
import { processSteps } from "../data/siteData";

const stepConfig = [
  {
    Icon: SearchCheck,
    color: "#1e40af", // Deep Blue
    lightColor: "#60a5fa",
  },
  {
    Icon: Lightbulb,
    color: "#2563eb", // Royal Blue
    lightColor: "#93c5fd",
  },
  {
    Icon: Palette,
    color: "#0284c7", // Sky Blue
    lightColor: "#7dd3fc",
  },
  {
    Icon: Settings,
    color: "#06b6d4", // Bright Cyan
    lightColor: "#67e8f9",
  },
  {
    Icon: ShieldCheck,
    color: "#0d9488", // Teal
    lightColor: "#5eead4",
  },
  {
    Icon: Target,
    color: "#10b981", // Emerald / Mint
    lightColor: "#6ee7b7",
  },
];

const ProcessFlow = () => {
  // Merge original siteData processSteps with visual icons & gradient colors
  const steps = processSteps.map((step, idx) => ({
    ...step,
    ...(stepConfig[idx] || stepConfig[0]),
  }));

  return (
    <div className="w-full relative select-none">
      {/* ── 6 Colored Dots Signature (Matching Reference Infographic) ── */}
      <div className="flex items-center justify-center gap-2.5 mb-10">
        {steps.map((s) => (
          <span
            key={s.number}
            className="w-3 h-3 rounded-full shadow-sm"
            style={{ backgroundColor: s.color }}
          />
        ))}
      </div>

      {/* ── DESKTOP VIEW (Enlarged 6-Node Serpentine Interlocking Flow) ── */}
      <div className="hidden xl:block relative w-full max-w-[1500px] mx-auto py-6">
        <svg
          viewBox="0 0 1450 380"
          className="w-full h-auto drop-shadow-sm overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Soft Disc Shadow */}
            <filter id="discShadowLarge" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#000000" floodOpacity="0.6" />
              <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000000" floodOpacity="0.4" />
            </filter>

            {/* Subtle Disc Radial Gradient */}
            <radialGradient id="discGradLarge" cx="50%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#272b33" />
              <stop offset="65%" stopColor="#1c1e24" />
              <stop offset="100%" stopColor="#14161a" />
            </radialGradient>
          </defs>

          {/* ────────────────────────────────────────────────────────
              TRACK 1: Disc 1 to Disc 2
              Centers: (125, 190) to (365, 190), R_track=104
             ──────────────────────────────────────────────────────── */}
          <path
            d="
              M 199 264
              A 104 104 0 1 1 229 190
              C 229 260, 295 294, 360 294
            "
            stroke="#1e40af"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="199" cy="264" r="5.5" fill="#1e40af" />
          <polygon points="354,289 365,294 354,299" fill="#1e40af" />
          <path
            d="M 365 294 A 104 104 0 0 0 439 264"
            stroke="#1e40af"
            strokeWidth="3"
            strokeDasharray="5 5"
            strokeLinecap="round"
          />

          {/* ────────────────────────────────────────────────────────
              TRACK 2: Disc 2 to Disc 3
              Centers: (365, 190) to (605, 190), R_track=104
             ──────────────────────────────────────────────────────── */}
          <path
            d="
              M 285 123
              A 104 104 0 0 1 469 190
              C 469 260, 535 294, 600 294
            "
            stroke="#2563eb"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="285" cy="123" r="5.5" fill="#2563eb" />
          <polygon points="594,289 605,294 594,299" fill="#2563eb" />
          <path
            d="M 605 294 A 104 104 0 0 0 679 264"
            stroke="#2563eb"
            strokeWidth="3"
            strokeDasharray="5 5"
            strokeLinecap="round"
          />

          {/* ────────────────────────────────────────────────────────
              TRACK 3: Disc 3 to Disc 4
              Centers: (605, 190) to (845, 190), R_track=104
             ──────────────────────────────────────────────────────── */}
          <path
            d="
              M 525 123
              A 104 104 0 0 1 709 190
              C 709 260, 775 294, 840 294
            "
            stroke="#0284c7"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="525" cy="123" r="5.5" fill="#0284c7" />
          <polygon points="834,289 845,294 834,299" fill="#0284c7" />
          <path
            d="M 845 294 A 104 104 0 0 0 919 264"
            stroke="#0284c7"
            strokeWidth="3"
            strokeDasharray="5 5"
            strokeLinecap="round"
          />

          {/* ────────────────────────────────────────────────────────
              TRACK 4: Disc 4 to Disc 5
              Centers: (845, 190) to (1085, 190), R_track=104
             ──────────────────────────────────────────────────────── */}
          <path
            d="
              M 765 123
              A 104 104 0 0 1 949 190
              C 949 260, 1015 294, 1080 294
            "
            stroke="#06b6d4"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="765" cy="123" r="5.5" fill="#06b6d4" />
          <polygon points="1074,289 1085,294 1074,299" fill="#06b6d4" />
          <path
            d="M 1085 294 A 104 104 0 0 0 1159 264"
            stroke="#06b6d4"
            strokeWidth="3"
            strokeDasharray="5 5"
            strokeLinecap="round"
          />

          {/* ────────────────────────────────────────────────────────
              TRACK 5: Disc 5 to Disc 6 (Wraps around Disc 6 with Arrow)
              Centers: (1085, 190) to (1325, 190), R_track=104
             ──────────────────────────────────────────────────────── */}
          <path
            d="
              M 1005 123
              A 104 104 0 0 1 1189 190
              C 1189 260, 1255 294, 1325 294
              A 104 104 0 1 0 1276 103
            "
            stroke="#0d9488"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="1005" cy="123" r="5.5" fill="#0d9488" />
          <polygon points="1288,96 1275,103 1284,111" fill="#0d9488" />

          {/* ────────────────────────────────────────────────────────
              6 ENLARGED CIRCULAR DISCS (Radius: 86px, Diameter: 172px)
              Centers: 125, 365, 605, 845, 1085, 1325, cy=190
             ──────────────────────────────────────────────────────── */}
          {[125, 365, 605, 845, 1085, 1325].map((cx, i) => (
            <g key={i} filter="url(#discShadowLarge)">
              <circle
                cx={cx}
                cy="190"
                r="86"
                fill="url(#discGradLarge)"
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="1.5"
              />
            </g>
          ))}
        </svg>

        {/* ── HTML OVERLAY FOR STEP CONTENT (Centered inside each enlarged disc) ── */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="relative w-full h-full max-w-[1450px] mx-auto">
            {steps.map((step, idx) => {
              // Centers: 125/1450, 365/1450, 605/1450, 845/1450, 1085/1450, 1325/1450
              const leftPositions = [
                "8.62%",
                "25.17%",
                "41.72%",
                "58.28%",
                "74.83%",
                "91.38%",
              ];
              const IconComp = step.Icon;

              return (
                <div
                  key={step.number}
                  className="group absolute pointer-events-auto -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center p-3 rounded-full transition-all duration-300 hover:scale-105 cursor-default"
                  style={{
                    left: leftPositions[idx],
                    top: "50%",
                    width: "166px",
                    height: "166px",
                  }}
                >
                  {/* Step Number Tag */}
                  <span
                    className="text-[8.5px] font-mono font-bold tracking-wider uppercase mb-1 px-2 py-0.5 rounded-full"
                    style={{
                      background: `${step.color}20`,
                      color: step.lightColor,
                      border: `1px solid ${step.color}35`,
                    }}
                  >
                    Step {step.number}
                  </span>

                  {/* Icon */}
                  <div className="mb-1 transition-transform duration-300 group-hover:scale-110">
                    <IconComp
                      className="w-5 h-5"
                      style={{ color: step.lightColor }}
                      strokeWidth={2}
                    />
                  </div>

                  {/* Title */}
                  <h4 className="text-xs font-display font-bold text-white mb-0.5 tracking-tight group-hover:text-white transition-colors duration-200">
                    {step.title}
                  </h4>

                  {/* Original Description from siteData */}
                  <p className="text-[#8b8f96] text-[9.5px] leading-tight line-clamp-2 font-normal px-2 max-w-[125px] mx-auto">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── RESPONSIVE VIEW FOR TABLET & MOBILE (Enlarged Discs) ── */}
      <div className="block xl:hidden px-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {steps.map((step, idx) => {
            const IconComp = step.Icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="relative rounded-3xl p-6 text-center transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "linear-gradient(160deg, #1e2025 0%, #16181b 100%)",
                  border: `1.5px solid ${step.color}50`,
                  boxShadow: "0 12px 28px -8px rgba(0,0,0,0.55)",
                }}
              >
                {/* Step Number Badge */}
                <span
                  className="inline-block text-[9.5px] font-mono font-bold px-2.5 py-0.5 rounded-full mb-2.5 uppercase tracking-wider"
                  style={{
                    background: `${step.color}20`,
                    color: step.lightColor,
                    border: `1px solid ${step.color}35`,
                  }}
                >
                  Step {step.number}
                </span>

                {/* Enlarged Circular Icon Disc */}
                <div
                  className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center shadow-md"
                  style={{
                    background: "linear-gradient(145deg, #272b33, #16181c)",
                    border: `2px solid ${step.color}`,
                  }}
                >
                  <IconComp
                    className="w-6 h-6"
                    style={{ color: step.lightColor }}
                    strokeWidth={2}
                  />
                </div>

                {/* Title */}
                <h4 className="text-sm font-display font-bold text-white mb-1">
                  {step.title}
                </h4>

                {/* Original Description */}
                <p className="text-[#8b8f96] text-[11px] leading-relaxed font-normal">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProcessFlow;
