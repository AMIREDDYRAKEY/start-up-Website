import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Trophy,
  Layers,
  Code2,
  Eye,
} from "lucide-react";
import SEO from "../components/SEO";
import { projects } from "../data/siteData";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const sections = [
    {
      icon: Eye,
      title: "Overview",
      content: project.overview,
    },
    {
      icon: AlertTriangle,
      title: "The Problem",
      content: project.problem,
    },
    {
      icon: CheckCircle2,
      title: "The Solution",
      content: project.solution,
    },
  ];

  return (
    <>
      <SEO
        title={`${project.title} | DHANVIRA Technologies`}
        description={project.shortDescription}
      />

      {/* Hero Header */}
      <section className="relative pt-[120px] pb-16 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold text-charcoal-300 hover:text-white mb-8 transition-colors group font-mono"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to All Projects
          </Link>

          <div className="max-w-4xl">
            <span
              className="inline-block text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4 border"
              style={{
                color: project.color,
                borderColor: `${project.color}40`,
                backgroundColor: `${project.color}15`,
              }}
            >
              {project.category}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white mb-6 leading-tight">
              {project.title}
            </h1>
            <p className="text-charcoal-200 text-lg sm:text-xl leading-relaxed font-normal">
              {project.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Main Details Body */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left / Main Column */}
          <div className="lg:col-span-8 space-y-10">
            {sections.map((sec, idx) => {
              const Icon = sec.icon;
              return (
                <motion.div
                  key={sec.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.9, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="charcoal-card p-6 sm:p-10 border border-[#47484c]/50"
                >
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#282b30] border border-[#47484c] flex items-center justify-center text-accent-gold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h2 className="text-2xl font-display font-bold text-white">
                      {sec.title}
                    </h2>
                  </div>
                  <p className="text-charcoal-200 text-base leading-relaxed whitespace-pre-line font-normal">
                    {sec.content}
                  </p>
                </motion.div>
              );
            })}

            {/* Key Features */}
            {project.features && (
              <div className="charcoal-card p-8 sm:p-10 border border-[#47484c]/50">
                <h2 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
                  <Code2 className="w-6 h-6 text-accent-gold" /> Key Features
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-sm text-charcoal-200">
                      <CheckCircle2 className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column / Metadata Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="charcoal-card p-8 border border-[#47484c]/50">
              <h3 className="text-lg font-display font-bold text-white mb-6 border-b border-[#47484c]/40 pb-3">
                Project Info
              </h3>
              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-xs text-charcoal-400 uppercase tracking-wider block font-mono">
                    Category
                  </span>
                  <span className="text-white font-medium">{project.category}</span>
                </div>
                {project.client && (
                  <div>
                    <span className="text-xs text-charcoal-400 uppercase tracking-wider block font-mono">
                      Client
                    </span>
                    <span className="text-white font-medium">{project.client}</span>
                  </div>
                )}
                {project.timeline && (
                  <div>
                    <span className="text-xs text-charcoal-400 uppercase tracking-wider block font-mono">
                      Timeline
                    </span>
                    <span className="text-white font-medium">{project.timeline}</span>
                  </div>
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-[#47484c]/40">
                <span className="text-xs text-charcoal-400 uppercase tracking-wider block mb-3 font-mono">
                  Technologies Used
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono text-charcoal-100 bg-[#282b30] border border-[#47484c]/60 rounded-md px-2.5 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick CTA Box */}
            <div className="charcoal-card p-8 border border-[#47484c] text-center">
              <h4 className="text-lg font-display font-bold text-white mb-2">
                Have a similar vision?
              </h4>
              <p className="text-xs text-charcoal-300 mb-6">
                We can architect and launch a product like this for your organization.
              </p>
              <Link to="/contact" className="btn-gold w-full text-center">
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetails;
