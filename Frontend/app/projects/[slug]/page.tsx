import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleNavbar from "@/components/article-navbar/page";
import { Footer } from "@/components/footer/page";
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
import { FaBrain, FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

type ProjectSection =
  | { type: "paragraph"; content: string }
  | { type: "list"; items: string[] }
  | { type: "subheading"; content: string };

type TechItem = {
  icon: any;
  name: string;
};

type Project = {
  id: number;
  title: string;
  slug: string;
  image: string;
  date: string;
  liveUrl: string;
  githubUrl: string;
  content: string;
  tech: TechItem[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "FinSage – AI Powered Wealth Management System",
    slug: "finsage-ai-powered-wealth-management-system",
    image: "/Finsage.JPG",
    date: "March 28, 2026",
    liveUrl: "https://finsage-phi.vercel.app/",
    githubUrl: "https://github.com/kithvin/Finsage",
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
    date: "March 28, 2026",
    liveUrl: "https://hireconnect-three.vercel.app/",
    githubUrl: "https://github.com/kithvin/HireConnect",
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
    date: "March 28, 2026",
    liveUrl: "https://alumnihub-frontend.vercel.app/",
    githubUrl: "https://github.com/kithvin/AlumniHub",
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
    date: "March 28, 2026",
    liveUrl: "https://groceezy-new.vercel.app/",
    githubUrl: "https://github.com/kithvin/Groceezy-new",
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
    date: "March 28, 2026",
    liveUrl: "https://style-crate.vercel.app/",
    githubUrl: "https://github.com/kithvin/StyleCrate",
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
    date: "March 28, 2026",
    liveUrl: "https://quickblog-seven.vercel.app/",
    githubUrl: "https://github.com/kithvin/QuickBlog.git",
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

function parseProjectContent(content: string) {
  const blocks = content
    .trim()
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean);

  const title = blocks[0] ?? "";
  const bodyBlocks = blocks.slice(1);

  const sections: ProjectSection[] = [];

  for (const block of bodyBlocks) {
    const lines = block
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);

    const isNumberList =
      lines.length > 1 && lines.every((line) => /^\d+\.\s+/.test(line));

    const isSubheading =
      lines.length === 1 &&
      !/[.!:?]$/.test(lines[0]) &&
      lines[0].length < 40 &&
      !/^\d+\.\s+/.test(lines[0]);

    if (isNumberList) {
      sections.push({
        type: "list",
        items: lines.map((line) => line.replace(/^\d+\.\s+/, "").trim()),
      });
      continue;
    }

    if (isSubheading) {
      sections.push({
        type: "subheading",
        content: lines[0],
      });
      continue;
    }

    sections.push({
      type: "paragraph",
      content: lines.join(" "),
    });
  }

  return { title, sections };
}

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const { title: contentTitle, sections } = parseProjectContent(project.content);

  return (
    <>
      <ArticleNavbar />

      <section className="relative min-h-screen overflow-hidden bg-black text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_top_right,rgba(99,102,241,0.14),transparent_40%),linear-gradient(to_bottom,rgba(4,8,15,1),rgba(6,10,20,1))]" />

        <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <div className="mb-8 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
              <span className="text-cyan-300">Project Details</span>
            </div>

            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-white/70 backdrop-blur-md">
              Updated : {project.date}
            </div>
          </div>

          <h1 className="mb-6 text-center text-2xl font-semibold leading-snug sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
              {project.title}
            </span>
          </h1>

          <div className="relative mb-8 aspect-[16/9] w-full overflow-hidden rounded-[28px] border border-white/10 sm:h-[320px] lg:h-[720px]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          </div>

          <div className="mb-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
            >
              <FiExternalLink size={18} />
              Live Demo
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
            >
              <FaGithub size={18} />
              GitHub
            </a>
          </div>

          <div className="w-full rounded-[28px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md sm:p-8 lg:p-10">
            <h2 className="mb-6 text-center text-xl font-semibold leading-snug text-white sm:text-2xl md:text-3xl">
              {contentTitle}
            </h2>

            <div className="space-y-8">
              {sections.map((section, index) => {
                if (section.type === "paragraph") {
                  return (
                    <p
                      key={index}
                      className="text-justify text-sm leading-8 text-white/75 sm:text-base md:text-lg"
                    >
                      {section.content}
                    </p>
                  );
                }

                if (section.type === "subheading") {
                  if (section.content.toLowerCase().includes("technologies used")) {
                    return null;
                  }

                  const isMainFeatures = section.content
                    .toLowerCase()
                    .includes("main features");

                  return (
                    <h3
                      key={index}
                      className={`pt-2 text-lg font-semibold sm:text-xl ${
                        isMainFeatures
                          ? "text-center text-cyan-300"
                          : "text-cyan-300"
                      }`}
                    >
                      {section.content}
                    </h3>
                  );
                }

                const previousSection = sections[index - 1];
                const previousHeading =
                  previousSection?.type === "subheading"
                    ? previousSection.content.toLowerCase()
                    : "";

                const isMainFeatures =
                  previousHeading.includes("main features");

                if (isMainFeatures) {
                  return (
                    <div
                      key={index}
                      className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2"
                    >
                      {section.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex min-h-[72px] items-center justify-center rounded-2xl border border-cyan-400/20 bg-white/[0.03] px-4 py-4 text-center text-sm text-white/80 backdrop-blur-md transition hover:border-cyan-400/40 hover:bg-white/[0.06] sm:text-base"
                        >
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  );
                }

                return (
                  <ul
                    key={index}
                    className="space-y-3 pl-5 text-sm leading-8 text-white/75 marker:text-cyan-300 sm:text-base md:text-lg"
                  >
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="list-disc">
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              })}

              <h3 className="pt-2 text-center text-lg font-semibold text-cyan-300 sm:text-xl">
                Technologies Used
              </h3>

              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2">
                {project.tech.map((tech, techIndex) => {
                  const Icon = tech.icon;

                  return (
                    <div
                      key={`${tech.name}-${techIndex}`}
                      className="flex min-h-[72px] items-center justify-center gap-3 rounded-2xl border border-cyan-400/20 bg-white/[0.03] px-5 py-4 text-white/80 backdrop-blur-md transition hover:border-cyan-400/40 hover:bg-white/[0.06]"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-400/10">
                        <Icon className="text-cyan-400" size={20} />
                      </div>

                      <span className="text-sm sm:text-base">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/#projects"
              className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-300 transition duration-300 hover:bg-cyan-400 hover:text-black"
            >
              Back to Projects
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}