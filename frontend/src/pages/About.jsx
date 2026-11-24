import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SEO from "../components/SEO";
import FounderCard from "../components/FounderCard";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTA";
import { useGSAP } from "../lib/gsap";
import { applyScrollAnimations } from "../lib/animations";
import { founders, ecosystem } from "../data/siteData";
import founder1Img from "../assets/founder-1.png";
import founder2Img from "../assets/founder-2.jpg";
import founder3Img from "../assets/founder-3.png";
import brandMark from "../assets/dmanbray-3d-charcoal-gold.png";

const values = [
  {
    title: "Purpose-Driven",
    description:
      "Every product we engineer starts with a deep understanding of the real problem it solves.",
  },
  {
    title: "Clean Architecture",
    description:
      "Scalable, modular codebases designed to withstand growth and easy extensibility.",
  },
  {
    title: "User-Centered",
    description:
      "We build intuitive digital experiences that deliver real value to real people.",
  },
  {
    title: "Continuous Innovation",
    description:
      "Leveraging cutting-edge technologies like React 19, modern AI architectures, and cloud microservices.",
  },
  {
    title: "Enterprise Reliability",
    description:
      "High uptime, data security, robust authentication, and resilient server infrastructure.",
  },
  {
    title: "Scalable Growth",
    description:
      "Applications built to handle from 10 to 10,000,000 requests without architectural compromises.",
  },
];

const chapters = [
  {
    n: "01",
    title: "A pathway",
    body:
      "DMANBRAY began with a belief that technology should open doors — that the right skills, platforms and opportunities can transform a career and a business.",
  },
  {
    n: "02",
    title: "An engine",
    body:
      "That belief became a studio. We partner with ambitious founders and enterprises to turn complex ideas into robust software products, end to end.",
  },
  {
    n: "03",
    title: "An ecosystem",
    body:
      "Today the studio sits beside our learning platforms, talent network, proprietary products and AI lab — each one strengthening the others.",
  },
];

const founderConfig = [
  { portrait: founder1Img, objectPosition: "center 16%", badge: "CEO" },
  { portrait: founder2Img, objectPosition: "center 12%", badge: "CTO" },
  { portrait: founder3Img, objectPosition: "center 10%", badge: "COO" },
];

const Label = ({ children, className = "" }) => (
  <p className={`font-mono text-[11px] uppercase tracking-[0.2em] ${className}`}>{children}</p>
);

