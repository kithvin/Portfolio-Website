"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Download, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden text-white">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-16 pb-8 sm:pt-20 sm:pb-10 md:pt-26 md:pb-12">
        <div className="grid items-center gap-10 sm:gap-14 md:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center md:text-left"
          >
            <div className="mb-6 inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] text-cyan-200 sm:text-xs md:justify-start md:mx-0 mx-auto">
              <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.9)]" />

              <p className="flex flex-wrap items-center justify-center gap-1 text-cyan-300 text-[12px] sm:text-[13px] md:text-[14px] text-center md:text-left leading-tight">
                <span>Welcome to My Portfolio</span>
                <span className="text-white/30">|</span>
                <span className="font-medium text-cyan-300 text-[12px] sm:text-[13px] md:text-[15px]">
                  Software Engineer
                </span>
              </p>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                Kithvin Bandara
              </span>
            </h1>

            <p className="mt-6 max-w-xl mx-auto md:mx-0 text-sm leading-7 text-white/70 md:text-base">
              I design and develop modern, scalable software solutions that
              transform ideas into real world applications through clean
              architecture, thoughtful design, and engineering excellence.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-center md:items-start justify-center md:justify-start gap-3">
              <Link
                href="/cv.pdf"
                download
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-200"
              >
                <Download className="h-4 w-4" />
                Download CV
              </Link>

              <Link
                href="#contact"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm text-white/80 transition hover:bg-white/10"
              >
                <MessageCircle className="h-4 w-4" />
                Get In Touch With Me
              </Link>
            </div>
          </motion.div>

          {/* RIGHT: ORBIT CIRCLE */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative h-[280px] w-[280px] sm:h-[340px] sm:w-[340px] md:h-[420px] md:w-[420px]">
              <div className="absolute inset-0 rounded-full border border-white/10 bg-white/[0.02]" />
              <div className="absolute inset-6 sm:inset-8 rounded-full border border-cyan-300/20 shadow-[0_0_40px_rgba(34,211,238,0.12)]" />

              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 18, ease: "linear", repeat: Infinity }}
              >
                <OrbitDot className="left-1/2 top-2" />
                <OrbitDot className="right-8 top-1/3" />
                <OrbitDot className="left-10 bottom-1/3" />
                <OrbitDot className="left-1/2 bottom-2" />
              </motion.div>

              <motion.div
                className="absolute inset-10 sm:inset-12"
                animate={{ rotate: -360 }}
                transition={{ duration: 26, ease: "linear", repeat: Infinity }}
              >
                <div className="absolute inset-0 rounded-full border border-indigo-300/15" />
                <OrbitDot className="left-1/2 top-1" size="sm" />
                <OrbitDot className="right-4 bottom-1/3" size="sm" />
                <OrbitDot className="left-6 top-1/2" size="sm" />
              </motion.div>

              <motion.div
                className="absolute left-1/2 top-1/2 w-[180px] sm:w-[260px] h-[180px] sm:h-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/5 p-2 shadow-[0_0_60px_rgba(99,102,241,0.12)] backdrop-blur overflow-hidden"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.15 }}
              >
                <Image
                  src="/profile.jpg"
                  alt="Profile"
                  fill
                  className="object-cover rounded-full"
                  priority
                />
              </motion.div>

              <motion.div
                className="absolute inset-10 rounded-full"
                animate={{ opacity: [0.25, 0.5, 0.25] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ boxShadow: "0 0 90px rgba(34,211,238,0.10)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OrbitDot({
  className,
  size = "md",
}: {
  className: string;
  size?: "sm" | "md";
}) {
  const px = size === "sm" ? "h-2 w-2" : "h-3 w-3";
  return (
    <motion.span
      className={`absolute ${className} ${px} -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)]`}
      animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.25, 1] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
