"use client";

import { motion } from "motion/react";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 px-1 py-20 sm:px-2 sm:py-28 lg:py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-950/60"
      >
        {/* Ambient Glow */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-blue-900/10 blur-3xl" />

        {/* Content */}
        <div className="relative px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-20">
          {/* Label */}
          <div className="flex items-center gap-2.5 text-[11px] tracking-[0.12em] text-blue-400 sm:gap-3 sm:text-xs">
            <span className="h-px w-6 bg-blue-500 sm:w-8" />
            <span>05 / CONTACT</span>
          </div>

          {/* Heading */}
          <div className="mt-7 max-w-4xl sm:mt-9">
            <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight text-zinc-100 sm:text-5xl lg:text-7xl">
              Let&apos;s build
              <br />
              <span className="text-zinc-500">something great.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base sm:leading-8">
              Have a project in mind, an opportunity, or just want to say hello?
              I&apos;d be happy to hear from you.
            </p>
          </div>

          {/* Actions */}
          <div className="mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
            <a
              href="mailto:omiidnk02@gmail.com"
              className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-zinc-100 px-5 py-3.5 text-xs font-medium text-zinc-950 transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]"
            >
              <FiMail size={15} />

              <span>Get in touch</span>

              <FiArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <a
              href="https://github.com/omid-nk"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 rounded-xl border border-zinc-800 bg-zinc-950/60 px-5 py-3.5 text-xs font-medium text-zinc-400 transition-all duration-300 hover:border-zinc-700 hover:text-zinc-100"
            >
              <FiGithub size={15} />
              GitHub
              <FiArrowUpRight
                size={13}
                className="opacity-50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/omidnk/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 rounded-xl border border-zinc-800 bg-zinc-950/60 px-5 py-3.5 text-xs font-medium text-zinc-400 transition-all duration-300 hover:border-zinc-700 hover:text-zinc-100"
            >
              <FiLinkedin size={15} />
              LinkedIn
              <FiArrowUpRight
                size={13}
                className="opacity-50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
              />
            </a>
          </div>

          {/* Bottom */}
          <div className="mt-12 flex flex-col gap-3 border-t border-zinc-800/70 pt-5 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-[10px] uppercase tracking-[0.16em] text-zinc-700">
              Available for opportunities
            </span>

            <div className="flex items-center gap-2 text-[10px] text-zinc-600">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80 shadow-[0_0_8px_rgba(74,222,128,0.4)]" />
              Open to work
            </div>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="mt-6 flex flex-col gap-3 px-1 text-[10px] text-zinc-700 sm:flex-row sm:items-center sm:justify-between sm:px-2">
        <span>© {new Date().getFullYear()} Omid Daliri</span>

        <span>Designed & built with Next.js</span>
      </div>
    </section>
  );
}
