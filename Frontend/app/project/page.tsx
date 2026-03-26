"use client";

import Image from "next/image";
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
  SiNextdotjs,
  SiNestjs,
  SiTypescript,
  SiStreamlit,
  SiClerk,
  SiStripe,
  SiCloudinary,
  SiZapier,
  SiReactrouter,
  SiOpenai,
} from "react-icons/si";
import { FaBrain } from "react-icons/fa";

type Project = {
  id: number;
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
    id: 1,
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
      "AI Assistant Chatbot",
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
      { icon: SiReactrouter, name: "React Router" },
      { icon: SiMongodb, name: "MongoDB" },
      { icon: SiJsonwebtokens, name: "JWT" },
      { icon: FaBrain, name: "LLM Integration" },
    ],
  },
  {
    id: 2,
    title: "HireConnect – Technical Hiring Platform (Ongoing Development)",
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
      { icon: SiAxios, name: "Axios" },
      { icon: SiZapier, name: "Inngest" },
      { icon: SiReactrouter, name: "React Router" },
      { icon: SiStreamlit, name: "Stream Chat API" },
      { icon: SiClerk, name: "Clerk Auth" },
      { icon: FaBrain, name: "LLM Integration" },
    ],
  },
  {
    id: 3,
    title: "AlumniHub - Alumni Relationship Platform (Ongoing Development)",
    image: "/Alumni.JPG",
    description:
      "A centralized alumni management system that integrates event management and alumni tracking into a unified platform. It includes modules for news updates, volunteer opportunities, donations, job boards, reporting, and engagement tracking to support long term alumni relationships. The system also incorporates an AI powered chatbot that delivers real time assistance, answers user queries, and improves overall user experience through intelligent interaction.",
    liveUrl: "https://alumnihub-frontend.vercel.app/",
    githubUrl: "https://github.com/kithvin/AlumniHub",
    tags: [
      "Alumni Tracking",
      "Event Management",
      "Reports",
      "Admin + User Views",
      "AI Chatbot",
    ],
    tech: [
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiNestjs, name: "NestJS" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiAxios, name: "Axios" },
      { icon: SiJsonwebtokens, name: "JWT" },
      { icon: SiMongodb, name: "MongoDB" },
      { icon: FaBrain, name: "AI Integration" },
    ],
  },
  {
    id: 4,
    title: "Groceasy - Grocery Shopping Platform",
    image: "/Groceezy.png",
    description:
      "A modern grocery shopping platform built with the MERN stack, designed to simplify online grocery purchasing and store management. Customers can browse products, add items to their cart, and complete secure payments, while sellers efficiently manage inventory and orders through an intuitive dashboard. The platform is fast, mobile friendly, and focused on delivering a smooth and reliable grocery shopping experience for both customers and store owners.",
    liveUrl: "https://groceezy-new.vercel.app/",
    githubUrl: "https://github.com/kithvin/Groceezy-new",
    tags: [
      "Grocery Shopping Platform",
      "Admin Dashboard",
      "Inventory Management",
      "Cart + Checkout",
      "Responsive Design",
    ],
    tech: [
      { icon: SiReact, name: "React" },
      { icon: SiVite, name: "Vite" },
      { icon: SiJavascript, name: "JavaScript" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
      { icon: SiAxios, name: "Axios" },
      { icon: SiNodedotjs, name: "Node.js" },
      { icon: SiExpress, name: "Express.js" },
      { icon: SiMongodb, name: "MongoDB" },
      { icon: SiReactrouter, name: "React Router" },
      { icon: SiJsonwebtokens, name: "JWT" },
      { icon: SiStripe, name: "Stripe" },
      { icon: SiCloudinary, name: "Cloudinary" },
    ],
  },

  {
    id: 5,
    title: "StyleCrate - Fashion Apparel Buying Platform",
    image: "/Stylecrate.png",
    description:
      "A feature rich and responsive fashion Fashion Apparel Buying platform built with the MERN stack. StyleCrate provides a smooth shopping experience with product browsing, category filtering, cart management, and secure checkout, while also offering an admin dashboard for managing products, inventory, orders, and customers. The platform is designed for speed, usability, and scalability, making it suitable for boutiques, growing fashion stores, and larger product catalogs.",
    liveUrl: "https://style-crate.vercel.app/",
    githubUrl: "https://github.com/kithvin/StyleCrate",
    tags: [
      "Fashion Apparel Buying Platform",
      "Admin Dashboard",
      "Product Management",
      "Cart + Checkout",
      "Responsive Design",
    ],
    tech: [
      { icon: SiReact, name: "React" },
      { icon: SiVite, name: "Vite" },
      { icon: SiJavascript, name: "JavaScript" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
      { icon: SiAxios, name: "Axios" },
      { icon: SiNodedotjs, name: "Node.js" },
      { icon: SiExpress, name: "Express.js" },
      { icon: SiMongodb, name: "MongoDB" },
      { icon: SiReactrouter, name: "React Router" },
      { icon: SiJsonwebtokens, name: "JWT" },
      { icon: SiStripe, name: "Stripe" },
      { icon: SiCloudinary, name: "Cloudinary" },
    ],
  },

  {
    id: 6,
    title: "QuickBlog - AI Powered Blogging Platform",
    image: "/Quickblog.png",
    description:
      "QuickBlog is a smart AI powered blogging platform built with the MERN stack. It helps writers generate high quality content with AI suggestions, draft generation, and structured writing support. The platform provides personalized recommendations for readers, interactive comments, and smooth navigation. Admins can manage posts, users, and comments with powerful dashboard analytics. Designed for speed, responsiveness, and usability, QuickBlog delivers a complete blogging experience from writing to publishing.",
    liveUrl: "https://quickblog-seven.vercel.app/",
    githubUrl: "https://github.com/kithvin/QuickBlog.git",
    tags: [
      "AI Blogging Platform",
      "Rich Text Editor",
      "Admin Dashboard",
      "Analytics",
      "Comments System",
      "Search + Filter",
      "Responsive Design",
    ],
    tech: [
      { icon: SiReact, name: "React" },
      { icon: SiVite, name: "Vite" },
      { icon: SiJavascript, name: "JavaScript" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
      { icon: SiReactrouter, name: "React Router" },
      { icon: SiAxios, name: "Axios" },
      { icon: SiNodedotjs, name: "Node.js" },
      { icon: SiExpress, name: "Express.js" },
      { icon: SiMongodb, name: "MongoDB" },
      { icon: SiJsonwebtokens, name: "JWT" },
      { icon: SiOpenai, name: "OpenAI" },
      { icon: SiCloudinary, name: "Cloudinary" },
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
      className="relative min-h-screen overflow-hidden scroll-mt-24 text-white"
    >
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-16 sm:px-6 sm:py-20 md:items-start md:px-10">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-cyan-200 md:mx-0">
          <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
          <p className="text-[13px] font-medium text-cyan-300 sm:text-[14px] md:text-[15px]">
            Portfolio Showcase | <span className="text-cyan-300">Projects</span>
          </p>
        </div>

        <h1 className="mb-6 text-center text-4xl font-semibold leading-tight sm:text-5xl md:text-left md:text-6xl">
          My{" "}
          <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
            Projects
          </span>
        </h1>

        <p className="mx-auto md:mx-0 mb-14 max-w-2xl text-center md:text-left text-sm text-white/70 sm:text-base md:whitespace-nowrap">
          Selected projects that showcase structured development, clean UI, and
          real world problem solving with end to end thinking.
        </p>

        <div className="grid w-full gap-6 sm:gap-8 md:grid-cols-2">
          {visibleProjects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition hover:border-white/20 hover:bg-white/10"
            >
              <div className="relative w-full overflow-hidden bg-black/30">
                <div className="relative w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1400}
                    height={900}
                    className="h-[260px] w-full rounded-t-2xl object-fit transition duration-700 ease-out group-hover:scale-[1.02] sm:h-[320px] md:h-[360px] lg:h-[420px]"
                    priority
                  />
                </div>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute -inset-10 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.18),transparent_60%)]" />
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-semibold leading-snug text-cyan-300">
                  {project.title}
                </h2>

                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={`${project.id}-${tag}`}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="mt-4 text-justify text-sm leading-7 text-white/70">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-x-4 gap-y-3">
                  {project.tech.map((t, i) => {
                    const Icon = t.icon;
                    return (
                      <div
                        key={`${project.id}-${t.name}-${i}`}
                        className="flex items-center gap-2 text-sm text-white/80"
                      >
                        <Icon className="text-cyan-400" size={18} />
                        <span>{t.name}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-cyan-400 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {projects.length > 2 && (
          <div className="mt-10 flex w-full justify-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="cursor-pointer inline-flex items-center justify-center rounded-full border border-cyan-400 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
            >
              {showAll ? "Show Less" : "View More Projects"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
