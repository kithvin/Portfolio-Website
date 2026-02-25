// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useMemo, useState } from "react";
// import {
//   SiReact,
//   SiJavascript,
//   SiTailwindcss,
//   SiNodedotjs,
//   SiExpress,
//   SiMongodb,
//   SiVite,
//   SiAxios,
//   SiJsonwebtokens,
//   SiChartdotjs,
// } from "react-icons/si";
// import { FaBrain } from "react-icons/fa";

// type Project = {
//   title: string;
//   image: string;
//   description: string;
//   liveUrl: string;
//   githubUrl: string;
//   tags: string[];
//   tech: { icon: any; name: string }[];
// };

// const projects: Project[] = [
//   {
//     title: "FinSage – AI Powered Wealth Management System",
//     image: "/Finsage.JPG",
//     description:
//       "A full featured AI powered wealth management platform that centralizes income, assets, liabilities, and credit card data into one intelligent, easy to understand dashboard. It includes an AI chatbot and a recommendation engine that analyze real user data to provide structured financial guidance, actionable insights, and clear visual reports across devices, helping users better understand their financial health, track progress, and make informed financial decisions with confidence and long term clarity.",
//     liveUrl: "https://finsage-phi.vercel.app/",
//     githubUrl: "https://github.com/kithvin/Finsage",
//     tags: [
//       "Full Stack (MERN)",
//       "AI Chatbot + Recommendations",
//       "Finance Dashboard",
//       "Reports & Insights",
//       "JWT Auth",
//     ],
//     tech: [
//       { icon: SiReact, name: "React" },
//       { icon: SiVite, name: "Vite" },
//       { icon: SiJavascript, name: "JavaScript" },
//       { icon: SiTailwindcss, name: "Tailwind CSS" },
//       { icon: SiAxios, name: "Axios" },
//       { icon: SiChartdotjs, name: "Recharts" },
//       { icon: SiNodedotjs, name: "Node.js" },
//       { icon: SiExpress, name: "Express.js" },
//       { icon: SiMongodb, name: "MongoDB" },
//       { icon: SiJsonwebtokens, name: "JWT" },
//       { icon: FaBrain, name: "LLM Integration" },
//     ],
//   },

//   {
//     title: "HireConnect – Technical Hiring Platform",
//     image: "/HireConnect.png",
//     description:
//       "A technical hiring and interview practice platform for the software industry that combines video conferencing, real time chat, and a live coding workspace in one environment. It includes AI powered code review, an AI chatbot for guidance, and an Interview Preparation Panel with expected questions and practice tools. The platform helps candidates improve coding quality, understand interview workflows, build confidence, and prepare effectively for real technical interviews successfully today.",
//     liveUrl: "https://hireconnect-three.vercel.app/",
//     githubUrl: "https://github.com/kithvin/HireConnect",
//     tags: [
//       "Full Stack (MERN)",
//       "Video Conference",
//       "Live Coding",
//       "Chat",
//       "AI Assistant Chatbot",
//       "AI Powered Code Review",
//     ],
//     tech: [
//       { icon: SiReact, name: "React" },
//       { icon: SiVite, name: "Vite" },
//       { icon: SiJavascript, name: "JavaScript" },
//       { icon: SiTailwindcss, name: "Tailwind CSS" },
//       { icon: SiNodedotjs, name: "Node.js" },
//       { icon: SiExpress, name: "Express.js" },
//       { icon: SiMongodb, name: "MongoDB" },
//       { icon: FaBrain, name: "LLM Integration" },
//     ],
//   },

//   {
//     title: "Alumni Management System (AMSEM)",
//     image: "/AMSEM.JPG",
//     description:
//       "A centralized alumni management system that integrates event management and alumni tracking into one platform. Includes news updates, volunteer opportunities, donation options, job board modules, reporting, and engagement tracking to support long-term alumni relationships.",
//     liveUrl: "#",
//     githubUrl: "#",
//     tags: [
//       "Alumni Tracking",
//       "Event Management",
//       "Reports",
//       "Admin + User Views",
//     ],
//     tech: [
//       { icon: SiReact, name: "React" },
//       { icon: SiVite, name: "Vite" },
//       { icon: SiJavascript, name: "JavaScript" },
//       { icon: SiTailwindcss, name: "Tailwind CSS" },
//     ],
//   },

