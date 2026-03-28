// "use client";

// import Image from "next/image";
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
//   SiNextdotjs,
//   SiNestjs,
//   SiTypescript,
//   SiStreamlit,
//   SiClerk,
//   SiStripe,
//   SiCloudinary,
//   SiZapier,
//   SiReactrouter,
//   SiOpenai,
// } from "react-icons/si";
// import { FaBrain } from "react-icons/fa";

// type Project = {
//   id: number;
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
//     id: 1,
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
//       "AI Assistant Chatbot",
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
//       { icon: SiReactrouter, name: "React Router" },
//       { icon: SiMongodb, name: "MongoDB" },
//       { icon: SiJsonwebtokens, name: "JWT" },
//       { icon: FaBrain, name: "LLM Integration" },
//     ],
//   },
//   {
//     id: 2,
//     title: "HireConnect – Technical Hiring Platform (Ongoing Development)",
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
//       { icon: SiAxios, name: "Axios" },
//       { icon: SiZapier, name: "Inngest" },
//       { icon: SiReactrouter, name: "React Router" },
//       { icon: SiStreamlit, name: "Stream Chat API" },
//       { icon: SiClerk, name: "Clerk Auth" },
//       { icon: FaBrain, name: "LLM Integration" },
//     ],
//   },
//   {
//     id: 3,
//     title: "AlumniHub - Alumni Relationship Platform (Ongoing Development)",
//     image: "/Alumni.JPG",
//     description:
//       "A centralized alumni management system that integrates event management and alumni tracking into a unified platform. It includes modules for news updates, volunteer opportunities, donations, job boards, reporting, and engagement tracking to support long term alumni relationships. The system also incorporates an AI powered chatbot that delivers real time assistance, answers user queries, and improves overall user experience through intelligent interaction.",
//     liveUrl: "https://alumnihub-frontend.vercel.app/",
//     githubUrl: "https://github.com/kithvin/AlumniHub",
//     tags: [
//       "Alumni Tracking",
//       "Event Management",
//       "Reports",
//       "Admin + User Views",
//       "AI Chatbot",
//     ],
//     tech: [
//       { icon: SiNextdotjs, name: "Next.js" },
//       { icon: SiNestjs, name: "NestJS" },
//       { icon: SiTypescript, name: "TypeScript" },
//       { icon: SiAxios, name: "Axios" },
//       { icon: SiJsonwebtokens, name: "JWT" },
//       { icon: SiMongodb, name: "MongoDB" },
//       { icon: FaBrain, name: "AI Integration" },
//     ],
//   },
//   {
//     id: 4,
//     title: "Groceasy - Grocery Shopping Platform",
//     image: "/Groceezy.png",
//     description:
//       "A modern grocery shopping platform built with the MERN stack, designed to simplify online grocery purchasing and store management. Customers can browse products, add items to their cart, and complete secure payments, while sellers efficiently manage inventory and orders through an intuitive dashboard. The platform is fast, mobile friendly, and focused on delivering a smooth and reliable grocery shopping experience for both customers and store owners.",
//     liveUrl: "https://groceezy-new.vercel.app/",
//     githubUrl: "https://github.com/kithvin/Groceezy-new",
//     tags: [
//       "Grocery Shopping Platform",
//       "Admin Dashboard",
//       "Inventory Management",
//       "Cart + Checkout",
//       "Responsive Design",
//     ],
//     tech: [
//       { icon: SiReact, name: "React" },
//       { icon: SiVite, name: "Vite" },
//       { icon: SiJavascript, name: "JavaScript" },
//       { icon: SiTailwindcss, name: "Tailwind CSS" },
//       { icon: SiAxios, name: "Axios" },
//       { icon: SiNodedotjs, name: "Node.js" },
//       { icon: SiExpress, name: "Express.js" },
//       { icon: SiMongodb, name: "MongoDB" },
//       { icon: SiReactrouter, name: "React Router" },
//       { icon: SiJsonwebtokens, name: "JWT" },
//       { icon: SiStripe, name: "Stripe" },
//       { icon: SiCloudinary, name: "Cloudinary" },
//     ],
//   },

