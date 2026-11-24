import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import BackgroundCanvas from "./components/BackgroundCanvas";
import SmoothScroll, { useLenis } from "./components/SmoothScroll";
import Cursor from "./components/Cursor";
import { Page } from "./components/Motion";
import { ScrollTrigger } from "./lib/gsap";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";

// Scrolls to `#id` targets once the new page has mounted (e.g. /services#ai-solutions)
const HashScroll = () => {
  const { pathname, hash } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (!hash) return;
    const t = setTimeout(() => {
      const el = document.getElementById(hash.slice(1));
      if (!el) return;
      if (lenis.current) lenis.current.scrollTo(el, { offset: -96 });
      else window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 96, behavior: "smooth" });
    }, 900);
    return () => clearTimeout(t);
  }, [pathname, hash, lenis]);

  return null;
};

const AppContent = () => {
  const location = useLocation();
  const lenis = useLenis();

  // Once the outgoing page has left: jump to top and re-measure scroll triggers
  const onExitComplete = () => {
    if (lenis.current) lenis.current.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
    requestAnimationFrame(() => ScrollTrigger.refresh());
  };

  return (
    <>
      <HashScroll />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-ink" aria-hidden="true" />
      <BackgroundCanvas />
      <Cursor />
      <Navbar />
      <main className="relative z-10 min-h-screen">
        <AnimatePresence mode="wait" onExitComplete={onExitComplete}>
          <Page key={location.pathname}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetails />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              {/* Catch-all redirect */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Page>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <HelmetProvider>
      <Preloader />
      <SmoothScroll>
        <Router>
          <AppContent />
        </Router>
      </SmoothScroll>
    </HelmetProvider>
  );
};

export default App;
