import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Code2,
  Users,
  Lightbulb,
  Rocket,
  Shield,
} from "lucide-react";
import SEO from "../components/SEO";
import ScrollReveal from "../components/ScrollReveal";
import { founders } from "../data/siteData";
import founder1Img from "../assets/Dharaneeswar.png";
import founder2Img from "../assets/founder-2.jpg";
import founder3Img from "../assets/founder-3.jpg";

const values = [
  {
    icon: Target,
    title: "Purpose-Driven",
    description:
      "Every product we engineer starts with a deep understanding of the real problem it solves.",
  },
  {
    icon: Code2,
    title: "Clean Architecture",
    description:
      "Scalable, modular codebases designed to withstand growth and easy extensibility.",
  },
  {
    icon: Users,
    title: "User-Centered",
    description:
      "We build intuitive digital experiences that deliver real value to real people.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Innovation",
    description:
      "Leveraging cutting-edge technologies like React 19, modern AI architectures, and cloud microservices.",
  },
  {
    icon: Shield,
    title: "Enterprise Reliability",
    description:
      "High uptime, data security, robust authentication, and resilient server infrastructure.",
  },
  {
    icon: Rocket,
    title: "Scalable Growth",
    description:
      "Applications built to handle from 10 to 10,000,000 requests without architectural compromises.",
  },
];

const About = () => {
  return (
    <>
      <SEO
        title="About Us | DMANBRAY Innovations"
        description="Learn about DMANBRAY Innovations - our mission, vision, values and technological capabilities."
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
              About The Company
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white mb-6 leading-tight">
              Building Technology <br className="hidden sm:inline" />
              <span className="gradient-text-gold">With Purpose and Precision.</span>
            </h1>
            <p className="text-charcoal-200 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              DMANBRAY Innovations is a high-growth technology startup delivering
              end-to-end digital engineering. We partner with ambitious founders and
              enterprises to turn complex ideas into robust software products.
            </p>
          </motion.div>
        </div>
      </section>



      {/* Vision & Mission */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ScrollReveal delay={0.05}>
            <div className="charcoal-card p-8 sm:p-10 border border-[#47484c] h-full hover:border-[#d4af37]/60 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#282b30] border border-[#47484c] flex items-center justify-center mb-6 text-accent-gold">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">Our Vision</h3>
              <p className="text-charcoal-300 leading-relaxed">
                To be a premier global technology firm renowned for developing groundbreaking software products that accelerate human potential and business efficiency.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="charcoal-card p-8 sm:p-10 border border-[#47484c] h-full hover:border-[#d4af37]/60 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#282b30] border border-[#47484c] flex items-center justify-center mb-6 text-accent-gold">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">Our Mission</h3>
              <p className="text-charcoal-300 leading-relaxed">
                To empower startups and established businesses with world-class engineering, elegant design, and intelligent automation that drives measurable success.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Leadership / Founders Section */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1e2023] border border-[#47484c] text-accent-gold text-xs font-semibold tracking-wider uppercase mb-3 font-mono">
              <Users className="w-3.5 h-3.5" /> Leadership
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight mb-4">
              Meet The <span className="gradient-text-gold">Founders</span>
            </h2>
            <p className="text-charcoal-300 text-sm sm:text-base max-w-xl mx-auto font-normal">
              The architects and technologists steering engineering innovation, product excellence, and long-term vision at DMANBRAY.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-[1055px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {founders.map((founder, idx) => {
            const founderImages = [founder1Img, founder2Img, founder3Img];
            const portrait = founderImages[idx];
            return (
              <ScrollReveal key={founder.id} delay={idx * 0.12} className="h-full">
                <div className="charcoal-card rounded-2xl py-6 px-7 sm:px-8 flex flex-col items-center text-center justify-between h-full border-2 border-[#47484c]/70 hover:border-[#d4af37] shadow-[0_16px_36px_rgba(0,0,0,0.45)] hover:shadow-[0_20px_45px_rgba(212,175,55,0.18)] transition-all duration-300 group relative overflow-hidden">
                  {/* Subtle top card gold accent */}
                  <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent group-hover:via-[#d4af37] transition-all" />

                  <div className="flex flex-col items-center w-full">
                    {/* Rounded Circular Emblem Avatar */}
                    <div className="relative mb-4">
                      {/* Ambient Gold Glow */}
                      <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-[#d4af37]/30 via-transparent to-[#47484c]/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full p-1 bg-gradient-to-b from-[#d4af37] via-[#47484c] to-[#1e2023] shadow-[0_0_25px_rgba(212,175,55,0.2)] group-hover:scale-105 transition-transform duration-300">
                        <img
                          src={portrait}
                          alt={founder.name}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                    </div>

                    {/* Founder Name */}
                    <h3 className="text-base sm:text-lg font-display font-bold text-white group-hover:text-accent-gold transition-colors leading-snug min-h-[2.75rem] flex items-center justify-center">
                      {founder.name}
                    </h3>

                    {/* Role */}
                    <p className="text-xs font-semibold text-[#d4af37] font-mono tracking-wider uppercase mt-1">
                      {founder.role}
                    </p>
                  </div>

                  {/* Social Links */}
                  {founder.social && (
                    <div className="flex items-center justify-center gap-3 mt-5 pt-4 border-t border-[#47484c]/40 w-full">
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

      {/* Values Grid */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1e2023] border border-[#47484c] text-accent-gold text-xs font-semibold tracking-wider uppercase mb-3 font-mono">
              Core Principles
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              Values That <span className="gradient-text-gold">Guide Us</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <ScrollReveal key={val.title} delay={idx * 0.08}>
                <div className="charcoal-card p-7 h-full hover:border-[#d4af37]/60 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-[#282b30] border border-[#47484c] flex items-center justify-center text-accent-gold mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-display font-bold text-white mb-2">
                    {val.title}
                  </h4>
                  <p className="text-charcoal-300 text-sm leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <ScrollReveal>
          <div className="charcoal-card p-10 border border-[#47484c]">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
              Want to learn more about our engineering work?
            </h3>
            <p className="text-charcoal-300 text-sm max-w-lg mx-auto mb-8">
              Explore our services or get in touch with our team directly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/services" className="btn-gold">
                Explore Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link to="/contact" className="btn-charcoal">
                Contact Team
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
};

export default About;
