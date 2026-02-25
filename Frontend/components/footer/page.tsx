
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const [year, setYear] = useState<number>();

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const navLinks = ["Home", "About", "Skills", "Projects", "Articles", "Education" , "Contact"];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="border-t border-cyan-500/20 bg-black px-6 py-14"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400 mb-10 font-bold">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-cyan-400 transition"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Social */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-6 text-gray-500 text-sm mb-10">
          <a
            href="https://github.com/kithvin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition font-bold inline-flex items-center gap-2"
          >
            <Github className="h-4 w-4 " />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/kithvin-bandara-a085472a7/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition font-bold inline-flex items-center gap-2"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>

          <a
            href="mailto:kithvinbandara@gmail.com"
            className="hover:text-cyan-400 transition font-bold inline-flex items-center gap-2"
          >
            <Mail className="h-4 w-4" />
            Email
          </a>
        </div>

        {/* Bottom */}
        <p className="text-gray-500 text-sm font-semibold">
          © {year} Kithvin Bandara. Personal Portfolio showcasing projects, skills, and experience.
        </p>
      </div>
    </motion.footer>
  );
}
