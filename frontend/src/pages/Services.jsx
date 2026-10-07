import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";
import SEO from "../components/SEO";
import ScrollReveal from "../components/ScrollReveal";
import { services } from "../data/siteData";

const Services = () => {
  return (
    <>
      <SEO
        title="Services | DMANBRAY Innovations"
        description="Comprehensive engineering services: Web Apps, Android Apps, Custom Software, AI, SaaS, Backend, Cloud & Automation."
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
              <Zap className="w-3.5 h-3.5" /> What We Build
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white mb-6 leading-tight">
              Engineering Solutions <br className="hidden sm:inline" />
              <span className="gradient-text-gold">Tailored For Growth.</span>
            </h1>
            <p className="text-charcoal-200 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              From enterprise web platforms and native mobile applications to custom AI pipelines and scalable SaaS architectures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Services List */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="space-y-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <ScrollReveal key={service.id}>
                <div
                  id={service.id}
                  className="charcoal-card p-8 sm:p-10 lg:p-12 relative overflow-hidden group hover:border-[#47484c] transition-colors"
                >
                  <span className="absolute top-4 right-8 text-7xl sm:text-9xl font-display font-extrabold text-[#282b30]/30 select-none pointer-events-none">
                    0{index + 1}
                  </span>

                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-7">
                      <div className="w-14 h-14 rounded-2xl bg-[#282b30] border border-[#47484c] flex items-center justify-center mb-6 text-accent-gold">
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
                        {service.title}
                      </h3>
                      <p className="text-charcoal-200 text-base leading-relaxed mb-6 font-normal">
                        {service.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-xs font-semibold text-charcoal-300 uppercase tracking-wider mb-3 font-mono">
                          Key Capabilities & Deliverables
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {service.features.map((feat) => (
                            <div key={feat} className="flex items-center gap-2 text-xs text-charcoal-200">
                              <CheckCircle2 className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xs font-semibold text-charcoal-300 uppercase tracking-wider mb-2.5 font-mono">
                          Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {service.technologies.map((t) => (
                            <span
                              key={t}
                              className="text-[11px] font-mono text-charcoal-100 bg-[#282b30] border border-[#47484c]/60 rounded-md px-2.5 py-1"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-5 flex flex-col justify-between h-full pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-[#47484c]/30 lg:pl-8">
                      <div className="space-y-4 mb-8">
                        <h4 className="text-sm font-semibold text-white">Why Choose DMANBRAY?</h4>
                        <p className="text-xs text-charcoal-300 leading-relaxed">
                          We deliver production-ready code with continuous testing, automated CI/CD deployment pipelines, and long-term maintenance support.
                        </p>
                      </div>

                      <div>
                        <Link
                          to="/contact"
                          className="btn-gold w-full text-center"
                        >
                          Request A Proposal
                          <ArrowRight className="w-4 h-4 ml-2 inline-block" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="charcoal-card p-10 border border-[#47484c]">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
            Need a custom engineering solution not listed here?
          </h3>
          <p className="text-charcoal-300 text-sm max-w-lg mx-auto mb-8">
            We architect tailored solutions for unique enterprise requirements.
          </p>
          <Link to="/contact" className="btn-gold inline-flex items-center">
            Discuss Your Architecture
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
