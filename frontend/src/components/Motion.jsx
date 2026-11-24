import React, { useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

/* Shared easing + timing so every animation on the site feels related */
export const EASE = [0.16, 1, 0.3, 1];
export const EASE_IN_OUT = [0.76, 0, 0.24, 1];

/* ──────────── SPLIT TEXT ────────────
   Word-by-word masked reveal. Each word slides up from behind a clip.
   `as` controls the wrapping tag so headings keep their semantics. */
export const SplitText = ({
  children,
  as: Tag = "span",
  className = "",
  wordClassName = "",
  delay = 0,
  stagger = 0.06,
  immediate = false,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();
  const show = immediate || inView;
  const text = typeof children === "string" ? children : "";
  const words = text.split(" ");

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          aria-hidden="true"
          className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-top"
        >
          <motion.span
            className={`inline-block will-change-transform ${wordClassName}`}
            initial={reduce ? false : { y: "110%" }}
            animate={show ? { y: "0%" } : undefined}
            transition={{ duration: 1.1, ease: EASE, delay: delay + i * stagger }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};

/* ──────────── LINE MASK ────────────
   Reveals arbitrary children (mixed markup) from behind a clip. */
export const MaskLine = ({ children, delay = 0, className = "", immediate = false }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();
  return (
    <span ref={ref} className={`block overflow-hidden pb-[0.1em] -mb-[0.1em] ${className}`}>
      <motion.span
        className="block will-change-transform"
        initial={reduce ? false : { y: "105%" }}
        animate={immediate || inView ? { y: "0%" } : undefined}
        transition={{ duration: 1.2, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
};

/* ──────────── REVEAL ────────────
   Fade + small rise when scrolled into view. */
export const Reveal = ({ children, delay = 0, y = 28, className = "", as = "div" }) => {
  const reduce = useReducedMotion();
  const Comp = motion[as] || motion.div;
  return (
    <Comp
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1, ease: EASE, delay }}
    >
      {children}
    </Comp>
  );
};

/* ──────────── CLIP REVEAL ────────────
   Image/visual block that opens from the bottom edge with a slow scale-down. */
export const ClipReveal = ({ children, className = "", delay = 0 }) => {
  // Observe an unclipped wrapper: a fully clipped element never reports as visible
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  return (
    <div ref={ref} className={className}>
      <motion.div
        className="h-full w-full overflow-hidden"
        initial={reduce ? false : { clipPath: "inset(100% 0% 0% 0%)" }}
        animate={inView ? { clipPath: "inset(0% 0% 0% 0%)" } : undefined}
        transition={{ duration: 1.4, ease: EASE_IN_OUT, delay }}
      >
        <motion.div
          className="h-full w-full"
          initial={reduce ? false : { scale: 1.18 }}
          animate={inView ? { scale: 1 } : undefined}
          transition={{ duration: 1.8, ease: EASE, delay }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};

/* ──────────── PARALLAX ────────────
   Moves children against scroll by `distance` px. Disabled for reduced motion. */
export const Parallax = ({ children, distance = 60, className = "" }) => {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  return (
    <motion.div ref={ref} style={reduce ? undefined : { y }} className={className}>
      {children}
    </motion.div>
  );
};

/* ──────────── MAGNETIC ────────────
   Pulls its child toward the pointer. Pointer-fine devices only. */
export const Magnetic = ({ children, strength = 0.35, className = "" }) => {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const onMove = (e) => {
    if (reduce || e.pointerType !== "mouse") return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      style={{ x: sx, y: sy }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
};

/* ──────────── SCROLL WORDS ────────────
   Paragraph whose words brighten as the reader scrolls through it. */
const ScrollWord = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return (
    <motion.span style={{ opacity }} className="inline">
      {children}{" "}
    </motion.span>
  );
};

export const ScrollWords = ({ text, className = "" }) => {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = text.split(" ");

  if (reduce) return <p className={className}>{text}</p>;

  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <ScrollWord
          key={`${w}-${i}`}
          progress={scrollYProgress}
          range={[i / words.length, (i + 1) / words.length]}
        >
          {w}
        </ScrollWord>
      ))}
    </p>
  );
};

/* ──────────── SPOTLIGHT CARD ────────────
   Surface whose border and fill light up around the pointer. */
export const SpotlightCard = ({ children, className = "", color = "91,140,255", as: Tag = "div", ...rest }) => {
  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };
  return (
    <Tag onPointerMove={onMove} className={`group/spot surface overflow-hidden ${className}`} {...rest}>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100"
        style={{
          background: `radial-gradient(420px circle at var(--x, 50%) var(--y, 50%), rgba(${color},0.13), transparent 45%)`,
        }}
      />
      {children}
    </Tag>
  );
};

/* ──────────── PAGE TRANSITION ────────────
   Wraps each routed page. A cobalt curtain rises to cover the outgoing page,
   then continues upward to reveal the next one. Skipped on the very first
   load (the preloader handles that). */
export const Page = ({ children }) => {
  const reduce = useReducedMotion();
  const first = useRef(!window.__dmanbrayPageMounted);
  React.useEffect(() => {
    window.__dmanbrayPageMounted = true;
  }, []);

  return (
    <motion.div exit={{ opacity: 1, transition: { duration: 0.75 } }}>
      {children}
      {!reduce && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[70] bg-ink-950"
          initial={{ y: first.current ? "-100%" : "0%" }}
          animate={{ y: "-100%", transition: { duration: 0.9, ease: EASE_IN_OUT, delay: 0.05 } }}
          exit={{ y: ["100%", "0%"], transition: { duration: 0.7, ease: EASE_IN_OUT } }}
        />
      )}
    </motion.div>
  );
};
