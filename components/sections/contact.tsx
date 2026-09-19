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
  const closingRef = useRef<HTMLDivElement>(null);
  const pointRef = useRef<HTMLDivElement>(null);
  const { event } = useExperience();

  useEffect(() => {
    if (!sectionRef.current) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const dur = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--core-motion-duration") || "1");

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set([questionRef.current, invitationRef.current, closingRef.current, pointRef.current].filter(Boolean), { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" });
        gsap.set(".threshold-settle", { opacity: 1 });
        return;
      }
      // ── CORE COMPLETES CYCLE → ENVIRONMENT SETTLES ──
      // This is an arrival, not a footer.
      // The Core settles into absolute stillness — a single point of presence.
      // The horizon lines converge. The atmosphere becomes stable.
      // The final question appears, unhurried.
      // The invitation appears only after the environment reaches rest.
      // The visitor feels: arrival.

      // The question — slow, deliberate, scrubbed. No hard reveal.
      // Caused by Core settling into stillness.
      if (questionRef.current) {
        gsap.fromTo(
          questionRef.current,
          { opacity: 0, y: 20, filter: "blur(2px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 82%",
              end: "top 45%",
              scrub: 1.2 * dur,
            },
          }
        );
      }

      // The invitation — quiet arrival, after the environment reaches rest.
      // "Let's explore it." — crossing a threshold, not clicking a button.
      if (invitationRef.current) {
        const inviteTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "top 30%",
            scrub: 1.2 * dur,
          },
        });
        inviteTl.fromTo(
          invitationRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          0.35
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

      // ── The Threshold Point ──
      // Where the horizon lines converge, the Core's stillness appears:
      // a single point of presence. The material has settled — not dead,
      // at rest. A very slow breath keeps it alive.
      if (pointRef.current) {
        gsap.fromTo(
          pointRef.current,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 65%",
              end: "center 55%",
              scrub: 1.4 * dur,
            },
          }
        );
      }

      // Closing — the final settling, a breath before the end
      if (closingRef.current) {
        gsap.fromTo(
          closingRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: closingRef.current,
              start: "top 94%",
              end: "bottom 60%",
              scrub: 1.2 * dur,
            },
          }
        );
      }
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
          The Core settles into absolute stillness (global).
          Here, a horizon assembles — the scene arrives at rest.
          A single point marks where the journey has settled.
          No form. No conversion. An opening. */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Horizon lines — converging toward stillness */}
        <div className="threshold-settle threshold-horizon absolute bottom-[22%] left-[14%] right-[14%] h-px bg-gradient-to-r from-transparent via-accent/[0.12] to-transparent" />
        <div className="threshold-settle threshold-horizon absolute bottom-[15%] left-[22%] right-[22%] h-px bg-gradient-to-r from-transparent via-accent/[0.08] to-transparent" />
        <div className="threshold-settle threshold-horizon absolute bottom-[9%] left-[18%] right-[18%] h-px bg-gradient-to-r from-transparent via-accent/[0.05] to-transparent" />

        {/* The threshold point — the Core at rest, where the lines converge */}
        <div
          ref={pointRef}
          className="threshold-point absolute bottom-[22%] left-1/2 -translate-x-1/2 -translate-y-1/2"
        />

        {/* Grounding warmth — the last presence */}
        <div className="threshold-settle absolute bottom-0 left-0 right-0 h-[40%] bg-[radial-gradient(ellipse_at_50%_100%,rgba(130,45,235,0.04)_0%,transparent_60%)]" />
        {/* Subtle ambient — the space before the threshold */}
        <div className="threshold-settle absolute top-0 left-0 right-0 h-[30%] bg-[radial-gradient(ellipse_at_50%_0%,rgba(138,46,255,0.02)_0%,transparent_50%)]" />
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

          {/* The invitation — quiet, unhurried. Crossing a threshold.
              A serene line, not a button. An opening, not a conversion. */}
          <div ref={invitationRef} className="opacity-0">
            <Link href="/contact" className="group inline-flex flex-col items-start gap-3">
              <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-text transition-colors duration-700 group-hover:text-accent font-sans">
                Let&apos;s explore it.
              </span>
              <span className="h-px w-16 origin-left bg-accent/35 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-[0.45]" />
            </Link>
          </div>

          {/* Closing — the final settling. A quiet breath. */}
          <div ref={closingRef} className="mt-24 md:mt-32 opacity-0">
            <p className="font-sans text-text-faint text-[12px] leading-[1.7] max-w-[320px]">
              The work begins with a conversation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}