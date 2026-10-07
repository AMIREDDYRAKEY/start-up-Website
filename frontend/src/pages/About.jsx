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
import FounderCard from "../components/FounderCard";
import { founders } from "../data/siteData";
import founder1Img from "../assets/founder-1.png";
import founder2Img from "../assets/founder-2.jpg";
import founder3Img from "../assets/founder-3.png";

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

        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {founders.map((founder, idx) => {
            const founderConfig = [
              { portrait: founder1Img, objectPosition: "center 16%", badge: "CEO" },
              { portrait: founder2Img, objectPosition: "center 12%", badge: "CTO" },
              { portrait: founder3Img, objectPosition: "center 10%", badge: "COO" },
            ];
            const config = founderConfig[idx] || {};
            return (
              <ScrollReveal key={founder.id} delay={idx * 0.12} className="h-full">
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
