"use client";
import { motion } from "motion/react";
const skills = [
  { name: "React.js", value: 80, note: "Advanced" },
  { name: "JavaScript", value: 60, note: "Intermediate" },
  { name: "TypeScript", value: 40, note: "Learning" },
  { name: "Tailwind CSS", value: 90, note: "Advanced" },
  { name: "Supabase", value: 60, note: "Intermediate" },
  { name: "Git | GitHub", value: 60, note: "Intermediate" },
  { name: "SEO", value: 80, note: "Experience" },
  { name: "WordPress", value: 90, note: "Experience" },
  { name: "Photoshop", value: 80, note: "Experience" },
];
export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 px-1 py-20 sm:px-2 sm:py-28 lg:py-32"
    >
      {/* Section Header */}

      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center mb-12 gap-2.5 text-[11px] tracking-[0.12em] text-blue-400 sm:gap-3 sm:text-xs">
            <span className="h-px w-6 bg-blue-500 sm:w-8" />
            <span>03 / ABOUT</span>
          </div>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-zinc-100 sm:text-4xl lg:text-5xl">
            Building modern <br />
            <span className="text-zinc-500">web experiences.</span>
          </h2>
          <div className="mt-7 max-w-2xl space-y-4 text-sm leading-7 text-zinc-400 sm:text-base [word-spacing:-0.20em] sm:leading-8">
            <p>
              I&apos;m{" "}
              <span className="font-medium text-zinc-100 ">Omid Daliri</span>, a
              Frontend Developer focused on building modern, responsive, and
              user-focused web applications. My primary expertise is{" "}
              <span className="font-medium text-blue-400">Next.js</span>.
            </p>
            <p>
              Before transitioning into software development, I worked as an SEO
              Specialist. That experience gave me a better understanding of user
              behavior, performance, and how people interact with the web.
            </p>
            <p>
              I also have experience with backend fundamentals, REST APIs,
              Supabase, and MongoDB, which helps me build applications beyond
              just the frontend.
            </p>
          </div>
          {/* Stats */}
          <div className="mt-9 grid max-w-lg grid-cols-2 gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-zinc-800/80 bg-zinc-950/50 p-4">
              <span className="text-2xl font-semibold text-zinc-100">2+</span>
              <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-zinc-600">
                Years Coding
              </p>
            </div>
            <div className="rounded-xl border border-zinc-800/80 bg-zinc-950/50 p-4">
              <span className="text-2xl font-semibold text-zinc-100">16+</span>
              <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-zinc-600">
                Technologies
              </p>
            </div>
            <div className="col-span-2 rounded-xl border border-zinc-800/80 bg-zinc-950/50 p-4 sm:col-span-1">
              <span className="text-2xl font-semibold text-blue-400">100%</span>
              <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-zinc-600">
                Curious
              </p>
            </div>
          </div>
        </motion.div>
        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-zinc-800/80 bg-zinc-950/40 p-4 sm:p-6"
        >
          {/* Header */}
          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                Technologies
              </p>
              <h3 className="mt-1 text-lg font-semibold text-zinc-100">
                Skills & Expertise
              </h3>
            </div>
            <span className="text-[10px] text-zinc-600">01 — 10</span>
          </div>
          {/* Primary Focus */}
          <div className="mb-7 rounded-xl border border-blue-500/15 bg-blue-500/3 p-4">
            <div className="flex items-center justify-between gap-4">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-blue-400/70">
                    Primary Focus
                  </p>
                  <span className="h-1 w-1 rounded-full bg-blue-400/60" />
                </div>
                <h3 className="mt-1 text-lg font-semibold text-zinc-100">
                  Next.js
                </h3>
                <p className="mt-1 text-[11px] text-zinc-500">
                  Building modern web applications
                </p>
              </div>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10 text-sm font-semibold text-blue-400">
                80%
              </div>
            </div>
            {/* Focus Progress */}
            <div className="mt-4 h-1 overflow-hidden rounded-full bg-zinc-900">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "80%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-full rounded-full bg-blue-500"
              />
            </div>
          </div>
          {/* Stack Label */}
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                Tech Stack
              </p>
            </div>
            <span className="text-[9px] text-zinc-700">FRONTEND / WEB</span>
          </div>
          {/* Skills List */}
          <div className="space-y-5">
            {skills.map((skill, index) => (
              <div key={skill.name}>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-2">
                    <span className="truncate text-xs text-zinc-300">
                      {skill.name}
                    </span>
                    <span
                      className={`shrink-0 rounded-full border px-2 py-0.5 text-[8px] uppercase tracking-wide ${skill.note === "Learning" ? "border-amber-400/20 bg-amber-400/5 text-amber-400/70" : skill.note === "Experience" ? "border-blue-400/20 bg-blue-400/5 text-blue-400/70" : "border-zinc-800 bg-zinc-900/50 text-zinc-600"}`}
                    >
                      {skill.note}
                    </span>
                  </div>
                  <span className="shrink-0 font-mono text-[10px] text-zinc-600">
                    {skill.value}%
                  </span>
                </div>
                <div className="h-1 overflow-hidden rounded-full bg-zinc-900">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.value}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: 0.15 + index * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`h-full rounded-full ${skill.name === "Next.js" ? "bg-blue-500" : "bg-blue-500/70"}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
