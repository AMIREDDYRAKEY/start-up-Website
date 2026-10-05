import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.9, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={`/projects/${project.id}`}
        className="group block charcoal-card-hover overflow-hidden rounded-2xl"
      >
        {/* Project Thumbnail Header */}
        <div
          className="relative h-44 sm:h-52 overflow-hidden border-b border-[#47484c]/30"
          style={{
            background: `linear-gradient(135deg, ${project.color}15, #1e2023)`,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-16 h-16 rounded-2xl opacity-20 group-hover:opacity-40 group-hover:scale-125 transition-all duration-500"
              style={{
                background: `linear-gradient(135deg, ${project.color}, #d4af37)`,
              }}
            />
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span
              className="text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md"
              style={{
                background: `#1e1f22cc`,
                color: project.color,
                border: `1px solid ${project.color}40`,
              }}
            >
              {project.category}
            </span>
          </div>

          {/* Hover Arrow */}
          <div className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-[#282b30] border border-[#47484c] flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
            <ArrowUpRight className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-accent-gold transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-charcoal-300 text-sm leading-relaxed mb-4 font-normal">
            {project.shortDescription}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono text-charcoal-200 bg-[#282b30]/70 border border-[#47484c]/50 rounded px-2 py-0.5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
