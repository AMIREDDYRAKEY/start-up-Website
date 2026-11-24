import React, { createContext, useContext, useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, prefersReducedMotion } from "../lib/gsap";

const LenisContext = createContext({ current: null });

// Returns a ref holding the Lenis instance (null when smooth scroll is off)
export const useLenis = () => useContext(LenisContext);

/* Smooth scrolling driven by GSAP's ticker so ScrollTrigger stays in sync.
   Disabled for reduced-motion users and touch devices (native scroll is better there). */
const SmoothScroll = ({ children }) => {
  const lenisRef = useRef(null);

  // Late-loading fonts and images change layout; re-measure scroll triggers
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);
    window.addEventListener("load", refresh);
    return () => window.removeEventListener("load", refresh);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion() || window.matchMedia("(pointer: coarse)").matches) return;

    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    lenisRef.current = lenis;
    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <LenisContext.Provider value={lenisRef}>{children}</LenisContext.Provider>;
};

export default SmoothScroll;
