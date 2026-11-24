import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Magnetic } from "./Motion";

/* Magnetic cobalt disc with a slowly rotating ring of text.
   Renders a router Link, or a plain anchor when `href` is given. */
const CircleCTA = ({ to, href, onClick, label = "Start a project", ring = "Start a project • Let's build • ", size = "h-36 w-36 sm:h-44 sm:w-44", className = "" }) => {
  const Comp = href ? "a" : Link;
  const linkProps = href ? { href, onClick } : { to, onClick };
  const id = `ring-${label.replace(/\W+/g, "-").toLowerCase()}`;

  return (
    <Magnetic strength={0.35} className={className}>
      <Comp
        {...linkProps}
        data-cursor="Go"
        className={`group relative flex items-center justify-center rounded-full bg-brand text-white transition-colors duration-500 hover:bg-paper hover:text-ink ${size}`}
      >
        <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full animate-[spin_18s_linear_infinite] motion-reduce:animate-none" aria-hidden="true">
          <defs>
            <path id={id} d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
          </defs>
          <text className="fill-current font-mono text-[11px] uppercase tracking-[0.32em]">
            <textPath href={`#${id}`}>{ring.repeat(2)}</textPath>
          </text>
        </svg>
        <span className="relative flex flex-col items-center gap-1">
          <ArrowUpRight className="h-7 w-7 transition-transform duration-500 ease-out-expo group-hover:rotate-45" />
          <span className="sr-only">{label}</span>
        </span>
      </Comp>
    </Magnetic>
  );
};

export default CircleCTA;
