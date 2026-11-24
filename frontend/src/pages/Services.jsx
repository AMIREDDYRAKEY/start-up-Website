import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SEO from "../components/SEO";
import { EASE, Reveal } from "../components/Motion";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTA";
import { services } from "../data/siteData";

/* Tracks which service section is currently in the reading zone */
const useActiveSection = (ids) => {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);
  return active;
};

const serviceIds = services.map((s) => s.id);

const Services = () => {
  const active = useActiveSection(serviceIds);

  return (
    <>
      <SEO
        title="Services | DMANBRAY Innovations"
        description="Comprehensive engineering services: Web Apps, Android Apps, Custom Software, AI, SaaS, Backend, Cloud & Automation."
      />

      <PageHero
        index="03"
        eyebrow={`${services.length} disciplines · one team`}
        title="Engineering"
        highlight="tailored for growth."
        description="From enterprise web platforms and native mobile applications to custom AI pipelines and scalable SaaS architectures — designed, engineered and supported by one team."
      />

      {/* Services with sticky index */}
      <section className="container-site pb-section pt-4">
        <div className="grid gap-12 lg:grid-cols-12">
          <aside className="hidden lg:col-span-3 lg:block">
            <nav className="sticky top-32" aria-label="Services index">
              <ul className="space-y-1">
                {services.map((s, i) => {
                  const isActive = active === s.id;
                  return (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className={`relative flex items-center gap-4 py-2 text-sm transition-colors duration-300 ${
                          isActive ? "text-paper" : "text-fog-500 hover:text-fog-200"
                        }`}
                      >
                        <span className="w-6 font-mono text-[11px]">{String(i + 1).padStart(2, "0")}</span>
                        {s.title}
                        {isActive && (
                          <motion.span
                            layoutId="services-index"
                            className="absolute -left-4 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-brand"
                            transition={{ duration: 0.5, ease: EASE }}
                          />
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
              <Link to="/contact" className="btn-ghost mt-10">
                Request a proposal
              </Link>
            </nav>
          </aside>

          <div className="lg:col-span-9">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <article
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-28 border-t border-white/10 py-14 first:border-t-0 first:pt-0 sm:py-20"
                >
                  <Reveal className="flex items-start justify-between gap-6">
                    <div>
                      <span className="font-mono text-xs text-brand-light">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h2 className="mt-4 font-display text-[clamp(2.5rem,5.2vw,5.5rem)] font-bold leading-[0.9] tracking-[-0.055em] text-paper">{service.title}</h2>
                    </div>
                    <span className="mt-6 hidden h-16 w-16 shrink-0 items-center justify-center rounded-full bg-brand text-white sm:flex">
                      <IconComponent className="h-6 w-6" strokeWidth={1.5} />
                    </span>
                  </Reveal>

                  <Reveal delay={0.05}>
                    <p className="mt-8 max-w-2xl text-lead text-fog-300">{service.fullDescription}</p>
                  </Reveal>

                  <div className="mt-12 grid gap-10 md:grid-cols-2">
                    <Reveal delay={0.1}>
                      <h3 className="mb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-fog-500">
                        Capabilities
                      </h3>
                      <ul className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
                        {service.features.map((feat) => (
                          <li key={feat} className="flex items-center gap-3 py-3 text-[15px] text-fog-200">
                            <span className="h-1 w-1 rounded-full bg-brand" />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </Reveal>
                    <Reveal delay={0.15}>
                      <h3 className="mb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-fog-500">
                        Process
                      </h3>
                      <ol className="space-y-3">
                        {service.process.map((step, i) => (
                          <li key={step} className="flex items-baseline gap-4 text-[15px] text-fog-200">
                            <span className="font-mono text-[11px] text-fog-500">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </Reveal>
                  </div>

                  <Reveal delay={0.1} className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((t) => (
                        <span key={t} className="tag">
                          {t}
                        </span>
                      ))}
                    </div>
                    <Link to="/contact" className="group inline-flex shrink-0 items-center gap-2 text-sm text-paper">
                      <span className="link-draw">Request a proposal</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
                    </Link>
                  </Reveal>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="Need something"
        highlight="not listed here?"
        description="We architect tailored solutions for unique enterprise requirements."
      />
    </>
  );
};

export default Services;