//   {
//     title: "Job Board & Career Services Module",
//     image: "/JobBoard.JPG",
//     description:
//       "A job posting and career services module where admins can create job listings, upload job posters, and manage posts. Users can browse opportunities, view job details, and apply through multiple methods such as email, phone calls, or direct contact.",
//     liveUrl: "#",
//     githubUrl: "#",
//     tags: ["Job Listings", "File Upload", "Admin Tools", "Apply Methods"],
//     tech: [
//       { icon: SiReact, name: "React" },
//       { icon: SiJavascript, name: "JavaScript" },
//       { icon: SiTailwindcss, name: "Tailwind CSS" },
//       { icon: SiAxios, name: "Axios" },
//     ],
//   },

//   {
//     title: "Portfolio Website – Modern Animated UI",
//     image: "/Portfolio.JPG",
//     description:
//       "A modern portfolio website with smooth scrolling sections, responsive layout, and Framer Motion animations. Built to present projects, skills, and experience with a clean, recruiter-friendly design and strong visual hierarchy.",
//     liveUrl: "#",
//     githubUrl: "#",
//     tags: ["Responsive UI", "Animations", "Clean Layout", "Personal Branding"],
//     tech: [
//       { icon: SiReact, name: "React" },
//       { icon: SiTailwindcss, name: "Tailwind CSS" },
//     ],
//   },

//   {
//     title: "AI Interview Practice & Code Review Tool",
//     image: "/AIInterview.JPG",
//     description:
//       "An AI-powered interview preparation and code review tool designed for software engineers. It provides a live coding editor, AI-generated interview questions, and automated feedback to help users practice before real interviews. The system simulates interview scenarios and delivers structured guidance to improve problem solving and code quality.",
//     liveUrl: "#",
//     githubUrl: "#",
//     tags: [
//       "AI Interview Practice",
//       "Question Generator",
//       "Live Coding",
//       "AI Feedback",
//       "Developer Training",
//     ],
//     tech: [
//       { icon: SiReact, name: "React" },
//       { icon: SiJavascript, name: "JavaScript" },
//       { icon: SiTailwindcss, name: "Tailwind CSS" },
//       { icon: SiNodedotjs, name: "Node.js" },
//       { icon: SiExpress, name: "Express.js" },
//       { icon: SiMongodb, name: "MongoDB" },
//       { icon: FaBrain, name: "LLM Integration" },
//     ],
//   },
// ];

// export default function Projects() {
//   const [showAll, setShowAll] = useState(false);

//   const visibleProjects = useMemo(() => {
//     return showAll ? projects : projects.slice(0, 2);
//   }, [showAll]);

//   return (
//     <section
//       id="projects"
//       className="relative min-h-screen overflow-hidden text-white scroll-mt-24"
//     >
//       <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-10">
//         {/* Header Badge */}
//         <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-cyan-200 mx-auto">
//           <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
//           <p className="text-cyan-300 text-[13px] sm:text-[14px]">
//             Portfolio Showcase | <span className="text-cyan-300">Projects</span>
//           </p>
//         </div>

//         {/* Title */}
//         <h1 className="mb-6 text-center text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
//           My{" "}
//           <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
//             Projects
//           </span>
//         </h1>

//         {/* Subtitle */}
//         <p className="mx-auto mb-14 max-w-2xl text-center text-sm text-white/70 sm:text-base">
//           Selected projects that showcase structured development, clean UI, and
//           real world problem solving with end to end thinking.
//         </p>

//         {/* Projects Grid */}
//         <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
//           {visibleProjects.map((project) => (
//             <article
//               key={project.title}
//               className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 hover:border-white/20 transition"
//             >
//               <div className="relative w-full overflow-hidden bg-black/30">
//                 <div className="relative w-full">
//                   <Image
//                     src={project.image}
//                     alt={project.title}
//                     width={1400}
//                     height={900}
//                     className="w-full h-125 object-cover transition duration-700 ease-out group-hover:scale-[1.02] rounded-t-2xl"
//                     priority
//                   />
//                 </div>

//                 {/* overlay gradient */}
//                 <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

//                 {/* glow */}
//                 <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
//                   <div className="absolute -inset-10 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.18),transparent_60%)]" />
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-6">
//                 <h2 className="text-xl font-semibold text-cyan-300">
//                   {project.title}
//                 </h2>

//                 {/* Tags */}
//                 <div className="mt-3 flex flex-wrap gap-2">
//                   {project.tags.map((tag) => (
//                     <span
//                       key={tag}
//                       className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/70"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Full Description */}
//                 <p className="mt-4 text-justify text-sm leading-6 text-white/70">
//                   {project.description}
//                 </p>

