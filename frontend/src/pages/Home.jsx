import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Zap,
  Award,
  Users,
  Clock,
  Activity,
  Code2,
  Layers,
  ChevronRight,
} from "lucide-react";
import SEO from "../components/SEO";
import ScrollReveal from "../components/ScrollReveal";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";
import TechMarquee from "../components/TechMarquee";
import {
  services,
  technologies,
  projects,
  processSteps,
  whyDmanbray,
  founders,
} from "../data/siteData";
import circleLogo from "../assets/dmanbray-circle-logo.png";
import founder1Img from "../assets/founder-1.jpg";
import founder2Img from "../assets/founder-2.jpg";
import founder3Img from "../assets/founder-3.jpg";
/* ──────────── HERO SECTION WITH ROUND LOGO ──────────── */
const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-[120px] pb-16 select-none overflow-hidden">
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Action Buttons */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1e2023] border border-[#47484c]/80 shadow-md mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-ping" />
              <span className="text-xs font-semibold text-charcoal-100 tracking-wider uppercase font-mono">
                Innovate • Build • Grow
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.15] mb-6"
            >
              Engineering Technology <br className="hidden sm:inline" />
              <span className="gradient-text-gold">That Builds The Future.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-charcoal-200 text-base sm:text-lg max-w-xl leading-relaxed mb-8 font-normal"
            >
              DMANBRAY Innovations develops enterprise-grade Web Applications, Native
              Android Apps, Custom AI Architectures, and Scalable Cloud SaaS Products.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-8"
            >
              <Link to="/contact" className="btn-gold w-full sm:w-auto group">
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-500" />
              </Link>
              <Link to="/projects" className="btn-charcoal w-full sm:w-auto group">
                Explore Portfolio
                <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500" />
              </Link>
            </motion.div>

            {/* Trust Metrics Pill */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.8 }}
              className="flex flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-6 text-xs text-charcoal-300 font-sans border-t border-[#47484c]/40 pt-4"
            >
              <div className="flex items-center gap-1.5">
                <span className="text-[#d4af37] font-bold">50+</span>
                <span>Projects Delivered</span>
              </div>
              <span className="text-[#47484c] hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <span className="text-[#d4af37] font-bold">100%</span>
                <span>Client Satisfaction</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Round Logo with Round Border */}
          <div className="lg:col-span-5 flex justify-center items-center mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-center justify-center max-w-full"
            >
              {/* Soft Ambient Gold/Charcoal Halo with Pulsing Glow */}
              <motion.div
                animate={{
                  scale: [1, 1.18, 1],
                  opacity: [0.2, 0.38, 0.2],
                }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute w-64 h-64 sm:w-84 sm:h-84 rounded-full bg-gradient-to-tr from-[#d4af37]/30 via-[#47484c]/25 to-transparent blur-3xl pointer-events-none"
              />

              {/* Floating Motion Container */}
              <motion.div
                animate={{ y: [-10, 10, -10], rotate: [-0.6, 0.6, -0.6] }}
                transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
                className="relative"
              >
                {/* Outer Decorative Ring Frame */}
                <div className="relative p-2.5 sm:p-4 rounded-full bg-gradient-to-b from-[#47484c]/60 via-[#1e2023]/90 to-[#121316] border border-[#d4af37]/50 shadow-[0_0_50px_rgba(212,175,55,0.22)]">
                  {/* Inner Round Logo Frame */}
                  <div className="w-52 h-52 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-white p-2.5 sm:p-3 border-2 border-[#d4af37] shadow-2xl flex items-center justify-center">
                    <img
                      src={circleLogo}
                      alt="DMANBRAY Emblem"
                      className="w-full h-full object-contain rounded-full"
                    />
                  </div>
                </div>

                {/* Floating Micro-Badges */}
                <motion.div
                  animate={{ y: [6, -8, 6], x: [-3, 3, -3] }}
                  transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
                  className="absolute -top-2 -right-2 sm:-right-4 px-3.5 py-1.5 rounded-full bg-[#1e2023]/95 border border-[#47484c] shadow-xl backdrop-blur-md flex items-center gap-2 hover:border-[#d4af37] transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
                  <span className="text-xs font-semibold text-white tracking-wide font-sans">
                    ✦ AI & Cloud Ready
                  </span>
                </motion.div>

                <motion.div
                  animate={{ y: [-7, 7, -7], x: [3, -3, 3] }}
                  transition={{ duration: 9, ease: "easeInOut", repeat: Infinity }}
                  className="absolute -bottom-2 -left-2 sm:-left-4 px-3.5 py-1.5 rounded-full bg-[#1e2023]/95 border border-[#47484c] shadow-xl backdrop-blur-md flex items-center gap-2 hover:border-emerald-400 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-semibold text-white tracking-wide font-sans">
                    ⚡ Scalable Architecture
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ──────────── STATS SECTION ──────────── */
const StatsSection = () => {
  const stats = [
    { label: "Completed Projects", value: "50+", icon: Award },
    { label: "Client Satisfaction", value: "100%", icon: Users },
    { label: "System Reliability", value: "99.9%", icon: Activity },
    { label: "Technical Support", value: "24/7", icon: Clock },
  ];

  return (
    <section className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <ScrollReveal key={idx} delay={idx * 0.08}>
              <div className="charcoal-card p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 hover:border-[#d4af37]/60 transition-all duration-300">
                <div className="p-3 rounded-xl bg-[#282b30] border border-[#47484c]/60 text-accent-gold">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                    {stat.value}
                  </h3>
                  <p className="text-xs text-charcoal-300 font-medium mt-0.5">
                    {stat.label}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
};

/* ──────────── SERVICES SECTION ──────────── */
const ServicesSection = () => {
  return (
    <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <ScrollReveal>
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1e2023] border border-[#47484c] text-accent-gold text-xs font-semibold tracking-wider uppercase mb-3 font-mono">
            <Zap className="w-3.5 h-3.5" /> Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight mb-4">
            Full-Spectrum <span className="gradient-text-gold">Engineering</span>
          </h2>
          <p className="text-charcoal-300 text-base sm:text-lg max-w-2xl mx-auto">
            From modern web ecosystems to native Android applications and AI-driven platforms.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/services" className="btn-charcoal inline-flex items-center">
          View All Services
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </section>
  );
};

/* ──────────── TECHNOLOGY SECTION ──────────── */
const TechnologySection = () => {
  const categories = [
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "database", label: "Database" },
    { key: "mobile", label: "Mobile" },
    { key: "ai", label: "AI & ML" },
    { key: "infrastructure", label: "Cloud & DevOps" },
  ];

  return (
    <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <ScrollReveal>
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1e2023] border border-[#47484c] text-charcoal-200 text-xs font-semibold tracking-wider uppercase mb-3 font-mono">
            <Code2 className="w-3.5 h-3.5 text-accent-gold" /> Technologies
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight mb-4">
            Built With <span className="gradient-text-silver">Modern Tools</span>
          </h2>
          <p className="text-charcoal-300 text-sm sm:text-base max-w-xl mx-auto">
            Production-tested frameworks, cloud infrastructure, AI models, and databases powering our high-scale software.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((cat, catIndex) => (
          <ScrollReveal key={cat.key} delay={catIndex * 0.05}>
            <div className="charcoal-card p-5 h-full hover:border-[#d4af37]/60 transition-all duration-300">
              <h4 className="text-xs font-semibold text-accent-gold uppercase tracking-wider mb-4 border-b border-[#47484c]/40 pb-2">
                {cat.label}
              </h4>
              <div className="space-y-2.5">
                {technologies[cat.key].map((tech) => (
                  <div key={tech.name} className="flex items-center gap-2 group cursor-default">
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform"
                      style={{ backgroundColor: tech.color }}
                    />
                    <span className="text-xs font-medium text-charcoal-200 group-hover:text-white transition-colors">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

/* ──────────── PROJECTS SECTION ──────────── */
const ProjectsSection = () => {
  return (
    <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <ScrollReveal>
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1e2023] border border-[#47484c] text-accent-gold text-xs font-semibold tracking-wider uppercase mb-3 font-mono">
            <Layers className="w-3.5 h-3.5" /> Portfolio
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight mb-4">
            Selected <span className="gradient-text-gold">Case Studies</span>
          </h2>
          <p className="text-charcoal-300 text-base sm:text-lg max-w-2xl mx-auto">
            Explore recent digital products engineered and shipped for our partners.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.slice(0, 3).map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/projects" className="btn-charcoal inline-flex items-center">
          View All Projects
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </section>
  );
};

/* ──────────── PROCESS SECTION ──────────── */
const ProcessSection = () => {
  return (
    <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <ScrollReveal>
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1e2023] border border-[#47484c] text-charcoal-200 text-xs font-semibold tracking-wider uppercase mb-3 font-mono">
            Roadmap
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight mb-4">
            How We <span className="gradient-text-silver">Execute</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {processSteps.map((step, index) => (
          <ScrollReveal key={step.number} delay={index * 0.08}>
            <div className="charcoal-card p-7 h-full flex flex-col justify-between">
              <div>
                <span className="w-8 h-8 rounded-lg bg-[#282b30] border border-[#47484c] text-accent-gold font-mono text-xs font-bold flex items-center justify-center mb-5">
                  {step.number}
                </span>
                <h3 className="text-white font-display font-bold text-lg mb-2.5">
                  {step.title}
                </h3>
                <p className="text-charcoal-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

/* ──────────── FOUNDERS SECTION (PHOTO, NAME & ROLE ONLY) ──────────── */
const FoundersSection = () => {
  const founderImages = [founder1Img, founder2Img, founder3Img];

  return (
    <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-20 select-none">
      <ScrollReveal>
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1e2023] border border-[#47484c] text-accent-gold text-xs font-semibold tracking-wider uppercase mb-3 font-mono">
            <Users className="w-3.5 h-3.5" /> Leadership
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight mb-4">
            Meet The <span className="gradient-text-gold">Founders</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {founders.map((founder, idx) => {
          const portrait = founderImages[idx];
          return (
            <ScrollReveal key={founder.id} delay={idx * 0.1}>
              <div className="charcoal-card rounded-3xl p-8 sm:p-10 flex flex-col items-center text-center border-2 border-[#47484c]/70 hover:border-[#d4af37] shadow-[0_16px_36px_rgba(0,0,0,0.45)] hover:shadow-[0_20px_45px_rgba(212,175,55,0.18)] transition-all duration-300 group relative overflow-hidden">
                {/* Subtle top gold accent line */}
                <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent group-hover:via-[#d4af37] transition-all" />

                {/* Founder Image with Rounded Border Frame */}
                <div className="relative mb-5">
                  {/* Ambient Gold Glow */}
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-[#d4af37]/30 via-transparent to-[#47484c]/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Rounded Border Image Frame */}
                  <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1 bg-gradient-to-b from-[#d4af37] via-[#47484c] to-[#1e2023] shadow-[0_0_30px_rgba(212,175,55,0.2)] group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={portrait}
                      alt={founder.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>

                {/* Founder Name */}
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-accent-gold transition-colors">
                  {founder.name}
                </h3>

                {/* Role / Title */}
                <p className="text-sm font-semibold text-[#d4af37] font-mono tracking-wider uppercase mt-2">
                  {founder.role}
                </p>

                {/* Social Links */}
                {founder.social && (
                  <div className="flex items-center gap-3 mt-4 pt-3 border-t border-[#47484c]/40">
                    {founder.social.linkedin && (
                      <a
                        href={founder.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${founder.name} LinkedIn`}
                        className="w-9 h-9 rounded-full bg-[#16181b] border border-[#47484c]/60 flex items-center justify-center text-slate-400 hover:text-[#0077b5] hover:border-[#0077b5]/60 hover:bg-[#0077b5]/10 transition-all duration-300"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                        </svg>
                      </a>
                    )}
                    {founder.social.twitter && (
                      <a
                        href={founder.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${founder.name} X`}
                        className="w-9 h-9 rounded-full bg-[#16181b] border border-[#47484c]/60 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/60 hover:bg-white/10 transition-all duration-300"
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </a>
                    )}
                    {founder.social.instagram && (
                      <a
                        href={founder.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${founder.name} Instagram`}
                        className="w-9 h-9 rounded-full bg-[#16181b] border border-[#47484c]/60 flex items-center justify-center text-slate-400 hover:text-[#e4405f] hover:border-[#e4405f]/60 hover:bg-[#e4405f]/10 transition-all duration-300"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
};

/* ──────────── CTA SECTION ──────────── */
const CTASection = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <ScrollReveal>
        <div className="charcoal-card p-10 sm:p-14 border border-[#47484c] relative overflow-hidden">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#282b30] border border-[#47484c] text-accent-gold text-xs font-semibold tracking-wider uppercase mb-5 font-mono">
            <Sparkles className="w-3.5 h-3.5" /> Start Your Venture
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white mb-5 leading-tight">
            Have An Ambitious Project? <br />
            <span className="gradient-text-gold">Let's Build It Together.</span>
          </h2>
          <p className="text-charcoal-200 text-base sm:text-lg max-w-xl mx-auto mb-9 leading-relaxed">
            Collaborate with DMANBRAY Innovations for full-cycle software development, custom AI tools, and scalable cloud solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-gold w-full sm:w-auto">
              Start A Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link to="/contact" className="btn-charcoal w-full sm:w-auto">
              Schedule A Consultation
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

/* ──────────── HOME COMPONENT ──────────── */
const Home = () => {
  return (
    <>
      <SEO />
      <HeroSection />
      <div className="my-6">
        <TechMarquee />
      </div>
      <StatsSection />
      <ServicesSection />
      <TechnologySection />
      <ProjectsSection />
      <ProcessSection />
      <FoundersSection />
      <CTASection />
    </>
  );
};

export default Home;
