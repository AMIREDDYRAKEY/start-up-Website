import React, { useEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion } from "../lib/gsap";

const SEEN_KEY = "dmanbray:intro-seen";
export const INTRO_EVENT = "dmanbray:intro-done";

const hasSeenIntro = () => {
  try {
    return sessionStorage.getItem(SEEN_KEY) === "1";
  } catch {
    return false;
  }
};

// Lets other components wait for the intro to finish before choreographing
export const whenIntroDone = (cb) => {
  if (window.__dmanbrayIntroDone) {
    cb();
    return () => {};
  }
  window.addEventListener(INTRO_EVENT, cb, { once: true });
  return () => window.removeEventListener(INTRO_EVENT, cb);
};

const finish = () => {
  window.__dmanbrayIntroDone = true;
  window.dispatchEvent(new Event(INTRO_EVENT));
};

/* Counter preloader: 000 → 100, the wordmark rises, then the curtain lifts.
   Once per session; skipped for reduced motion. */
const Preloader = ({ onFinish }) => {
  const [visible, setVisible] = useState(() => !hasSeenIntro() && !prefersReducedMotion());
  const rootRef = useRef(null);
  const countRef = useRef(null);

  useEffect(() => {
    if (!visible) {
      finish();
      onFinish?.();
      return;
    }
    const counter = { v: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        try {
          sessionStorage.setItem(SEEN_KEY, "1");
        } catch {
          /* storage unavailable — intro will simply replay */
        }
        setVisible(false);
        onFinish?.();
      },
    });
    tl.to(counter, {
      v: 100,
      duration: 1.6,
      ease: "power2.inOut",
      onUpdate: () => {
        if (countRef.current) countRef.current.textContent = String(Math.round(counter.v)).padStart(3, "0");
      },
    })
      .from(".pl-char", { yPercent: 110, duration: 1, stagger: 0.04, ease: "expo.out" }, 0.15)
      .to(".pl-bar", { scaleX: 1, duration: 1.6, ease: "power2.inOut" }, 0)
      .to(".pl-char", { yPercent: -110, duration: 0.7, stagger: 0.02, ease: "expo.in" }, "+=0.1")
      .add(finish, "-=0.1")
      .to(rootRef.current, { yPercent: -100, duration: 1, ease: "expo.inOut" }, "-=0.2");
    return () => tl.kill();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!visible) return null;

  return (
    <div ref={rootRef} className="fixed inset-0 z-[9999] flex flex-col justify-between bg-ink-950 p-5 text-paper sm:p-10" aria-hidden="true">
      <div className="flex justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-fog-400">
        <span>DMANBRAY Innovations</span>
        <span>Loading experience</span>
      </div>
      <div className="flex overflow-hidden font-display text-[18vw] font-bold leading-[0.85] tracking-[-0.06em] sm:text-[14vw]">
        {"DMANBRAY".split("").map((c, i) => (
          <span key={i} className="pl-char inline-block">
            {c}
          </span>
        ))}
      </div>
      <div>
        <div className="mb-4 flex items-end justify-between">
          <span ref={countRef} className="font-display text-6xl font-semibold tabular-nums tracking-tight sm:text-8xl">
            000
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-fog-400">Innovate · Build · Grow</span>
        </div>
        <div className="pl-bar h-px w-full origin-left scale-x-0 bg-brand" />
      </div>
    </div>
  );
};

export default Preloader;
