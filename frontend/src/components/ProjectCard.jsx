import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ClipReveal, Reveal } from "./Motion";
import { ProductVisual } from "./Visuals";

/* Project tile: product visual with clip reveal, metadata beneath, in one card. */
const ProjectCard = ({ project, index = 0, aspect = "aspect-[16/10]" }) => {
  return (
    <Reveal delay={(index % 2) * 0.08} className="h-full">
      <Link
        to={`/projects/${project.id}`}
        className="group surface flex h-full flex-col overflow-hidden transition-colors duration-500 hover:border-white/20"
      >
        <div className={`relative overflow-hidden ${aspect}`}>
          <ClipReveal className="h-full w-full">
            <div className="h-full w-full transition-transform duration-[1.2s] ease-out-expo group-hover:scale-[1.04]">
              <ProductVisual project={project} />
            </div>
          </ClipReveal>
        </div>

        <div className="flex flex-1 items-start justify-between gap-6 p-6 sm:p-7">
          <div className="min-w-0">
            <div className="mb-3 flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.14em] text-fog-400">
              <span className="h-2 w-2 rounded-full" style={{ background: project.color }} />
              {project.category}
            </div>
            <h3 className="text-xl font-semibold tracking-[-0.03em] text-white sm:text-2xl">{project.title}</h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-fog-400">{project.shortDescription}</p>
          </div>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-fog-300 transition-all duration-500 ease-out-expo group-hover:rotate-45 group-hover:border-white group-hover:bg-white group-hover:text-ink">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
};

export default ProjectCard;
