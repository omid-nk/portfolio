"use client";

import { motion } from "motion/react";

const journey = [
  {
    year: "2018 — 2020",
    title: "First Steps — Design & Web",
    description:
      "Started exploring the world of computers in high school, where I was introduced to programming, WordPress, SEO, and Photoshop. I became especially interested in visual design and started taking Photoshop more seriously while experimenting with WordPress and the web.",
    tags: ["Photoshop", "WordPress", "SEO"],
  },

  {
    year: "2020 — 2021",
    title: "First Professional Experience",
    description:
      "At 18, I entered the workforce as a graphic designer in an advertising and printing company. Working with real clients and production taught me how ideas move from a screen into something tangible — and gave me my first real professional experience.",
    tags: ["Graphic Design", "Photoshop", "Print"],
  },

  {
    year: "2021 — 2022",
    title: "Going Deeper into the Web",
    description:
      "I moved back toward the web, developed my WordPress skills further, and started working professionally on multiple websites. This was also when I became increasingly curious about what happens beyond the interface.",
    tags: ["WordPress", "Web", "UI"],
  },

  {
    year: "2022 — 2024",
    title: "SEO Specialist",
    description:
      "While working with WordPress, I discovered a deeper interest in SEO and user behavior. I studied SEO alongside my work and eventually transitioned into an SEO role within the same business group, working across different companies and websites for nearly three years in total.",
    tags: ["SEO", "Analytics", "Content"],
  },

  {
    year: "2024 — 2025",
    title: "The Shift to Development",
    description:
      "Over time, I realized that the part of the web I enjoyed most was building things. My interest in design and problem-solving pushed me toward software development, so I started a serious transition into programming and frontend development.",
    tags: ["JavaScript", "React.js", "Git"],
  },

  {
    year: "2025 — Now",
    title: "Frontend Developer",
    description:
      "I've spent the past couple of years learning through courses, documentation, YouTube, and hands-on projects. Today, I focus on building modern web applications with Next.js and React, while continuously improving my architecture, UI, and development skills.",
    tags: ["Next.js", "React.js", "TypeScript"],
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="scroll-mt-20 px-1 py-20 sm:px-2 sm:py-28 lg:py-32"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mb-12 sm:mb-14 lg:mb-16"
      >
        <div className="flex items-center gap-2.5 text-[11px] tracking-[0.12em] text-blue-400 sm:gap-3 sm:text-xs">
          <span className="h-px w-6 bg-blue-500 sm:w-8" />
          <span>04 / JOURNEY</span>
        </div>

        <div className="mt-4 sm:mt-5">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-zinc-100 sm:text-4xl lg:text-5xl">
            From SEO to
            <br />
            <span className="text-zinc-500">Frontend Development.</span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base sm:leading-8">
            A path shaped by design, the web, SEO, and a growing obsession with
            building things.
          </p>
        </div>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute bottom-0 left-[11px] top-0 w-px bg-zinc-800 sm:left-[15px]" />

        <div className="space-y-10 sm:space-y-12 lg:space-y-14">
          {journey.map((item, index) => (
            <motion.article
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative pl-9 sm:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-1 flex h-[23px] w-[23px] items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 sm:h-[31px] sm:w-[31px]">
                <span
                  className={`h-1.5 w-1.5 rounded-full sm:h-2 sm:w-2 ${
                    index === journey.length - 1
                      ? "bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.6)]"
                      : "bg-zinc-600"
                  }`}
                />
              </div>

              {/* Content */}
              <div className="rounded-2xl border border-zinc-800/80 bg-zinc-950/40 p-5 transition-colors duration-300 hover:border-zinc-700 sm:p-6 lg:p-7">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                  <div className="min-w-0">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className="font-mono text-[11px] tracking-[0.12em] text-blue-400">
                        {item.year}
                      </span>

                      {index === journey.length - 1 && (
                        <span className="rounded-full border border-blue-400/20 bg-blue-500/5 px-2 py-0.5 text-[9px] uppercase tracking-[0.12em] text-blue-400">
                          Current
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-semibold tracking-tight text-zinc-100 sm:text-xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-2xl text-xs leading-6 text-zinc-500 sm:text-sm sm:leading-7">
                      {item.description}
                    </p>
                  </div>

                  {/* Index */}
                  <span className="hidden shrink-0 font-mono text-[10px] text-zinc-700 sm:block">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-zinc-800 bg-zinc-900/60 px-2.5 py-1 text-[10px] text-zinc-500 transition-colors duration-300 hover:border-zinc-700 hover:text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
