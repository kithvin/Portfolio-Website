"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Download, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#060B16] text-white"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-24 h-[32rem] w-[32rem] rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.10),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(139,92,246,0.12),transparent_45%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 md:py-28">
        <div className="grid items-center gap-10 sm:gap-14 md:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center md:text-left"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-cyan-200 mx-auto md:mx-0">
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
              <p className="text-cyan-300 text-[14px]">
                Welcome to My Portfolio | {" "}
                <span className="text-cyan-300 text-[15px]">Software Engineer</span>
              </p>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
              Hi, I'm {" "}
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
                href="/contact"
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
              {/* Outer soft ring */}
              <div className="absolute inset-0 rounded-full border border-white/10 bg-white/[0.02]" />

              {/* Big orbit ring */}
              <div className="absolute inset-6 sm:inset-8 rounded-full border border-cyan-300/20 shadow-[0_0_40px_rgba(34,211,238,0.12)]" />

              {/* Animated orbit (dots rotate) */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 18, ease: "linear", repeat: Infinity }}
              >
                {/* Dots on orbit */}
                <OrbitDot className="left-1/2 top-2" />
                <OrbitDot className="right-8 top-1/3" />
                <OrbitDot className="left-10 bottom-1/3" />
                <OrbitDot className="left-1/2 bottom-2" />
              </motion.div>

              {/* Inner orbit (reverse) */}
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

              {/* Center glass card */}
              {/* <motion.div
                className="absolute left-1/2 top-1/2 w-[180px] sm:w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/10 bg-white/5 p-3 shadow-[0_0_60px_rgba(99,102,241,0.12)] backdrop-blur"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.15 }}
              >
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03]">
                  <Image
                    src="/profile.jpg"
                    alt="Profile"
                    width={600}
                    height={600}
                    className="h-[200px] sm:h-[240px] w-full object-cover"
                    priority
                  />
                </div>
              </motion.div> */}

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

              {/* Subtle pulsing glow */}
              <motion.div
                className="absolute inset-10 rounded-full"
                animate={{ opacity: [0.25, 0.5, 0.25] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  boxShadow: "0 0 90px rgba(34,211,238,0.10)",
                }}
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
