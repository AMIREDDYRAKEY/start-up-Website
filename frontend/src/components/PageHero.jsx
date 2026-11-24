import React, { useRef } from "react";
import { gsap, SplitText, useGSAP, prefersReducedMotion } from "../lib/gsap";
import { whenIntroDone } from "./Preloader";

/* Inner-page hero: oversized left-aligned title split into characters,
   a mono meta strip, and the intro set in a narrow right-hand column. */
const PageHero = ({
  eyebrow,
  title,
  highlight,
  description,
  index = "",
  titleRight = null,
  descriptionBelow = false,
  children,
}) => {
  const root = useRef(null);

  useGSAP(
    (ctx, contextSafe) => {
      if (prefersReducedMotion()) return;
      gsap.set(".ph-inner", { autoAlpha: 0 });
      let alive = true;
      let off = () => { };
      document.fonts.ready.then(
        contextSafe(() => {
          if (!alive) return;
          const split = SplitText.create(".ph-line", { type: "chars", mask: "chars" });
          const tl = gsap.timeline({ paused: true, delay: 0.35 });
          tl.set(".ph-inner", { autoAlpha: 1 })
            .from(split.chars, { yPercent: 115, rotate: 6, stagger: 0.022, duration: 1.3, ease: "expo.out" })
            .from(".ph-rule", { scaleX: 0, transformOrigin: "left", duration: 1.4, ease: "expo.inOut" }, 0)
            .from(".ph-fade", { y: 24, opacity: 0, stagger: 0.08, duration: 1.1 }, 0.5);
          off = whenIntroDone(() => tl.play());
        })
      );
      return () => {
        alive = false;
        off();
      };
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative overflow-hidden bg-ink pb-16 pt-28 sm:pb-24 sm:pt-32">
      <div className="grain pointer-events-none absolute inset-0" />
      <div className="ph-inner container-site relative">
        <div className="ph-fade flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-fog-400">
          <span>
            {index && <span className="opacity-60">({index}) </span>}
            {eyebrow}
          </span>
          <span className="hidden sm:inline">DMANBRAY Innovations</span>
        </div>
        <div className="ph-rule mt-4 h-px w-full bg-white/15" />

        <div className="mt-12 grid items-center gap-8 sm:mt-16 lg:grid-cols-12">
          <div className={titleRight ? "lg:col-span-8" : "lg:col-span-12"}>
            <h1 className="font-display text-[clamp(3.2rem,9.5vw,10rem)] font-bold leading-[0.86] tracking-[-0.06em] text-paper">
              <span className="ph-line block">{title}</span>
              {highlight && <span className="ph-line block text-brand-light lg:pl-[1em]">{highlight}</span>}
            </h1>
          </div>
          {titleRight && (
            <div className="flex justify-start lg:col-span-4 lg:justify-end">
              <div className="ph-fade">{titleRight}</div>
            </div>
          )}
        </div>

        {description && descriptionBelow && (
          <p className="ph-fade mt-8 max-w-3xl text-lead text-fog-300 sm:mt-10">{description}</p>
        )}

        {(description || children) && !descriptionBelow && (
          <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-12">
            {description && (
              <p className="ph-fade max-w-xl text-lead text-fog-300 lg:col-span-6 lg:col-start-7">{description}</p>
            )}
            {children && <div className="ph-fade lg:col-span-12">{children}</div>}
          </div>
        )}

        {children && descriptionBelow && (
          <div className="ph-fade mt-12">{children}</div>
        )}
      </div>
    </section>
  );
};

export default PageHero;
