import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import WhatIDo from "@/components/WhatIDo";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-dvh max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 font-mono text-zinc-200 select-none [word-spacing:-0.15em]">
      <Hero />
      <Projects />
      <About />
      <WhatIDo />
      <Journey />
      <Contact />
    </main>
  );
}
