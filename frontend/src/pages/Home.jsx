import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowDown, Plus, Star, Quote } from "lucide-react";
import SEO from "../components/SEO";
import FounderCard from "../components/FounderCard";
import CircleCTA from "../components/CircleCTA";
import HeroScene from "../components/HeroScene";
import { EcosystemMotif, ProductVisual } from "../components/Visuals";
import { EASE } from "../components/Motion";
import { useLenis } from "../components/SmoothScroll";
import { whenIntroDone } from "../components/Preloader";
import { gsap, ScrollTrigger, SplitText, useGSAP, prefersReducedMotion } from "../lib/gsap";
import { applyScrollAnimations } from "../lib/animations";
import {
  services,
  technologies,
  projects,
  processSteps,
  founders,
  testimonials,
  ecosystem,
} from "../data/siteData";
import founder1Img from "../assets/founder-1.png";
import founder2Img from "../assets/founder-2.jpg";
import founder3Img from "../assets/founder-3.png";
import brandMark from "../assets/dmanbray-3d-charcoal-gold.png";

const DESKTOP = "(min-width: 1024px)";

/* Small "(01) Label" marker used to open each chapter */
const Chapter = ({ n, children, className = "" }) => (
  <p className={`font-mono text-[11px] uppercase tracking-[0.2em] ${className}`}>
    <span className="opacity-60">({n})</span> {children}
  </p>
);

