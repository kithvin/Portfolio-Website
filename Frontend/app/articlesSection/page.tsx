"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

function calculateReadTime(text: string) {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / wordsPerMinute));
  return `${minutes} min read`;
}

const articles = [
  {
    id: 1,
    title: "A Smarter Way to Sync Authentication Data",
    description:
      "Learn how to keep user data in sync between Clerk and MongoDB using Inngest, ensuring reliable authentication, reduced bugs, and smoother system stability.",
    content:
      "Inngest keeps user data synced between Clerk and MongoDB automatically, ensuring reliability and reducing bugs.",
    image: "/1st.jpg",
    date: "December 27, 2025",
    slug: "sync-auth-data",
  },
  {
    id: 2,
    title: "JavaScript → TypeScript My Transition",
    description:
      "I share my journey transitioning from JavaScript to TypeScript, improving code reliability, scalability, and my growth as a full stack developer.",
    content:
      "Clean user interface design makes websites easier to understand and more enjoyable to use. A simple layout, clear spacing, readable typography, and consistent colors help users focus on what matters most. When the interface is cluttered, users may feel confused or leave the site quickly. That is why I try to design pages with balance, simplicity, and purpose.",
    image: "/2nd.jpg",
    date: "January 20, 2026",
    slug: "javascript-to-typescript-transition",
  },
  {
    id: 3,
    title: "Empowering Software Development with AI",
    description:
      "AI helps developers code faster, but strong fundamentals and guidance are key to building quality software.",
    content:
      "AI tools help developers code faster and reduce repetitive work, but they are not replacements. With strong fundamentals and clear guidance, developers can use AI effectively to build clean and reliable software.",
    image: "/3rd.jpg",
    date: "January 25, 2026",
    slug: "empowering-software-development-with-ai",
  },
  {
    id: 4,
    title: "Unlocking AI Potential with AWS Bedrock ",
    description:
      "Built an AI powered backend using AWS Bedrock with Node.js and Express.js, enabling seamless integration of multiple AI models for intelligent features like chatbots and content generation.",
    content:
      "Integrated AWS Bedrock into a Node.js + Express.js backend to build AI-powered features like chatbots and content generation.Leveraged models such as Claude and Amazon Titan through a unified API, making development faster, scalable, and efficient.",
    image: "/4th.jpg",
    date: "January 27, 2026",
    slug: "unlocking-ai-potential-with-aws-bedrock",
  },
  {
    id: 5,
    title: "AI First Software Products and the Future of the Software Industry. ",
    description:
      "Attended an AI focused product innovation session organized by STEM Link, gaining insights into building scalable AI first software, understanding modern industry expectations, and exploring practical strategies for developing intelligent, production ready applications.",
    content:
      "in an AI-focused product innovation session organized by STEM Link, gaining insights into building scalable AI-first software and understanding modern industry expectations.",
    image: "/5th.jpg",
    date: "January 30, 2026",
    slug: "ai-first-product-innovation-experience",
  },
  {
    id: 6,
    title: "Understanding Software Architecture Through Practical Development.",
    description:
      "A practical reflection on how real projects naturally align with software architecture patterns like Monolithic and MVC, and why architecture matters.",
    content:
      "A practical reflection on how real projects naturally align with software architecture patterns like Monolithic and MVC, and why architecture matters.",
    image: "/6th.jpg",
    date: "February 05, 2026",
    slug: "understanding-software-architecture-through-real-world-development",
  },
  {
    id: 7,
    title: "Why Real Software Development Is More Than Just Asking AI",
    description:
      "A realistic look at why building software requires more than AI prompts, focusing on problem understanding, architecture, and engineering thinking.",
    content:
      "A realistic look at why building software requires more than AI prompts, focusing on problem understanding, architecture, and engineering thinking.",
    image: "/7th.jpg",
    date: "February 12, 2026",
    slug: "why-real-software-development-is-more-than-just-asking-ai",
  },
  {
    id: 8,
    title: "Solo Innovators and the Future of Large Scale Software",
    description:
      "How solo developers, powered by AI and strong engineering principles, are shaping the future of scalable software.",
    content:
      "How solo developers, powered by AI and strong engineering principles, are shaping the future of scalable software.",
    image: "/8th.jpg",
    date: "February 20, 2026",
    slug: "solo-innovators-and-the-future-of-large-scale-software",
  },
  {
    id: 9,
    title: "Why Developers Should Master One Stack First",
    description:
      "Mastering one full stack deeply builds strong foundations and makes it easier to adapt to new technologies in modern software development.",
    content:
      "Mastering one full stack deeply builds strong foundations and makes it easier to adapt to new technologies in modern software development.",
    image: "/9th.jpg",
    date: "March 27, 2026",
    slug: "why-developers-should-master-one-stack-first",
  },
];

