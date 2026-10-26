import React from "react";
import { TechLogo } from "./TechLogos";

const techItems = [
  { name: "React 19", fallbackColor: "#61DAFB" },
  { name: "Next.js 15", fallbackColor: "#ffffff" },
  { name: "TypeScript", fallbackColor: "#3178C6" },
  { name: "Node.js", fallbackColor: "#339933" },
  { name: "Python / FastAPI", fallbackColor: "#009688" },
  { name: "OpenAI / GPT-4o", fallbackColor: "#10A37F" },
  { name: "Android (Kotlin)", fallbackColor: "#7F52FF" },
  { name: "Flutter", fallbackColor: "#02569B" },
  { name: "AWS Cloud", fallbackColor: "#FF9900" },
  { name: "Docker Containers", fallbackColor: "#2496ED" },
  { name: "Kubernetes (K8s)", fallbackColor: "#326CE5" },
  { name: "MongoDB Atlas", fallbackColor: "#47A248" },
  { name: "PostgreSQL", fallbackColor: "#4169E1" },
  { name: "Redis Cache", fallbackColor: "#DC382D" },
  { name: "GraphQL", fallbackColor: "#E10098" },
  { name: "Tailwind CSS", fallbackColor: "#06B6D4" },
];

const TechMarquee = () => {
  return (
    <div className="relative w-full overflow-hidden py-5 sm:py-6 border-y border-[#47484c]/30 bg-[#121316] select-none">
      {/* Fade Gradients on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-[#121316] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-[#121316] to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap">
        {[...techItems, ...techItems].map((tech, idx) => (
          <div
            key={idx}
            className="inline-flex items-center gap-2.5 mx-2.5 sm:mx-3 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-[#1e2023] border border-[#47484c]/50 hover:border-[#d4af37]/60 hover:bg-[#25282d] transition-all duration-300 group cursor-pointer shadow-sm"
          >
            <div className="w-4 h-4 flex-shrink-0 group-hover:scale-115 transition-transform duration-300">
              <TechLogo name={tech.name} fallbackColor={tech.fallbackColor} />
            </div>
            <span className="text-xs font-semibold text-charcoal-200 group-hover:text-white tracking-wide">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;
