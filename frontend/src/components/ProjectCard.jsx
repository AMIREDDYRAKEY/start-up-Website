import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const ProjectCard = ({ project, index }) => {
  // Assign unique accent colors matching the infographic style
  const accentColors = ["#F97316", "#22C55E", "#EAB308", "#3B82F6", "#EC4899"];
  const accent = accentColors[index % accentColors.length] || project.color;

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.9,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="h-full"
    >
      <div
        className="group block h-full relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
        style={{
          background: "#1e2023",
          border: "1px solid rgba(71, 72, 76, 0.35)",
        }}
      >
        {/* ── Colored L-shaped corner accent ── */}
        <div
          className="absolute top-0 left-0 w-16 h-[3px] rounded-tr-full"
          style={{ background: accent }}
        />
        <div
          className="absolute top-0 left-0 w-[3px] h-16 rounded-br-full"
          style={{ background: accent }}
        />

        {/* ── Bottom border & corner accents ── */}
        <div
          className="absolute bottom-0 right-0 w-16 h-[3px] rounded-tl-full"
          style={{ background: accent }}
        />
        <div
          className="absolute bottom-0 right-0 w-[3px] h-16 rounded-tl-full"
          style={{ background: accent }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-[2px] transition-opacity duration-300"
          style={{
            background: `linear-gradient(90deg, ${accent}80 0%, ${accent}30 50%, ${accent}80 100%)`,
          }}
        />

        {/* ── Card Content ── */}
        <div className="p-7 sm:p-8 flex flex-col flex-1">
          {/* Top Row: Number Badge + Category + Live Indicator */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold font-mono transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `${accent}15`,
                  border: `2px solid ${accent}40`,
                  color: accent,
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              <span
                className="text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest"
                style={{
                  background: `${accent}10`,
                  color: accent,
                  border: `1px solid ${accent}20`,
                }}
              >
                {project.category}
              </span>
            </div>

            {project.isLive && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                LIVE
              </span>
            )}
          </div>

          {/* Title */}
          <Link to={`/projects/${project.id}`}>
            <h3 className="text-lg font-display font-bold text-white mb-2.5 group-hover:text-[#f3e5ab] transition-colors duration-300 leading-tight">
              {project.title}
            </h3>
          </Link>

          {/* Description */}
          <p className="text-[#8b8f96] text-sm leading-relaxed mb-6 font-normal flex-1">
            {project.shortDescription}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono tracking-wide px-2.5 py-1 rounded-md"
                style={{
                  color: "#9ea5b0",
                  background: "rgba(34,37,42,0.6)",
                  border: "1px solid rgba(71,72,76,0.3)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Bottom Actions: View Architecture Link & Live Link */}
          <div className="flex items-center justify-between pt-4 mt-auto" style={{ borderTop: "1px solid rgba(71,72,76,0.25)" }}>
            <Link
              to={`/projects/${project.id}`}
              className="text-xs font-semibold text-[#8b8f96] hover:text-white transition-colors duration-300 tracking-wide flex items-center gap-1.5"
            >
              <span>Architecture Details</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#d4af37]" />
            </Link>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold font-mono tracking-wide transition-all duration-300 hover:scale-105"
                style={{
                  background: `${accent}18`,
                  border: `1px solid ${accent}40`,
                  color: "#ffffff",
                }}
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3 h-3 text-[#d4af37]" />
              </a>
            )}
          </div>
        </div>

        {/* Hover border glow */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            border: `1px solid ${accent}30`,
          }}
        />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
