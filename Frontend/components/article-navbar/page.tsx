"use client";

import Link from "next/link";
import { Cpu } from "lucide-react";
import { motion } from "framer-motion";

export default function ArticleNavbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4">
          <motion.div
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center"
            animate={{
              scale: [1, 1.1, 1],
              boxShadow: [
                "0 0 10px rgba(0,255,255,0.4)",
                "0 0 25px rgba(0,255,255,0.9)",
                "0 0 10px rgba(0,255,255,0.4)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Cpu className="text-white" size={20} />
          </motion.div>

          <div>
            <h1 className="text-lg font-bold">
              kithvin
              <span className="text-cyan-400 ml-1">.DEV</span>
            </h1>
            <p className="text-[11px] text-gray-400">Software Engineer</p>
          </div>
        </Link>

        {/* Right button */}
        {/* <Link
          href="/#articles"
          className="font-semibold text-sm border border-cyan-400/30 px-4 py-2 rounded-full text-cyan-300 hover:bg-cyan-400 hover:text-black transition"
        >
          Back to Articles
        </Link> */}

        <Link
          href="/"
          className="font-semibold inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-sm font-medium text-cyan-300 transition duration-300 hover:bg-cyan-400 hover:text-black"
        >
          Back to Home
        </Link>
      </div>
    </nav>
  );
}