const About = () => {
  const root = useRef(null);
  useGSAP(() => applyScrollAnimations(root.current), { scope: root });

  return (
    <div ref={root}>
      <SEO
        title="About Us | DMANBRAY Innovations"
        description="Learn about DMANBRAY Innovations - our mission, vision, values and technological capabilities."
      />

      <PageHero
        index="02"
        eyebrow="About the company"
        title="Purpose &"
        highlight="precision."
        description="DMANBRAY Innovations is a high-growth technology company delivering end-to-end digital engineering. We partner with ambitious founders and enterprises to turn complex ideas into robust software products — and we build our own."
        descriptionBelow={true}
        titleRight={
          <div className="relative flex items-center justify-center">
            <div className="relative h-28 w-28 overflow-hidden rounded-full border border-white/20 bg-gradient-to-b from-white/10 to-black/60 p-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-sm sm:h-36 sm:w-36 lg:h-44 lg:w-44">
              <img
                src={brandMark}
                alt="DMANBRAY 3D brand monogram"
                className="h-full w-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
              />
            </div>
          </div>
        }
      />

      {/* Story chapters */}
      <section className="bg-paper py-section text-ink">
        <div className="container-site">
          <div className="mb-16 grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Label className="mb-8 text-ink/60">(01) Our story</Label>
              <h2 data-split="chars" className="font-display text-[clamp(3rem,8vw,8.5rem)] font-bold leading-[0.85] tracking-[-0.06em]">
                Three chapters.
              </h2>
            </div>
          </div>
          {chapters.map((c) => (
            <div key={c.n} data-reveal className="grid gap-6 border-t border-ink/15 py-10 lg:grid-cols-12 lg:items-baseline lg:py-14">
              <span className="font-display text-[clamp(4rem,9vw,9rem)] font-bold leading-[0.8] tracking-[-0.07em] text-brand lg:col-span-3">
                {c.n}
              </span>
              <h3 className="font-display text-[clamp(2rem,4vw,3.75rem)] font-semibold leading-none tracking-[-0.045em] lg:col-span-4">
                {c.title}
              </h3>
              <p className="max-w-lg text-lead text-ink/65 lg:col-span-5">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision & mission: split blocks */}
      <section className="grid lg:grid-cols-2">
        {[
          {
            label: "Our vision",
            text: "To be a premier global technology firm renowned for developing groundbreaking software products that accelerate human potential and business efficiency.",
            cls: "bg-ink-850 text-paper",
            muted: "text-fog-400",
          },
          {
            label: "Our mission",
            text: "To empower startups and established businesses with world-class engineering, elegant design, and intelligent automation that drives measurable success.",
            cls: "bg-brand text-white",
            muted: "text-white/70",
          },
        ].map((b) => (
          <div key={b.label} className={`flex min-h-[70svh] flex-col justify-between p-6 sm:p-12 lg:p-16 ${b.cls}`}>
            <Label className={b.muted}>{b.label}</Label>
            <p data-split="lines" className="mt-16 font-display text-[clamp(1.75rem,3vw,3rem)] font-semibold leading-[1.08] tracking-[-0.035em]">
              {b.text}
            </p>
          </div>
        ))}
      </section>

      {/* Ecosystem summary */}
      <section className="bg-ink py-section">
        <div className="container-site">
          <Label className="mb-8 text-fog-400">(02) What we're made of</Label>
          <h2 data-split="chars" className="mb-14 font-display text-[clamp(3rem,8vw,8.5rem)] font-bold leading-[0.85] tracking-[-0.06em] text-paper">
            Five engines.
          </h2>
          <ul className="border-t border-white/10">
            {ecosystem.map((v) => (
              <li key={v.id} data-reveal className="border-b border-white/10">
                <Link to={v.link} data-cursor="Explore" className="group grid grid-cols-12 items-center gap-4 py-6 sm:py-8">
                  <span className="col-span-2 font-mono text-xs sm:col-span-1" style={{ color: v.signal }}>
                    {v.index}
                  </span>
                  <span className="col-span-10 font-display text-[clamp(2rem,5vw,4.5rem)] font-bold leading-none tracking-[-0.05em] text-paper transition-transform duration-700 ease-out-expo group-hover:translate-x-4 sm:col-span-5">
                    {v.name}
                  </span>
                  <span className="col-span-12 text-sm text-fog-400 sm:col-span-5">
                    <span className="mb-1 block font-mono text-[11px] uppercase tracking-[0.18em] text-fog-500">{v.label}</span>
                    {v.headline}
                  </span>
                  <ArrowUpRight className="col-span-1 hidden h-6 w-6 justify-self-end text-fog-500 transition-all duration-500 group-hover:rotate-45 group-hover:text-paper sm:block" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Values */}
      <section className="bg-paper-200 py-section text-ink">
        <div className="container-site">
          <Label className="mb-8 text-ink/60">(03) Core principles</Label>
          <h2 data-split="chars" className="mb-14 font-display text-[clamp(3rem,8vw,8.5rem)] font-bold leading-[0.85] tracking-[-0.06em]">
            Values that guide us.
          </h2>
          <div className="grid border-l border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((val, idx) => (
              <div key={val.title} data-reveal data-delay={(idx % 3) * 0.06} className="group border-b border-r border-ink/15 p-6 transition-colors duration-500 hover:bg-ink hover:text-paper sm:p-10">
                <span className="font-mono text-xs text-brand transition-colors group-hover:text-brand-light">{String(idx + 1).padStart(2, "0")}</span>
                <h3 className="mt-12 font-display text-3xl font-semibold tracking-[-0.04em]">{val.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed opacity-70">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-paper py-section text-ink">
        <div className="container-site">
          <div className="mb-16 grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Label className="mb-8 text-ink/60">(04) Leadership</Label>
              <h2 data-split="chars" className="font-display text-[clamp(3rem,8vw,8.5rem)] font-bold leading-[0.85] tracking-[-0.06em]">
                Meet the founders.
              </h2>
            </div>
            <p data-reveal className="max-w-sm text-[15px] leading-relaxed text-ink/60 lg:col-span-4">
              The architects and technologists steering engineering innovation, product excellence, and
              long-term vision at DMANBRAY.
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

      <CTASection
        title="See the work"
        highlight="behind the words."
        description="Explore our services or get in touch with our team directly."
      />
    </div>
  );
};

export default About;
