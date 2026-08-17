"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/utils";
import { SITE_CONFIG } from "@/constants";

const ENV_LINKS = [
  { href: "#works", label: "Worlds" },
  { href: "#philosophy", label: "Thinking" },
  { href: "#about", label: "Person" },
  { href: "#contact", label: "Threshold" },
] as const;

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
            <span className="flex items-center gap-3 font-bold text-base tracking-tight">
              <span
                className="w-8 h-8 rounded-lg bg-accent/15 border border-accent/20 flex items-center justify-center transition-colors duration-500 hover:bg-accent/25"
                aria-hidden="true"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-accent)"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </span>
              LUMORA
            </span>
          </Link>

          {/* Environment links — subtle orientation, not site map */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8" role="list">
              {ENV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[13px] font-medium text-text-muted/60 hover:text-text transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* No CTA button — the experience IS the invitation */}

          <button
            className="md:hidden w-10 h-10 flex items-center justify-center text-text"
            onClick={() => setOpen(!open)}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bg flex flex-col items-center justify-center gap-8 md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col items-center gap-8" role="list">
              {ENV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <a
                    href={link.href}
                    className="text-2xl font-medium text-text"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
