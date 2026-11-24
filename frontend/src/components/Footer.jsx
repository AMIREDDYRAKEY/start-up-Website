import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ecosystem, services } from "../data/siteData";
import { gsap, useGSAP, prefersReducedMotion } from "../lib/gsap";

const exploreLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
];

const YEAR = new Date().getFullYear();

/* Footer: link columns over a full-width wordmark whose letters rise from
   below as the footer scrolls in, and lift individually on hover. */
const Footer = () => {
  const root = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.from(".ft-char", {
        yPercent: 100,
        stagger: 0.04,
        ease: "expo.out",
        duration: 1.4,
        clearProps: "transform", // hand transform back to the CSS hover lift
        scrollTrigger: { trigger: ".ft-word", start: "top 95%" },
      });
    },
    { scope: root }
  );

  return (
    <footer ref={root} className="relative z-10 overflow-hidden bg-ink-950 text-paper">
      <div className="container-site pt-20 sm:pt-24">
        <div className="grid gap-12 border-t border-white/10 pt-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-fog-500">Say hello</p>
            <a href="mailto:contact@dmanbray.com" className="group mt-4 inline-flex items-center gap-2 font-display text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
              <span className="link-draw">contact@dmanbray.com</span>
              <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:rotate-45" />
            </a>
            <p className="mt-4 max-w-xs text-sm text-fog-400">Based in India, building for everywhere.</p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7 lg:col-start-6">
            {[
              { title: "Explore", items: exploreLinks.map((l) => ({ label: l.name, to: l.path })) },
              { title: "Ecosystem", items: ecosystem.map((v) => ({ label: v.name, to: v.link, dot: v.signal })) },
              { title: "Capabilities", items: services.slice(0, 5).map((s) => ({ label: s.title, to: `/services#${s.id}` })) },
            ].map((col) => (
              <div key={col.title} className={col.title === "Capabilities" ? "col-span-2 sm:col-span-1" : ""}>
                <h3 className="mb-5 font-mono text-[11px] font-normal uppercase tracking-[0.2em] text-fog-500">{col.title}</h3>
                <ul className="space-y-2.5">
                  {col.items.map((it) => (
                    <li key={it.label} className="flex items-center gap-2.5">
                      {it.dot && <span className="h-1.5 w-1.5" style={{ background: it.dot }} />}
                      <Link to={it.to} className="group text-sm text-fog-200 hover:text-paper">
                        <span className="roll">
                          <span>{it.label}</span>
                          <span aria-hidden="true">{it.label}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full-bleed wordmark */}
      <div className="ft-word mt-16 flex select-none justify-center overflow-hidden px-2 sm:mt-24" aria-hidden="true">
        {"DMANBRAY".split("").map((c, i) => (
          <span
            key={i}
            className="ft-char inline-block font-display text-[21vw] font-bold leading-[0.78] tracking-[-0.06em] text-paper transition-[transform,color] duration-500 ease-out-expo hover:-translate-y-[6%] hover:text-brand"
          >
            {c}
          </span>
        ))}
      </div>

      <div className="container-site flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-fog-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {YEAR} DMANBRAY Innovations. All rights reserved.</p>
        <p className="font-mono uppercase tracking-[0.2em]">Innovate · Build · Grow</p>
      </div>
    </footer>
  );
};

export default Footer;
