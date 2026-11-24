import React, { useRef } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import SEO from "../components/SEO";
import { ProductVisual } from "../components/Visuals";
import { useGSAP } from "../lib/gsap";
import { applyScrollAnimations } from "../lib/animations";
import { projects } from "../data/siteData";

const Label = ({ children, className = "" }) => (
  <p className={`font-mono text-[11px] uppercase tracking-[0.2em] ${className}`}>{children}</p>
);

const ProjectDetails = () => {
  const { id } = useParams();
  const root = useRef(null);
  const index = projects.findIndex((p) => p.id === id);
  const project = projects[index];

  useGSAP(() => (project ? applyScrollAnimations(root.current) : undefined), { scope: root, dependencies: [id] });

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const next = projects[(index + 1) % projects.length];

  const sections = [
    { title: "Overview", content: project.overview },
    { title: "The problem", content: project.problem },
    { title: "The solution", content: project.solution },
    project.architecture && { title: "Architecture", content: project.architecture },
  ].filter(Boolean);

  const meta = [
    { label: "Category", value: project.category },
    project.client && { label: "Client", value: project.client },
    project.timeline && { label: "Timeline", value: project.timeline },
    { label: "Stack", value: project.technologies.slice(0, 3).join(" · ") },
    { label: "Case", value: `${String(index + 1).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}` },
  ].filter(Boolean);

  return (
    <div ref={root}>
      <SEO
        title={`${project.title} | DMANBRAY Innovations`}
        description={project.shortDescription}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink pb-14 pt-28 sm:pt-32">
        <div className="grain pointer-events-none absolute inset-0" />
        <div className="container-site relative">
          <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-fog-400">
            <Link to="/projects" className="group flex items-center gap-2 hover:text-paper">
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
              All projects
            </Link>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2" style={{ background: project.color }} />
              {project.category}
            </span>
          </div>
          <div className="mt-4 h-px w-full bg-white/15" />

          <h1 data-split="chars" className="mt-12 max-w-[14ch] font-display text-[clamp(3rem,9vw,9.5rem)] font-bold leading-[0.86] tracking-[-0.06em] text-paper sm:mt-16">
            {project.title}
          </h1>

          <div className="mt-12 grid gap-10 lg:grid-cols-12">
            <p data-reveal className="max-w-xl text-lead text-fog-300 lg:col-span-6">
              {project.shortDescription}
            </p>
            <dl data-reveal className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4 lg:col-span-6">
              {meta.map((m) => (
                <div key={m.label} className="border-t border-white/15 pt-3">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-fog-500">{m.label}</dt>
                  <dd className="mt-1.5 text-sm text-paper">{m.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Full-bleed visual on the project's colour */}
      <section style={{ background: project.color }} className="py-10 sm:py-16">
        <div className="container-site">
          <div data-clip className="aspect-[16/10] overflow-hidden rounded-sm shadow-[0_50px_100px_-30px_rgba(0,0,0,0.6)] sm:aspect-[21/10]">
            <div className="h-full w-full">
              <ProductVisual project={project} />
            </div>
          </div>
        </div>
      </section>

      {/* Narrative */}
      <section className="bg-paper py-section text-ink">
        <div className="container-site">
          {sections.map((sec, i) => (
            <div key={sec.title} data-reveal className="grid gap-6 border-t border-ink/15 py-10 lg:grid-cols-12 lg:py-14">
              <span className="font-mono text-xs text-brand lg:col-span-1">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-none tracking-[-0.045em] lg:col-span-4">
                {sec.title}
              </h2>
              <p className="max-w-2xl text-lead text-ink/70 lg:col-span-6 lg:col-start-7">{sec.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features + challenges */}
      <section className="bg-ink py-section">
        <div className="container-site grid gap-16 lg:grid-cols-12">
          {project.features && (
            <div className="lg:col-span-7">
              <Label className="mb-8 text-fog-400">Key features</Label>
              <ul className="grid border-l border-t border-white/10 sm:grid-cols-2">
                {project.features.map((feat, i) => (
                  <li key={feat} data-reveal data-delay={(i % 2) * 0.05} className="border-b border-r border-white/10 p-5">
                    <span className="font-mono text-[10px] text-fog-500">{String(i + 1).padStart(2, "0")}</span>
                    <p className="mt-3 text-[15px] text-paper">{feat}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {project.challenges && (
            <div className="lg:col-span-4 lg:col-start-9">
              <Label className="mb-8 text-fog-400">Engineering challenges</Label>
              <ol className="space-y-8">
                {project.challenges.map((c, i) => (
                  <li key={c} data-reveal className="flex gap-5">
                    <span className="font-display text-4xl font-bold leading-none tracking-[-0.05em]" style={{ color: project.color }}>
                      {i + 1}
                    </span>
                    <span className="pt-1 text-lg leading-snug text-paper">{c}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-10 flex flex-wrap gap-2 border-t border-white/10 pt-6">
                {project.technologies.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Outcome */}
      {project.outcome && (
        <section className="bg-brand py-section text-white">
          <div className="container-site grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Label className="mb-8 text-white/70">Outcome</Label>
              <p data-split="lines" className="font-display text-[clamp(1.9rem,3.6vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.04em]">
                {project.outcome}
              </p>
            </div>
            <div className="flex lg:col-span-4 lg:justify-end">
              <Link to="/contact" data-cursor="Go" className="flex h-36 w-36 items-center justify-center rounded-full bg-white text-center text-sm font-semibold text-ink transition-colors duration-500 hover:bg-ink hover:text-white sm:h-44 sm:w-44">
                Build something
                <br />
                similar ↗
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Next project */}
      <section className="bg-ink">
        <Link to={`/projects/${next.id}`} data-cursor="Next" className="group block">
          <div className="container-site py-section">
            <Label className="mb-6 text-fog-400">Next case study →</Label>
            <div className="flex items-end justify-between gap-8">
              <h2 className="font-display text-[clamp(2.75rem,8vw,8.5rem)] font-bold leading-[0.86] tracking-[-0.06em] text-paper transition-colors duration-500 group-hover:text-brand-light">
                {next.title}
              </h2>
              <span className="mb-2 hidden h-20 w-20 shrink-0 items-center justify-center rounded-full border border-white/20 text-paper transition-all duration-500 ease-out-expo group-hover:rotate-45 group-hover:border-brand group-hover:bg-brand sm:flex">
                <ArrowUpRight className="h-7 w-7" />
              </span>
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default ProjectDetails;
