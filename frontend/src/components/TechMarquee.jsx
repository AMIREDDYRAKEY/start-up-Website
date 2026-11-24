import React from "react";

const techItems = [
  "React 19",
  "Node.js",
  "AI & Machine Learning",
  "Android",
  "AWS Cloud",
  "MongoDB",
  "Microservices",
  "SaaS",
  "Cybersecurity",
  "DevOps",
  "REST & GraphQL",
  "Web Applications",
];

/* Quiet logo-strip style marquee. Duplicated once so the loop is seamless. */
const TechMarquee = ({ items = techItems, className = "" }) => {
  const row = [...items, ...items];
  return (
    <div
      className={`mask-fade-x relative w-full select-none overflow-hidden ${className}`}
      aria-label={`Technologies: ${items.join(", ")}`}
    >
      <div className="flex w-max animate-marquee items-center gap-3 motion-reduce:animate-none hover:[animation-play-state:paused]">
        {row.map((name, idx) => (
          <span
            key={idx}
            aria-hidden="true"
            className="whitespace-nowrap rounded-full border border-white/[0.07] bg-white/[0.02] px-5 py-2.5 text-sm font-medium text-fog-300 transition-colors duration-300 hover:border-white/20 hover:text-white"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;
