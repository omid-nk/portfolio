"use client";

import Image from "next/image";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

import { FiArrowUpRight, FiGithub } from "react-icons/fi";

import { useRef } from "react";

export default function ProjectCard({ project }) {
  const imageRef = useRef(null);

  // Mouse position
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Smooth movement
  const smoothX = useSpring(mouseX, {
    stiffness: 180,
    damping: 25,
    mass: 0.4,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 180,
    damping: 25,
    mass: 0.4,
  });

  // Very subtle 3D rotation
  const rotateY = useTransform(smoothX, [0, 1], [-4, 4]);
  const rotateX = useTransform(smoothY, [0, 1], [3, -3]);

  // Very subtle image movement
  const translateX = useTransform(smoothX, [0, 1], [-3, 3]);
  const translateY = useTransform(smoothY, [0, 1], [-2, 2]);

  const handleMouseMove = (event) => {
    const element = imageRef.current;

    if (!element) return;

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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group relative h-full overflow-hidden
        rounded-xl sm:rounded-2xl
        border border-zinc-800/80
        bg-zinc-950/70
        backdrop-blur-sm
      "
    >
      {/* Ambient Glow */}
      <div
        className="
          pointer-events-none absolute -inset-20 -z-10
          rounded-full bg-blue-900/5
          opacity-0 blur-3xl
          transition duration-700
          group-hover:opacity-100
        "
      />

      <div className="relative flex h-full flex-col">
        {/* =========================================================
            IMAGE
        ========================================================== */}

        <div
          ref={imageRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="
            relative
            aspect-[5/6]
            overflow-hidden
            bg-zinc-900
            sm:aspect-[4/5]
          "
          style={{
            perspective: "1200px",
          }}
        >
          {project.images?.thumbnail ? (
            <motion.div
              className="absolute inset-0"
              style={{
                rotateX,
                rotateY,
                x: translateX,
                y: translateY,
                transformStyle: "preserve-3d",
              }}
              initial={{
                scale: 1,
              }}
              whileHover={{
                scale: 1.15,
              }}
              transition={{
                scale: {
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
            >
              <Image
                src={project.images.thumbnail}
                alt={project.name}
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

          {/* Simple overlay */}
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-70" />

          {/* Category */}
          {project.category && (
            <div className="absolute left-3 top-3 pointer-events-none sm:left-4 sm:top-4">
              <span
                className="
                  inline-flex rounded-full
                  border border-white/10
                  bg-black/40
                  px-2.5 py-1.5
                  text-[10px] text-zinc-300
                  backdrop-blur-md
                  sm:px-3 sm:text-[11px]
                "
              >
                {project.category}
              </span>
            </div>
          )}

          {/* Status */}
          {project.status && (
            <div className="absolute right-3 top-3 pointer-events-none sm:right-4 sm:top-4">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1.5 text-[10px] backdrop-blur-md sm:px-3 sm:text-[11px] ${
                  project.status === "Completed"
                    ? "border-emerald-400/20 bg-emerald-950/40 text-emerald-300"
                    : "border-amber-400/20 bg-amber-950/40 text-amber-300"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    project.status === "Completed"
                      ? "bg-emerald-400"
                      : "bg-amber-400"
                  }`}
                />

                {project.status}
              </span>
            </div>
          )}

          {/* Small hover indicator */}
          <motion.div
            className="
              pointer-events-none absolute
              bottom-3 right-3
              flex h-8 w-8
              items-center justify-center
              rounded-full
              border border-white/10
              bg-black/40
              text-white
              backdrop-blur-md
              sm:bottom-4 sm:right-4
              sm:h-9 sm:w-9
            "
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileHover={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <FiArrowUpRight size={15} />
          </motion.div>
        </div>

        {/* =========================================================
            CONTENT
        ========================================================== */}

        <div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-6">
          {/* Meta */}
          <div
            className="
              mb-2.5 flex flex-wrap
              items-center gap-x-2 gap-y-1
              text-[10px] text-zinc-500
              sm:mb-3 sm:text-[11px]
            "
          >
            <span>{project.type}</span>

            <span className="text-zinc-700">·</span>

            <span>{project.year}</span>

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
              text-lg font-semibold
              tracking-tight text-zinc-100
              [word-spacing:-0.1em]
              sm:text-xl
            "
          >
            {project.name}
          </h3>

          {/* Description */}
          <p
            className="
              mt-2.5 line-clamp-3
              text-xs leading-5
              text-zinc-400
              [word-spacing:-0.04em]
              sm:mt-3 sm:text-sm sm:leading-6
            "
          >
            {project.shortDescription}
          </p>

          {/* Technologies */}
          <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-5">
            {project.technologies?.slice(0, 3).map((technology) => (
              <span
                key={technology}
                className="
                  rounded-md
                  border border-zinc-800
                  bg-zinc-900/70
                  px-2 py-1
                  text-[10px] text-zinc-400
                  transition-colors duration-300
                  group-hover:border-zinc-700
                  group-hover:text-zinc-300
                  sm:px-2.5 sm:text-[11px]
                "
              >
                {technology}
              </span>
            ))}

            {project.technologies?.length > 3 && (
              <span
                className="
                  rounded-md
                  border border-zinc-800
                  bg-zinc-900/70
                  px-2 py-1
                  text-[10px] text-zinc-500
                  sm:px-2.5 sm:text-[11px]
                "
              >
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="mt-auto pt-5 sm:pt-6">
            <div
              className="
                flex flex-wrap items-center gap-2
                border-t border-zinc-800/70
                pt-4
                sm:gap-2.5 sm:pt-5
              "
            >
              {/* Live Demo */}
              {project.links?.live && (
                <motion.a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.03,
                    y: -1,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    inline-flex items-center gap-1.5
                    rounded-lg
                    bg-zinc-100
                    px-3.5 py-2.5
                    text-[11px] font-medium
                    text-zinc-950
                    transition-colors
                    hover:bg-white
                    sm:gap-2 sm:px-4 sm:text-xs
                  "
                >
                  Live Demo
                  <FiArrowUpRight size={14} />
                </motion.a>
              )}

              {/* GitHub */}
              {project.links?.github && (
                <motion.a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.03,
                    y: -1,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    inline-flex items-center gap-1.5
                    rounded-lg
                    border border-zinc-800
                    bg-zinc-950/40
                    px-3.5 py-2.5
                    text-[11px] font-medium
                    text-zinc-300
                    transition-colors
                    hover:border-zinc-600
                    hover:text-white
                    sm:gap-2 sm:px-4 sm:text-xs
                  "
                >
                  <FiGithub size={14} />
                  GitHub
                </motion.a>
              )}

              {/* No Links */}
              {!project.links?.live && !project.links?.github && (
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
