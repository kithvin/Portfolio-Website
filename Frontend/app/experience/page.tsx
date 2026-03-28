"use client";

import { FaBriefcase, FaArrowRight } from "react-icons/fa";
import {
  HiOutlineLocationMarker,
  HiOutlineGlobeAlt,
} from "react-icons/hi";
import { MdOutlineWorkOutline, MdDateRange } from "react-icons/md";
import {
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiTypescript,
  SiPostgresql,
  SiDocker,
  SiJira,
  SiGithub,
  SiTailwindcss,
} from "react-icons/si";

const experiences = [
  {
    id: 1,
    role: "Freelance Software Developer",
    company: "AravindaGems – Gems Trading Platform",
    date: "Jan 2026 – Present",
    workMode: "Remote",
    location: "Sri Lanka",
    badge: "Client Project",
    intro:
      "AravindaGems is a gemstone trading platform designed for both local and international buyers. The platform helps users around the world explore gemstones, view product details, manage carts, follow updates through blogs, and interact with event related content through a modern digital experience.",
    summary:
      "Contributed as a Full Stack Developer with a frontend focus in building the AravindaGems platform using Next.js, Node.js, Express.js, TypeScript, PostgreSQL, and Docker. Worked as part of a collaborative team project, mainly developing responsive user interfaces while also supporting backend related tasks based on project needs.",
    points: [
      "Developed responsive and user friendly frontend interfaces using Next.js and Tailwind CSS with focus on usability and performance",
      "Contributed to backend development tasks including API integration and server side logic using Node.js and Express.js",
      "Worked with team members to plan task distribution for frontend and backend implementation",
      "Used Jira for task management, sprint planning, and development progress tracking",
      "Integrated frontend components with backend APIs to ensure smooth data flow and reliable system functionality",
      "Used Docker for containerization to maintain consistent development and deployment environments",
      "Collaborated through GitHub for version control, code reviews, and team discussions",
      "Helped build suitable platform features such as product browsing, cart functionality, blog support, event related sections, and user centered interface flows",
    ],
    tech: [
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiNodedotjs, name: "Node.js" },
      { icon: SiExpress, name: "Express.js" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiPostgresql, name: "PostgreSQL" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
      { icon: SiDocker, name: "Docker" },
      { icon: SiJira, name: "Jira" },
      { icon: SiGithub, name: "GitHub" },
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative min-h-screen overflow-hidden scroll-mt-24 text-white"
    >
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-16 sm:px-6 sm:py-20 md:items-start md:px-10">
        
        {/* header */}
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-cyan-200 md:mx-0">
          <span className="h-2 w-2 rounded-full bg-cyan-400" />
          Professional Journey | Experience
        </div>

        <h1 className="mb-6 text-center text-4xl font-semibold sm:text-5xl md:text-left md:text-6xl">
          My{" "}
          <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
            Experience
          </span>
        </h1>

        <p className="mb-12 text-center text-white/70 md:text-left max-w-3xl">
          Practical experience gained through real client work, collaborative
          development, and modern engineering workflows.
        </p>

        <div className="w-full space-y-8">
          {experiences.map((exp) => (
            <article
              key={exp.id}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-8 backdrop-blur"
            >
              <div className="flex flex-col gap-6">
                
                {/* title */}
                <div className="flex flex-col items-center sm:items-start">
                <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start">
  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10">
    <FaBriefcase className="text-cyan-400" size={15} />
  </div>

  <h2 className="text-center text-xl font-semibold text-cyan-300 sm:text-left sm:text-2xl md:text-3xl">
    {exp.role}
  </h2>
</div>

                  <p className="mt-2 text-center text-base text-white/80 sm:text-left sm:text-lg">
                    {exp.company}
                  </p>

                  <div className="mt-3 flex flex-col items-center gap-2 text-sm text-white/60 sm:flex-row sm:gap-4">
                    <span className="flex items-center gap-2">
                      <MdDateRange className="text-cyan-400" />
                      {exp.date}
                    </span>

                    <span className="hidden sm:block">•</span>

                    <span className="flex items-center gap-2">
                      <MdOutlineWorkOutline className="text-cyan-400" />
                      {exp.workMode}
                    </span>

                    <span className="hidden sm:block">•</span>

                    <span className="flex items-center gap-2">
                      <HiOutlineLocationMarker className="text-cyan-400" />
                      {exp.location}
                    </span>
                  </div>

                  <div className="mt-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs text-cyan-300">
                    {exp.badge}
                  </div>
                </div>

                {/* intro */}
                <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-4">
                  <div className="mb-2 flex items-center justify-center gap-2 sm:justify-start">
                    <HiOutlineGlobeAlt className="text-cyan-400" />
                    <h3 className="font-semibold text-cyan-300">
                      Project Introduction
                    </h3>
                  </div>

                  <p className="text-sm text-center sm:text-left text-white/75 leading-7">
                    {exp.intro}
                  </p>
                </div>

                {/* summary */}
                <p className=" text-justify text-sm text-white/70 leading-7">
                  {exp.summary}
                </p>

                {/* points */}
                <div className="grid gap-3">
                  {exp.points.map((point, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 text-sm text-white/75 leading-7"
                    >
                      <span className="mt-[8px] shrink-0 text-cyan-400">
                        <FaArrowRight size={10} />
                      </span>

                      <p className="m-0 flex-1">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                {/* tech */}
                <div className="flex flex-wrap justify-center gap-4 pt-2 sm:justify-start">
                  {exp.tech.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm text-white/70"
                      >
                        <Icon className="text-cyan-400" />
                        {item.name}
                      </div>
                    );
                  })}
                </div>
              </div>
            </article>
          ))}

          {/* career objective */}
          <div className="rounded-xl border border-cyan-400/20 bg-white/5 p-4 text-center sm:text-left">
            <span className="font-semibold text-cyan-300">
              Career Objective:
            </span>{" "}
            Currently seeking an opportunity to begin my professional journey as
            a Software Engineer Intern or Associate Software Engineer, where I
            can contribute to real product development while continuing to grow
            as an engineer.
          </div>
        </div>
      </div>
    </section>
  );
}