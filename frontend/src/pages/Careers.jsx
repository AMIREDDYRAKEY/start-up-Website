import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle, Briefcase, Sparkles, Code2, Users, Compass } from "lucide-react";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTA";
import { useGSAP } from "../lib/gsap";
import { applyScrollAnimations } from "../lib/animations";

const departments = ["All", "Engineering", "AI & Data", "Design", "Product"];

const roles = [
  {
    id: "fs-eng",
    title: "Senior Full Stack Engineer",
    dept: "Engineering",
    location: "Hyderabad / Remote",
    type: "Full-Time",
    experience: "3-6 Years",
    summary:
      "Architect and scale high-performance web applications using React 19, TypeScript, and modern microservices.",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Cloud"],
  },
  {
    id: "ai-eng",
    title: "AI / Machine Learning Engineer",
    dept: "AI & Data",
    location: "Hyderabad / Hybrid",
    type: "Full-Time",
    experience: "2-5 Years",
    summary:
      "Develop custom LLM workflows, autonomous AI agents, and production machine learning pipelines for our proprietary platforms.",
    tags: ["Python", "PyTorch", "LLM Agents", "Vector DBs", "FastAPI"],
  },
  {
    id: "lead-des",
    title: "Lead UI/UX Product Designer",
    dept: "Design",
    location: "Remote",
    type: "Full-Time",
    experience: "3-5 Years",
    summary:
      "Shape design systems, intuitive micro-interactions, and high-fidelity prototypes that define the future of our software products.",
    tags: ["Figma", "Design Systems", "Prototyping", "Design Ops"],
  },
  {
    id: "mobile-eng",
    title: "Mobile Applications Engineer",
    dept: "Engineering",
    location: "Hyderabad / Hybrid",
    type: "Full-Time",
    experience: "2-5 Years",
    summary:
      "Build fluid, resilient cross-platform mobile apps for millions of users with React Native and native Android integrations.",
    tags: ["React Native", "Android", "Kotlin", "State Management"],
  },
  {
    id: "devops-arch",
    title: "Cloud & DevOps Architect",
    dept: "Engineering",
    location: "Remote",
    type: "Full-Time",
    experience: "4-7 Years",
    summary:
      "Design resilient cloud infrastructure, automated CI/CD pipelines, and zero-trust security postures across global deployments.",
    tags: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
  },
  {
    id: "tech-pm",
    title: "Technical Product Manager",
    dept: "Product",
    location: "Hyderabad / Hybrid",
    type: "Full-Time",
    experience: "3-6 Years",
    summary:
      "Drive product roadmap execution, partner with cross-functional engineering teams, and deliver measurable outcomes for key platforms.",
    tags: ["Product Strategy", "Agile", "User Research", "Metrics"],
  },
];

const culturePrinciples = [
  {
    icon: Code2,
    num: "01",
    title: "Craftsmanship & Rigor",
    description:
      "We write modular, scalable, and test-driven code. We reject sloppy shortcuts and take pride in architectural elegance.",
  },
  {
    icon: Sparkles,
    num: "02",
    title: "High Agency & Autonomy",
    description:
      "We trust makers with real responsibility. You own your initiatives from architectural conception through production deployment.",
  },
  {
    icon: Users,
    num: "03",
    title: "Direct Leadership Mentorship",
    description:
      "Collaborate shoulder-to-shoulder with our founders and principal architects. No layers of bureaucratic red tape.",
  },
  {
    icon: Compass,
    num: "04",
    title: "Relentless Curiosity",
    description:
      "We encourage deep dives into cutting-edge technology: generative AI, distributed systems, and real-time interactive design.",
  },
];

const perks = [
  { title: "Competitive Package", desc: "Top-tier compensation structure with performance bonuses and equity opportunities." },
  { title: "Premium Hardware", desc: "Latest MacBook Pro or high-end workstation plus dual displays and ergonomic setup allowance." },
  { title: "Flexible Work Model", desc: "Hybrid and remote-friendly options with collaborative hubs designed for deep work." },
  { title: "Learning & Conference Budget", desc: "Generous annual stipend for courses, technical books, certifications, and global summits." },
  { title: "Comprehensive Health", desc: "Robust medical coverage for you and your dependents with wellness support programs." },
  { title: "Hackathons & Lab Time", desc: "Dedicated engineering cycles to incubate your own tools and contribute to open source." },
];

const Label = ({ children, className = "" }) => (
  <p className={`font-mono text-[11px] uppercase tracking-[0.2em] ${className}`}>{children}</p>
);

