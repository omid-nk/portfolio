import ProjectsSlider from "@/components/ProjectsSlider";
import projects from "@/data/projects.json";

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section
      id="projects"
      className="scroll-mt-20 px-1 sm:px-2 py-20 sm:py-28 lg:py-32"
    >
      {/* Section Header */}
      <div className="mb-10 sm:mb-12 lg:mb-14">
        {/* Label */}
        <div className="flex items-center gap-2.5 sm:gap-3 text-[11px] sm:text-xs text-blue-400 tracking-[0.12em]">
          <span className="h-px w-6 sm:w-8 bg-blue-500" />
          <span>01 / PROJECTS</span>
        </div>

        {/* Heading */}
        <div className="mt-4 sm:mt-5 flex flex-col gap-4 sm:gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-zinc-100 [word-spacing:-0.12em]">
              Selected Projects
            </h2>

            <p className="mt-3 sm:mt-4 max-w-2xl text-xs sm:text-sm lg:text-base leading-6 sm:leading-7 text-zinc-500 [word-spacing:-0.05em]">
              A selection of projects I&lsquo;ve built, from full-stack web
              applications to developer tools and interactive experiences.
            </p>
          </div>

          {/* Project Count */}
          <div className="flex items-center gap-2 text-[11px] sm:text-xs text-zinc-600">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500/60" />

            <span>
              {featuredProjects.length.toString().padStart(2, "0")} projects
            </span>
          </div>
        </div>
      </div>

      {/* Projects Slider */}
      <ProjectsSlider projects={featuredProjects} />
    </section>
  );
}
