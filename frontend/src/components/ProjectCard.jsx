import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

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
      <Link
        to={`/projects/${project.id}`}
        className="group block h-full relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
        style={{
          background: "#1e2023",
          border: "1px solid rgba(71, 72, 76, 0.35)",
        }}
      >
        {/* ── Colored L-shaped corner accent ── */}
        {/* Top bar */}
        <div
          className="absolute top-0 left-0 w-16 h-[3px] rounded-tr-full"
          style={{ background: accent }}
        />
        {/* Left bar */}
        <div
          className="absolute top-0 left-0 w-[3px] h-16 rounded-br-full"
          style={{ background: accent }}
        />

        {/* ── Bottom border & corner accents ── */}
        {/* Bottom-right horizontal bar */}
        <div
          className="absolute bottom-0 right-0 w-16 h-[3px] rounded-tl-full"
          style={{ background: accent }}
        />
        {/* Bottom-right vertical bar */}
        <div
          className="absolute bottom-0 right-0 w-[3px] h-16 rounded-tl-full"
          style={{ background: accent }}
        />
        {/* Full bottom border accent strip */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[2px] transition-opacity duration-300"
          style={{
            background: `linear-gradient(90deg, ${accent}80 0%, ${accent}30 50%, ${accent}80 100%)`,
          }}
        />

        {/* ── Card Content ── */}
        <div className="p-7 sm:p-8 flex flex-col h-full">
          {/* Top Row: Number Badge + Category */}
          <div className="flex items-center justify-between mb-5">
            {/* Numbered Badge */}
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

            {/* Category Tag */}
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

          {/* Title */}
          <h3 className="text-lg font-display font-bold text-white mb-2.5 group-hover:text-[#f3e5ab] transition-colors duration-300 leading-tight">
            {project.title}
          </h3>

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

          {/* Bottom: View link */}
          <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid rgba(71,72,76,0.25)" }}>
            <span className="text-xs font-semibold text-[#6d737d] group-hover:text-white transition-colors duration-300 tracking-wide">
              View Project
            </span>
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              style={{
                background: `${accent}12`,
                border: `1px solid ${accent}25`,
              }}
            >
              <ArrowUpRight
                className="w-3.5 h-3.5 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                style={{ color: accent }}
              />
            </div>
          </div>
        </div>

        {/* Hover border glow */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            border: `1px solid ${accent}30`,
          }}
        />
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
