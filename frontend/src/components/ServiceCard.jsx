import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ServiceCard = ({ service, index, onClick }) => {
  const IconComponent = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.9, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      className="charcoal-card-hover p-6 sm:p-7 flex flex-col justify-between cursor-pointer group"
    >
      <div>
        {/* Card Header with Icon */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-xl bg-[#282b30] border border-[#47484c] flex items-center justify-center group-hover:border-[#d4af37]/60 group-hover:bg-[#1e2023] transition-all duration-500">
            <IconComponent className="w-6 h-6 text-[#d4af37] group-hover:scale-110 transition-transform duration-500" />
          </div>
          <span className="text-xs font-mono text-charcoal-400 group-hover:text-charcoal-200 transition-colors duration-500">
            0{index + 1}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-display font-bold text-white mb-2.5 group-hover:text-accent-gold transition-colors duration-300">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-charcoal-300 text-sm leading-relaxed mb-6 font-normal">
          {service.shortDescription}
        </p>

        {/* Technologies Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {service.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono text-charcoal-200 bg-[#282b30]/70 border border-[#47484c]/60 rounded-md px-2.5 py-1"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Link */}
      <div className="pt-4 border-t border-[#47484c]/30 flex items-center justify-between text-xs font-semibold text-charcoal-200 group-hover:text-accent-gold transition-colors duration-300">
        <span>Explore Service</span>
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-500" />
      </div>
    </motion.div>
  );
};

export default ServiceCard;