//   {
//     id: 5,
//     title: "StyleCrate - Fashion Apparel Buying Platform",
//     image: "/Stylecrate.png",
//     description:
//       "A feature rich and responsive fashion Fashion Apparel Buying platform built with the MERN stack. StyleCrate provides a smooth shopping experience with product browsing, category filtering, cart management, and secure checkout, while also offering an admin dashboard for managing products, inventory, orders, and customers. The platform is designed for speed, usability, and scalability, making it suitable for boutiques, growing fashion stores, and larger product catalogs.",
//     liveUrl: "https://style-crate.vercel.app/",
//     githubUrl: "https://github.com/kithvin/StyleCrate",
//     tags: [
//       "Fashion Apparel Buying Platform",
//       "Admin Dashboard",
//       "Product Management",
//       "Cart + Checkout",
//       "Responsive Design",
//     ],
//     tech: [
//       { icon: SiReact, name: "React" },
//       { icon: SiVite, name: "Vite" },
//       { icon: SiJavascript, name: "JavaScript" },
//       { icon: SiTailwindcss, name: "Tailwind CSS" },
//       { icon: SiAxios, name: "Axios" },
//       { icon: SiNodedotjs, name: "Node.js" },
//       { icon: SiExpress, name: "Express.js" },
//       { icon: SiMongodb, name: "MongoDB" },
//       { icon: SiReactrouter, name: "React Router" },
//       { icon: SiJsonwebtokens, name: "JWT" },
//       { icon: SiStripe, name: "Stripe" },
//       { icon: SiCloudinary, name: "Cloudinary" },
//     ],
//   },

//   {
//     id: 6,
//     title: "QuickBlog - AI Powered Blogging Platform",
//     image: "/Quickblog.png",
//     description:
//       "QuickBlog is a smart AI powered blogging platform built with the MERN stack. It helps writers generate high quality content with AI suggestions, draft generation, and structured writing support. The platform provides personalized recommendations for readers, interactive comments, and smooth navigation. Admins can manage posts, users, and comments with powerful dashboard analytics. Designed for speed, responsiveness, and usability, QuickBlog delivers a complete blogging experience from writing to publishing.",
//     liveUrl: "https://quickblog-seven.vercel.app/",
//     githubUrl: "https://github.com/kithvin/QuickBlog.git",
//     tags: [
//       "AI Blogging Platform",
//       "Rich Text Editor",
//       "Admin Dashboard",
//       "Analytics",
//       "Comments System",
//       "Search + Filter",
//       "Responsive Design",
//     ],
//     tech: [
//       { icon: SiReact, name: "React" },
//       { icon: SiVite, name: "Vite" },
//       { icon: SiJavascript, name: "JavaScript" },
//       { icon: SiTailwindcss, name: "Tailwind CSS" },
//       { icon: SiReactrouter, name: "React Router" },
//       { icon: SiAxios, name: "Axios" },
//       { icon: SiNodedotjs, name: "Node.js" },
//       { icon: SiExpress, name: "Express.js" },
//       { icon: SiMongodb, name: "MongoDB" },
//       { icon: SiJsonwebtokens, name: "JWT" },
//       { icon: SiOpenai, name: "OpenAI" },
//       { icon: SiCloudinary, name: "Cloudinary" },
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
//       className="relative min-h-screen overflow-hidden scroll-mt-24 text-white"
//     >
//       <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-16 sm:px-6 sm:py-20 md:items-start md:px-10">
//         <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-cyan-200 md:mx-0">
//           <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
//           <p className="text-[13px] font-medium text-cyan-300 sm:text-[14px] md:text-[15px]">
//             Portfolio Showcase | <span className="text-cyan-300">Projects</span>
//           </p>
//         </div>

