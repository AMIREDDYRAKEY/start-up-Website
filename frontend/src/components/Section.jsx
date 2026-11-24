import React from "react";
import { Reveal, SplitText } from "./Motion";

/* Section heading: mono chapter label, oversized display title with the
   highlight in cobalt, and an optional intro. Left-aligned by default. */
const SectionHeader = ({ eyebrow, title, highlight, description, align = "left", className = "" }) => {
  const centered = align === "center";
  return (
    <div className={`${centered ? "mx-auto max-w-4xl text-center" : "grid gap-8 lg:grid-cols-12 lg:items-end"} ${className}`}>
      <div className={centered ? "" : "lg:col-span-8"}>
        {eyebrow && (
          <Reveal>
            <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.2em] text-fog-400">
              <span className="opacity-60">(—)</span> {eyebrow}
            </p>
          </Reveal>
        )}
        <h2 className="font-display text-[clamp(2.6rem,6vw,6rem)] font-bold leading-[0.9] tracking-[-0.055em] text-paper">
          <SplitText>{title}</SplitText>
          {highlight && (
            <>
              {" "}
              <SplitText wordClassName="text-brand-light" delay={0.12}>
                {highlight}
              </SplitText>
            </>
          )}
        </h2>
      </div>
      {description && (
        <Reveal delay={0.1} className={centered ? "" : "lg:col-span-4"}>
          <p className={`text-[15px] leading-relaxed text-fog-400 ${centered ? "mx-auto mt-6 max-w-2xl" : "max-w-sm"}`}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
};

export default SectionHeader;
