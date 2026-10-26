import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
  ShieldCheck,
  Rocket,
  PhoneCall,
  Terminal,
  Cpu,
  Server,
  Database,
  Network,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import SEO from "../components/SEO";
import ScrollReveal from "../components/ScrollReveal";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";
import TechMarquee from "../components/TechMarquee";
import FounderCard from "../components/FounderCard";
import ProcessFlow from "../components/ProcessFlow";
import { TechLogo } from "../components/TechLogos";
import {
  services,
  technologies,
  projects,
  founders,
} from "../data/siteData";
import circleLogo from "../assets/dmanbray-circle-logo.png";
import founder1Img from "../assets/founder-1.png";
import founder2Img from "../assets/founder-2.jpg";
import founder3Img from "../assets/founder-3.png";

/* ──────────── CREATIVE FUTURISTIC HERO SECTION ──────────── */
const HeroSection = () => {
  const [activeConsoleTab, setActiveConsoleTab] = useState("architecture");

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-[115px] pb-12 select-none overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-b from-[#d4af37]/15 via-[#47484c]/10 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Centered Master Headline & Value Proposition */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center mb-10">
          {/* Top Cyber Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1e2023]/90 border border-[#47484c] shadow-lg mb-6 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
            <span className="text-xs font-semibold text-charcoal-100 tracking-wider uppercase font-mono">
              ✦ Next-Gen Software Lab • Autonomous AI & Scalable SaaS
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.12] mb-5"
          >
            Engineering Software That <br className="hidden sm:inline" />
            <span className="gradient-text-gold">Builds The Future.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-charcoal-200 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed mb-8 font-normal"
          >
            DMANBRAY Innovations develops enterprise-grade Web Applications, Native
            Android Apps, Custom AI Architectures, and Scalable Cloud SaaS Products.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-8"
          >
            <Link to="/contact" className="btn-gold w-full sm:w-auto group">
              Start Your Project
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link to="/projects" className="btn-charcoal w-full sm:w-auto group">
              Explore Live Showcase
              <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>

        {/* ── Creative Centerpiece: Interactive Cyber Command Console ── */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Ambient Corner Aura Glows */}
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#d4af37]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

          {/* Floating Micro-Badges on top of console */}
          <div className="hidden sm:flex items-center justify-between absolute -top-5 left-6 right-6 z-20 pointer-events-none">
            <div className="px-3 py-1.5 rounded-full bg-[#1e2023]/95 border border-[#47484c] shadow-lg backdrop-blur-md flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[11px] font-mono text-white font-semibold">
                99.99% Production Uptime
              </span>
            </div>

            <div className="px-3 py-1.5 rounded-full bg-[#1e2023]/95 border border-[#47484c] shadow-lg backdrop-blur-md flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
              <span className="text-[11px] font-mono text-white font-semibold">
                Autonomous AI & Multi-Agent Mesh
              </span>
            </div>
          </div>

          {/* Main Glass Console Card */}
          <div
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#47484c]/60 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(212,175,55,0.08)]"
            style={{
              background: "linear-gradient(165deg, #1f2228 0%, #17191d 40%, #121316 100%)",
            }}
          >
            {/* Top Console Navigation Bar */}
            <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-3.5 border-b border-[#47484c]/40 bg-[#16181b]/80 backdrop-blur-md gap-3">
              {/* Terminal Window Dots & Brand Indicator */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="h-4 w-[1px] bg-[#47484c]/60 hidden sm:block" />
                <span className="text-xs font-mono text-charcoal-300 hidden sm:inline-flex items-center gap-1.5">
                  <span className="text-[#d4af37] font-bold">DMANBRAY</span> :: CORE-CONSOLE v2.6
                </span>
              </div>

              {/* Interactive Console Tabs */}
              <div className="flex items-center gap-1.5 bg-[#121316] p-1 rounded-xl border border-[#47484c]/50 text-xs font-mono">
                <button
                  type="button"
                  onClick={() => setActiveConsoleTab("architecture")}
                  className={`px-3 py-1.5 rounded-lg transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                    activeConsoleTab === "architecture"
                      ? "bg-[#d4af37] text-[#121316] font-bold shadow-md"
                      : "text-charcoal-300 hover:text-white"
                  }`}
                >
                  <Network className="w-3.5 h-3.5" />
                  <span>Architecture</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveConsoleTab("terminal")}
                  className={`px-3 py-1.5 rounded-lg transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                    activeConsoleTab === "terminal"
                      ? "bg-[#d4af37] text-[#121316] font-bold shadow-md"
                      : "text-charcoal-300 hover:text-white"
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Live Terminal</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveConsoleTab("telemetry")}
                  className={`px-3 py-1.5 rounded-lg transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                    activeConsoleTab === "telemetry"
                      ? "bg-[#d4af37] text-[#121316] font-bold shadow-md"
                      : "text-charcoal-300 hover:text-white"
                  }`}
                >
                  <Activity className="w-3.5 h-3.5" />
                  <span>Telemetry</span>
                </button>
              </div>
            </div>

            {/* Console Screen Body */}
            <div className="p-5 sm:p-8 min-h-[290px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                {activeConsoleTab === "architecture" && (
                  <motion.div
                    key="arch"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.35 }}
                    className="w-full"
                  >
                    {/* Visual Interactive Architecture Flow */}
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 sm:gap-4 items-center">
                      {/* Node 1: Edge & Client */}
                      <div className="p-4 rounded-xl bg-[#1e2023] border border-[#47484c]/60 text-center relative group hover:border-[#61DAFB] transition-colors">
                        <div className="w-10 h-10 mx-auto rounded-xl bg-[#61DAFB]/10 border border-[#61DAFB]/30 flex items-center justify-center text-[#61DAFB] mb-2.5">
                          <Cpu className="w-5 h-5" />
                        </div>
                        <h4 className="text-xs font-bold text-white mb-1">Client Layer</h4>
                        <p className="text-[11px] text-charcoal-300 font-mono">React 19 • Next.js 15</p>
                        <span className="inline-block mt-2 text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                          ● SSR 60fps
                        </span>
                      </div>

                      {/* Node 2: API Gateway */}
                      <div className="p-4 rounded-xl bg-[#1e2023] border border-[#47484c]/60 text-center relative group hover:border-[#d4af37] transition-colors">
                        <div className="w-10 h-10 mx-auto rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] mb-2.5">
                          <Server className="w-5 h-5" />
                        </div>
                        <h4 className="text-xs font-bold text-white mb-1">API & Services</h4>
                        <p className="text-[11px] text-charcoal-300 font-mono">Node.js • Python FastAPI</p>
                        <span className="inline-block mt-2 text-[9px] font-mono text-[#d4af37] bg-[#d4af37]/10 px-2 py-0.5 rounded-full">
                          ● Sub-20ms SLA
                        </span>
                      </div>

                      {/* Node 3: AI Engine */}
                      <div className="p-4 rounded-xl bg-[#1e2023] border border-[#47484c]/60 text-center relative group hover:border-[#10A37F] transition-colors">
                        <div className="w-10 h-10 mx-auto rounded-xl bg-[#10A37F]/10 border border-[#10A37F]/30 flex items-center justify-center text-[#10A37F] mb-2.5">
                          <Sparkles className="w-5 h-5" />
                        </div>
                        <h4 className="text-xs font-bold text-white mb-1">AI & Vector Mesh</h4>
                        <p className="text-[11px] text-charcoal-300 font-mono">GPT-4o • RAG Embeddings</p>
                        <span className="inline-block mt-2 text-[9px] font-mono text-[#10A37F] bg-[#10A37F]/10 px-2 py-0.5 rounded-full">
                          ● Autonomous
                        </span>
                      </div>

                      {/* Node 4: Database & Cloud */}
                      <div className="p-4 rounded-xl bg-[#1e2023] border border-[#47484c]/60 text-center relative group hover:border-[#FF9900] transition-colors">
                        <div className="w-10 h-10 mx-auto rounded-xl bg-[#FF9900]/10 border border-[#FF9900]/30 flex items-center justify-center text-[#FF9900] mb-2.5">
                          <Database className="w-5 h-5" />
                        </div>
                        <h4 className="text-xs font-bold text-white mb-1">Cloud & Data</h4>
                        <p className="text-[11px] text-charcoal-300 font-mono">Postgres • Redis • AWS</p>
                        <span className="inline-block mt-2 text-[9px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full">
                          ● Multi-Region
                        </span>
                      </div>
                    </div>

                    {/* Integrated DMANBRAY Core Seal & Status */}
                    <div className="mt-5 pt-4 border-t border-[#47484c]/30 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-charcoal-300">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={circleLogo}
                          alt="DMANBRAY Emblem"
                          className="w-6 h-6 rounded-full border border-[#d4af37]"
                        />
                        <span className="text-white font-semibold">Active Cluster: APAC-CENTRAL-01</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-emerald-400 font-semibold">● 100% HEALTHY</span>
                        <span className="text-charcoal-400">•</span>
                        <span>Zero Cold Start</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeConsoleTab === "terminal" && (
                  <motion.div
                    key="terminal"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.35 }}
                    className="w-full font-mono text-xs text-charcoal-200 space-y-2 bg-[#0e1013] p-5 rounded-xl border border-[#47484c]/50 overflow-x-auto"
                  >
                    <p className="text-charcoal-400">
                      $ dmanbray deploy --project=enterprise-app --env=production
                    </p>
                    <p className="text-emerald-400">
                      ✔ [0.12s] Security Scan: Zero vulnerabilities detected across 420 dependencies.
                    </p>
                    <p className="text-cyan-400">
                      ✔ [0.45s] Building React 19 / Next.js edge assets & tree-shaking dynamic routes.
                    </p>
                    <p className="text-amber-400">
                      ✔ [0.82s] Distributed Redis Cache warmup & Vector DB index synchronized.
                    </p>
                    <p className="text-purple-400">
                      ✔ [1.10s] AI Agent pipelines initialized with LangChain & OpenAI GPT-4o.
                    </p>
                    <p className="text-emerald-300 font-bold pt-1">
                      🚀 SUCCESS: Production deployment live on global CDN across 285 edge locations.
                    </p>
                  </motion.div>
                )}

                {activeConsoleTab === "telemetry" && (
                  <motion.div
                    key="telemetry"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.35 }}
                    className="w-full"
                  >
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <div className="p-4 rounded-xl bg-[#1e2023] border border-[#47484c]/60 text-center">
                        <span className="text-[10px] font-mono uppercase text-charcoal-400 block mb-1">Global Latency</span>
                        <span className="text-2xl font-bold font-display text-emerald-400">&lt; 28ms</span>
                        <span className="text-[10px] text-charcoal-400 block mt-1">p99 Edge Response</span>
                      </div>
                      <div className="p-4 rounded-xl bg-[#1e2023] border border-[#47484c]/60 text-center">
                        <span className="text-[10px] font-mono uppercase text-charcoal-400 block mb-1">System Uptime</span>
                        <span className="text-2xl font-bold font-display text-[#d4af37]">99.99%</span>
                        <span className="text-[10px] text-charcoal-400 block mt-1">SLA Guaranteed</span>
                      </div>
                      <div className="p-4 rounded-xl bg-[#1e2023] border border-[#47484c]/60 text-center">
                        <span className="text-[10px] font-mono uppercase text-charcoal-400 block mb-1">Delivered Products</span>
                        <span className="text-2xl font-bold font-display text-cyan-400">50+</span>
                        <span className="text-[10px] text-charcoal-400 block mt-1">Enterprise Shipped</span>
                      </div>
                      <div className="p-4 rounded-xl bg-[#1e2023] border border-[#47484c]/60 text-center">
                        <span className="text-[10px] font-mono uppercase text-charcoal-400 block mb-1">Client Rating</span>
                        <span className="text-2xl font-bold font-display text-purple-400">100%</span>
                        <span className="text-[10px] text-charcoal-400 block mt-1">Satisfaction Score</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
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
    <section className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <ScrollReveal key={idx} delay={idx * 0.08}>
              <div className="charcoal-card p-5 sm:p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 hover:border-[#d4af37]/40 transition-all duration-300 group">
                <div
                  className="p-3 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(145deg, #282b30, #22252a)",
                    border: "1px solid rgba(71,72,76,0.5)",
                  }}
                >
                  <Icon className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white group-hover:text-[#f3e5ab] transition-colors duration-300">
                    {stat.value}
                  </h3>
                  <p className="text-xs text-[#8b8f96] font-medium mt-0.5">
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
    <section className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <ScrollReveal>
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1e2023] border border-[#47484c] text-accent-gold text-xs font-semibold tracking-wider uppercase mb-3 font-mono">
            <Zap className="w-3.5 h-3.5" /> Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight mb-3">
            Full-Spectrum <span className="gradient-text-gold">Engineering</span>
          </h2>
          <p className="text-charcoal-300 text-sm sm:text-base max-w-xl mx-auto">
            From modern web ecosystems to native Android applications and AI-driven platforms.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        {services.slice(0, 6).map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>

      <div className="text-center mt-10">
        <Link to="/services" className="btn-charcoal inline-flex items-center text-xs sm:text-sm py-3 px-6 rounded-xl">
          View All Services
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </section>
  );
};

/* ──────────── TECHNOLOGY SECTION (NO PROGRESS BARS, REAL LOGOS) ──────────── */
const TechnologySection = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const categories = [
    { key: "frontend", label: "Frontend", icon: "⚛️", accent: "#61DAFB" },
    { key: "backend", label: "Backend", icon: "⚙️", accent: "#339933" },
    { key: "database", label: "Database", icon: "🗄️", accent: "#47A248" },
    { key: "mobile", label: "Mobile", icon: "📱", accent: "#02569B" },
    { key: "ai", label: "AI & ML", icon: "🧠", accent: "#10A37F" },
    { key: "infrastructure", label: "Cloud & DevOps", icon: "☁️", accent: "#FF9900" },
  ];

  const activeCat = categories.find((c) => c.key === activeCategory);
  const activeTechs = technologies[activeCategory] || [];

  return (
    <section className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative overflow-hidden select-none">
      {/* ── Section Header ── */}
      <ScrollReveal>
        <div className="relative z-10 text-center mb-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1e2023] border border-[#47484c] text-charcoal-200 text-xs font-semibold tracking-wider uppercase mb-3 font-mono">
            <Code2 className="w-3.5 h-3.5 text-accent-gold" /> Technologies
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight mb-3">
            Production-Tested <span className="gradient-text-silver">Tech Stack</span>
          </h2>
          <p className="text-charcoal-300 text-xs sm:text-sm max-w-xl mx-auto">
            Official tools, cloud infrastructure, AI models, and databases powering our high-scale software.
          </p>
        </div>
      </ScrollReveal>

      {/* ── Category Tabs ── */}
      <ScrollReveal>
        <div className="relative z-10 flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-8">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <motion.button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer outline-none"
                style={{
                  background: isActive
                    ? `linear-gradient(135deg, ${cat.accent}20, ${cat.accent}08)`
                    : "rgba(30, 32, 35, 0.85)",
                  border: isActive
                    ? `1px solid ${cat.accent}70`
                    : "1px solid rgba(71, 72, 76, 0.4)",
                  color: isActive ? "#ffffff" : "#8b8f96",
                }}
              >
                <span className="flex items-center gap-2">
                  <span className="text-sm sm:text-base">{cat.icon}</span>
                  <span className="tracking-wide">{cat.label}</span>
                </span>
                {isActive && (
                  <motion.div
                    layoutId="tech-tab-indicator"
                    className="absolute -bottom-[1px] left-3 right-3 h-[2px] rounded-full"
                    style={{ backgroundColor: cat.accent }}
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </ScrollReveal>

      {/* ── Tech Cards Grid (Real Vector Logos, Role Badges, No Progress Bars) ── */}
      <div className="relative z-10">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto"
        >
          {activeTechs.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="group relative rounded-2xl overflow-hidden p-5 flex items-center justify-between transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "linear-gradient(160deg, #1e2023 0%, #191b1e 50%, #16181b 100%)",
                border: "1px solid rgba(71, 72, 76, 0.45)",
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                style={{
                  background: `radial-gradient(ellipse at 50% 0%, ${tech.color}15 0%, transparent 75%)`,
                }}
              />

              <div className="flex items-center gap-4 min-w-0">
                {/* Official Vector Brand SVG Logo Container */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 p-2.5"
                  style={{
                    background: `linear-gradient(145deg, ${tech.color}15, ${tech.color}08)`,
                    border: `1px solid ${tech.color}35`,
                  }}
                >
                  <TechLogo name={tech.name} className="w-full h-full" fallbackColor={tech.color} />
                </div>

                {/* Tech Info: Name & Role Tag (NO FAKE PROGRESS BARS) */}
                <div className="min-w-0">
                  <h4 className="text-sm font-bold text-white group-hover:text-[#f3e5ab] transition-colors duration-300 truncate">
                    {tech.name}
                  </h4>
                  <p className="text-[11px] text-charcoal-300 font-sans truncate">
                    {tech.role || "Core Architectural Engine"}
                  </p>
                </div>
              </div>

              {/* Status / Capability Badge */}
              <span
                className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-md flex-shrink-0"
                style={{
                  background: `${tech.color}12`,
                  border: `1px solid ${tech.color}30`,
                  color: tech.color,
                }}
              >
                {tech.badge || "Verified"}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ──────────── PROJECTS SECTION WITH LIVE LINKS ──────────── */
const ProjectsSection = () => {
  return (
    <section className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <ScrollReveal>
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1e2023] border border-[#47484c] text-accent-gold text-xs font-semibold tracking-wider uppercase mb-3 font-mono">
            <Layers className="w-3.5 h-3.5" /> Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight mb-3">
            Our <span className="gradient-text-gold">Work</span>
          </h2>
          <p className="text-charcoal-300 text-sm sm:text-base max-w-xl mx-auto">
            Real digital products we've engineered, featuring direct live demos and architecture breakdowns.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.slice(0, 3).map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <div className="text-center mt-10">
        <Link to="/projects" className="btn-charcoal inline-flex items-center text-xs sm:text-sm py-3 px-6 rounded-xl">
          View All Projects & Live Demos
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </section>
  );
};

/* ──────────── CONSULTATION BANNER ──────────── */
const ConsultationBanner = () => {
  return (
    <section className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <ScrollReveal>
        <div
          className="relative rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #1f2228 0%, #17191d 50%, #121316 100%)",
            border: "1px solid rgba(212, 175, 55, 0.3)",
            boxShadow: "0 12px 32px -8px rgba(0,0,0,0.6)",
          }}
        >
          {/* Subtle corner glow */}
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, #d4af37, transparent 70%)" }}
          />

          {/* Left: Phone icon + Call Info */}
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, #d4af37 0%, #aa8010 100%)",
                boxShadow: "0 4px 16px rgba(212,175,55,0.35)",
              }}
            >
              <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6 text-[#0d0e11]" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#d4af37] font-semibold block mb-0.5">
                Free Technical Consultation
              </span>
              <a
                href="https://wa.me/919876543210?text=Hello%20DMANBRAY,%20I%20would%20like%20to%20schedule%20a%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg sm:text-xl font-display font-extrabold text-white hover:text-[#f3e5ab] transition-colors"
              >
                +91 98765 43210 (Direct WhatsApp)
              </a>
            </div>
          </div>

          {/* Middle: Short prompt text */}
          <p className="text-[#8b8f96] text-xs sm:text-sm max-w-md text-center lg:text-left leading-relaxed font-normal">
            Have an ambitious software project? Our principal engineers will review your architecture, scope, and technical roadmap with zero obligation.
          </p>

          {/* Right: CTA Button */}
          <Link
            to="/contact"
            className="btn-gold whitespace-nowrap px-6 py-3 rounded-full text-xs sm:text-sm font-bold tracking-wide shadow-md"
          >
            Request Project Approval
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
};

/* ──────────── PROCESS SECTION ──────────── */
const ProcessSection = () => {
  return (
    <section className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-4 sm:pb-6 relative select-none">
      <ScrollReveal>
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1e2023] border border-[#47484c] text-accent-gold text-xs font-semibold tracking-wider uppercase mb-2 font-mono">
            Our Process
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight mb-2">
            Process <span className="gradient-text-gold">We Follow</span>
          </h2>
          <p className="text-charcoal-300 text-xs sm:text-sm max-w-lg mx-auto font-normal">
            A structured, transparent engineering lifecycle ensuring high quality and precision at every phase.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <ProcessFlow />
      </ScrollReveal>
    </section>
  );
};

/* ──────────── FOUNDERS SECTION ──────────── */
const FoundersSection = () => {
  const founderConfig = [
    { portrait: founder1Img, objectPosition: "center 16%", badge: "CEO" },
    { portrait: founder2Img, objectPosition: "center 12%", badge: "CTO" },
    { portrait: founder3Img, objectPosition: "center 10%", badge: "COO" },
  ];

  return (
    <section className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-12 sm:pb-16 select-none">
      <ScrollReveal>
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1e2023] border border-[#47484c] text-accent-gold text-xs font-semibold tracking-wider uppercase mb-3 font-mono">
            <Users className="w-3.5 h-3.5" /> Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight mb-2">
            Meet The <span className="gradient-text-gold">Founders</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {founders.map((founder, idx) => {
          const config = founderConfig[idx] || {};
          return (
            <ScrollReveal key={founder.id} delay={idx * 0.1} className="h-full">
              <FounderCard
                founder={founder}
                portrait={config.portrait}
                objectPosition={config.objectPosition}
                badge={config.badge}
              />
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
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 text-center">
      <ScrollReveal>
        <div
          className="charcoal-card p-8 sm:p-12 relative overflow-hidden"
          style={{
            border: "1px solid rgba(212,175,55,0.25)",
            boxShadow: "0 16px 48px -8px rgba(0,0,0,0.6)",
          }}
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[#d4af37] text-xs font-semibold tracking-wider uppercase mb-5 font-mono bg-[#282b30] border border-[#47484c]/50">
            <Sparkles className="w-3.5 h-3.5" /> Start Your Venture
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white mb-4 leading-tight">
            Have An Ambitious Project? <br />
            <span className="gradient-text-gold">Let's Build It Together.</span>
          </h2>
          <p className="text-[#8b8f96] text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Collaborate with DMANBRAY Innovations for full-cycle software development, custom AI tools, and scalable cloud solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-gold w-full sm:w-auto">
              Request Project Approval
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

/* ──────────── MAIN HOME COMPONENT ──────────── */
const Home = () => {
  return (
    <>
      <SEO />
      <HeroSection />
      <div className="my-4">
        <TechMarquee />
      </div>
      <StatsSection />
      <ServicesSection />
      <TechnologySection />
      <ProjectsSection />
      <ConsultationBanner />
      <ProcessSection />
      <FoundersSection />
      <CTASection />
    </>
  );
};

export default Home;
