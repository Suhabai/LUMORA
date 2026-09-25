"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/utils";
import { SITE_CONFIG } from "@/constants";
import { SoundControl } from "./sound-control";

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
              {/* Approved luminous identity mark — always visible */}
              <img
                src="/brand/lumora-mark-luminous.webp"
                alt=""
                className="w-6 h-6 object-contain"
                aria-hidden="true"
              />
              {/* Quiet text wordmark — hidden below 768px */}
              <span
                className="hidden md:block whitespace-nowrap font-sans text-[22px] font-light leading-none tracking-[0.32em] text-text"
              >
                LUMORA
              </span>
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

          <div className="flex items-center gap-1">
            <SoundControl />
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center text-text"
              onClick={() => setOpen((isOpen) => !isOpen)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
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
