import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleNavbar from "@/components/article-navbar/page";
import { Footer } from "@/components/footer/page";

type ArticleSection =
  | { type: "paragraph"; content: string }
  | { type: "list"; items: string[] }
  | { type: "subheading"; content: string };

const articles = [
  {
    id: 1,
    title: "A Smarter Way to Sync Authentication Data",
    content: `A Smarter Way to Sync Authentication Data

I wanted to share a quick insight into a few technologies that have been extremely helpful in my recent work. While building a system using Clerk for authentication and MongoDB for data storage, I faced a common challenge. The challenge is keeping user data perfectly synchronized between the two platforms.

Clerk simplifies authentication by handling signups, logins, sessions, and social auth out of the box, saving significant development time and reducing security risks. MongoDB stores application level user data efficiently and scales well. However, keeping both systems in sync, especially when users update profiles or account details, usually requires complex webhook logic, retries, and error handling.

This is where Inngest made a big difference. Inngest acts as a reliable middleware that listens to events from Clerk and processes them as durable background jobs. When a user is created or updated, the event is captured and handled automatically. If a failure occurs, Inngest retries until the operation succeeds, ensuring consistency between Clerk and MongoDB.

What stands out most is the reliability and peace of mind. It prevents issues like users existing in the auth system but missing in the database, which can lead to difficult bugs. Beyond saving time, Inngest improves system stability, reduces bugs, and lets developers focus on building real features instead of maintaining complex sync logic.

If you are working with modern authentication systems and databases and want a cleaner, more reliable data flow, I highly recommend trying Inngest. It has been a major productivity and stability win for me.`,
    image: "/1st.jfif",
    date: "December 27, 2025",
    slug: "sync-auth-data",
  },
  {
    id: 2,
    title: "JavaScript to TypeScript >> My Transition through AlumniHub",
    content: `JavaScript to TypeScript >> My Transition

JavaScript was my entry into software development. It is flexible, fast, and great for building prototypes. But as I started working on larger features, I began facing challenges like:

1. Unexpected runtime errors
2. Unclear variable and object types
3. Bugs appearing only after execution
4. Harder debugging in growing React components

These challenges encouraged me to improve my workflow and take the step toward TypeScript. Recently, I started using TypeScript in my new project built with React, Vite, and Tailwind CSS. I am still learning TypeScript and applying types and interfaces step by step while building real features.

How TypeScript is helping me so far:

1. Stronger type safety and fewer crashes
2. Early error detection before execution
3. Clean and reusable interfaces
4. Better scalability and structure
5. More confidence when deploying features

Career Impact

Working on AlumniHub with TypeScript is helping me grow in the Full Stack and Software Engineering field, which I am truly passionate about.

It is supporting my career by:

1. Making my code more reliable
2. Helping me think like a structured software engineer
3. Improving my confidence for junior software roles
4. Strengthening my transition into full-time software engineering

This project and the move to TypeScript are actively shaping my long term career growth.`,
    image: "/2nd.jfif",
    date: "January 20, 2026",
    slug: "javascript-to-typescript-transition",
  },
  {
    id: 3,
    title: "Empowering Software Development with AI",
    content: `Empowering Software Development with AI

In the modern world of technology, AI assistants like GitHub Copilot and Cursor AI have become valuable tools in software development. They help us code faster, reduce repetitive work, and improve the overall quality of our projects.

However, AI is not a replacement for developers. It works based on our instructions. That’s why having a strong understanding of programming fundamentals and project structure is very important.

When we use AI, we must set clear guidelines and carefully review each step it takes. Our deep understanding of programming fundamentals and the structure of our projects is essential to guide AI effectively. AI assisted coding is like working with a junior developer we need to guide it step by step. Each step should be documented clearly, so when the AI continues or starts a new task, it already understands the previous steps and the project flow.

AI coding is not just about generating code. It becomes powerful only when combined with our knowledge, clear rules, and proper documentation.
By using AI in the right way, we can build better, cleaner, and more reliable software.`,
    image: "/3rd.jfif",
    date: "January 25, 2026",
    slug: "empowering-software-development-with-ai",
  },
  {
    id: 4,
    title: "Unlocking AI Potential with AWS Bedrock ",
    content: `Unlocking AI Potential with AWS Bedrock 

In a recent project, I explored AWS Bedrock to enhance AI driven solutions. By integrating AWS Bedrock into a Node.js and Express backend, the process of incorporating multiple AI models was streamlined, making development more efficient and effective.

Why AWS Bedrock Stands Out:

* Effortless Scalability : With AWS handling infrastructure, developers can focus on creating impactful features.

* Flexible Model Access : Easily switch between AI models like Claude, Titan, and Stable Diffusion to suit different needs.

* Customizable AI Solutions : Feeding custom data into the models ensures personalized, context aware outputs.

* Accelerated Development : AWS Bedrock speeds up projects, allowing quick integration of AI features.

* Cost Efficient and Secure : Pay as you go pricing and AWS’s robust security keep data safe.

* All in One Platform : Instead of integrating each AI model separately, AWS Bedrock provides a unified API to access multiple models, saving time, reducing complexity, and ensuring consistent development workflows.

Using AWS Bedrock in the backend enables intelligent chatbots, personalized recommendations, and automated content generation, making solutions more effective, user friendly, and easier to maintain. AWS Bedrock empowers developers to quickly and efficiently integrate AI, making the development process simpler, more flexible, and highly impactful.`,
    image: "/4th.jfif",
    date: "January 25, 2026",
    slug: "unlocking-ai-potential-with-aws-bedrock",
  },

  {
    id: 5,
    title: "AI First Software Products and the Future of the Software Industry. ",
    content: `AI First Software Products and the Future of the Software Industry.

I was glad to take part in an AI First Product Innovation session organized by STEM Link, conducted on 3rd January 2026, which offered valuable insight into how modern software products are increasingly being built with AI at the core.

The session emphasized that successful AI driven software is not about adding intelligence as a feature, but about understanding real problems, validating solutions early, and designing products that can scale effectively.

The industry perspectives shared by Kasun Dananjaya Delgolla, CTO at Surge Global, provided practical clarity on how AI is shaping real world product development and current industry expectations.

It also helped form a clearer picture of what the future software industry will look like, with AI and software fully integrated into one experience, influencing how products are designed, built, and released. More importantly, it highlighted the skills needed for long term career growth. strong problem solving ability, solid engineering fundamentals, product thinking, and continuous learning as AI continues to evolve.
Grateful for the chance to learn, reflect, and grow.`,
    image: "/5th.jfif",
    date: "January 30, 2026",
    slug: "ai-first-product-innovation-experience",
  },
];