//                 {/* Tech Stack */}
//                 <div className="mt-5 flex flex-wrap gap-4">
//                   {project.tech.map((t, i) => {
//                     const Icon = t.icon;
//                     return (
//                       <div
//                         key={i}
//                         className="flex items-center gap-2 text-sm text-white/70"
//                       >
//                         <Icon className="text-cyan-400 text-lg" />
//                         {t.name}
//                       </div>
//                     );
//                   })}
//                 </div>

//                 {/* Buttons */}
//                 <div className="mt-6 flex flex-wrap gap-3">
//                   <Link
//                     href={project.liveUrl}
//                     target="_blank"
//                     className="inline-flex rounded-full bg-cyan-400 px-4 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
//                   >
//                     Live Demo
//                   </Link>

//                   <Link
//                     href={project.githubUrl}
//                     target="_blank"
//                     className="inline-flex rounded-full border border-cyan-400 px-4 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
//                   >
//                     GitHub
//                   </Link>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* More Projects button */}
//         {projects.length > 2 && (
//           <div className="mt-12 flex justify-center">
//             <button
//               onClick={() => setShowAll((s) => !s)}
//               className="rounded-full cursor-pointer border border-cyan-400 px-6 py-3.5 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
//               type="button"
//             >
//               {showAll ? "Show Less" : "More Projects"}
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiVite,
  SiAxios,
  SiJsonwebtokens,
  SiChartdotjs,
} from "react-icons/si";
import { FaBrain } from "react-icons/fa";

type Project = {
  title: string;
  image: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
  tags: string[];
  tech: { icon: any; name: string }[];
};

