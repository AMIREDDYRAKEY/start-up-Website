// Declarative scroll animations. Mark up elements with data attributes and
// call `applyScrollAnimations(scope)` inside a useGSAP() callback:
//   data-split="lines|words|chars"  masked text reveal (optional data-delay)
//   data-reveal                      rise + fade in (optional data-delay)
//   data-parallax="0.2"              drift on scroll; value = strength
//   data-clip                        clip-path wipe from the bottom with image scale
import { gsap, ScrollTrigger, SplitText, prefersReducedMotion } from "./gsap";

const start = "top 88%";

// Returns a cleanup; call it from the useGSAP callback's return so nested
// scopes (a page plus a shared section inside it) never animate an element twice.
export const applyScrollAnimations = (scope) => {
  if (prefersReducedMotion()) return () => {};
  const claimed = [];
  const select = gsap.utils.selector(scope);
  const q = (sel) =>
    select(sel).filter((el) => {
      if (el.dataset.animClaimed) return false;
      el.dataset.animClaimed = "1";
      claimed.push(el);
      return true;
    });

  q("[data-split]").forEach((el) => {
    const type = el.dataset.split || "lines";
    const delay = parseFloat(el.dataset.delay || 0);
    SplitText.create(el, {
      type: type === "lines" ? "lines" : `lines,${type}`,
      mask: "lines",
      autoSplit: true,
      onSplit: (self) =>
        gsap.from(self[type], {
          yPercent: 115,
          rotate: type === "chars" ? 6 : 0,
          duration: 1.3,
          stagger: type === "chars" ? 0.025 : type === "words" ? 0.05 : 0.09,
          ease: "expo.out",
          delay,
          scrollTrigger: { trigger: el, start },
        }),
    });
  });

  q("[data-reveal]").forEach((el) => {
    gsap.from(el, {
      y: 40,
      opacity: 0,
      duration: 1.3,
      delay: parseFloat(el.dataset.delay || 0),
      scrollTrigger: { trigger: el, start },
    });
  });

  q("[data-parallax]").forEach((el) => {
    const strength = parseFloat(el.dataset.parallax || 0.15);
    gsap.fromTo(
      el,
      { yPercent: strength * 100 },
      {
        yPercent: -strength * 100,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
      }
    );
  });

  q("[data-clip]").forEach((el) => {
    const inner = el.firstElementChild;
    const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: "top 85%" } });
    tl.fromTo(el, { clipPath: "inset(100% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "expo.inOut" });
    if (inner) tl.fromTo(inner, { scale: 1.25 }, { scale: 1, duration: 2, ease: "expo.out" }, 0);
  });

  return () => claimed.forEach((el) => delete el.dataset.animClaimed);
};

export { ScrollTrigger };
