"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { OmniaGeometry } from "./world-geometry";
import { useMounted } from "@/components/hooks/use-mounted";

gsap.registerPlugin(ScrollTrigger);

const PRINCIPLES = [
  {
    number: "01",
    title: "Structure",
    text: "A single central axis governs the layout. Nothing is placed arbitrarily; every element aligns to the same spine, and the whole page reads as one measured system.",
  },
  {
    number: "02",
    title: "Silence",
    text: "The interface withholds. Motion appears only to explain, color appears only to confirm. The quiet details carry the weight the decoration would otherwise claim.",
  },
  {
    number: "03",
    title: "Precision",
    text: "Timing is measured in milliseconds, spacing in fixed increments. The result feels inevitable — nothing to add, nothing to remove.",
  },
];

export function OmniaExperience() {
  const mounted = useMounted();
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!mounted || !pageRef.current) return;

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        // Reduced motion: present the finished structure immediately.
        gsap.set("[data-geometry]", { opacity: 1, scaleX: 1, scaleY: 1, scale: 1 });
        gsap.set(
          ".omnia-hero-meta, .omnia-hero-title, .omnia-hero-tagline, .omnia-hero-spec, [data-omnia-reveal], [data-omnia-measure]",
          { opacity: 1, y: 0, scaleX: 1 }
        );
        return;
      }

      // ── INITIAL STATES ──
      // The structure begins collapsed. CSS holds it invisible;
      // GSAP will draw it into being, then reveal the content.
      gsap.set("[data-geometry='axis'], [data-geometry='guide']", { scaleY: 0 });
      gsap.set("[data-geometry='floor']", { scaleX: 0 });
      gsap.set("[data-geometry='bracket']", { scale: 0.7 });
      gsap.set("[data-geometry='coremark']", { scale: 0 });
      gsap.set(".omnia-hero-meta, .omnia-hero-title, .omnia-hero-tagline, .omnia-hero-spec", { y: 14 });

      // ── THE ASSEMBLE SEQUENCE ──
      // An architectural construction, in deliberate order:
      //   1. The central axis draws itself down.
      //   2. The vertical guides follow — the spine's alignment.
      //   3. The floor bands expand from the center outward.
      //   4. The brackets lock into place at the corners.
      //   5. The coremark locks — the structure is anchored.
      //   6. Only then does the content appear.
      const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

      tl.to("[data-geometry='axis']", { opacity: 1, scaleY: 1, duration: 0.85 }, 0)
        .to("[data-geometry='guide']", { opacity: 1, scaleY: 1, duration: 0.7, stagger: 0.1 }, 0.12)
        .to(
          "[data-geometry='floor']",
          { opacity: 1, scaleX: 1, duration: 0.55, stagger: 0.06, ease: "power2.inOut" },
          0.28
        )
        .to("[data-geometry='bracket']", { opacity: 1, scale: 1, duration: 0.4, stagger: 0.05, ease: "power2.out" }, 0.48)
        .to("[data-geometry='coremark']", { opacity: 1, scale: 1, duration: 0.45, ease: "power2.out" }, 0.64)
        .addLabel("structure-locked")
        .to(".omnia-hero-meta", { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "structure-locked+=0.08")
        .to(".omnia-hero-title", { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "structure-locked+=0.16")
        .to(".omnia-hero-tagline", { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "structure-locked+=0.26")
        .to(".omnia-hero-spec", { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "structure-locked+=0.34");

      // ── SCROLL REVEALS ──
      // The case study assembles further as the visitor descends.
      // Content emerges in symmetrical blocks, aligned to the axis.
      gsap.utils.toArray<HTMLElement>("[data-omnia-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 84%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Measurement lines draw across as the sections are read.
      gsap.utils.toArray<HTMLElement>("[data-omnia-measure]").forEach((el) => {
        gsap.fromTo(
          el,
          { scaleX: 0, opacity: 0 },
          {
            scaleX: 1,
            opacity: 1,
            duration: 0.8,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: el,
              start: "top 86%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, [mounted]);

  return (
    <section
      ref={pageRef}
      className="omnia-experience relative min-h-screen overflow-hidden"
      aria-label="OMNIA — a case study in precision, structure, and silence"
    >
      {/* ── Persistent OMNIA Structure ──
          The high-contrast OMNIA geometry frames the entire page.
          Masked at the edges so it reads as architecture, not noise.
          Assembled once on entry by the Assemble sequence. */}
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 opacity-45 [mask-image:linear-gradient(to_bottom,transparent,black_16%,black_82%,transparent)]">
          <OmniaGeometry coreState="present" />
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          HERO — The Assemble
          Structure constructs itself, then the word appears.
          ═══════════════════════════════════════════════════ */}
      <header className="relative z-10 min-h-screen flex flex-col items-center justify-center px-[var(--spacing-container)] text-center">
        {/* Top meta — symmetric across the axis */}
        <div className="omnia-hero-meta mb-14 md:mb-20 w-full max-w-[560px] flex items-center justify-between text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-text-faint opacity-0">
          <span>01 — Case Study</span>
          <span className="h-px w-10 bg-accent/30" />
          <span>Digital Experience</span>
        </div>

        {/* Title — the word, centered on the spine */}
        <div className="omnia-hero-title opacity-0">
          <h1 className="font-display text-[clamp(3.5rem,12vw,8rem)] font-medium tracking-[-0.02em] leading-[0.95] text-text">
            OMNIA
          </h1>
          <div className="omnia-hero-rule h-px w-24 bg-accent/30 mx-auto mt-8 origin-center" />
        </div>

        {/* Tagline */}
        <p className="omnia-hero-tagline mt-8 max-w-[460px] font-sans text-[15px] md:text-[16px] leading-[1.8] text-text-muted opacity-0">
          Precision, structure, and silence — a world built around control.
        </p>

        {/* Spec row — measured, tabular */}
        <div className="omnia-hero-spec mt-14 md:mt-16 flex flex-col sm:flex-row items-center gap-3 sm:gap-10 text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-text-faint opacity-0">
          <span>Year — 2026</span>
          <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-accent/25" />
          <span>Discipline — Experience Architecture</span>
          <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-accent/25" />
          <span>Role — Design &amp; Direction</span>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════
          01 — THE BRIEF
          ═══════════════════════════════════════════════════ */}
      <section className="relative z-10 px-[var(--spacing-container)] py-28 md:py-40">
        <div className="max-w-[640px] mx-auto text-center">
          <div className="omnia-section-label text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-accent/70 mb-6 opacity-0" data-omnia-reveal>
            01 — The Brief
          </div>
          <h2 className="font-display text-[clamp(1.75rem,3.6vw,2.6rem)] font-semibold tracking-[-0.02em] leading-[1.1] mb-8 text-text/95 opacity-0" data-omnia-reveal>
            The problem was noise.
          </h2>
          <p className="font-sans text-text-muted text-[15px] md:text-[16px] leading-[1.85] opacity-0" data-omnia-reveal>
            Most products compete for attention. OMNIA was built to do the opposite —
            an interface that earns trust through restraint, where every element is
            measured, aligned, and intentional. Nothing shouted. Everything held its place.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          02 — THE SYSTEM
          Three measured principles, stacked on the axis.
          ═══════════════════════════════════════════════════ */}
      <section className="relative z-10 px-[var(--spacing-container)] py-28 md:py-40">
        <div className="max-w-[720px] mx-auto">
          <div className="omnia-section-label text-center text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-accent/70 mb-16 md:mb-20 opacity-0" data-omnia-reveal>
            02 — The System
          </div>

          <div className="flex flex-col items-center gap-20 md:gap-28">
            {PRINCIPLES.map((principle) => (
              <div key={principle.number} className="flex flex-col items-center text-center opacity-0" data-omnia-reveal>
                {/* Center tick above each principle */}
                <div className="h-px w-8 bg-accent/30 mb-6" data-omnia-measure />
                <div className="text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-text-faint mb-4">
                  {principle.number}
                </div>
                <h3 className="font-display text-[clamp(1.5rem,3vw,2.2rem)] font-medium tracking-[-0.02em] leading-[1.1] mb-5 text-text/92">
                  {principle.title}
                </h3>
                <p className="font-sans text-text-muted text-[15px] md:text-[16px] leading-[1.85] max-w-[480px]">
                  {principle.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          03 — THE RESULT
          A structural drawing — the outcome framed as architecture.
          ═══════════════════════════════════════════════════ */}
      <section className="relative z-10 px-[var(--spacing-container)] py-28 md:py-40">
        <div className="max-w-[840px] mx-auto">
          <div className="omnia-section-label text-center text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-accent/70 mb-14 opacity-0" data-omnia-reveal>
            03 — The Result
          </div>

          <div className="omnia-drawing relative border border-accent/20 bg-bg/20 opacity-0" data-omnia-reveal>
            {/* Corner brackets — the frame locks */}
            <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-accent/45 -translate-x-px -translate-y-px" />
            <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-accent/45 -translate-x-px -translate-y-px" />
            <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-accent/45 -translate-x-px translate-y-px" />
            <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-accent/45 -translate-x-px translate-y-px" />

            {/* Edge measurement ticks */}
            <span className="absolute top-1/2 left-0 w-px h-2 bg-accent/30 -translate-y-1/2" />
            <span className="absolute top-1/2 right-0 w-px h-2 bg-accent/30 -translate-y-1/2" />
            <span className="absolute left-1/2 top-0 w-2 h-px bg-accent/30 -translate-x-1/2" />
            <span className="absolute left-1/2 bottom-0 w-2 h-px bg-accent/30 -translate-x-1/2" />

            <div className="px-8 py-20 md:px-20 md:py-28 text-center">
              <div className="font-display text-[clamp(1.6rem,3.5vw,2.6rem)] font-light tracking-[-0.02em] leading-[1.15] text-text/92">
                The interface disappears.
                <br />
                The structure remains.
              </div>
              <div className="h-px w-12 bg-accent/30 mx-auto my-10 origin-center" data-omnia-measure />
              <p className="font-sans text-text-muted text-[15px] leading-[1.85] max-w-[440px] mx-auto">
                OMNIA holds attention not by shouting, but by being exactly where the
                user expects it to be. The experience settles into calm confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          NEXT WORLD
          ═══════════════════════════════════════════════════ */}
      <section className="relative z-10 px-[var(--spacing-container)] pt-8 pb-32 md:pb-44 text-center">
        <div className="omnia-section-label text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-text-faint mb-8 opacity-0" data-omnia-reveal>
          Next World
        </div>
        <Link
          href="/work/nexora"
          className="group inline-flex flex-col items-center gap-4 opacity-0"
          data-omnia-reveal
        >
          <span className="font-display text-[clamp(2.5rem,8vw,5rem)] font-medium tracking-[-0.02em] leading-none text-text/90 transition-colors duration-700 group-hover:text-accent">
            NEXORA
          </span>
          <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-text-faint transition-colors duration-700 group-hover:text-accent/80">
            Depth, not display.
          </span>
        </Link>
      </section>
    </section>
  );
}