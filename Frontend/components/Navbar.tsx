"use client";

import { useEffect, useState } from "react";
import { Cpu, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Articles", href: "#articles" },
  { name: "Expertise", href: "#expertise" },
  { name: "Education", href: "#education" },
  { name: "GitHub", href: "#github" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      for (const item of navItems) {
        const section = document.querySelector(item.href) as HTMLElement | null;
        if (!section) continue;

        const top = section.offsetTop - 80;
        const height = section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
          setActive(item.name);
          break;
        }
      }
    };

    const handleResize = () => {
      // close mobile menu when switching to desktop
      if (window.innerWidth >= 768) setMobileOpen(false);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onNavClick = (name: string) => {
    setActive(name);
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-5 cursor-pointer select-none"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated Icon */}
          <motion.div
            className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center"
            animate={{
              scale: [1, 1.12, 1],
              boxShadow: [
                "0 0 12px rgba(0,255,255,0.4)",
                "0 0 35px rgba(0,255,255,0.95)",
                "0 0 12px rgba(0,255,255,0.4)",
              ],
              opacity: [0.75, 1, 0.75],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Cpu className="text-white" size={22} />
          </motion.div>

          {/* Brand Text */}
          <div className="leading-tight">
            <h1 className="text-xl font-bold tracking-wide">
              kithvin
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent ml-1 font-semibold">
                .DEV
              </span>
            </h1>
            <p className="text-[12px] text-gray-400 tracking-widest">
              Software Engineer
            </p>
          </div>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-base font-semibold">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`transition duration-300 hover:text-cyan-400 ${
                active === item.name
                  ? "text-cyan-400 border-b-2 border-cyan-400 pb-1"
                  : "text-gray-300"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-cyan-500/20 text-gray-200 hover:text-cyan-400 hover:border-cyan-400/40 transition"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden border-t border-cyan-500/20 bg-black/80 backdrop-blur-md"
          >
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3 font-semibold text-center">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => onNavClick(item.name)}
                  className={`py-2 px-3 rounded-lg transition ${
                    active === item.name
                      ? "text-cyan-400 bg-cyan-500/10 border border-cyan-400/30"
                      : "text-gray-200 hover:text-cyan-400 hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
