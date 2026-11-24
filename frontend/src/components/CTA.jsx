import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import CircleCTA from "./CircleCTA";
import { useGSAP } from "../lib/gsap";
import { applyScrollAnimations } from "../lib/animations";

/* Closing chapter shared by inner pages: oversized statement, contact
   details and the rotating circle CTA. */
const CTASection = ({
  title = "Have an ambitious idea?",
  highlight = "Let's build it.",
  description = "Full-cycle software development, custom AI tools and scalable cloud solutions — from the first sketch to the thousandth user.",
}) => {
  const root = useRef(null);
  useGSAP(() => applyScrollAnimations(root.current), { scope: root });

  return (
    <section ref={root} className="relative overflow-hidden bg-ink py-section">
      <div className="grain pointer-events-none absolute inset-0" />
      <div className="container-site relative">
        <p className="mb-10 font-mono text-[11px] uppercase tracking-[0.2em] text-fog-400">
          <span className="opacity-60">(→)</span> What's next
        </p>
        <h2 className="font-display text-[clamp(3rem,8.5vw,9rem)] font-bold leading-[0.86] tracking-[-0.06em] text-paper">
          <span data-split="chars" className="block">{title}</span>
          <span data-split="chars" data-delay="0.1" className="block text-brand-light lg:pl-[1em]">
            {highlight}
          </span>
        </h2>
        <div className="mt-14 grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-12 lg:items-center">
          <p data-reveal className="max-w-md text-lead text-fog-300 lg:col-span-5">
            {description}
          </p>
          <div data-reveal data-delay="0.1" className="lg:col-span-3">
            <a href="mailto:contact@dmanbray.com" className="link-draw text-fog-200 hover:text-paper">
              contact@dmanbray.com
            </a>
            <Link to="/contact" className="group mt-2 flex items-center gap-2 text-fog-200 hover:text-paper">
              <span className="link-draw">Schedule a consultation</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
            </Link>
          </div>
          <div data-reveal data-delay="0.2" className="flex lg:col-span-4 lg:justify-end">
            <CircleCTA to="/contact" ring="Start a project • Let's talk • " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
