import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../components/SEO";
import ProjectCard from "../components/ProjectCard";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTA";
import { EASE } from "../components/Motion";
import { projects } from "../data/siteData";

const Projects = () => {
  const categories = useMemo(() => ["All", ...new Set(projects.map((p) => p.category))], []);
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <SEO
        title="Projects | DMANBRAY Innovations"
        description="Explore our portfolio of web applications, Android apps, custom software, AI solutions and SaaS platforms."
      />

      <PageHero
        index="04"
        eyebrow="Case studies & work"
        title="Ideas turned into"
        highlight="production products."
        description="Each product represents a solved real-world challenge through elegant architecture, modern frameworks and user-centred design."
      >
        {/* Category filter */}
        <div
          role="group"
          aria-label="Filter projects by category"
          className="mx-auto inline-flex max-w-full gap-1 overflow-x-auto rounded-full border border-white/[0.08] bg-white/[0.03] p-1 [scrollbar-width:none]"
        >
          {categories.map((c) => {
            const isActive = filter === c;
            return (
              <button
                key={c}
                onClick={() => setFilter(c)}
                aria-pressed={isActive}
                className={`relative shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive ? "text-ink" : "text-fog-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="project-filter"
                    className="absolute inset-0 rounded-full bg-white"
                    transition={{ duration: 0.45, ease: EASE }}
                  />
                )}
                <span className="relative">
                  {c}
                  <span className="ml-1.5 text-[11px] opacity-60">
                    {c === "All" ? projects.length : projects.filter((p) => p.category === c).length}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </PageHero>

      {/* Projects grid */}
      <section className="container-site pb-section">
        <motion.div layout className="grid gap-5 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.6, ease: EASE }}
              >
                <ProjectCard project={project} index={projects.indexOf(project)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <CTASection
        title="Ready to start your"
        highlight="next big product?"
        description="Let's talk about requirements, timelines, and architectural roadmap."
      />
    </>
  );
};

export default Projects;