const projects: Project[] = [
  {
    title: "FinSage – AI Powered Wealth Management System",
    image: "/Finsage.JPG",
    description:
      "A full featured AI powered wealth management platform that centralizes income, assets, liabilities, and credit card data into one intelligent, easy to understand dashboard. It includes an AI chatbot and a recommendation engine that analyze real user data to provide structured financial guidance, actionable insights, and clear visual reports across devices, helping users better understand their financial health, track progress, and make informed financial decisions with confidence and long term clarity.",
    liveUrl: "https://finsage-phi.vercel.app/",
    githubUrl: "https://github.com/kithvin/Finsage",
    tags: [
      "Full Stack (MERN)",
      "AI Chatbot + Recommendations",
      "Finance Dashboard",
      "Reports & Insights",
      "JWT Auth",
    ],
    tech: [
      { icon: SiReact, name: "React" },
      { icon: SiVite, name: "Vite" },
      { icon: SiJavascript, name: "JavaScript" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
      { icon: SiAxios, name: "Axios" },
      { icon: SiChartdotjs, name: "Recharts" },
      { icon: SiNodedotjs, name: "Node.js" },
      { icon: SiExpress, name: "Express.js" },
      { icon: SiMongodb, name: "MongoDB" },
      { icon: SiJsonwebtokens, name: "JWT" },
      { icon: FaBrain, name: "LLM Integration" },
    ],
  },

  {
    title: "HireConnect – Technical Hiring Platform",
    image: "/HireConnect.png",
    description:
      "A technical hiring and interview practice platform for the software industry that combines video conferencing, real time chat, and a live coding workspace in one environment. It includes AI powered code review, an AI chatbot for guidance, and an Interview Preparation Panel with expected questions and practice tools. The platform helps candidates improve coding quality, understand interview workflows, build confidence, and prepare effectively for real technical interviews successfully today.",
    liveUrl: "https://hireconnect-three.vercel.app/",
    githubUrl: "https://github.com/kithvin/HireConnect",
    tags: [
      "Full Stack (MERN)",
      "Video Conference",
      "Live Coding",
      "Chat",
      "AI Assistant Chatbot",
      "AI Powered Code Review",
    ],
    tech: [
      { icon: SiReact, name: "React" },
      { icon: SiVite, name: "Vite" },
      { icon: SiJavascript, name: "JavaScript" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
      { icon: SiNodedotjs, name: "Node.js" },
      { icon: SiExpress, name: "Express.js" },
      { icon: SiMongodb, name: "MongoDB" },
      { icon: FaBrain, name: "LLM Integration" },
    ],
  },

  {
    title: "Alumni Management System (AMSEM)",
    image: "/AMSEM.JPG",
    description:
      "A centralized alumni management system that integrates event management and alumni tracking into one platform. Includes news updates, volunteer opportunities, donation options, job board modules, reporting, and engagement tracking to support long-term alumni relationships.",
    liveUrl: "#",
    githubUrl: "#",
    tags: ["Alumni Tracking", "Event Management", "Reports", "Admin + User Views"],
    tech: [
      { icon: SiReact, name: "React" },
      { icon: SiVite, name: "Vite" },
      { icon: SiJavascript, name: "JavaScript" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
    ],
  },

  {
    title: "Job Board & Career Services Module",
    image: "/JobBoard.JPG",
    description:
      "A job posting and career services module where admins can create job listings, upload job posters, and manage posts. Users can browse opportunities, view job details, and apply through multiple methods such as email, phone calls, or direct contact.",
    liveUrl: "#",
    githubUrl: "#",
    tags: ["Job Listings", "File Upload", "Admin Tools", "Apply Methods"],
    tech: [
      { icon: SiReact, name: "React" },
      { icon: SiJavascript, name: "JavaScript" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
      { icon: SiAxios, name: "Axios" },
    ],
  },

  {
    title: "Portfolio Website – Modern Animated UI",
    image: "/Portfolio.JPG",
    description:
      "A modern portfolio website with smooth scrolling sections, responsive layout, and Framer Motion animations. Built to present projects, skills, and experience with a clean, recruiter-friendly design and strong visual hierarchy.",
    liveUrl: "#",
    githubUrl: "#",
    tags: ["Responsive UI", "Animations", "Clean Layout", "Personal Branding"],
    tech: [
      { icon: SiReact, name: "React" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
    ],
  },

  {
    title: "AI Interview Practice & Code Review Tool",
    image: "/AIInterview.JPG",
    description:
      "An AI-powered interview preparation and code review tool designed for software engineers. It provides a live coding editor, AI-generated interview questions, and automated feedback to help users practice before real interviews. The system simulates interview scenarios and delivers structured guidance to improve problem solving and code quality.",
    liveUrl: "#",
    githubUrl: "#",
    tags: [
      "AI Interview Practice",
      "Question Generator",
      "Live Coding",
      "AI Feedback",
      "Developer Training",
    ],
    tech: [
      { icon: SiReact, name: "React" },
      { icon: SiJavascript, name: "JavaScript" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
      { icon: SiNodedotjs, name: "Node.js" },
      { icon: SiExpress, name: "Express.js" },
      { icon: SiMongodb, name: "MongoDB" },
      { icon: FaBrain, name: "LLM Integration" },
    ],
  },
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = useMemo(() => {
    return showAll ? projects : projects.slice(0, 2);
  }, [showAll]);

  return (
    <section
      id="projects"
      className="relative min-h-screen overflow-hidden text-white scroll-mt-24"
    >
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-10">
        {/* Header Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-cyan-200 mx-auto">
          <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
          <p className="text-cyan-300 text-[13px] sm:text-[14px]">
            Portfolio Showcase | <span className="text-cyan-300">Projects</span>
          </p>
        </div>

        {/* Title */}
        <h1 className="mb-6 text-center text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          My{" "}
          <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
            Projects
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mb-14 max-w-2xl text-center text-sm text-white/70 sm:text-base">
          Selected projects that showcase structured development, clean UI, and
          real world problem solving with end to end thinking.
        </p>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {visibleProjects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 hover:border-white/20 transition"
            >
              <div className="relative w-full overflow-hidden bg-black/30">
                <div className="relative w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1400}
                    height={900}
                    className="w-full h-125 object-cover transition duration-700 ease-out group-hover:scale-[1.02] rounded-t-2xl"
                    priority
                  />
                </div>

                {/* overlay gradient */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                {/* glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute -inset-10 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.18),transparent_60%)]" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-cyan-300">
                  {project.title}
                </h2>

                {/* Tags */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Full Description */}
                <p className="mt-4 text-justify text-sm leading-6 text-white/70">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-5 flex flex-wrap gap-4">
                  {project.tech.map((t, i) => {
                    const Icon = t.icon;
                    return (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm text-white/70"
                      >
                        <Icon className="text-cyan-400 text-lg" />
                        {t.name}
                      </div>
                    );
                  })}
                </div>

                {/* Buttons */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    className="inline-flex rounded-full bg-cyan-400 px-4 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
                  >
                    Live Demo
                  </Link>

                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    className="inline-flex rounded-full border border-cyan-400 px-4 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
                  >
                    GitHub
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* More Projects button */}
        {projects.length > 2 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll((s) => !s)}
              className="rounded-full cursor-pointer border border-cyan-400 px-6 py-3.5 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
              type="button"
            >
              {showAll ? "Show Less" : "More Projects"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}