"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/utils";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, SITE_CONFIG } from "@/constants";

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
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled && "bg-bg/80 backdrop-blur-xl border-b border-border"
        )}
        role="banner"
      >
        <nav
          className="max-w-[1280px] mx-auto px-[var(--spacing-container)] flex items-center justify-between h-16 md:h-20"
          aria-label="Main"
        >
          <Link href="/" aria-label={`${SITE_CONFIG.name} — Home`}>
            <span className="flex items-center gap-3 font-bold text-base tracking-tight">
              <span
                className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center"
                aria-hidden="true"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#07070a"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </span>
              Aurora<span className="text-accent">Dental</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] font-medium text-text-muted hover:text-text transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={`tel:${SITE_CONFIG.phone.replace(/\D/g, "")}`}
              className="flex items-center gap-2 text-[13px] font-medium text-accent"
              aria-label={`Call us at ${SITE_CONFIG.phone}`}
            >
              <Phone size={13} aria-hidden="true" /> {SITE_CONFIG.phone}
            </a>
            <Button variant="primary" size="sm">
              <Link href="#contact">Book Now</Link>
            </Button>
          </div>

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
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className="text-2xl font-medium text-text"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: NAV_LINKS.length * 0.05, duration: 0.3 }}
            >
              <Button variant="primary" size="lg" onClick={() => setOpen(false)}>
                <Link href="#contact">Book Consultation</Link>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