/* ═══════════════════ 01 · HERO ═══════════════════ */
const HeroSection = () => {
  const root = useRef(null);
  const scrollRef = useRef(0);
  const lenis = useLenis();

  useGSAP(
    (ctx, contextSafe) => {
      const reduce = prefersReducedMotion();

      // The hero stays pinned while the manifesto slides over it;
      // its progress also drives the WebGL dispersal.
      ScrollTrigger.create({
        trigger: root.current,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        scrub: true,
        onUpdate: (self) => {
          scrollRef.current = self.progress;
        },
      });
      if (!reduce) {
        gsap.to(".hero-content", {
          yPercent: -18,
          opacity: 0,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
        });
      }

      if (reduce) return;
      // Entrance choreography, started once the preloader has lifted
      gsap.set(".hero-content", { autoAlpha: 0 });
      let off = () => { };
      let alive = true;
      document.fonts.ready.then(
        contextSafe(() => {
          if (!alive) return;
          const split = SplitText.create(".hero-title-line", { type: "chars", mask: "chars" });
          const tl = gsap.timeline({ paused: true });
          tl.set(".hero-content", { autoAlpha: 1 })
            .from(split.chars, { yPercent: 120, rotate: 8, duration: 1.4, stagger: 0.03, ease: "expo.out" })
            .from(".hero-meta > *", { y: 16, opacity: 0, stagger: 0.06, duration: 1 }, 0.2)
            .from(".hero-rule", { scaleX: 0, transformOrigin: "left", duration: 1.6, ease: "expo.inOut" }, 0.1)
            .from(".hero-fade", { y: 30, opacity: 0, stagger: 0.1, duration: 1.2 }, 0.7)
            .from(".hero-unit", { x: 20, opacity: 0, stagger: 0.06, duration: 1 }, 0.9);
          off = whenIntroDone(() => tl.play());
        })
      );
      return () => {
        alive = false;
        off();
      };
    },
    { scope: root }
  );

  const scrollToUniverse = (e) => {
    e.preventDefault();
    const el = document.getElementById("ecosystem");
    if (!el) return;
    if (lenis.current) lenis.current.scrollTo(el, { duration: 1.8 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={root} className="relative h-[100svh] min-h-[640px] overflow-hidden bg-ink">
      {/* WebGL universe with full canvas so particles never clip on the right and ambient particles drift across */}
      <HeroScene
        scrollRef={scrollRef}
        className="pointer-events-none absolute inset-0 h-full w-full"
      />
      {/* Mobile contrast overlay: gently dims background behind the text so content is completely legible and never clutters with 3D particles */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_25%,rgba(11,11,12,0.92)_0%,rgba(11,11,12,0.70)_50%,rgba(11,11,12,0.30)_100%)] lg:hidden" />
      <div className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(90deg,#0b0b0c_16%,rgba(11,11,12,0.65)_36%,transparent_62%)] lg:block" />
      <div className="grain pointer-events-none absolute inset-0" />

      {/* Hero content shifted down with ample top padding and balanced horizontal layout */}
      <div className="hero-content container-site relative flex h-full flex-col justify-between pb-6 pt-20 sm:pb-10 sm:pt-28 lg:pt-36">
        {/* Left-aligned hero content with ample room so headline stays on one line */}
        <div className="relative z-10 flex flex-col items-start gap-3.5 pt-1 sm:gap-5 max-w-xl lg:max-w-[48%] xl:max-w-[46%] w-full">
          {/* Eyebrow / meta */}
          <div className="hero-meta flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-fog-400">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-light animate-pulse" />
            <span>(EST. INDIA) · INDEPENDENT TECHNOLOGY COMPANY</span>
          </div>

          {/* Left-aligned headline - whitespace-nowrap ensures 'what comes next.' stays strictly on one line */}
          <h1 className="font-display text-[clamp(2.2rem,4.8vw,5rem)] font-bold leading-[0.95] tracking-[-0.05em] text-paper">
            <span className="hero-title-line block whitespace-nowrap">We build</span>
            <span className="hero-title-line block text-brand-light whitespace-nowrap">
              what comes next<span className="text-paper">.</span>
            </span>
          </h1>

          {/* Description restored to clean size */}
          <p className="hero-fade max-w-lg text-[13.5px] leading-relaxed text-fog-200 sm:text-[15px]">
            An independent technology company creating digital products, intelligent platforms and
            experiences that shape tomorrow.
          </p>

          {/* Horizontal ecosystem tags - clean pill capsules on mobile so text never collides with particles */}
          <div className="hero-fade w-full pt-0.5">
            <ul className="flex flex-wrap items-center gap-2 sm:gap-x-4 sm:gap-y-2">
              {ecosystem.map((v) => (
                <li
                  key={v.id}
                  className="hero-unit flex items-center gap-1.5 rounded-full border border-white/10 bg-black/50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-fog-200 backdrop-blur-sm transition-colors hover:border-brand/40 hover:text-paper sm:border-transparent sm:bg-transparent sm:px-0 sm:py-0 sm:backdrop-blur-none sm:text-[11px] sm:tracking-[0.16em] sm:text-fog-400"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: v.signal }} />
                  <span className="opacity-60">{v.index}</span>
                  <span>{v.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action CTAs */}
          <div className="hero-fade flex flex-wrap items-center gap-3 pt-1 sm:gap-6">
            <Link
              to="/services"
              className="group flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-ink transition-transform duration-300 hover:scale-105 sm:px-6 sm:py-3 shadow-lg shadow-black/20"
            >
              <span>Discover what we build</span>
              <ArrowDown className="h-3.5 w-3.5 sm:h-4 sm:w-4 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
            </Link>
            <Link
              to="/contact"
              className="group flex items-center gap-2 px-2 py-2 text-xs sm:text-sm font-medium text-paper transition-opacity hover:opacity-80"
            >
              <span className="roll">
                <span>Start a conversation</span>
                <span aria-hidden="true">Start a conversation</span>
              </span>
              <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Link>
          </div>
        </div>

        {/* Bottom indicator & Circle CTA */}
        <div className="hero-fade relative z-10 flex items-end justify-between pt-2 sm:pt-4">
          <p className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-fog-500 sm:block">
            SCROLL TO EXPLORE
          </p>
          <div className="ml-auto">
            <CircleCTA
              href="#ecosystem"
              onClick={scrollToUniverse}
              label="Explore our universe"
              ring="Explore our universe • "
              size="h-20 w-20 sm:h-28 sm:w-28"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════ 02 · MANIFESTO ═══════════════════ */
const ManifestoSection = () => {
  const root = useRef(null);

  useGSAP(
    (ctx, contextSafe) => {
      if (prefersReducedMotion()) return;
      const mm = gsap.matchMedia();
      let alive = true;

      document.fonts.ready.then(
        contextSafe(() => {
          if (!alive) return;
          const split = SplitText.create(".manifesto-text", { type: "words" });

          // Desktop: pin and reveal words as user scrolls
          mm.add(DESKTOP, () => {
            gsap.fromTo(
              split.words,
              { opacity: 0.1, y: 6 },
              {
                opacity: 1,
                y: 0,
                stagger: 0.08,
                ease: "none",
                scrollTrigger: {
                  trigger: root.current,
                  start: "top top",
                  end: "+=110%",
                  pin: true,
                  scrub: true,
                },
              }
            );
          });

          // Mobile: simple viewport scrub
          mm.add("(max-width: 1023px)", () => {
            gsap.fromTo(
              split.words,
              { opacity: 0.1 },
              {
                opacity: 1,
                stagger: 0.1,
                ease: "none",
                scrollTrigger: { trigger: ".manifesto-text", start: "top 85%", end: "bottom 40%", scrub: true },
              }
            );
          });

          ScrollTrigger.sort();
          ScrollTrigger.refresh();
        })
      );

      // Brand mark number counter on scroll
      gsap.fromTo(
        ".manifesto-num",
        { textContent: "000" },
        {
          textContent: "100",
          duration: 1,
          snap: { textContent: 1 },
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top 60%", end: "bottom 60%", scrub: true },
        }
      );

      return () => {
        alive = false;
        mm.revert();
      };
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="relative z-10 flex min-h-[100svh] items-center overflow-hidden rounded-t-[2.5rem] bg-paper text-ink sm:rounded-t-[4rem]"
    >
      {/* Background texture accent */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_120%,rgba(47,75,255,0.06),transparent)]" />

      <div className="container-site relative w-full py-24 lg:py-32">
        {/* Top meta row */}
        <div className="mb-16 flex items-center justify-between">
          <Chapter n="01" className="text-ink/50">
            Manifesto
          </Chapter>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-ink/40 sm:block">
            DMANBRAY · Est. India
          </span>
        </div>

        {/* Large scrolling statement */}
        <p className="manifesto-text font-display text-[clamp(2rem,4.6vw,5rem)] font-bold leading-[1.04] tracking-[-0.045em] text-ink lg:max-w-[85%]">
          DMANBRAY is a technology company with many engines. We teach. We connect talent to work.
          We build our own products. We engineer software for others. And we experiment with AI at
          the edge of what's possible — each part making the others stronger.
        </p>

        {/* Bottom: brand mark + stat strip */}
        <div className="mt-20 grid items-end gap-10 border-t border-ink/10 pt-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <img
              src={brandMark}
              alt=""
              aria-hidden="true"
              className="h-20 w-20 rounded-2xl object-contain shadow-[0_12px_40px_-10px_rgba(0,0,0,0.25)] sm:h-24 sm:w-24"
            />
          </div>
          <div className="flex flex-wrap gap-10 lg:col-span-9">
            {[
              { value: "5", suffix: "", label: "Engines driving one universe" },
              { value: "50", suffix: "+", label: "Products shipped" },
              { value: "100", suffix: "%", label: "Client satisfaction" },
            ].map((s) => (
              <div key={s.label}>
                <span className="block font-display text-[clamp(2.8rem,5vw,4.5rem)] font-bold leading-none tracking-[-0.055em] text-ink">
                  {s.value}
                  <span className="text-brand">{s.suffix}</span>
                </span>
                <span className="mt-1.5 block font-mono text-[11px] uppercase tracking-[0.18em] text-ink/50">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════ 03 · ECOSYSTEM (vertical stack) ═══════════════════ */
// Each unit gets its own surface so no two panels look alike
const panelTheme = {
  learn: { bg: "#111113", fg: "#efebe4", muted: "rgba(239,235,228,0.6)", accent: "#7aa2ff", motif: "#7aa2ff" },
  work: { bg: "#efebe4", fg: "#0b0b0c", muted: "rgba(11,11,12,0.6)", accent: "#0f9e6e", motif: "#14b37e" },
  products: { bg: "#0e1a3a", fg: "#ffffff", muted: "rgba(255,255,255,0.65)", accent: "#6d8dff", motif: "#6d8dff" },
  studio: { bg: "#070708", fg: "#efebe4", muted: "rgba(239,235,228,0.6)", accent: "#ff7a59", motif: "#ff7a59" },
  labs: { bg: "#e2ddd3", fg: "#0b0b0c", muted: "rgba(11,11,12,0.6)", accent: "#6d3dff", motif: "#7c4dff" },
};

const EcoPanel = ({ v, i }) => {
  const t = panelTheme[v.id];
  const flip = i % 2 === 1;
  return (
    <article
      className="eco-panel relative flex min-h-[100svh] w-full flex-col overflow-hidden"
      style={{ background: t.bg, color: t.fg }}
    >
      <div className="container-site relative flex h-full flex-1 flex-col pb-10 pt-20 lg:pt-24">
        <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: t.muted }}>
          <span>
            <span style={{ color: t.accent }}>{v.index}</span> / 05 — {v.label}
          </span>
          <span className="hidden sm:inline">DMANBRAY {v.name}</span>
        </div>

        <div className="grid flex-1 items-center gap-8 py-8 lg:grid-cols-12">
          <div className={`lg:col-span-6 ${flip ? "lg:order-2 lg:col-start-7" : ""}`}>
            <h3 className="font-display text-[clamp(4.5rem,15vw,15rem)] font-bold leading-[0.8] tracking-[-0.065em]">
              {v.name}
              <span style={{ color: t.accent }}>.</span>
            </h3>
            <p className="mt-6 max-w-md font-display text-[clamp(1.4rem,2.2vw,2.1rem)] font-medium leading-[1.1] tracking-[-0.03em]">
              {v.headline}
            </p>
          </div>
          <div className={`relative aspect-[4/3] w-full max-w-[560px] lg:col-span-5 ${flip ? "lg:order-1 lg:col-start-1" : "lg:col-start-8 lg:justify-self-end"}`}>
            <EcosystemMotif motif={v.motif} color={t.motif} />
          </div>
        </div>

        <div className="grid gap-6 border-t pt-6 lg:grid-cols-12" style={{ borderColor: t.muted.replace(/[\d.]+\)$/, "0.25)") }}>
          <p className="max-w-lg text-[15px] leading-relaxed lg:col-span-5" style={{ color: t.muted }}>
            {v.description}
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em] lg:col-span-5">
            {v.focus.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="h-1 w-1" style={{ background: t.accent }} />
                {f}
              </li>
            ))}
          </ul>
          <Link to={v.link} className="group flex items-center gap-2 text-sm font-semibold lg:col-span-2 lg:justify-self-end" data-cursor="Explore">
            <span className="roll">
              <span>Explore {v.name}</span>
              <span aria-hidden="true">Explore {v.name}</span>
            </span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
          </Link>
        </div>
      </div>
    </article>
  );
};

const EcosystemSection = () => {
  const root = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      // Vertical progress bar only — no opacity-0 risk on panels
      ScrollTrigger.create({
        trigger: root.current,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => gsap.set(".eco-progress", { scaleY: self.progress }),
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} id="ecosystem" className="relative z-10 bg-ink">
      {/* Intro banner */}
      <div className="container-site py-20 lg:py-28">
        <Chapter n="02" className="mb-10 text-fog-400">
          The ecosystem
        </Chapter>
        <h2 className="font-display text-[clamp(3.5rem,9vw,10rem)] font-bold leading-[0.85] tracking-[-0.06em] text-paper">
          Five units.
          <br />
          <span className="text-stroke">One</span> universe.
        </h2>
        <p className="mt-8 max-w-md text-[15px] leading-relaxed text-fog-300">
          Learning feeds talent. Talent powers our studio. The studio builds our products. Labs
          pushes all of it forward.
        </p>
        <div className="mt-10 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-fog-400">
          Keep scrolling <span className="inline-block h-px w-16 bg-fog-500" /> ↓
        </div>
      </div>

      {/* Stacked vertical panels */}
      <div className="relative">
        {/* Thin vertical progress bar on the left edge */}
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 hidden w-[3px] bg-white/10 lg:block">
          <div className="eco-progress h-full origin-top scale-y-0 bg-brand" />
        </div>

        {ecosystem.map((v, i) => (
          <EcoPanel key={v.id} v={v} i={i} />
        ))}
      </div>
    </section>
  );
};

/* ═══════════════════ 04 · SELECTED WORK (hover index) ═══════════════════ */
const WorkSection = () => {
  const root = useRef(null);
  const previewRef = useRef(null);
  const [active, setActive] = useState(null);
  const moveRef = useRef(null);

  useGSAP(
    () => {
      const release = applyScrollAnimations(root.current);
      const el = previewRef.current;
      if (!el) return release;
      gsap.set(el, { xPercent: -50, yPercent: -50 });
      const xTo = gsap.quickTo(el, "x", { duration: 0.7, ease: "power3.out" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.7, ease: "power3.out" });
      const rTo = gsap.quickTo(el, "rotate", { duration: 0.9, ease: "power3.out" });
      let lastX = 0;
      moveRef.current = (e) => {
        const rect = root.current.getBoundingClientRect();
        xTo(e.clientX - rect.left);
        yTo(e.clientY - rect.top);
        rTo(gsap.utils.clamp(-12, 12, (e.clientX - lastX) * 0.6));
        lastX = e.clientX;
      };
      return release;
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="relative z-10 bg-ink py-section"
      onPointerMove={(e) => moveRef.current?.(e)}
    >
      <div className="container-site">
        <div className="mb-14 grid gap-8 lg:mb-20 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Chapter n="03" className="mb-8 text-fog-400">
              Selected work
            </Chapter>
            <h2 data-split="chars" className="font-display text-[clamp(3rem,8vw,8.5rem)] font-bold leading-[0.85] tracking-[-0.06em] text-paper">
              Products in production.
            </h2>
          </div>
          <p data-reveal className="max-w-sm text-[15px] leading-relaxed text-fog-400 lg:col-span-4">
            Platforms we've designed, engineered and shipped for education, commerce, hospitality and
            AI. Hover to preview, click to read the case study.
          </p>
        </div>

        <ul className="border-t border-white/10" onMouseLeave={() => setActive(null)}>
          {projects.map((p, i) => (
            <li key={p.id} data-reveal className="border-b border-white/10">
              <Link
                to={`/projects/${p.id}`}
                onMouseEnter={() => setActive(i)}
                data-cursor="View"
                className={`group grid grid-cols-12 items-center gap-4 py-6 transition-opacity duration-500 sm:py-8 ${active !== null && active !== i ? "opacity-30" : "opacity-100"
                  }`}
              >
                <span className="col-span-1 font-mono text-xs text-fog-500">{String(i + 1).padStart(2, "0")}</span>
                <span className="col-span-11 font-display text-[clamp(1.75rem,4.4vw,4.25rem)] font-semibold leading-none tracking-[-0.045em] text-paper transition-transform duration-700 ease-out-expo group-hover:translate-x-4 lg:col-span-6">
                  {p.title}
                </span>
                <span className="col-span-6 col-start-2 font-mono text-[11px] uppercase tracking-[0.18em] text-fog-400 lg:col-span-2 lg:col-start-auto">
                  <span className="mr-2 inline-block h-1.5 w-1.5" style={{ background: p.color }} />
                  {p.category}
                </span>
                <span className="col-span-5 hidden text-right text-sm text-fog-500 lg:col-span-3 lg:block">
                  {p.technologies.slice(0, 3).join(" · ")}
                </span>
                {/* Inline preview on touch layouts */}
                <span className="col-span-11 col-start-2 mt-2 block aspect-[16/9] overflow-hidden rounded-sm lg:hidden">
                  <ProductVisual project={p} />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div data-reveal className="mt-12 flex justify-end">
          <Link to="/projects" className="group flex items-center gap-2 text-sm font-medium text-paper">
            <span className="roll">
              <span>All case studies</span>
              <span aria-hidden="true">All case studies</span>
            </span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
          </Link>
        </div>
      </div>

      {/* Floating preview that follows the cursor (desktop) */}
      <div
        ref={previewRef}
        className="pointer-events-none absolute left-0 top-0 z-20 hidden h-[260px] w-[400px] lg:block"
        aria-hidden="true"
      >
        <div
          className={`h-full w-full overflow-hidden rounded-sm shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] transition-[clip-path] duration-700 ease-out-expo ${active === null ? "[clip-path:inset(50%_50%_50%_50%)]" : "[clip-path:inset(0%_0%_0%_0%)]"
            }`}
        >
          {projects.map((p, i) => (
            <div key={p.id} className={`absolute inset-0 transition-opacity duration-300 ${active === i ? "opacity-100" : "opacity-0"}`}>
              <ProductVisual project={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════ 05 · CAPABILITIES (accordion) ═══════════════════ */
const CapabilitiesSection = () => {
  const root = useRef(null);
  const [open, setOpen] = useState(0);
  useGSAP(() => applyScrollAnimations(root.current), { scope: root });

  return (
    <section ref={root} className="relative z-10 bg-paper py-section text-ink">
      <div className="container-site grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <Chapter n="04" className="mb-8 text-ink/60">
              Capabilities
            </Chapter>
            <h2 data-split="words" className="font-display text-display-xl font-bold">
              What our studio builds.
            </h2>
            <p data-reveal className="mt-6 max-w-sm text-[15px] leading-relaxed text-ink/60">
              Eight disciplines, one team — from the first wireframe to the infrastructure it runs on.
            </p>
            <Link data-reveal to="/services" className="btn mt-8 bg-ink text-paper hover:bg-brand">
              All services <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-8">
          {services.map((s, i) => {
            const isOpen = open === i;
            const Icon = s.icon;
            return (
              <div key={s.id} data-reveal className="border-t border-ink/15 last:border-b">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center gap-4 py-6 text-left sm:gap-8 sm:py-7"
                >
                  <span className="w-8 font-mono text-xs text-ink/40">{String(i + 1).padStart(2, "0")}</span>
                  <span
                    className={`flex-1 font-display text-[clamp(1.6rem,3.2vw,3rem)] font-semibold leading-none tracking-[-0.04em] transition-colors duration-300 ${isOpen ? "text-brand" : "group-hover:text-brand"
                      }`}
                  >
                    {s.title}
                  </span>
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ease-out-expo ${isOpen ? "rotate-45 border-brand bg-brand text-white" : "border-ink/20"
                      }`}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-6 pb-8 pl-12 sm:grid-cols-12 sm:pl-16">
                        <div className="sm:col-span-7">
                          <p className="text-[15px] leading-relaxed text-ink/70">{s.fullDescription}</p>
                          <div className="mt-5 flex flex-wrap gap-2">
                            {s.technologies.map((t) => (
                              <span key={t} className="rounded-full border border-ink/15 px-3 py-1 font-mono text-[11px] text-ink/70">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                        <ul className="space-y-2 text-sm text-ink/70 sm:col-span-5">
                          {s.features.slice(0, 5).map((f) => (
                            <li key={f} className="flex items-center gap-2.5">
                              <Icon className="h-3.5 w-3.5 text-brand" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════ 06 · TECHNOLOGY ═══════════════════ */
const techCategories = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "database", label: "Data" },
  { key: "mobile", label: "Mobile" },
  { key: "ai", label: "AI & ML" },
  { key: "infrastructure", label: "Cloud" },
];

const TechnologySection = () => {
  const root = useRef(null);

  useGSAP(
    () => {
      const release = applyScrollAnimations(root.current);
      if (prefersReducedMotion()) return release;
      // Two marquee rows in opposite directions; scroll speed boosts them
      const rows = gsap.utils.toArray(".tech-row", root.current).map((row, i) => {
        const t = gsap.fromTo(row, { xPercent: i % 2 ? -50 : 0 }, { xPercent: i % 2 ? 0 : -50, duration: 60, ease: "none", repeat: -1 });
        t.totalTime(t.duration() * 50); // room to play backwards
        return t;
      });
      ScrollTrigger.create({
        trigger: root.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const boost = 1 + Math.min(Math.abs(self.getVelocity()) / 250, 6);
          rows.forEach((t) =>
            gsap.timeline({ overwrite: true })
              .to(t, { timeScale: boost * self.direction, duration: 0.25 })
              .to(t, { timeScale: self.direction, duration: 1.4 })
          );
        },
      });
      return release;
    },
    { scope: root }
  );

  const names = Object.values(technologies).flat().map((t) => t.name);
  const half = Math.ceil(names.length / 2);
  const rowsData = [names.slice(0, half), names.slice(half)];

  return (
    <section ref={root} className="relative z-10 overflow-hidden bg-ink py-section">
      <div className="container-site mb-14 grid gap-8 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <Chapter n="05" className="mb-8 text-fog-400">
            Technology
          </Chapter>
          <h2 data-split="words" className="font-display text-display-xl font-bold text-paper">
            Engineered on a modern stack.
          </h2>
        </div>
        <p data-reveal className="max-w-sm text-[15px] leading-relaxed text-fog-400 lg:col-span-4 lg:col-start-9">
          Production-tested frameworks, cloud infrastructure, AI models and databases powering
          everything we ship.
        </p>
      </div>

      <div className="space-y-2 py-6" aria-label={`Technologies: ${names.join(", ")}`}>
        {rowsData.map((row, r) => (
          <div key={r} className="flex w-max" aria-hidden="true">
            <div className="tech-row flex w-max">
              {[...row, ...row].map((n, i) => (
                <span
                  key={`${n}-${i}`}
                  className={`flex items-center whitespace-nowrap px-5 font-display text-[clamp(2.5rem,6.5vw,6.5rem)] font-bold leading-[1.05] tracking-[-0.05em] ${r % 2 ? "text-stroke" : "text-paper"
                    }`}
                >
                  {n}
                  <span className="ml-10 inline-block h-3 w-3 bg-brand" />
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Spec sheet */}
      <div className="container-site mt-14">
        <div className="grid grid-cols-2 border-l border-t border-white/10 sm:grid-cols-3 lg:grid-cols-6">
          {techCategories.map((cat, i) => (
            <div key={cat.key} data-reveal data-delay={i * 0.05} className="border-b border-r border-white/10 p-5 sm:p-6">
              <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-light">
                {String(i + 1).padStart(2, "0")} · {cat.label}
              </p>
              <ul className="space-y-2">
                {technologies[cat.key].map((t) => (
                  <li key={t.name} className="flex items-center gap-2 text-sm text-fog-200">
                    <span className="h-1.5 w-1.5 shrink-0" style={{ background: t.color }} />
                    {t.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════ 07 · NUMBERS ═══════════════════ */
const NumbersSection = () => {
  const root = useRef(null);
  const stats = [
    { label: "Completed projects", value: "50+" },
    { label: "Client satisfaction", value: "100%" },
    { label: "System reliability", value: "99.9%" },
    { label: "Technical support", value: "24/7" },
  ];

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.utils.toArray(".stat-value", root.current).forEach((el) => {
        const raw = el.dataset.value;
        const m = raw.match(/^([\d.]+)(.*)$/);
        if (!m || raw.includes("/")) return;
        const decimals = (m[1].split(".")[1] || "").length;
        const obj = { v: 0 };
        gsap.to(obj, {
          v: parseFloat(m[1]),
          duration: 2,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
          onUpdate: () => (el.textContent = `${obj.v.toFixed(decimals)}${m[2]}`),
        });
      });
      gsap.from(".stat", { yPercent: 40, opacity: 0, stagger: 0.08, duration: 1.4, scrollTrigger: { trigger: root.current, start: "top 85%" } });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative z-10 bg-brand text-white">
      <div className="container-site grid grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`stat border-white/25 py-12 sm:py-16 ${i % 2 === 0 ? "border-r pr-4" : "pl-4 sm:pl-8"} ${i < 2 ? "border-b lg:border-b-0" : ""} lg:border-r lg:px-8 lg:last:border-r-0 lg:first:pl-0`}
          >
            <span data-value={s.value} className="stat-value block font-display text-[clamp(3rem,7vw,7rem)] font-bold leading-none tracking-[-0.06em]">
              {s.value}
            </span>
            <span className="mt-3 block font-mono text-[11px] uppercase tracking-[0.2em] text-white/70">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ═══════════════════ 08 · PROCESS (pinned stepper) ═══════════════════ */
const ProcessSection = () => {
  const root = useRef(null);
  const [step, setStep] = useState(0);

  useGSAP(
    () => {
      const release = applyScrollAnimations(root.current);
      const mm = gsap.matchMedia();
      mm.add(`${DESKTOP} and (prefers-reduced-motion: no-preference)`, () => {
        ScrollTrigger.create({
          trigger: root.current,
          start: "top top",
          end: `+=${processSteps.length * 55}%`,
          pin: true,
          scrub: true,
          onUpdate: (self) => {
            setStep(Math.min(processSteps.length - 1, Math.floor(self.progress * processSteps.length)));
            gsap.set(".process-bar", { scaleY: self.progress });
          },
        });
      });
      return () => {
        release();
        mm.revert();
      };
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative z-10 bg-ink-950 lg:h-[100svh]">
      <div className="container-site grid h-full gap-12 py-section lg:grid-cols-12 lg:items-center lg:py-0">
        <div className="lg:col-span-5">
          <Chapter n="06" className="mb-8 text-fog-400">
            How we execute
          </Chapter>
          <h2 data-split="words" className="font-display text-display-lg font-bold text-paper">
            From problem to production.
          </h2>
          {/* Giant step counter (desktop) */}
          <div className="mt-10 hidden h-[clamp(8rem,16vw,15rem)] overflow-hidden lg:block" aria-hidden="true">
            <div
              className="transition-transform duration-700 ease-out-expo"
              style={{ transform: `translateY(-${(step * 100) / processSteps.length}%)` }}
            >
              {processSteps.map((s) => (
                <div key={s.number} className="h-[clamp(8rem,16vw,15rem)] font-display text-[clamp(8rem,16vw,15rem)] font-bold leading-[1] tracking-[-0.07em] text-brand">
                  {s.number}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative lg:col-span-6 lg:col-start-7">
          <span className="absolute bottom-0 left-0 top-0 hidden w-px bg-white/10 lg:block" />
          <span className="process-bar absolute bottom-0 left-0 top-0 hidden w-px origin-top scale-y-0 bg-brand lg:block" />
          <ol className="space-y-2 lg:pl-10">
            {processSteps.map((s, i) => {
              const isActive = step === i;
              return (
                <li
                  key={s.number}
                  className={`border-b border-white/10 py-5 transition-opacity duration-500 lg:py-4 ${isActive ? "lg:opacity-100" : "lg:opacity-30"
                    }`}
                >
                  <div className="flex items-baseline gap-5">
                    <span className="font-mono text-xs text-brand-light lg:hidden">{s.number}</span>
                    <h3 className="font-display text-[clamp(1.75rem,3vw,2.75rem)] font-semibold leading-none tracking-[-0.04em] text-paper">
                      {s.title}
                    </h3>
                  </div>
                  <p
                    className={`mt-2 max-w-md text-[15px] leading-relaxed text-fog-400 transition-all duration-500 lg:ml-0 ${isActive ? "lg:max-h-20 lg:opacity-100" : "lg:max-h-0 lg:overflow-hidden lg:opacity-0"
                      }`}
                  >
                    {s.description}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════ 09 · FOUNDERS ═══════════════════ */
const founderConfig = [
  { portrait: founder1Img, objectPosition: "center 16%", badge: "CEO" },
  { portrait: founder2Img, objectPosition: "center 12%", badge: "CTO" },
  { portrait: founder3Img, objectPosition: "center 10%", badge: "COO" },
];

const FoundersSection = () => {
  const root = useRef(null);
  useGSAP(() => applyScrollAnimations(root.current), { scope: root });

  return (
    <section ref={root} className="relative z-10 bg-paper py-section text-ink">
      <div className="container-site">
        <div className="mb-16 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Chapter n="07" className="mb-8 text-ink/60">
              Leadership
            </Chapter>
            <h2 data-split="chars" className="font-display text-[clamp(3rem,8vw,8.5rem)] font-bold leading-[0.85] tracking-[-0.06em]">
              The people behind the universe.
            </h2>
          </div>
          <p data-reveal className="max-w-sm text-[15px] leading-relaxed text-ink/60 lg:col-span-4">
            Three founders steering engineering, product and operations across every DMANBRAY unit.
          </p>
        </div>

        <div className="grid items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {founders.map((founder, idx) => {
            const c = founderConfig[idx] || {};
            return (
              <div key={founder.id} data-reveal data-delay={idx * 0.08} className="w-full">
                <FounderCard
                  founder={founder}
                  portrait={c.portrait}
                  objectPosition={c.objectPosition}
                  badge={c.badge}
                  index={idx}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════ 08 · TESTIMONIALS ═══════════════════ */
const TestimonialsSection = () => {
  const root = useRef(null);
  useGSAP(() => applyScrollAnimations(root.current), { scope: root });

  return (
    <section ref={root} className="relative z-10 overflow-hidden bg-ink py-section border-t border-white/10">
      <div className="grain pointer-events-none absolute inset-0" />
      <div className="container-site relative">
        <div className="mb-14 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Chapter n="08" className="mb-6 text-fog-400">
              Client Feedback
            </Chapter>
            <h2
              data-split="chars"
              className="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[0.9] tracking-[-0.05em] text-paper"
            >
              Trusted by builders.<br />
              <span className="text-brand-light">Proven in production.</span>
            </h2>
          </div>
          <div data-reveal className="flex flex-col gap-3 lg:col-span-4">
            <p className="text-[15px] leading-relaxed text-fog-400">
              What founders, engineering leads, and product innovators say about partnering with DMANBRAY.
            </p>
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1 text-xs font-medium text-brand-light">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-light animate-pulse" />
              <span>5.0 Client Satisfaction · 100% Delivery Reliability</span>
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={t.id}
              data-reveal
              data-delay={idx * 0.08}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:border-brand/40 hover:bg-white/[0.05] sm:p-8"
            >
              <div>
                {/* Header: Star Rating & Domain Tag */}
                <div className="flex items-center justify-between gap-4 pb-5 border-b border-white/5">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="rounded-full bg-white/5 px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider text-fog-400">
                    {t.tag}
                  </span>
                </div>

                {/* Quote Content */}
                <p className="mt-5 text-[15px] sm:text-[16px] leading-relaxed text-fog-200">
                  "{t.content}"
                </p>
              </div>

              {/* Footer: Author Info & Key Metric */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/5 pt-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand/30 bg-brand/15 font-display text-xs font-bold text-brand-light">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-semibold text-paper group-hover:text-brand-light transition-colors duration-200">
                      {t.name}
                    </h4>
                    <p className="text-xs text-fog-400">
                      {t.role} · <span className="text-fog-200">{t.company}</span>
                    </p>
                  </div>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1 text-right">
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-fog-500">Impact</span>
                  <span className="font-display text-xs font-semibold text-brand-light">{t.metric}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════ 09 · FINALE: careers + contact ═══════════════════ */
const FinaleSection = () => {
  const root = useRef(null);
  useGSAP(() => applyScrollAnimations(root.current), { scope: root });

  return (
    <section ref={root} className="relative z-10 overflow-hidden bg-ink py-section">
      <div className="grain pointer-events-none absolute inset-0" />
      <div className="container-site relative">
        <Chapter n="09" className="mb-10 text-fog-400">
          What's next
        </Chapter>
        <h2 className="font-display text-[clamp(3.4rem,10.5vw,11.5rem)] font-bold leading-[0.84] tracking-[-0.065em] text-paper">
          <span data-split="chars" className="block">Let's build</span>
          <span data-split="chars" data-delay="0.1" className="block lg:pl-[1.2em]">
            what comes <span className="text-brand-light">next.</span>
          </span>
        </h2>

        <div className="mt-16 grid gap-12 border-t border-white/10 pt-10 lg:grid-cols-12 lg:items-center">
          <div data-reveal className="lg:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-fog-500">Work with us</p>
            <p className="mt-3 max-w-xs text-lg leading-snug text-paper">
              Have a product, platform or idea? Tell us about it and an engineering lead will reach out.
            </p>
            <a href="mailto:contact@dmanbray.com" className="link-draw mt-4 inline-block text-fog-200 hover:text-paper">
              contact@dmanbray.com
            </a>
          </div>
          <div data-reveal data-delay="0.1" className="lg:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-fog-500">Careers</p>
            <p className="mt-3 max-w-xs text-lg leading-snug text-paper">
              We're always looking for builders — engineers, designers and educators who ship.
            </p>
            <Link to="/contact" className="group mt-4 inline-flex items-center gap-2 text-fog-200 hover:text-paper">
              <span className="link-draw">Introduce yourself</span>
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

/* ═══════════════════ HOME ═══════════════════ */
const Home = () => {
  return (
    <>
      <SEO />
      <HeroSection />
      <ManifestoSection />
      <EcosystemSection />
      <WorkSection />
      <CapabilitiesSection />
      <TechnologySection />
      <NumbersSection />
      <ProcessSection />
      <FoundersSection />
      <TestimonialsSection />
      <FinaleSection />
    </>
  );
};

export default Home;