const Careers = () => {
  const root = useRef(null);
  const [selectedDept, setSelectedDept] = useState("All");

  useGSAP(() => applyScrollAnimations(root.current), { scope: root });

  const filteredRoles =
    selectedDept === "All" ? roles : roles.filter((r) => r.dept === selectedDept);

  return (
    <div ref={root}>
      <SEO
        title="Careers | DMANBRAY Innovations"
        description="Join DMANBRAY Innovations. Explore engineering, AI, product, and design roles shaping the future of digital software."
      />

      <PageHero
        index="05"
        eyebrow="Join the collective"
        title="Shape what's"
        highlight="next."
        description="We are building an independent ecosystem of high-impact digital products, proprietary platforms, and intelligent solutions. If you care deeply about your craft and relish tough technical challenges, you belong here."
      />

      {/* Culture & Values */}
      <section className="bg-paper py-section text-ink">
        <div className="container-site">
          <div className="mb-16 grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Label className="mb-6 text-ink/60">(01) How we work</Label>
              <h2
                data-split="chars"
                className="font-display text-[clamp(2.75rem,7vw,7rem)] font-bold leading-[0.88] tracking-[-0.055em]"
              >
                Principles of the craft.
              </h2>
            </div>
            <p data-reveal className="max-w-md text-lead text-ink/70 lg:col-span-4">
              Our culture is built around high autonomy, engineering curiosity, and uncompromised standards for digital quality.
            </p>
          </div>

          <div className="grid border-l border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-4">
            {culturePrinciples.map((c, idx) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.num}
                  data-reveal
                  data-delay={idx * 0.08}
                  className="group flex flex-col justify-between border-b border-r border-ink/15 p-6 transition-colors duration-500 hover:bg-ink hover:text-paper sm:p-8"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-brand transition-colors group-hover:text-brand-light">
                        {c.num}
                      </span>
                      <Icon className="h-5 w-5 text-ink/40 transition-colors group-hover:text-brand-light" />
                    </div>
                    <h3 className="mt-8 font-display text-2xl font-semibold tracking-[-0.035em]">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-[14px] leading-relaxed opacity-75">{c.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Roles Section */}
      <section id="open-roles" className="bg-ink py-section text-paper">
        <div className="container-site">
          <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Label className="mb-4 text-fog-400">(02) Open Positions</Label>
              <h2
                data-split="chars"
                className="font-display text-[clamp(2.75rem,7vw,6.5rem)] font-bold leading-[0.88] tracking-[-0.055em] text-paper"
              >
                Available opportunities.
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-fog-400">
                {filteredRoles.length} Open {filteredRoles.length === 1 ? "Role" : "Roles"}
              </span>
            </div>
          </div>

          {/* Department Filter Tabs */}
          <div className="mb-12 flex flex-wrap gap-2 border-b border-white/10 pb-6">
            {departments.map((dept) => {
              const active = selectedDept === dept;
              return (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`rounded-full px-5 py-2 text-xs font-mono uppercase tracking-[0.15em] transition-all duration-300 ${
                    active
                      ? "bg-white text-ink shadow-md"
                      : "border border-white/10 bg-white/5 text-fog-300 hover:border-white/30 hover:text-paper"
                  }`}
                >
                  {dept}
                </button>
              );
            })}
          </div>

          {/* Roles List */}
          <div className="space-y-4">
            {filteredRoles.map((role) => (
              <div
                key={role.id}
                data-reveal
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-500 hover:border-white/30 hover:bg-white/[0.05] sm:p-8"
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-2xl space-y-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-brand/20 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-brand-light">
                        {role.dept}
                      </span>
                      <span className="font-mono text-xs text-fog-400">{role.location}</span>
                      <span className="text-white/20">•</span>
                      <span className="font-mono text-xs text-fog-400">{role.type}</span>
                      <span className="text-white/20">•</span>
                      <span className="font-mono text-xs text-fog-400">{role.experience}</span>
                    </div>

                    <h3 className="font-display text-2xl font-bold tracking-[-0.03em] text-paper sm:text-3xl">
                      {role.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-fog-300">{role.summary}</p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {role.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-white/10 bg-black/40 px-2.5 py-1 font-mono text-[11px] text-fog-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex shrink-0 items-center gap-4 pt-4 lg:pt-0">
                    <a
                      href={`mailto:careers@dmanbray.com?subject=Application for ${encodeURIComponent(
                        role.title
                      )}`}
                      className="group/btn inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-transform duration-300 hover:scale-[1.03] hover:bg-paper"
                    >
                      <span>Apply Now</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Unsolicited pitch callout */}
          <div className="mt-14 rounded-2xl border border-dashed border-white/20 bg-white/[0.02] p-8 text-center sm:p-12">
            <h3 className="font-display text-2xl font-bold tracking-[-0.03em] text-paper sm:text-3xl">
              Don't see an exact match?
            </h3>
            <p className="mx-auto mt-3 max-w-lg text-sm text-fog-300">
              We always make room for brilliant problem solvers. Pitch us your skills, past projects, or portfolio directly.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:careers@dmanbray.com?subject=Spontaneous Application — DMANBRAY"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-brand-light hover:underline"
              >
                <span>Write to careers@dmanbray.com</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className="bg-paper-200 py-section text-ink">
        <div className="container-site">
          <div className="mb-14">
            <Label className="mb-4 text-ink/60">(03) Benefits & Wellbeing</Label>
            <h2
              data-split="chars"
              className="font-display text-[clamp(2.5rem,6.5vw,6rem)] font-bold leading-[0.9] tracking-[-0.05em]"
            >
              Engineered for your best work.
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {perks.map((p, i) => (
              <div
                key={p.title}
                data-reveal
                data-delay={i * 0.05}
                className="rounded-2xl border border-ink/10 bg-paper p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-[-0.03em]">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to build"
        highlight="with us?"
        description="Explore open positions or drop your portfolio in our inbox."
      />
    </div>
  );
};

export default Careers;
