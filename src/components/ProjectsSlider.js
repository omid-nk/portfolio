"use client";

import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiMove } from "react-icons/fi";

import ProjectCard from "./ProjectCard";

export default function ProjectsSlider({ projects }) {
  return (
    <div className="relative w-full min-w-0">
      {/* Swipe Hint */}
      {projects.length > 3 && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.4,
          }}
          className="mb-5 flex items-center justify-end"
        >
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-zinc-600">
            <motion.span
              animate={{
                x: [0, 4, 0],
              }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex items-center"
            >
              <FiMove size={13} />
            </motion.span>

            <span>
              <span className="sm:hidden">Swipe to explore</span>
              <span className="hidden sm:inline">Drag to explore</span>
            </span>
          </div>
        </motion.div>
      )}

      {/* Projects Slider */}
      <Swiper
        slidesPerView={1}
        spaceBetween={16}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        className="w-full"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id} className="!h-auto">
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
