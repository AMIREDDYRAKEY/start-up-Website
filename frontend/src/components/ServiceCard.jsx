import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const ServiceCard = ({ service, index, onClick }) => {
  const IconComponent = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <Link
        to={`/services#${service.id}`}
        onClick={onClick}
        className="group relative h-full flex flex-col justify-between p-5 sm:p-6 rounded-2xl overflow-hidden block transition-all duration-400 hover:-translate-y-1.5 select-none"
        style={{
          background: "linear-gradient(160deg, #1e2025 0%, #16181b 60%, #121316 100%)",
          border: "1px solid rgba(71, 72, 76, 0.4)",
          boxShadow: "0 6px 20px -8px rgba(0,0,0,0.5)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.45)";
          e.currentTarget.style.boxShadow =
            "0 14px 28px -8px rgba(0,0,0,0.65), 0 0 18px rgba(212,175,55,0.06)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(71, 72, 76, 0.4)";
          e.currentTarget.style.boxShadow = "0 6px 20px -8px rgba(0,0,0,0.5)";
        }}
      >
        {/* Subtle top gold accent line on hover */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: "linear-gradient(90deg, transparent 0%, #d4af37 50%, transparent 100%)",
          }}
        />

        {/* ── Top Header: Icon Badge + Index ── */}
        <div>
          <div className="flex items-center justify-between mb-4">
            {/* Compact Gold Icon Container */}
            <div
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105"
              style={{
                background: "linear-gradient(135deg, rgba(212, 175, 55, 0.14) 0%, rgba(212, 175, 55, 0.03) 100%)",
                border: "1px solid rgba(212, 175, 55, 0.32)",
              }}
            >
              <IconComponent
                className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#d4af37] transition-all duration-300 group-hover:text-[#f3e5ab] group-hover:scale-110"
                strokeWidth={1.8}
              />
            </div>

            {/* Step Number Tag */}
            <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full text-[#8b8f96] bg-[#1a1c21] border border-[#47484c]/45 group-hover:text-[#d4af37] group-hover:border-[#d4af37]/40 transition-colors">
              0{index + 1}
            </span>
          </div>

          {/* ── Title ── */}
          <h3 className="text-base sm:text-lg font-display font-bold text-white tracking-tight mb-2 group-hover:text-[#f3e5ab] transition-colors duration-300 leading-snug">
            {service.title}
          </h3>

          {/* ── Description ── */}
          <p className="text-[#8b8f96] text-xs leading-relaxed font-normal mb-4 line-clamp-2">
            {service.shortDescription}
          </p>

          {/* ── Technology Chips ── */}
          {service.technologies && service.technologies.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {service.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="text-[9.5px] font-mono px-2 py-0.5 rounded bg-[#202227]/80 text-[#9ca3af] border border-[#47484c]/30 group-hover:border-[#d4af37]/25 group-hover:text-white transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* ── Bottom Row: "Explore Service" & Arrow Button ── */}
        <div className="pt-3.5 border-t border-[#47484c]/20 flex items-center justify-between mt-auto">
          <span className="text-xs font-semibold font-display text-white/80 group-hover:text-[#d4af37] transition-colors duration-300">
            Explore Service
          </span>

          <div
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
            style={{
              background: "#22252a",
              border: "1px solid rgba(71, 72, 76, 0.45)",
              color: "#d4af37",
            }}
          >
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
