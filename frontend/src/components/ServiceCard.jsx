import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SpotlightCard } from "./Motion";

/* Service tile: icon, title, summary and stack, with a pointer spotlight.
   Links to the service's section on /services. `onClick` is still honoured. */
const ServiceCard = ({ service, index, onClick }) => {
  const IconComponent = service.icon;

  return (
    <SpotlightCard as={Link} to={`/services#${service.id}`} onClick={onClick} className="flex h-full flex-col p-6 sm:p-7">
      <div className="relative mb-8 flex items-start justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-brand-light">
          {IconComponent && <IconComponent className="h-5 w-5" strokeWidth={1.6} />}
        </span>
        <span className="font-mono text-xs text-fog-500">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3 className="relative text-lg font-semibold tracking-[-0.02em] text-white">{service.title}</h3>
      <p className="relative mt-2 flex-1 text-sm leading-relaxed text-fog-400">{service.shortDescription}</p>
      <div className="relative mt-6 flex items-center justify-between border-t border-white/[0.06] pt-4">
        <span className="truncate text-xs text-fog-500">{service.technologies.slice(0, 3).join(" · ")}</span>
        <ArrowUpRight className="h-4 w-4 shrink-0 text-fog-500 transition-all duration-500 group-hover/spot:rotate-45 group-hover/spot:text-white" />
      </div>
    </SpotlightCard>
  );
};

export default ServiceCard;
