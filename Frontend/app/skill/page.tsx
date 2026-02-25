"use client";

import type { ReactElement } from "react";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiDaisyui,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiClerk,
  SiGithub,
  SiNpm,
  SiPostman,
  SiVite,
  SiVercel,
  SiStripe,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiJavascript,
  SiCloudinary,
  SiAmazon,
  SiOpenjdk,
} from "react-icons/si";
import { FiLink } from "react-icons/fi";

type SkillItem = {
  name: string;
  icon?: ReactElement;
};

type SkillBlock = {
  title: string;
  subtitle: string;
  items: SkillItem[];
};

const FallbackIcon = <FiLink />;

const skillBlocks: SkillBlock[] = [
  {
    title: "Frontend Technologies & UI",
    subtitle: "Modern UI building",
    items: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "React.js", icon: <SiReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "daisyUI", icon: <SiDaisyui /> },
      { name: "PrebuiltUI", icon: FallbackIcon },
    ],
  },
  {
    title: "Backend Technologies",
    subtitle: "APIs & server-side",
    items: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Spring Boot", icon: FallbackIcon },
      { name: "REST APIs", icon: FallbackIcon },
      { name: "Inngest", icon: FallbackIcon },
      { name: "Cloudinary", icon: <SiCloudinary /> },
    ],
  },
  {
    title: "Programming",
    subtitle: "Core languages",
    items: [
      { name: "JavaScript (ES6+)", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Java", icon: <SiOpenjdk /> },
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: <SiCss3 /> },
    ],
  },
  {
    title: "Databases",
    subtitle: "Data storage",
    items: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
  },
  {
    title: "Auth & Tools",
    subtitle: "Build essentials",
    items: [
      { name: "Clerk Authentication", icon: <SiClerk /> },
      { name: "Git/GitHub", icon: <SiGithub /> },
      { name: "npm", icon: <SiNpm /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Vite", icon: <SiVite /> },
      { name: "Stripe API", icon: <SiStripe /> },
    ],
  },
  {
    title: "Deployment & Cloud",
    subtitle: "Ship & scale",
    items: [
      { name: "Vercel", icon: <SiVercel /> },
      { name: "AWS", icon: <SiAmazon /> },
    ],
  },
];

export default function Skills(): ReactElement {
  return (
    <section id="skills" className="relative overflow-hidden text-white">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-10 py-12 sm:py-20 md:py-28 flex flex-col items-center md:items-start text-center md:text-left">
        {/* Badge */}
        <div className="mb-6 inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] text-cyan-200 sm:text-xs md:justify-start md:mx-0 mx-auto">
          <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
          <p className="flex flex-wrap items-center justify-center gap-2 text-cyan-300 text-[12px] sm:text-[13px] md:text-[14px] leading-tight">
            <span className="font-semibold">Skills</span>
            <span className="text-white/30">|</span>
            <span className="font-medium text-cyan-300">Tech Stack & Tools</span>
          </p>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-snug sm:leading-tight mb-5 sm:mb-6">
          Technologies I Use to Build
          <br className="block sm:hidden" />{" "}
          <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
            Modern Web Apps
          </span>
        </h2>

        {/* Intro */}
        <p className="w-full max-w-[62ch] md:max-w-none text-[13px] sm:text-sm md:text-base leading-6 sm:leading-7 text-white/70 mb-8 sm:mb-14">
          A focused set of tools I use to design clean UI, build APIs, manage
          data, integrate authentication, and deploy production ready
          applications.
        </p>

        {/* Cards */}
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-6">
          {skillBlocks.map((block, index) => (
            <motion.div
              key={block.title}
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.4,
              }}
              whileHover={{ y: -10 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-7 backdrop-blur transition hover:bg-white/10 text-center md:text-left will-change-transform"
            >
              <div className="mb-4">
                <h3 className="text-lg sm:text-xl font-semibold text-cyan-300">
                  {block.title}
                </h3>
                <p className="text-[13px] sm:text-sm text-white/60 mt-1">
                  {block.subtitle}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {block.items.map((item) => (
                  <span
                    key={item.name}
                    className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-[12px] sm:text-sm text-cyan-200 hover:bg-cyan-400/15 transition"
                  >
                    <span className="text-sm sm:text-base opacity-90">
                      {item.icon ?? FallbackIcon}
                    </span>
                    <span className="break-words">{item.name}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}