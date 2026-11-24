import React, { useEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion } from "../lib/gsap";

/* Desktop-only cursor: a dot plus a trailing ring. Elements with
   `data-cursor="Label"` expand the ring and show the label;
   any link or button gently enlarges it. */
const Cursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [label, setLabel] = useState("");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine || prefersReducedMotion()) return;
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, opacity: 0 });

    const dotX = gsap.quickTo(dot, "x", { duration: 0.15, ease: "power3.out" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.15, ease: "power3.out" });
    const ringX = gsap.quickTo(ring, "x", { duration: 0.6, ease: "power3.out" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.6, ease: "power3.out" });

    const onMove = (e) => {
      gsap.to([dot, ring], { opacity: 1, duration: 0.3, overwrite: "auto" });
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);

      const target = e.target.closest?.("[data-cursor], a, button, label, input, textarea");
      const text = target?.getAttribute?.("data-cursor") || "";
      setLabel(text);
      const interactive = Boolean(target);
      gsap.to(ring, {
        scale: text ? 3.2 : interactive ? 1.6 : 1,
        backgroundColor: text ? "rgba(47,75,255,0.95)" : "rgba(47,75,255,0)",
        borderColor: text ? "rgba(47,75,255,0)" : "rgba(239,235,228,0.5)",
        duration: 0.45,
        ease: "expo.out",
        overwrite: "auto",
      });
      gsap.to(dot, { scale: interactive ? 0 : 1, duration: 0.3, overwrite: "auto" });
    };
    const onLeave = () => gsap.to([dot, ring], { opacity: 0, duration: 0.3 });

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    document.documentElement.classList.add("has-cursor");
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      document.documentElement.classList.remove("has-cursor");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[10000] flex h-9 w-9 items-center justify-center rounded-full border"
        aria-hidden="true"
      >
        <span
          className={`whitespace-nowrap font-mono text-[4px] font-medium uppercase tracking-[0.12em] text-white transition-opacity duration-300 ${label ? "opacity-100" : "opacity-0"
            }`}
        >
          {label}
        </span>
      </div>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[10001] h-1.5 w-1.5 rounded-full bg-paper mix-blend-difference"
        aria-hidden="true"
      />
    </>
  );
};

export default Cursor;
