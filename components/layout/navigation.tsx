"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/utils";
import { SITE_CONFIG } from "@/constants";

const ROUTE_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
] as const;

const ENV_LINKS = [
  { href: "/#works", label: "Worlds" },
  { href: "/#philosophy", label: "Thinking" },
  { href: "/#about", label: "Person" },
  { href: "/#contact", label: "Threshold" },
] as const;

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-700",
          scrolled && "bg-bg/60 backdrop-blur-2xl"
        )}
        role="banner"
      >
        <nav
          className="max-w-[1280px] mx-auto px-[var(--spacing-container)] flex items-center justify-between h-16 md:h-20"
          aria-label="Main"
        >
          {/* Brand Zone — the identity, always present */}
          <Link href="/" aria-label={`${SITE_CONFIG.name} — Home`}>
            <span className="flex items-center gap-2">
              {/* M Core — always visible */}
              <svg
                viewBox="0 0 1000 1000"
                fill="var(--color-text)"
                className="w-6 h-6"
                aria-hidden="true"
              >
                <path d="M258,50L328,50L328,950L258,950ZM664,50L734,50L734,922L656,950L664,950ZM328,50L540,411L664,50Z" />
              </svg>
              {/* Wordmark — hidden below 768px */}
              <svg
                viewBox="0 0 3600 1000"
                fill="var(--color-text)"
                className="hidden md:block h-7 w-auto"
                aria-hidden="true"
              >
                <path d="M80,100 L150,100 L150,730 L338,730 L338,800 L80,800 Z M610,100 L680,100 L680,700 Q680,795 775,795 L935,795 Q1035,795 1035,700 L1035,100 L1105,100 L1105,700 Q1105,830 1010,830 L775,830 Q610,830 610,700 Z M1130,100 L1200,100 L1200,800 L1130,800 Z M1200,100 L1209,100 L1405,370 L1385,370 Z M1405,370 L1428,370 L1598,100 L1528,100 Z M1528,100 L1598,100 L1598,790 L1524,800 L1528,800 Z M2040,100 A227,307 0 1,1 2040,800 A227,307 0 1,1 2040,100 Z M2040,271 A193,263 0 1,0 2040,629 A193,263 0 1,0 2040,271 Z M2330,100 L2400,100 L2400,800 L2330,800 Z M2400,100 L2840,100 A157,167 0 0,1 2585,478 L2400,478 Z M2435,135 L2775,135 A122,132 0 0,1 2580,442 L2435,442 Z M2400,478 L2435,478 L2690,800 L2390,800 Z M3136,100 L3144,100 L2994,800 L2934,800 Z M3136,100 L3144,100 L3346,800 L3286,800 Z M3043,530 L3232,530 L3232,580 L3043,580 Z" />
              </svg>
            </span>
          </Link>

          {/* Route links — immediate destinations */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8" role="list">
              {ROUTE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] font-medium text-text-muted hover:text-text transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {ENV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] font-medium text-text-muted/60 hover:text-text-muted transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* No CTA button — the experience IS the invitation */}

          <button
            className="md:hidden w-10 h-10 flex items-center justify-center text-text"
            onClick={() => setOpen((isOpen) => !isOpen)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-bg/98 backdrop-blur-sm flex flex-col items-center justify-center md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {/* Ambient atmosphere */}
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(138,46,255,0.03)_0%,transparent_65%)]" />
            </div>

            <nav className="relative z-10 w-full max-w-[320px] px-8" aria-label="Mobile">
              <ul className="flex flex-col items-stretch gap-2" role="list">
                {ROUTE_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={
                      prefersReducedMotion
                        ? { duration: 0 }
                        : {
                            delay: 0.12 + i * 0.07,
                            duration: 0.5,
                            ease: [0.16, 1, 0.3, 1],
                          }
                    }
                  >
                    <Link
                      href={link.href}
                      className="group flex items-baseline gap-5 py-3 border-b border-border/40 transition-colors duration-300"
                      onClick={() => setOpen(false)}
                    >
                      <span className="text-[10px] font-medium tabular-nums text-text-muted/60 transition-colors duration-300 group-hover:text-accent/60">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-[clamp(1.6rem,5vw,2.2rem)] font-light leading-[1.1] tracking-[-0.01em] text-text transition-colors duration-300 group-hover:text-text">
                        {link.label}
                      </span>
                    </Link>
                  </motion.li>
                ))}
                {ENV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={
                      prefersReducedMotion
                        ? { duration: 0 }
                        : {
                            delay: 0.12 + (ROUTE_LINKS.length + i) * 0.07,
                            duration: 0.5,
                            ease: [0.16, 1, 0.3, 1],
                          }
                    }
                  >
                    <Link
                      href={link.href}
                      className="group flex items-baseline gap-5 py-3 border-b border-border/40 transition-colors duration-300"
                      onClick={() => setOpen(false)}
                    >
                      <span className="text-[10px] font-medium tabular-nums text-text-muted/40 transition-colors duration-300 group-hover:text-accent/60">
                        {String(ROUTE_LINKS.length + i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-[clamp(1.6rem,5vw,2.2rem)] font-light leading-[1.1] tracking-[-0.01em] text-text/70 transition-colors duration-300 group-hover:text-text/80">
                        {link.label}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Closing mark */}
              <motion.div
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={prefersReducedMotion ? { duration: 0 } : { delay: 0.5, duration: 0.6 }}
                className="mt-14 flex justify-center"
              >
                <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-text-muted/30">
                  LUMORA
                </span>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
