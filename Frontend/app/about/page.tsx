"use client";

import type { ReactElement } from "react";
import { motion } from "framer-motion";

type FocusItem = {
  title: string;
  desc: string;
};

const focusItems: FocusItem[] = [
  {
    title: "Understanding Software Architecture & Clean Structure",
    desc: "Learning to design applications with proper layering, maintainability, and scalability in mind.",
  },
  {
    title: "Interest in Modern UI & User Experience",
    desc: "Building intuitive and responsive interfaces that improve usability and user interaction.",
  },
  {
    title: "Full Stack System Thinking",
    desc: "Understanding how frontend, backend, and database work together as one complete system.",
  },
];

export default function About(): ReactElement {
  return (
    <section id="about" className="relative overflow-hidden text-white">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-10 py-12 sm:py-20 md:py-28 flex flex-col items-center md:items-start text-center md:text-left">
        {/* Badge (Hero style) */}
        <div className="mb-6 inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] text-cyan-200 sm:text-xs md:justify-start md:mx-0 mx-auto">
          <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.9)]" />

          <p className="flex flex-wrap items-center justify-center gap-1 text-cyan-300 text-[12px] sm:text-[13px] md:text-[14px] text-center md:text-left leading-tight">
            <span className="font-xl">About Me</span>
            <span className="text-white/30">|</span>
            <span className="font-medium text-cyan-300 text-[12px] sm:text-[13px] md:text-[15px]">
              Professional Overview
            </span>
          </p>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-snug sm:leading-tight mb-8 sm:mb-10">
          Aspiring Software Engineer Building{" "}
          <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
            Clean and Scalable Systems
          </span>
        </h2>

        {/* Summary */}
        <p className="w-full max-w-[65ch] md:max-w-7xl text-[13px] sm:text-sm md:text-base leading-6 sm:leading-7 text-white/70 mb-12 sm:mb-16 text-justify">
          I am an aspiring Software Engineer and a graduate of the University of
          Wolverhampton with a BSc (Hons) in Computer Science (Software
          Engineering). My academic background and strong interest in software
          development have built a solid foundation in understanding how real
          world applications are designed, structured, and maintained using
          proper engineering principles. I am particularly interested in
          building well structured, scalable, and user centric applications
          while following clean architecture and maintainable design practices.
          <br />
          <br />
          Through hands on academic and personal projects, I have developed
          practical exposure to connecting frontend interfaces, backend
          services, and data management into cohesive, working solutions. I
          focus on writing clean, readable code, improving usability, and
          understanding how performance and structure impact the overall quality
          of a system. Continuous learning, problem solving, and applying modern
          engineering practices are key parts of my growth as a developer.
          <br />
          <br />
          My goal is to contribute effectively as an Intern or Associate
          Software Engineer within a professional development team where I can
          apply my knowledge, gain real industry experience, and grow into a
          highly capable Software Engineer while delivering meaningful and
          reliable software solutions.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 w-full">
          {focusItems.map((item, index) => (
            <motion.div
              key={item.title}
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.4,
              }}
              whileHover={{ y: -10 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-8 backdrop-blur transition hover:bg-white/10 text-center md:text-left will-change-transform"
            >
              <h3 className="text-base sm:text-lg font-semibold text-cyan-300 mb-2 sm:mb-3">
                {item.title}
              </h3>
              <p className="text-[13px] sm:text-sm leading-6 text-white/70">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Journey */}
        <div className="mt-14 sm:mt-16 w-full max-w-[65ch] md:max-w-none text-center md:text-left">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-cyan-300 mb-4 sm:mb-5">
            My Journey
          </h3>
          <p className="text-[13px] sm:text-sm md:text-base leading-6 sm:leading-7 text-white/70 text-justify">
            My journey into software engineering began with a curiosity about
            how real world applications are designed and structured. Through
            academic and personal projects, I have been able to develop a
            growing understanding of architecture, design principles, and
            practical engineering practices used in modern software development.
          </p>
        </div>
      </div>
    </section>
  );
}