function parseArticleContent(content: string) {
  const blocks = content
    .trim()
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean);

  const title = blocks[0] ?? "";
  const bodyBlocks = blocks.slice(1);

  const sections: ArticleSection[] = [];

  for (const block of bodyBlocks) {
    const lines = block
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);

    const isNumberList =
      lines.length > 1 && lines.every((line) => /^\d+\.\s+/.test(line));

    const isStarList =
      lines.length > 1 && lines.every((line) => /^\*\s+/.test(line));

    const isSubheading =
      lines.length === 1 &&
      !/[.!:?]$/.test(lines[0]) &&
      lines[0].length < 40 &&
      !/^\d+\.\s+/.test(lines[0]) &&
      !/^\*\s+/.test(lines[0]);

    if (isNumberList) {
      sections.push({
        type: "list",
        items: lines.map((line) => line.replace(/^\d+\.\s+/, "").trim()),
      });
      continue;
    }

    if (isStarList) {
      sections.push({
        type: "list",
        items: lines.map((line) => line.replace(/^\*\s+/, "").trim()),
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

export default async function ArticleDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const { title: contentTitle, sections } = parseArticleContent(
    article.content
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
              <span className="text-cyan-300">Article Details</span>
            </div>

            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-white/70 backdrop-blur-md">
              Publish Date : {article.date}
            </div>

            <div className="inline-flex items-center rounded-full border border-blue-400/30 bg-white/[0.05] px-4 py-2 text-blue-300 backdrop-blur-md">
              Published on LinkedIn
            </div>
          </div>

          <h1 className="mb-6 text-center text-2xl font-semibold leading-snug sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
              {article.title}
            </span>
          </h1>

          <div className="relative mb-8 aspect-[16/9] w-full overflow-hidden rounded-[28px] border border-white/10 sm:h-[320px] lg:h-[700px]">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          </div>

          <div className="w-full rounded-[28px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md sm:p-8 lg:p-10">
            <h2 className="mb-6 text-center text-xl font-semibold leading-snug text-white sm:text-2xl md:text-3xl">
              {contentTitle}
            </h2>

            <div className="space-y-6">
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
                  return (
                    <h3
                      key={index}
                      className="pt-2 text-lg font-semibold text-cyan-300 sm:text-xl"
                    >
                      {section.content}
                    </h3>
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
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="max-w-md rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-md sm:px-5 sm:py-4">
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-cyan-400/30">
                  <Image
                    src="/profile.jpg"
                    alt="Kithvin Bandara"
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <p className="text-xs text-white/50">Written by</p>
                  <h4 className="text-sm font-semibold text-cyan-300 sm:text-base">
                    Kithvin Bandara
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/#articles"
              className="font-semibold inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-sm font-medium text-cyan-300 transition duration-300 hover:bg-cyan-400 hover:text-black"
            >
              Back to Articles
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
