import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Layers } from "lucide-react";
import SEO from "../components/SEO";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/siteData";

const Projects = () => {
  return (
    <>
      <SEO
        title="Projects | DHANVIRA Technologies"
        description="Explore our portfolio of web applications, Android apps, custom software, AI solutions and SaaS platforms."
      />

      {/* Hero */}
      <section className="relative pt-[120px] pb-16 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto text-center flex flex-col items-center"
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1e2023] border border-[#47484c] text-accent-gold text-xs font-semibold tracking-wider uppercase mb-4 font-mono">
              <Layers className="w-3.5 h-3.5" /> Case Studies & Work
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white mb-6 leading-tight">
              Ideas We've Turned Into <br className="hidden sm:inline" />
              <span className="gradient-text-gold">Production Products.</span>
            </h1>
            <p className="text-charcoal-200 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Each product represents a solved real-world challenge through elegant architecture, modern frameworks, and user-centered design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="charcoal-card p-10 max-w-3xl mx-auto border border-[#47484c]">
            <h3 className="text-2xl font-display font-bold text-white mb-3">
              Ready to start your next big software project?
            </h3>
            <p className="text-charcoal-300 text-sm max-w-md mx-auto mb-7">
              Let's talk about requirements, timelines, and architectural roadmap.
            </p>
            <Link to="/contact" className="btn-gold inline-flex items-center">
              Let's Build It
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
