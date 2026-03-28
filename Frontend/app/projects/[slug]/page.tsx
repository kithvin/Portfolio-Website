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
  
    FinSage is a full featured AI powered wealth management platform designed to help users clearly understand, organize, and improve their financial health from one centralized system. Built using a modern MERN based architecture, the platform combines income, assets, liabilities, and credit card data into a single intelligent dashboard, giving users a complete real time view of their financial situation. Instead of relying on multiple tools, FinSage structures financial data into clear visual summaries and reports that make it easier to track progress, understand net worth, and make informed financial decisions.

    Unlike traditional budgeting applications, FinSage goes beyond simple expense tracking by transforming raw financial data into meaningful insights. The platform includes AI powered features such as a chatbot assistant and a financial recommendation engine that analyze user data and provide practical, data driven guidance. These intelligent tools help users identify risks, improve money management habits, and take better actions toward long term financial stability while maintaining clarity and usability.

    The system also provides visual analytics, financial health insights, and structured reporting to help users monitor assets, liabilities, income flow, and overall financial performance. FinSage is designed with a responsive and user friendly interface, ensuring smooth access across desktop and mobile devices. With its smart dashboard, AI driven support, and modern MERN based architecture, FinSage offers a more intelligent and streamlined approach to personal wealth management.

    Technically, FinSage is built with React.js, Vite, and Tailwind CSS on the frontend, delivering a fast and responsive user experience with clean UI components and financial charts. The backend is powered by Node.js and Express.js, with MongoDB used for structured data storage and JWT based authentication for secure access. AI capabilities are integrated using Google Generative AI to provide intelligent chatbot responses and financial recommendations, and the architecture is designed to be scalable for future cloud based AI enhancements.
  
    Main Features
    
    1. Centralized financial dashboard  
    2. AI chatbot for financial guidance  
    3. AI powered recommendation engine  
    4. Financial reports and visual insights  
    5. Responsive user experience  
    6. JWT based authentication  
    7. REST API architecture  
    8. Real time financial analysis`,
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
      { icon: FaBrain, name: "AI / LLM Integration" },
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

    HireConnect is a technical hiring and interview practice platform designed for the software industry, combining multiple interview and preparation tools into one unified environment. The platform brings together video conferencing, real time chat, and a live coding workspace to simulate real technical interview conditions. This integrated approach allows candidates and interviewers to collaborate in a structured setting that closely mirrors actual hiring processes, making the experience more practical and effective. By centralizing communication and coding in a single interface, HireConnect simplifies technical interviews while improving workflow efficiency.

    Beyond basic interview simulation, HireConnect also integrates AI powered features to enhance learning and evaluation. The platform includes AI based code review that helps users analyze their solutions, identify improvements, and follow better coding practices. An AI chatbot provides guidance, supports problem solving, and assists candidates during interview preparation. Additionally, the Interview Preparation Panel offers expected questions, structured learning support, and practice tools that help users strengthen technical knowledge and improve readiness for real world interviews.

    The platform is built using a modern full stack architecture with React and Vite on the frontend, styled using Tailwind CSS and enhanced with libraries such as Monaco Editor for live coding and Stream Video SDK for real time video interviews. Real time messaging is powered by Stream Chat, while Clerk handles secure authentication and user management. On the backend, HireConnect uses Node.js and Express with MongoDB and Mongoose for scalable data management. AI capabilities are integrated using Google Generative AI, and event driven workflows are supported through Inngest. Together, these technologies enable HireConnect to deliver a fast, interactive, and intelligent environment for technical hiring and interview preparation.

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

    This alumni management system is a centralized platform designed to help institutions manage alumni records, organize events, and maintain stronger long term engagement through one unified system. It combines alumni tracking and event management into a structured environment where institutions can store and manage alumni information efficiently while also planning and handling alumni related activities in a more organized way. By bringing these core functions together, the platform improves administrative workflows and supports better communication between institutions and their alumni communities.

    The platform provides dedicated admin and user views to support different roles within the system. Administrators can manage alumni profiles, create and organize events, track participation, and generate reports for better decision making. Users can update their information, view upcoming events, and stay connected with the institution. This role based structure helps maintain data accuracy while improving usability and overall system organization.

    An AI chatbot is also integrated into the platform to provide interactive assistance and improve user experience. The chatbot can help users navigate features, answer common questions, and provide guidance related to events or alumni information. In addition, reporting functionality helps administrators analyze engagement levels, track alumni participation, and monitor overall platform activity. These insights help institutions improve planning and strengthen alumni relationships over time.
    Technically, the system is being built using Next.js for the frontend with a modern responsive UI, while NestJS powers the backend with a scalable and structured architecture. TypeScript is used across the project to maintain clean and maintainable code, and Axios handles API communication between frontend and backend services. JWT based authentication ensures secure access, and MongoDB is used to manage alumni records, event data, and system information efficiently.

    Since the project is currently ongoing, the architecture is designed to be flexible and extendable. New dependencies, features, and AI capabilities can be added as development continues. The platform aims to evolve into a complete alumni engagement solution with enhanced analytics, smarter communication tools, and improved event management capabilities, providing institutions with a modern and intelligent approach to alumni tracking and community building.

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

    Groceasy is a modern grocery shopping platform built using the MERN stack, designed to simplify online grocery purchasing while also providing powerful store management capabilities. The platform allows users to browse grocery products, add items to their cart, and complete purchases through a smooth checkout experience. With a clean and responsive interface, customers can easily explore categories, search for products, and manage their orders. The system focuses on usability and convenience, making everyday grocery shopping faster and more efficient.

    The platform includes a smart cart and checkout system with secure Stripe powered payments, allowing users to place orders safely. Customers can track their selected items, update quantities in real time, and complete transactions without friction. The responsive design ensures the application works smoothly across desktop and mobile devices, providing a consistent experience regardless of screen size. This makes the platform suitable for both quick purchases and full grocery planning.

    Groceasy also provides a dedicated admin dashboard for store management. Administrators can manage product listings, update inventory, upload product images, and monitor customer orders from one centralized panel. Inventory management features allow sellers to add, edit, and delete products while keeping stock levels organized. The order dashboard helps track pending, processed, and completed orders, improving operational efficiency and store control.

    Technically, the platform is built with React and Vite on the frontend, styled using Tailwind CSS for a modern responsive UI. React Router handles navigation, and Axios manages API communication. The backend is powered by Node.js and Express.js, with MongoDB used for storing product, order, and user data. JWT authentication ensures secure admin access, while Stripe integration handles payment processing. Cloudinary is used for product image uploads and media storage, completing a full featured and scalable grocery shopping solution.

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

    StyleCrate is a feature rich and responsive fashion apparel buying platform built using the MERN stack, designed to provide a smooth and modern online shopping experience. The platform allows users to browse fashion products across organized categories, filter items based on preferences, and view detailed product information before making a purchase. With a clean interface and mobile optimized design, users can easily explore collections, add items to the cart, and complete checkout seamlessly across different devices. The system focuses on usability, performance, and visually appealing product presentation to enhance the overall shopping experience.

    The platform includes a smart cart and secure checkout flow that enables users to manage selected items, update quantities, and place orders efficiently. Category filtering and product search help users quickly find items, while responsive layouts ensure consistent performance on desktop, tablet, and mobile screens. The application is designed to make browsing and purchasing simple, allowing customers to move from product discovery to checkout without friction. This creates a fast and convenient shopping workflow for fashion customers.

    StyleCrate also provides a dedicated admin dashboard for managing store operations. Administrators can add new products, update inventory, upload product images, and manage customer orders from one centralized interface. Product management features allow full control over listings, categories, and pricing, while order management helps track purchase activity and monitor store performance. This admin panel simplifies store maintenance and supports efficient inventory control.

    Technically, the platform is built with React and Vite on the frontend, styled using Tailwind CSS for a modern responsive UI. React Router handles navigation, and Axios manages API communication between frontend and backend services. The backend is powered by Node.js and Express.js, with MongoDB used for storing products, users, and orders. JWT authentication ensures secure admin access, Stripe integration enables secure payment processing, and Cloudinary is used for product image uploads and media storage, creating a scalable and complete fashion e commerce solution.

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

    QuickBlog is a smart AI powered blogging platform built using the MERN stack, designed to help users create, manage, and publish content more efficiently. The platform combines traditional blogging features with AI assisted content generation, allowing writers to draft posts faster and improve content quality. Users can create, edit, and publish articles using a rich text editor with formatting support, while category organization and search functionality make it easier to manage and discover content. The responsive design ensures a smooth reading and writing experience across desktop and mobile devices.

    The platform includes an admin dashboard with analytics to track post performance, user engagement, and overall activity. Content creators can monitor views, comments, and interaction levels, while administrators can manage posts and control publishing. A built in comments system allows readers to interact with articles, creating a more engaging blogging experience. Search and filter features help users quickly find posts by title, category, or keywords, improving accessibility and content discovery.

    QuickBlog also integrates AI powered writing assistance using OpenAI, helping users generate ideas, draft content, and improve structure during the writing process. This AI support makes blogging faster while maintaining flexibility for manual editing. The platform is designed to support the full blogging workflow, from content creation to publishing and audience interaction, making it suitable for personal blogs, technical articles, and content driven platforms.

    Technically, QuickBlog is built with React and Vite on the frontend, styled using Tailwind CSS for a modern responsive interface. React Router handles navigation, and Axios manages API communication. The backend is powered by Node.js and Express.js, with MongoDB used for storing posts, users, and comments. JWT authentication ensures secure access, OpenAI integration provides AI content generation, and Cloudinary is used for image uploads and media storage, creating a complete AI driven blogging platform.

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

  const { title: contentTitle, sections } = parseProjectContent(
    project.content
  );

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

          <div className="relative mb-8 aspect-[16/10] w-full overflow-hidden rounded-[28px] border border-white/10 sm:h-[320px] lg:h-[720px]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-fit"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
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
                  if (
                    section.content.toLowerCase().includes("technologies used")
                  ) {
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
              <div className="mb-4 flex flex-col justify-center gap-3 sm:flex-row">
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
