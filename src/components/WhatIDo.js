"use client";

import { motion } from "motion/react";
import { FiCode, FiLayout, FiZap, FiServer } from "react-icons/fi";

const services = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Building modern, responsive, and interactive web applications with React and Next.js.",
    icon: FiCode,
    tags: ["React", "Next.js", "JavaScript"],
  },
  {
    number: "02",
    title: "UI Implementation",
    description:
      "Turning designs and ideas into clean, responsive interfaces with a strong focus on usability.",
    icon: FiLayout,
    tags: ["Tailwind CSS", "Responsive", "UI"],
  },
  {
    number: "03",
    title: "Performance & SEO",
    description:
      "Creating fast, optimized websites with a focus on performance, technical SEO, and user experience.",
    icon: FiZap,
    tags: ["SEO", "Performance", "Web"],
  },
  {
    number: "04",
    title: "Full-Stack Foundations",
    description:
      "Working with APIs, authentication, databases, and backend services to build complete web experiences.",
    icon: FiServer,
    tags: ["Supabase", "REST API", "MongoDB"],
  },
];

export default function WhatIDo() {
  return (
    <section
      id="what-i-do"
      className="scroll-mt-20 px-1 py-20 sm:px-2 sm:py-28 lg:py-32"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mb-10 sm:mb-12 lg:mb-14"
      >
        <div className="flex items-center gap-2.5 text-[11px] tracking-[0.12em] text-blue-400 sm:gap-3 sm:text-xs">
          <span className="h-px w-6 bg-blue-500 sm:w-8" />
          <span>04 / WHAT I DO</span>
        </div>

        <div className="mt-4 max-w-2xl">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-zinc-100 sm:text-4xl lg:text-5xl">
            Turning ideas into
            <br />
            <span className="text-zinc-500">digital experiences.</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-zinc-500 sm:text-base sm:leading-8">
            I focus on building modern web experiences that are clean,
            responsive, performant, and enjoyable to use.
          </p>
        </div>
      </motion.div>

      {/* Services */}
      <div className="grid gap-px overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-800/60 md:grid-cols-2">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative bg-zinc-950/70 p-5 transition-colors duration-300 hover:bg-zinc-900/70 sm:p-7 lg:p-8"
            >
              {/* Hover Glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/5 blur-3xl" />
              </div>

              {/* Top */}
              <div className="relative flex items-start justify-between">
                <span className="font-mono text-[10px] tracking-[0.15em] text-zinc-700">
                  {service.number}
                </span>

                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-500 transition-all duration-300 group-hover:border-blue-500/20 group-hover:bg-blue-500/5 group-hover:text-blue-400">
                  <Icon size={16} strokeWidth={1.5} />
                </div>
              </div>

              {/* Content */}
              <div className="relative mt-8">
                <h3 className="text-lg font-semibold tracking-tight text-zinc-100 sm:text-xl">
                  {service.title}
                </h3>

                <p className="mt-3 max-w-lg text-xs leading-6 text-zinc-500 sm:text-sm sm:leading-7">
                  {service.description}
                </p>
              </div>

              {/* Tags */}
              <div className="relative mt-6 flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-zinc-800 bg-zinc-900/60 px-2.5 py-1 text-[10px] text-zinc-600 transition-colors duration-300 group-hover:border-zinc-700 group-hover:text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom Line */}
              <div className="relative mt-7 h-px w-full overflow-hidden bg-zinc-900">
                <motion.div
                  className="h-full bg-blue-500/60"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "18%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: 0.25 + index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
