import React from "react";
import {
  Code2,
  Cpu,
  Smartphone,
  Cloud,
  Database,
  BrainCircuit,
  Zap,
  Layers,
  ShieldCheck,
  Server,
  Globe,
  Terminal,
} from "lucide-react";

const techItems = [
  { name: "React 19", icon: Code2, color: "text-[#d4af37]" },
  { name: "Node.js API", icon: Server, color: "text-emerald-400" },
  { name: "AI & Machine Learning", icon: BrainCircuit, color: "text-purple-400" },
  { name: "Android Native", icon: Smartphone, color: "text-blue-400" },
  { name: "AWS Cloud", icon: Cloud, color: "text-amber-400" },
  { name: "MongoDB Atlas", icon: Database, color: "text-emerald-500" },
  { name: "Microservices", icon: Cpu, color: "text-cyan-400" },
  { name: "Custom SaaS", icon: Zap, color: "text-[#d4af37]" },
  { name: "Cybersecurity", icon: ShieldCheck, color: "text-red-400" },
  { name: "DevOps & Docker", icon: Layers, color: "text-blue-500" },
  { name: "REST & GraphQL", icon: Terminal, color: "text-pink-400" },
  { name: "Web Application", icon: Globe, color: "text-[#d4af37]" },
];

const TechMarquee = () => {
  return (
    <div className="relative w-full overflow-hidden py-8 border-y border-[#47484c]/40 bg-[#121316] select-none">
      {/* Fade Gradients on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#121316] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#121316] to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap">
        {[...techItems, ...techItems].map((tech, idx) => {
          const Icon = tech.icon;
          return (
            <div
              key={idx}
              className="inline-flex items-center gap-2.5 mx-3 px-5 py-2.5 rounded-xl bg-[#1e2023] border border-[#47484c]/60 hover:border-[#d4af37]/60 transition-all duration-200 group cursor-pointer"
            >
              <Icon className={`w-4 h-4 ${tech.color} group-hover:scale-110 transition-transform duration-200`} />
              <span className="text-xs font-semibold text-charcoal-200 group-hover:text-white tracking-wide">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechMarquee;