//         <h1 className="mb-6 text-center text-4xl font-semibold leading-tight sm:text-5xl md:text-left md:text-6xl">
//           My{" "}
//           <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
//             Projects
//           </span>
//         </h1>

//         <p className="mx-auto md:mx-0 mb-14 max-w-2xl text-center md:text-left text-sm text-white/70 sm:text-base md:whitespace-nowrap">
//           Selected projects that showcase structured development, clean UI, and
//           real world problem solving with end to end thinking.
//         </p>

//         <div className="grid w-full gap-6 sm:gap-8 md:grid-cols-2">
//           {visibleProjects.map((project) => (
//             <article
//               key={project.id}
//               className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition hover:border-white/20 hover:bg-white/10"
//             >
//               <div className="relative w-full overflow-hidden bg-black/30">
//                 <div className="relative w-full">
//                   <Image
//                     src={project.image}
//                     alt={project.title}
//                     width={1400}
//                     height={900}
//                     className="h-[260px] w-full rounded-t-2xl object-fit transition duration-700 ease-out group-hover:scale-[1.02] sm:h-[320px] md:h-[360px] lg:h-[420px]"
//                     priority
//                   />
//                 </div>

//                 <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

//                 <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
//                   <div className="absolute -inset-10 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.18),transparent_60%)]" />
//                 </div>
//               </div>

//               <div className="p-6">
//                 <h2 className="text-2xl font-semibold leading-snug text-cyan-300">
//                   {project.title}
//                 </h2>

//                 <div className="mt-3 flex flex-wrap gap-2">
//                   {project.tags.map((tag) => (
//                     <span
//                       key={`${project.id}-${tag}`}
//                       className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/70"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 <p className="mt-4 text-justify text-sm leading-7 text-white/70">
//                   {project.description}
//                 </p>

//                 {/* <div className="mt-5 flex flex-wrap gap-x-4 gap-y-3">
//                   {project.tech.map((t, i) => {
//                     const Icon = t.icon;
//                     return (
//                       <div
//                         key={`${project.id}-${t.name}-${i}`}
//                         className="flex items-center gap-2 text-sm text-white/80"
//                       >
//                         <Icon className="text-cyan-400" size={18} />
//                         <span>{t.name}</span>
//                       </div>
//                     );
//                   })}
//                 </div> */}

//                 <div className="mt-5 grid grid-cols-2 sm:flex sm:flex-wrap gap-x-4 gap-y-3">
//                   {project.tech.map((t, i) => {
//                     const Icon = t.icon;
//                     return (
//                       <div
//                         key={`${project.id}-${t.name}-${i}`}
//                         className="flex items-center gap-2 text-sm text-white/80"
//                       >
//                         <div className="w-5 flex justify-center">
//                           <Icon className="text-cyan-400" size={18} />
//                         </div>

//                         <span>{t.name}</span>
//                       </div>
//                     );
//                   })}
//                 </div>

//                 <div className="mt-7 flex flex-col gap-3 sm:flex-row">
//                   <a
//                     href={project.liveUrl}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="inline-flex items-center justify-center rounded-full border border-cyan-400 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
//                   >
//                     Live Demo
//                   </a>

//                   <a
//                     href={project.githubUrl}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
//                   >
//                     GitHub
//                   </a>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>

//         {projects.length > 2 && (
//           <div className="mt-10 flex w-full justify-center">
//             <button
//               type="button"
//               onClick={() => setShowAll((prev) => !prev)}
//               className="cursor-pointer inline-flex items-center justify-center rounded-full border border-cyan-400 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
//             >
//               {showAll ? "Show Less" : "View More Projects"}
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
  SiGithub,
  SiVercel,
  SiReadthedocs,
} from "react-icons/si";
import { FaBrain } from "react-icons/fa";

