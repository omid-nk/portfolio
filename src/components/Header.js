"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiGithub, FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";

const navItems = [
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Journey",
    href: "#journey",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogoClick = (event) => {
    event.preventDefault();

    setIsOpen(false);

    if (window.location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.location.href = "/";
    }
  };

  const handleNavClick = (event, href) => {
    event.preventDefault();

    setIsOpen(false);

    const target = document.querySelector(href);

    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative flex h-14 items-center justify-between rounded-2xl border border-zinc-800/70 bg-zinc-950/70 px-3 backdrop-blur-xl sm:h-16 sm:px-4"
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={handleLogoClick}
            className="group flex items-center gap-2 px-2"
          >
            <span className="text-sm font-semibold tracking-tight text-zinc-100 sm:text-base">
              OMID
            </span>

            <span className="text-xs text-blue-400 transition-transform duration-300 group-hover:translate-x-0.5">
              /
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
                className="rounded-lg px-3 py-2 text-[11px] text-zinc-500 transition-all duration-300 hover:bg-zinc-900/70 hover:text-zinc-100 lg:px-3.5"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            {/* GitHub */}
            <a
              href="https://github.com/omid-nk"
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden items-center gap-2 rounded-lg border border-zinc-800/80 bg-zinc-900/40 px-3 py-2 text-[11px] text-zinc-400 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900 hover:text-zinc-100 sm:flex"
            >
              <FiGithub
                size={14}
                className="transition-transform duration-300 group-hover:rotate-6"
              />

              <span>GitHub</span>

              <FiArrowUpRight
                size={12}
                className="text-zinc-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-300"
              />
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsOpen((value) => !value)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800/80 bg-zinc-900/40 text-zinc-400 transition-colors duration-300 hover:border-zinc-700 hover:text-zinc-100 sm:hidden"
            >
              {isOpen ? <FiX size={17} /> : <FiMenu size={17} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -8,
                  scale: 0.98,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -8,
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute left-0 right-0 top-[calc(100%+8px)] overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/95 p-2 shadow-2xl shadow-black/30 backdrop-blur-xl sm:hidden"
              >
                <nav className="flex flex-col">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={(event) => handleNavClick(event, item.href)}
                      initial={{
                        opacity: 0,
                        x: -8,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        duration: 0.2,
                        delay: index * 0.04,
                      }}
                      className="flex items-center justify-between rounded-xl px-4 py-3.5 text-xs text-zinc-400 transition-colors duration-200 hover:bg-zinc-900 hover:text-zinc-100"
                    >
                      <span>{item.label}</span>

                      <span className="font-mono text-[9px] text-zinc-700">
                        0{index + 1}
                      </span>
                    </motion.a>
                  ))}

                  {/* Mobile GitHub */}
                  <a
                    href="https://github.com/omid-nk"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="mt-1 flex items-center justify-between rounded-xl border-t border-zinc-800/70 px-4 py-4 text-xs text-zinc-400 transition-colors duration-200 hover:text-zinc-100"
                  >
                    <span className="flex items-center gap-2.5">
                      <FiGithub size={14} />
                      GitHub
                    </span>

                    <FiArrowUpRight size={13} />
                  </a>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </header>
  );
}
