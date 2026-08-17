"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useExperience } from "@/components/layout/experience-context";

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const questionRef = useRef<HTMLDivElement>(null);
  const invitationRef = useRef<HTMLDivElement>(null);
  const { event } = useExperience();

  useEffect(() => {
    if (!sectionRef.current) return;

    // Motion duration derives from Core state — slowest in threshold
    const dur = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--core-motion-duration") || "1");

    const ctx = gsap.context(() => {
      // ── CORE COMPLETES CYCLE → ENVIRONMENT SETTLES ──
      // Core completes its cycle.
      // Movement settles.
      // The horizon lines emerge.
      // Atmosphere becomes stable.
      // The final question appears.
      // The invitation appears only after the environment reaches rest.
      // The visitor feels: arrival.

      // The question — slow, deliberate reveal. Caused by Core settling.
      if (questionRef.current) {
        gsap.fromTo(
          questionRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 1.6 * dur,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 65%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // The invitation — quiet arrival. Appears after environment reaches rest.
      if (invitationRef.current) {
        gsap.fromTo(
          invitationRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1.8 * dur,
            ease: "power2.out",
            delay: 0.3 * dur,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // ── Stillness Response ──
      // The environment settles. The horizon assembles.
      // This is the Core completing its cycle.
      const settleLayers = sectionRef.current?.querySelectorAll(".threshold-settle");
      settleLayers?.forEach((layer) => {
        gsap.fromTo(
          layer,
          { opacity: 0 },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              end: "center center",
              scrub: 2,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [event]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative px-[var(--spacing-container)] overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* ── Threshold Environment ──
          The Core settles into stillness (global).
          Here, a horizon assembles — the scene arrives at rest.
          The environment completes its cycle. */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="threshold-settle threshold-horizon absolute bottom-[22%] left-[14%] right-[14%] h-px bg-gradient-to-r from-transparent via-accent/[0.12] to-transparent" />
        <div className="threshold-settle threshold-horizon absolute bottom-[15%] left-[22%] right-[22%] h-px bg-gradient-to-r from-transparent via-accent/[0.08] to-transparent" />
        <div className="threshold-settle threshold-horizon absolute bottom-[9%] left-[18%] right-[18%] h-px bg-gradient-to-r from-transparent via-accent/[0.05] to-transparent" />
        <div className="threshold-settle absolute bottom-0 left-0 right-0 h-[40%] bg-[radial-gradient(ellipse_at_50%_100%,rgba(130,45,235,0.04)_0%,transparent_60%)]" />
      </div>

      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="py-40 md:py-56 max-w-[560px]">
          {/* The question — an invitation to think, not a CTA */}
          <div ref={questionRef} className="opacity-0">
            <h2
              id="contact-heading"
              className="font-display text-[clamp(1.75rem,4.5vw,3rem)] font-light tracking-[-0.02em] leading-[1.15] mb-10 text-text/88 core-type-calm"
            >
              What would you build
              <br />
              if the experience mattered
              <br />
              as much as the idea?
            </h2>
          </div>

          {/* The invitation — quiet, unhurried. Crossing a threshold. */}
          <div ref={invitationRef} className="opacity-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 group cta-nexora"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-text-muted transition-colors duration-500 group-hover:text-accent">
                Let&apos;s explore it.
              </span>
              <svg
                className="w-4 h-4 text-text-muted transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-accent group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
