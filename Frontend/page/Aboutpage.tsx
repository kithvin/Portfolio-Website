import type { ReactElement } from "react";

type FocusItem = {
  title: string;
  desc: string;
};

const focusItems: FocusItem[] = [
  {
    title: "Software Architecture & Clean Structure",
    desc: "Designing applications with proper layering, maintainability, and scalability in mind.",
  },
  {
    title: "Modern UI & User Experience",
    desc: "Creating intuitive, responsive, and elegant interfaces.",
  },
  {
    title: "Full-Stack System Thinking",
    desc: "Connecting frontend, backend, and database into one system.",
  },
];

export default function About(): ReactElement {
  return (
    <section id="about" className="relative overflow-hidden text-white">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 md:px-10 py-14 sm:py-20 md:py-28 flex flex-col items-center md:items-start text-center md:text-left">
        
        {/* Badge */}
        <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 sm:px-4 py-2 text-[11px] sm:text-xs text-cyan-200">
          <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
          About Me — Software Engineer
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-snug sm:leading-tight mb-8 sm:mb-10">
          Designing Structured, Scalable and Meaningful{" "}
          <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
            Software Systems
          </span>
        </h2>

        {/* Summary */}
        <p className="max-w-3xl text-[13px] sm:text-sm md:text-base leading-6 sm:leading-7 text-white/70 mb-12 sm:mb-16">
          I am a passionate Software Engineer focused on building structured,
          scalable, and user-centric software systems. I pay close attention to
          architecture, clean design patterns, and seamless user experiences.
          <br />
          <br />
          Through real-world projects, I have developed a strong understanding of
          how frontend, backend, and data systems work together as one solution.
        </p>

        {/* Cards */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-3 w-full">
          {focusItems.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-8 backdrop-blur transition hover:bg-white/10 text-center md:text-left"
            >
              <h3 className="text-base sm:text-lg font-semibold text-cyan-300 mb-2 sm:mb-3">
                {item.title}
              </h3>
              <p className="text-[13px] sm:text-sm leading-6 text-white/70">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Journey */}
        <div className="mt-14 sm:mt-16 max-w-3xl text-center md:text-left">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-cyan-300 mb-4 sm:mb-5">
            My Journey
          </h3>
          <p className="text-[13px] sm:text-sm md:text-base leading-6 sm:leading-7 text-white/70">
            My journey into software engineering started with curiosity about how
            real applications are built and structured. Each project I build helps
            me refine better architecture, design, and engineering practices.
          </p>
        </div>

      </div>
    </section>
  );
}
