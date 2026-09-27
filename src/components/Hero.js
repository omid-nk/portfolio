"use client";

import Image from "next/image";

export default function Hero() {
  const handleNavClick = (event, href) => {
    event.preventDefault();

    const target = document.querySelector(href);

    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="min-h-[calc(100dvh-8rem)] flex flex-col xl:flex-row items-center justify-center xl:justify-between gap-12 sm:gap-16 lg:gap-10 xl:gap-20 py-12 sm:py-16 xl:py-0">
      {/* Content */}
      <div className="w-full xl:w-[55%] flex flex-col items-center xl:items-start text-center xl:text-left">
        <p className="mb-4 text-xs sm:text-sm tracking-[0.25em] sm:tracking-[0.3em] text-blue-400 uppercase">
          Frontend Developer
        </p>

        <h1 className="text-[clamp(3rem,10vw,5.5rem)] font-semibold leading-[0.95] tracking-tight [word-spacing:-0.35em]">
          Hi, I am
          <br />
          <span className="text-zinc-400">Omid Daliri</span>
        </h1>

        <p className="mt-6 sm:mt-7 max-w-xl text-base sm:text-lg xl:text-xl leading-relaxed text-zinc-400 [word-spacing:-0.15em]">
          I build modern, fast, and user-focused web applications with Next.js.
          Passionate about creating seamless digital experiences through clean
          code and thoughtful design.
        </p>

        {/* Actions */}
        <div className="mt-7 sm:mt-8 flex w-full sm:w-auto flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <a
            href="#projects"
            onClick={(event) => handleNavClick(event, "#projects")}
            className="w-full sm:w-auto rounded-lg bg-zinc-100 px-5 py-3 text-center text-sm font-medium text-zinc-950 transition hover:bg-white active:scale-[0.98]"
          >
            View Projects
          </a>

          <a
            href="#contact"
            onClick={(event) => handleNavClick(event, "#contact")}
            className="w-full sm:w-auto rounded-lg border border-zinc-800 px-5 py-3 text-center text-sm font-medium text-zinc-300 transition hover:border-zinc-600 hover:text-white active:scale-[0.98]"
          >
            Contact Me
          </a>
        </div>

        {/* Tech stack */}
        <div className="mt-8 sm:mt-10 flex max-w-lg flex-wrap justify-center xl:justify-start gap-x-3 gap-y-2 text-xs text-zinc-500">
          <span>React</span>
          <span>·</span>
          <span>Next.js</span>
          <span>·</span>
          <span>TypeScript</span>
          <span>·</span>
          <span>Tailwind CSS</span>
        </div>
      </div>

      {/* Image */}
      <div className="w-full xl:w-[45%] flex justify-center xl:justify-end">
        <div className="relative w-[min(70vw,20rem)] sm:w-[min(60vw,22rem)] md:w-[min(50vw,25rem)] lg:w-[min(38vw,27rem)] xl:w-[min(36vw,30rem)]">
          <div className="absolute inset-[10%] -z-10 rounded-full bg-blue-500/10 blur-3xl" />

          <Image
            src="/omiddaliri.png"
            alt="Omid Daliri"
            width={1000}
            height={1000}
            priority
            sizes="(max-width: 640px) 70vw, (max-width: 1024px) 50vw, 38vw"
            className="relative h-auto w-full object-contain border-2 rounded-full border-white"
          />
        </div>
      </div>
    </section>
  );
}
