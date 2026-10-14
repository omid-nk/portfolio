"use client";

import Image from "next/image";
import { useRef } from "react";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

import {
  FiArrowUpRight,
  FiExternalLink,
  FiGithub,
  FiGlobe,
} from "react-icons/fi";

const springConfig = {
  stiffness: 180,
  damping: 25,
  mass: 0.4,
};

const linkBase =
  "group/link inline-flex min-h-10 items-center justify-center gap-2 rounded-lg px-3.5 py-2.5 text-[11px] font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 sm:px-4 sm:text-xs";

export default function ProjectCard({ project }) {
  const imageRef = useRef(null);

  // Mouse position
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Smooth movement
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Subtle 3D rotation
  const rotateY = useTransform(smoothX, [0, 1], [-1.5, 1.5]);
  const rotateX = useTransform(smoothY, [0, 1], [1, -1]);

  // Minimal image movement
  const translateX = useTransform(smoothX, [0, 1], [-1, 1]);
  const translateY = useTransform(smoothY, [0, 1], [-1, 1]);

  const live = project.links?.live;
  const liveSecondary = project.links?.liveSecondary;
  const github = project.links?.github;

  const hasThumbnail = Boolean(project.images?.thumbnail);
  const isCompleted = project.status === "Completed";

  const handleMouseMove = (event) => {
    const element = imageRef.current;

    if (!element || window.matchMedia("(hover: none)").matches) return;

    const rect = element.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    mouseX.set(Math.max(0, Math.min(1, x)));
    mouseY.set(Math.max(0, Math.min(1, y)));
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group relative flex h-full flex-col overflow-hidden
        rounded-xl border border-zinc-800/80
        bg-zinc-950/70 backdrop-blur-sm
        transition-[border-color,box-shadow] duration-300
        hover:border-zinc-700
        hover:shadow-[0_12px_35px_-25px_rgba(0,0,0,0.8)]
      "
    >
      {/* Ambient Glow */}
      <div
        className="
          pointer-events-none absolute -inset-20 -z-10
          rounded-full bg-blue-900/5
          opacity-0 blur-3xl
          transition-opacity duration-500
          group-hover:opacity-100
        "
      />

      <div className="relative flex h-full flex-col">
        {/* Image */}
        <div
          ref={imageRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="
            relative aspect-[5/6] shrink-0
            overflow-hidden bg-zinc-900
            sm:aspect-[4/5]
          "
          style={{ perspective: "1200px" }}
        >
          {hasThumbnail ? (
            <motion.div
              className="absolute inset-0"
              style={{
                rotateX,
                rotateY,
                x: translateX,
                y: translateY,
                transformStyle: "preserve-3d",
              }}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.015 }}
              transition={{
                scale: {
                  duration: 0.4,
                  ease: "easeOut",
                },
              }}
            >
              <Image
                src={project.images.thumbnail}
                alt={`${project.name} project preview`}
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                className="object-cover"
                priority={project.featured}
              />
            </motion.div>
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-zinc-600">
              No preview
            </div>
          )}

          {/* Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-black/10" />

          {/* Category */}
          {project.category && (
            <div className="pointer-events-none absolute left-3 top-3 sm:left-4 sm:top-4">
              <span
                className="
                  inline-flex rounded-full
                  border border-white/10 bg-black/40
                  px-2.5 py-1.5 text-[10px] text-zinc-300
                  backdrop-blur-md sm:px-3 sm:text-[11px]
                "
              >
                {project.category}
              </span>
            </div>
          )}

          {/* Status */}
          {project.status && (
            <div className="pointer-events-none absolute right-3 top-3 sm:right-4 sm:top-4">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1.5 text-[10px] backdrop-blur-md sm:px-3 sm:text-[11px] ${
                  isCompleted
                    ? "border-emerald-400/20 bg-emerald-950/40 text-emerald-300"
                    : "border-amber-400/20 bg-amber-950/40 text-amber-300"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    isCompleted ? "bg-emerald-400" : "bg-amber-400"
                  }`}
                />
                {project.status}
              </span>
            </div>
          )}

          {/* Featured Label */}
          {project.featured && (
            <div className="pointer-events-none absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
              <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/65">
                Featured Project
              </span>
            </div>
          )}

          {/* Image Link Indicator */}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.name} live demo`}
              className="
                absolute bottom-3 right-3
                flex h-8 w-8 items-center justify-center
                rounded-full border border-white/10
                bg-black/40 text-white backdrop-blur-md
                transition-colors duration-200
                hover:bg-white hover:text-black
                sm:bottom-4 sm:right-4 sm:h-9 sm:w-9
              "
            >
              <FiArrowUpRight size={15} />
            </a>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-6">
          {/* Meta */}
          <div
            className="
              mb-2.5 flex flex-wrap items-center
              gap-x-2 gap-y-1 text-[10px] text-zinc-500
              sm:mb-3 sm:text-[11px]
            "
          >
            {project.type && <span>{project.type}</span>}

            {project.type && project.year && (
              <span className="text-zinc-700">·</span>
            )}

            {project.year && <span>{project.year}</span>}

            {project.role && (
              <>
                <span className="text-zinc-700">·</span>
                <span>{project.role}</span>
              </>
            )}
          </div>

          {/* Title */}
          <h3
            className="
              text-lg font-semibold tracking-tight
              text-zinc-100 transition-colors duration-200
              group-hover:text-white
              [word-spacing:-0.1em] sm:text-xl
            "
          >
            {project.name}
          </h3>

          {/* Description */}
          <p
            className="
              mt-2.5 line-clamp-3 text-xs leading-5
              text-zinc-400 [word-spacing:-0.04em]
              sm:mt-3 sm:text-sm sm:leading-6
            "
          >
            {project.shortDescription}
          </p>

          {/* Technologies */}
          {project.technologies?.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-5">
              {project.technologies.slice(0, 3).map((technology) => (
                <span
                  key={technology}
                  className="
                    rounded-md border border-zinc-800
                    bg-zinc-900/70 px-2 py-1
                    text-[10px] text-zinc-400
                    transition-colors duration-200
                    group-hover:border-zinc-700
                    group-hover:text-zinc-300
                    sm:px-2.5 sm:text-[11px]
                  "
                >
                  {technology}
                </span>
              ))}

              {project.technologies.length > 3 && (
                <span
                  className="
                    rounded-md border border-zinc-800
                    bg-zinc-900/70 px-2 py-1
                    text-[10px] text-zinc-500
                    sm:px-2.5 sm:text-[11px]
                  "
                >
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
          )}

          {/* Links */}
          <div className="mt-auto pt-5 sm:pt-6">
            <div
              className="
                flex flex-wrap items-center gap-2
                border-t border-zinc-800/70
                pt-4 sm:gap-2.5 sm:pt-5
              "
            >
              {/* Primary Live Demo */}
              {live && (
                <motion.a
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.98 }}
                  className={`
                    ${linkBase}
                    bg-zinc-100 text-zinc-950
                    hover:bg-white
                  `}
                >
                  <FiGlobe size={14} />
                  Live Demo
                  <FiArrowUpRight size={13} />
                </motion.a>
              )}

              {/* Secondary Live Demo */}
              {liveSecondary && (
                <motion.a
                  href={liveSecondary}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.98 }}
                  className={`
                    ${linkBase}
                    border border-zinc-800
                    bg-zinc-900/50 text-zinc-300
                    hover:border-zinc-600
                    hover:bg-zinc-800/70 hover:text-white
                  `}
                >
                  <FiExternalLink size={14} />
                  Alternate
                </motion.a>
              )}

              {/* GitHub */}
              {github && (
                <motion.a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} on GitHub`}
                  whileTap={{ scale: 0.98 }}
                  className={`
                    ${linkBase}
                    border border-zinc-800
                    bg-transparent text-zinc-400
                    hover:border-zinc-600 hover:text-white
                  `}
                >
                  <FiGithub size={14} />
                  GitHub
                </motion.a>
              )}

              {/* No Links */}
              {!live && !liveSecondary && !github && (
                <span className="text-[10px] text-zinc-600 sm:text-xs">
                  Project details coming soon
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
