import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import logo from "../assets/dmanbray-nav-logo.png";
import { EASE, EASE_IN_OUT } from "./Motion";
import { ecosystem } from "../data/siteData";
import { useLenis } from "./SmoothScroll";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
];

const isActivePath = (pathname, path) =>
  path === "/" ? pathname === "/" : pathname.startsWith(path);

// Label that rolls upward to a duplicate of itself on hover
const Roll = ({ children }) => (
  <span className="roll">
    <span>{children}</span>
    <span aria-hidden="true">{children}</span>
  </span>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock page scroll (native and Lenis) while the menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    if (isOpen) lenis.current?.stop();
    else lenis.current?.start();
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, lenis]);

  // Detect scroll past the hero to swap to a solid background
  useEffect(() => {
    const updateScroll = () => {
      const y = window.scrollY || (lenis.current ? lenis.current.scroll : 0);
      setScrolled(y > 20);
    };
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, [lenis]);

  return (
    <>
      {/* Scroll-aware header:
          - At the very top (over dark hero): transparent with soft gradient scrim
          - Once scrolled: 100% solid dark bar with border to ensure ZERO content overlap */}
      <header
        className={`fixed inset-x-0 top-0 z-50 text-paper transition-all duration-300 ease-in-out ${
          scrolled
            ? "bg-[#070708] shadow-[0_8px_32px_rgba(0,0,0,0.7)]"
            : "bg-transparent"
        }`}
      >
        {/* Hairline bottom border — fades in on scroll, never flashes */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10 transition-opacity duration-300"
          style={{ opacity: scrolled ? 1 : 0 }}
          aria-hidden="true"
        />

        {/* Top gradient scrim — always in DOM, fades out when scrolled */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-24 transition-opacity duration-300"
          style={{
            background: "linear-gradient(to bottom, rgba(11,11,12,0.75) 0%, transparent 100%)",
            opacity: scrolled ? 0 : 1,
          }}
          aria-hidden="true"
        />

        <nav aria-label="Primary" className="container-site relative flex h-14 items-center justify-between sm:h-16">
          <Link
            to="/"
            className="group flex items-center gap-2.5 font-display text-xl font-bold tracking-[-0.04em] sm:text-2xl"
            aria-label="DMANBRAY home"
          >
            <span className="h-7 w-7 overflow-hidden rounded-full bg-white shrink-0 sm:h-8 sm:w-8 shadow-sm">
              <img src={logo} alt="DMANBRAY" className="h-full w-full object-cover" />
            </span>
            <span className="flex items-baseline gap-0.5">
              DMANBRAY<span className="text-xs align-super text-brand-light">®</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link, i) => {
              const active = isActivePath(location.pathname, link.path);
              return (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group flex items-start gap-1.5 text-sm font-medium transition-opacity duration-200 hover:opacity-80"
                    aria-current={active ? "page" : undefined}
                  >
                    <span className="font-mono text-[9px] opacity-50">0{i + 1}</span>
                    <Roll>{link.name}</Roll>
                    {active && <span className="mt-1.5 h-1 w-1 rounded-full bg-paper" />}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            onClick={() => setIsOpen(true)}
            className="group flex items-center gap-3 text-sm font-medium lg:hidden"
            aria-label="Open menu"
            aria-expanded={isOpen}
          >
            <Roll>Menu</Roll>
            <span className="flex flex-col gap-1.5">
              <span className="block h-px w-6 bg-paper" />
              <span className="block h-px w-4 self-end bg-paper transition-all duration-500 group-hover:w-6" />
            </span>
          </button>
        </nav>
      </header>

      {/* Full-screen menu — unchanged */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="menu"
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.9, ease: EASE_IN_OUT }}
            className="fixed inset-0 z-[60] flex flex-col bg-[#070708] text-white"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            <div className="container-site flex h-20 items-center justify-between sm:h-24">
              <span className="flex items-center gap-3">
                <span className="h-9 w-9 overflow-hidden rounded-full bg-white">
                  <img src={logo} alt="" className="h-full w-full object-cover" />
                </span>
                <span className="font-display text-xl font-bold tracking-[-0.04em]">DMANBRAY</span>
              </span>
              <button onClick={() => setIsOpen(false)} className="group flex items-center gap-3 text-sm font-medium" aria-label="Close menu">
                <Roll>Close</Roll>
                <span className="relative block h-5 w-5">
                  <span className="absolute left-0 top-1/2 block h-px w-5 rotate-45 bg-white" />
                  <span className="absolute left-0 top-1/2 block h-px w-5 -rotate-45 bg-white" />
                </span>
              </button>
            </div>

            <ul className="container-site flex flex-1 flex-col justify-center">
              {navLinks.map((link, i) => (
                <li key={link.name} className="overflow-hidden border-b border-white/20">
                  <motion.div
                    initial={{ y: "105%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "105%" }}
                    transition={{ duration: 0.8, ease: EASE, delay: 0.25 + i * 0.06 }}
                  >
                    <Link to={link.path} className="group flex items-baseline justify-between py-3 sm:py-4">
                      <span className="flex items-baseline gap-4">
                        <span className="font-mono text-xs opacity-70">0{i + 1}</span>
                        <span className="font-display text-[13vw] font-bold leading-[0.9] tracking-[-0.05em] transition-transform duration-500 ease-out-expo group-hover:translate-x-4 sm:text-[9vw] lg:text-[6.5vw]">
                          {link.name}
                        </span>
                      </span>
                      <ArrowUpRight className="h-6 w-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:h-10 sm:w-10" />
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="container-site flex flex-col gap-4 py-8 text-sm sm:flex-row sm:items-center sm:justify-between"
            >
              <a href="mailto:contact@dmanbray.com" className="link-draw w-fit">
                contact@dmanbray.com
              </a>
              <div className="flex flex-wrap gap-x-5 gap-y-1 font-mono text-[11px] uppercase tracking-[0.18em] opacity-80">
                {ecosystem.map((v) => (
                  <span key={v.id}>{v.name}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