type Project = {
  id: number;
  title: string;
  slug: string;
  image: string;
  description: string;
  content: string;
  liveUrl: string;
  githubUrl: string;
  tags: string[];
  tech: { icon: any; name: string }[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "FinSage – AI Powered Wealth Management System",
    slug: "finsage-ai-powered-wealth-management-system",
    image: "/Finsage.JPG",
    description:
      "A full featured AI powered wealth management platform that centralizes income, assets, liabilities, and credit card data into one intelligent, easy to understand dashboard.",
    content: `FinSage – AI Powered Wealth Management System

FinSage is a full featured AI powered wealth management platform designed to help users understand and manage their financial life from one centralized system.

The platform brings together income, assets, liabilities, and credit card data into one structured dashboard. Instead of showing raw numbers only, it transforms financial data into meaningful reports, visual summaries, and guided insights.

One of the key features of FinSage is the AI chatbot and recommendation engine. These components analyze user financial data and provide structured financial guidance, practical suggestions, and actionable insights to support better decision making.

The system is designed to work smoothly across devices, giving users a responsive and user friendly experience. It helps users track progress, understand their financial condition clearly, and make informed financial decisions with long term confidence.

Main Features

1. Centralized financial dashboard
2. AI chatbot for financial guidance
3. AI powered recommendation engine
4. Reports and visual insights
5. Responsive user experience
6. JWT based authentication`,
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
    title: "HireConnect – Technical Hiring Platform",
    slug: "hireconnect-technical-hiring-platform",
    image: "/HireConnect.png",
    description:
      "A technical hiring and interview practice platform for the software industry that combines video conferencing, real time chat, and a live coding workspace in one environment.",
    content: `HireConnect – Technical Hiring Platform

HireConnect is a technical hiring and interview practice platform created for the software industry. It combines multiple important features into one unified environment to support both hiring and preparation workflows.

The platform includes video conferencing, real time chat, and a live coding workspace. These features help simulate real technical interview environments and create a practical experience for users.

It also includes AI powered code review and an AI chatbot for guidance. In addition, the Interview Preparation Panel supports candidates with expected questions, learning support, and practice tools to improve readiness for interviews.

The goal of the platform is to help candidates improve coding quality, understand interview workflows, build confidence, and prepare more effectively for real technical interviews.

Main Features

1. Video conferencing
2. Real time chat
3. Live coding workspace
4. AI powered code review
5. AI chatbot guidance
6. Interview preparation tools`,
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
    title: "AlumniHub - Alumni Relationship Platform",
    slug: "alumnihub-alumni-relationship-platform",
    image: "/Alumni.JPG",
    description:
      "A centralized alumni management system that integrates event management and alumni tracking into a unified platform.",
    content: `AlumniHub - Alumni Relationship Platform

AlumniHub is a centralized alumni management system designed to connect institutions and alumni through one unified digital platform.

The system combines event management and alumni tracking while also supporting modules for news updates, volunteer opportunities, donations, job boards, reporting, and engagement tracking.

It is designed to support long term alumni relationships and provide a structured system for communication, activity management, and community engagement.

The platform also includes an AI powered chatbot that offers real time assistance, responds to user questions, and improves overall user experience through intelligent interaction.

Main Features

1. Alumni tracking
2. Event management
3. News updates
4. Volunteer opportunities
5. Donations and job board support
6. Reporting and engagement tracking
7. AI chatbot support`,
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
    slug: "groceasy-grocery-shopping-platform",
    image: "/Groceezy.png",
    description:
      "A modern grocery shopping platform built with the MERN stack, designed to simplify online grocery purchasing and store management.",
    content: `Groceasy - Grocery Shopping Platform

Groceasy is a modern grocery shopping platform built with the MERN stack to simplify online grocery purchasing and store management.

Customers can browse products, add items to their cart, and complete secure payments through a smooth and responsive shopping experience.

For sellers and administrators, the platform provides tools for managing products, inventory, and orders through a clean dashboard.

The system is designed for reliability, usability, and mobile responsiveness, making it useful for both customers and store owners.

Main Features

1. Product browsing
2. Cart and checkout
3. Secure payment integration
4. Inventory management
5. Admin dashboard
6. Responsive design`,
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
    slug: "stylecrate-fashion-apparel-buying-platform",
    image: "/Stylecrate.png",
    description:
      "A feature rich and responsive fashion apparel buying platform built with the MERN stack.",
    content: `StyleCrate - Fashion Apparel Buying Platform

StyleCrate is a responsive fashion apparel buying platform built with the MERN stack and designed to provide a smooth shopping experience for users and administrators.

Users can browse products, filter categories, manage carts, and complete secure checkout processes.

The platform also includes an admin dashboard for managing products, inventory, customer activity, and orders efficiently.

It is designed for usability, scalability, and performance, making it suitable for boutiques and growing online stores.

Main Features

1. Product browsing
2. Category filtering
3. Cart management
4. Secure checkout
5. Product and inventory management
6. Admin dashboard`,
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
    slug: "quickblog-ai-powered-blogging-platform",
    image: "/Quickblog.png",
    description:
      "QuickBlog is a smart AI powered blogging platform built with the MERN stack.",
    content: `QuickBlog - AI Powered Blogging Platform

QuickBlog is an AI powered blogging platform built with the MERN stack to support both content writers and readers through a smarter blogging experience.

The platform helps writers generate and improve content using AI suggestions, draft support, and structured writing assistance.

Readers benefit from smooth navigation, recommendations, and interactive comments, while administrators can manage posts, users, and comments through dashboard tools.

The project focuses on usability, responsiveness, and a complete writing to publishing workflow.

Main Features

1. AI writing support
2. Draft generation
3. Personalized recommendations
4. Comments system
5. Admin dashboard
6. Analytics and content management`,
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

        <p className="mb-8 w-full max-w-[62ch] text-center text-[13px] leading-6 text-white/70 sm:mb-14 sm:text-sm sm:leading-7 md:max-w-none md:text-base md:text-left">
          Selected projects that showcase structured development, clean UI, and
          real world problem solving with end to end thinking.
        </p>

        <div className="grid w-full gap-6 sm:gap-8 md:grid-cols-2">
          {visibleProjects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition hover:border-white/20 hover:bg-white/10"
            >
              <Link href={`/projects/${project.slug}`} className="block">
                <div className="relative w-full overflow-hidden bg-black/30">
                  <div className="relative w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1400}
                      height={900}
                      className="h-[260px] w-full rounded-t-2xl object-cover transition duration-700 ease-out group-hover:scale-[1.02] sm:h-[320px] md:h-[360px] lg:h-[420px]"
                      priority
                    />
                  </div>

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                  <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                    <div className="absolute -inset-10 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.18),transparent_60%)]" />
                  </div>
                </div>
              </Link>

              <div className="p-6">
                <Link href={`/projects/${project.slug}`}>
                  <h2 className="text-2xl font-semibold leading-snug text-cyan-300 transition hover:text-cyan-200">
                    {project.title}
                  </h2>
                </Link>

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

                <p className="font-semibold mt-4 text-justify text-sm leading-7 text-white/70">
                  {project.description}
                </p>

                <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 sm:flex sm:flex-wrap">
                  {project.tech.map((t, i) => {
                    const Icon = t.icon;
                    return (
                      <div
                        key={`${project.id}-${t.name}-${i}`}
                        className="flex items-center justify-center gap-2 text-sm text-white/80 sm:justify-start"
                      >
                        <div className="flex w-5 justify-center">
                          <Icon className="text-cyan-400" size={18} />
                        </div>
                        <span>{t.name}</span>
                      </div>
                    );
                  })}
                </div>

                {/* <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
                  >
                    View Project
                  </Link>

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
                </div> */}

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
                  >
                    <SiReadthedocs className="text-base" />
                    View Project
                  </Link>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
                  >
                    <SiVercel className="text-base" />
                    Live Demo
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
                  >
                    <SiGithub className="text-base" />
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
              className="inline-flex cursor-pointer items-center justify-center rounded-full border border-cyan-400 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
            >
              {showAll ? "Show Less" : "View More Projects"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
