"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMounted } from "@/components/hooks/use-mounted";

gsap.registerPlugin(ScrollTrigger);

const CHAPTERS = [
  {
    num: "I",
    title: "Architecture",
    folio: "01",
    offset: false,
    abstract:
      "The experience is built as a system, not a set of pages. A simple foundation — one environment, one core, one set of rules — carries every world, every page, every future addition. Structure supports the feeling, never the reverse.",
  },
  {
    num: "II",
    title: "Design Language",
    folio: "02",
    offset: true,
    abstract:
      "Four materials, used with intention. Void holds the depth. Graphite gives the structure. Mist keeps the space alive. And a single signature of light marks every moment of presence.",
  },
  {
    num: "III",
    title: "The Living Core",
    folio: "03",
    offset: false,
    abstract:
      "A material, not an effect. The center of the world breathes through seven semantic states — from the entry to the threshold — growing smaller, slower, warmer, and softer as the journey deepens.",
  },
  {
    num: "IV",
    title: "The Worlds",
    folio: "04",
    offset: true,
    abstract:
      "OMNIA, NEXORA, VELOCITY. Precision, depth, momentum. Three worlds, one identity — each a distinct expression of the same living system.",
  },
  {
    num: "V",
    title: "The System",
    folio: "05",
    offset: false,
    abstract:
      "The rules the work is held to: identity over trends, meaning over decoration, simplicity creates luxury. Every element must have a purpose. Every motion must have a reason.",
  },
];

export function DocsExperience() {
  const mounted = useMounted();
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!mounted || !pageRef.current) return;

    // Motion duration derives from Core state — the record is a quiet,
    // introspective space, so the reading pace is unhurried.
    const dur = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue("--core-motion-duration") || "1"
    );
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (reduceMotion) {
        gsap.set("[data-docs-entrance], [data-docs-reveal]", { opacity: 1, y: 0, filter: "blur(0px)" });
        return;
      }

      // ── THE MASTHEAD ──
      // The record opens slowly, as if the first page turning.
      // Nothing moves much — the words simply become visible.
      gsap.timeline()
        .to("[data-docs-entrance]", {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          stagger: 0.14,
          duration: 1.3 * dur,
          ease: "power2.out",
        }, 0.25);

      // ── THE CHAPTERS ──
      // Each chapter surfaces gently as it enters the reading line —
      // the heading first, then the abstract as the eye continues.
      // A slow, scrubbed rise keeps the record continuous, not discrete.
      gsap.utils.toArray<HTMLElement>("[data-docs-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 22, filter: "blur(2px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              end: "top 58%",
              scrub: 1.2,
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
      id="philosophy"
      className="docs-experience relative min-h-screen overflow-hidden"
      aria-label="The LUMORA Record — the foundations of the experience, kept as an editorial document"
    >
      {/* ── The Masthead ──
          The opening of the record. The first page, turned slowly. */}
      <header className="relative z-10 min-h-[100svh] flex flex-col justify-center px-[var(--spacing-container)]">
        <div className="max-w-[900px]">
          <div
            className="text-[10px] font-sans font-semibold uppercase tracking-[0.26em] text-accent/70 mb-10"
            data-docs-entrance
          >
            The LUMORA Record — Issue I
          </div>

          <h1
            className="font-display text-[clamp(3rem,12vw,8rem)] font-medium tracking-[-0.02em] leading-[0.95] text-text"
            data-docs-entrance
          >
            The Record
          </h1>

          <div className="relative mt-12 w-24 h-px bg-accent/40" data-docs-entrance>
            <span className="absolute -top-[3px] left-0 w-1.5 h-1.5 rounded-full bg-accent" />
          </div>

          <p
            className="mt-10 max-w-[520px] font-sans text-[15px] md:text-[16px] leading-[1.85] text-text-muted"
            data-docs-entrance
          >
            The foundations of LUMORA, kept as a living document. How the world is built, and
            why it feels the way it does.
          </p>
        </div>
      </header>

      {/* ── The Chapters ──
          An editorial index. Roman numerals, a folio, and the words —
          nothing else. */}
      <div className="relative z-10 px-[var(--spacing-container)] pt-8 pb-32 md:pb-44">
        <div className="max-w-[980px] mx-auto">
          {CHAPTERS.map((c, i) => (
            <article
              key={c.num}
              className={`relative border-t border-white/[0.06] py-16 md:py-20 ${i > 0 ? "md:mt-8" : ""}`}
              data-docs-reveal
            >
              <div className="grid grid-cols-12 gap-6 items-start">
                <div className="col-span-3 md:col-span-1">
                  <span className="font-display text-[clamp(2.2rem,5vw,3.4rem)] font-medium leading-none text-accent/40">
                    {c.num}
                  </span>
                </div>

                <div className="col-span-9 md:col-span-7">
                  <div className="text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-accent/60 mb-3">
                    Chapter {c.num}
                  </div>
                  <h2 className="font-display text-[clamp(1.9rem,4.5vw,3.2rem)] font-medium tracking-[-0.02em] leading-[1.05] text-text/92">
                    {c.title}
                  </h2>
                </div>

                <div className="col-span-12 md:col-span-3 md:col-start-10 md:text-right">
                  <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-text-faint">
                    p. {c.folio}
                  </span>
                </div>
              </div>

              <div className={`grid grid-cols-12 gap-6 ${c.offset ? "mt-10 md:mt-14" : "mt-8 md:mt-10"}`}>
                <p
                  className={`col-span-12 md:col-span-6 ${c.offset ? "md:col-start-5" : "md:col-start-4"} font-sans text-[14px] md:text-[15px] leading-[1.85] text-text-muted`}
                  data-docs-reveal
                >
                  {c.abstract}
                </p>
              </div>
            </article>
          ))}

          {/* ── The Colophon ──
              How the record itself is set. */}
          <article className="relative border-t border-white/[0.06] pt-16 pb-6 md:mt-8" data-docs-reveal>
            <div className="text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-text-faint mb-8">
              Colophon
            </div>
            <div className="grid grid-cols-12 gap-6">
              <p className="col-span-12 md:col-span-6 md:col-start-4 font-sans text-[13px] leading-[1.85] text-text-muted">
                This record is set in Cormorant Garamond and Manrope. It is kept in the Void,
                printed in Mist on Graphite, and signed with a single note of light. It is
                maintained as carefully as the experience itself.
              </p>
            </div>
            <div className="grid grid-cols-12 gap-6 mt-10">
              <div className="col-span-12 md:col-span-6 md:col-start-4 flex items-baseline justify-between">
                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-text-faint">
                  Sohrab — LUMORA
                </span>
                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-text-faint">
                  Volume I
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}