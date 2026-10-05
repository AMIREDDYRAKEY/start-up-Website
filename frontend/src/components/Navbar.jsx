import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "../assets/dhanvira-nav-logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#16181b]/95 backdrop-blur-md border-b border-[#47484c]/40 shadow-lg shadow-black/40"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 rounded-full p-0.5 bg-gradient-to-tr from-[#d4af37] via-[#47484c] to-[#d4af37] shadow-md group-hover:scale-105 transition-transform duration-300">
              <img
                src={logo}
                alt="DHANVIRA Logo"
                className="w-full h-full object-cover rounded-full bg-white"
              />
            </div>
            <div>
              <span className="text-white font-display font-bold text-lg tracking-wider group-hover:text-accent-gold transition-colors">
                DHANVIRA
              </span>
              <span className="block text-[10px] text-accent-gold font-semibold tracking-[0.25em] uppercase -mt-1">
                Technologies
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1.5 p-1 rounded-full bg-[#1e2023]/80 border border-[#47484c]/50">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-4 py-2 text-xs font-semibold tracking-wide rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-white bg-[#282b30] shadow-sm border border-[#47484c]/60"
                      : "text-charcoal-200 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link to="/contact" className="btn-gold text-xs uppercase tracking-wider">
              Get In Touch
              <ArrowRight className="w-3.5 h-3.5 ml-2" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-charcoal-200 hover:text-white hover:bg-[#1e2023] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -8 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -8 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-[#16181b]/98 backdrop-blur-xl border-b border-[#47484c]/60 px-6 py-6 shadow-2xl space-y-3 overflow-hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block py-3 px-4 rounded-xl text-base font-semibold text-charcoal-100 hover:bg-[#1e2023] hover:text-[#d4af37] transition-all duration-300"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link to="/contact" className="btn-gold w-full text-center py-3.5 text-sm uppercase tracking-wider">
                Get In Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