export default function ArticlesSection() {
  const [showAll, setShowAll] = useState(false);

  const visibleArticles = useMemo(() => {
    return showAll ? articles : articles.slice(0, 2);
  }, [showAll]);

  return (
    <section
      id="articles"
      className="relative overflow-hidden scroll-mt-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:px-10">
        {/* Header */}
        <div className="mx-auto mb-6 flex w-fit items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-cyan-200 md:mx-0">
          <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
          <p className="text-[13px] font-medium text-cyan-300 sm:text-[14px] md:text-[15px]">
            Knowledge Hub | <span className="text-cyan-300">Articles</span>
          </p>
        </div>

        <h1 className="mb-6 text-center text-4xl font-semibold leading-tight sm:text-5xl md:text-left md:text-6xl">
          Latest{" "}
          <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
            Articles
          </span>
        </h1>

        <p className="mb-8 w-full max-w-[62ch] text-center text-[13px] leading-6 text-white/70 sm:mb-14 sm:text-sm sm:leading-7 md:max-w-none md:text-base md:text-left">
          Articles where I share ideas, learning experiences, and practical
          knowledge about software engineering, full stack development, clean
          UI, and modern web technologies.
        </p>

        {/* Articles List */}
        <div className="flex w-full flex-col gap-8">
          {visibleArticles.map((article, index) => (
            <motion.article
              key={article.id}
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.4,
              }}
              whileHover={{ y: -10 }}
              className="group overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] backdrop-blur-md transition hover:border-cyan-400/30"
            >
              <div className="grid grid-cols-1 md:grid-cols-[48%_52%] lg:grid-cols-[55%_45%]">
                
                {/* Image Section */}

                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-[24px] md:h-full md:aspect-auto md:rounded-l-[24px] md:rounded-tr-none">
                  <motion.div
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                    className="h-full w-full"
                  >
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      quality={100}
                      className="object-fit object-center"
                    />
                  </motion.div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent md:bg-gradient-to-r" />
                </div>

                {/* Content Section */}

                <div className="flex w-full flex-col items-center justify-center p-6 text-center sm:p-8 md:items-start md:text-left lg:p-10">
                  <div className="mb-3 flex flex-wrap items-center justify-center gap-3 text-sm text-white/60 md:justify-start">
                    <span>{article.date}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    <span>{calculateReadTime(article.content)}</span>
                  </div>

                  <h2 className="w-full text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-[2.5rem]">
                    {article.title}
                  </h2>

                  <p className="mt-4 w-full text-justify text-sm leading-7 text-white/70 sm:text-base lg:text-lg md:max-w-[92%] lg:max-w-[85%]">
                    {article.description}
                  </p>

                  <Link
                    href={`/articles/${article.slug}`}
                    className="mt-6 inline-flex w-fit items-center justify-center self-center rounded-full border border-cyan-400/40 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-black md:self-start"
                  >
                    Read Article
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View More Button */}
        {articles.length > 2 && (
          <div className="mt-10 flex w-full justify-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex cursor-pointer items-center justify-center rounded-full border border-cyan-400 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
            >
              {showAll ? "Show Less" : "View More Articles"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
