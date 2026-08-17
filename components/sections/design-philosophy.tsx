"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useExperience } from "@/components/layout/experience-context";

gsap.registerPlugin(ScrollTrigger);

const PRINCIPLES = [
  {
    number: "01",
    title: "Identity Over Trends",
    description:
      "Trends come and go quickly. A distinctive voice takes longer to build, but it lasts — and it becomes something people recognize without being told.",
  },
  {
    number: "02",
    title: "Meaning Over Decoration",
    description:
      "Every gradient, every transition, every pixel should answer a question. If I can't explain why something is there, it doesn't stay.",
  },
  {
    number: "03",
    title: "Experience Over Features",
    description:
      "A hundred features can't make up for one interaction that feels wrong. I've learned to measure design by what works quietly, not by what's visible.",
  },
  {
    number: "04",
    title: "Consistency Creates Identity",
    description:
      "Recognition comes from repetition. When the same care shows up in every detail — the heading, the transition, the spacing — a site starts to feel like one thing instead of many.",
  },
  {
    number: "05",
    title: "Simplicity Creates Luxury",
    description:
      "The best work feels inevitable — nothing to add, nothing to remove. Getting there is the hardest part; it means every element that remains has earned its place.",
  },
];

export function DesignPhilosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const principlesRef = useRef<HTMLDivElement>(null);
  const { event } = useExperience();

  useEffect(() => {
    if (!sectionRef.current) return;

    // Motion duration derives from Core state
    const dur = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--core-motion-duration") || "1");

    const ctx = gsap.context(() => {
      // ── CORE FOCUS → PHILOSOPHY BEGINS ──
      // The Core transitions from external exploration to internal concentration.
      // World motion slows. The vertical philosophy thread emerges.
      // The first principle becomes dominant.
      // Then each following principle emerges from the previous one's settling state.
      // The principles feel like: thought causing thought.
      // Not: scroll causing item reveal.

      // Heading reveal — emerges from Core focus
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2 * dur,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      if (!principlesRef.current) return;
      const moments = principlesRef.current.querySelectorAll(".principle-moment");

      // ── Sequential Thought Moments ──
      // Each principle occupies a full viewport.
      // Current = dominant · Previous = faint memory · Next = quiet anticipation.
      // Each moment has its own reveal character.
      // The thought causes the next thought.
      moments.forEach((moment, i) => {
        const title = moment.querySelector(".principle-title");
        const desc = moment.querySelector(".principle-desc");
        const line = moment.querySelector(".principle-line");
        const number = moment.querySelector(".principle-number");
        const atmosphere = moment.querySelector(".principle-atmosphere");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: moment,
            start: "top 88%",
            end: "top -18%",
            scrub: 1.1 * dur,
          },
        });

        // State journey: anticipation → dominant → faint memory
        // This is the thought becoming, being, then remembering
        tl.fromTo(
          moment,
          { opacity: 0.15, scale: 0.975, filter: "blur(3px)" },
          { opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.45, ease: "power2.out" },
          0
        ).to(
          moment,
          { opacity: 0.08, scale: 0.995, filter: "blur(2px)", duration: 0.5, ease: "power1.inOut" },
          0.5
        );

        // Atmosphere rises when principle is active — the thought's environment
        if (atmosphere) {
          tl.fromTo(
            atmosphere,
            { opacity: 0 },
            { opacity: 1, duration: 0.4, ease: "power2.out" },
            0
          );
          tl.to(
            atmosphere,
            { opacity: 0, duration: 0.4, ease: "power1.inOut" },
            0.55
          );
        }

        // Distinct reveal per principle — the journey never repeats itself
        switch (i % 5) {
          case 0:
            if (line) tl.fromTo(line, { scaleX: 0 }, { scaleX: 1, duration: 0.35 }, 0.05);
            if (title) tl.fromTo(title, { x: -26, opacity: 0 }, { x: 0, opacity: 1, duration: 0.4 }, 0.05);
            if (desc) tl.fromTo(desc, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3 }, 0.2);
            break;
          case 1:
            if (title) tl.fromTo(title, { y: 30, clipPath: "inset(100% 0 0 0)", opacity: 0 }, { y: 0, clipPath: "inset(0% 0 0 0)", opacity: 1, duration: 0.45 }, 0.05);
            if (desc) tl.fromTo(desc, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.35 }, 0.2);
            break;
          case 2:
            if (number) tl.fromTo(number, { opacity: 0, y: -6 }, { opacity: 1, y: 0, duration: 0.3 }, 0.08);
            if (title) tl.fromTo(title, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4 }, 0.05);
            if (desc) tl.fromTo(desc, { opacity: 0 }, { opacity: 1, duration: 0.3 }, 0.2);
            break;
          case 3:
            if (line) tl.fromTo(line, { scaleX: 0 }, { scaleX: 1, duration: 0.4 }, 0.05);
            if (title) tl.fromTo(title, { clipPath: "inset(0 100% 0 0)", opacity: 0 }, { clipPath: "inset(0 0% 0 0)", opacity: 1, duration: 0.45 }, 0.05);
            if (desc) tl.fromTo(desc, { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3 }, 0.2);
            break;
          case 4:
            if (title) tl.fromTo(title, { opacity: 0, filter: "blur(6px)" }, { opacity: 1, filter: "blur(0px)", duration: 0.5 }, 0.05);
            if (desc) tl.fromTo(desc, { opacity: 0 }, { opacity: 1, duration: 0.3 }, 0.2);
            break;
        }
      });

      // The thinking environment deepens as the visitor descends
      const thread = sectionRef.current?.querySelector(".philosophy-thread");
      if (thread) {
        gsap.fromTo(
          thread,
          { opacity: 0.4 },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: principlesRef.current,
              start: "top 60%",
              end: "bottom 20%",
              scrub: 1.5,
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
      id="philosophy"
      className="relative px-[var(--spacing-container)] overflow-hidden"
      aria-labelledby="philosophy-heading"
    >
      {/* ── Thinking Atmosphere ──
          The Core's thinking phase quietens the global environment.
          Here, only a vertical thread remains — the line of thought. */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="philosophy-thread absolute left-1/2 top-[4%] bottom-[4%] w-px opacity-40" />
      </div>

      <div className="max-w-[1280px] mx-auto relative z-10">
        {/* ── Section Introduction ──
            Establishes the worldview. */}
        <div ref={headingRef} className="py-32 md:py-44 max-w-[560px] opacity-0">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.16em] text-accent mb-5">
            Thinking
          </span>
          <h2
            id="philosophy-heading"
            className="font-display text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-[-0.03em] leading-[1.1]"
          >
            Less Decoration.
            <br />
            More Intention.
          </h2>
        </div>

        {/* ── Principles Journey ──
            Five sequential moments.
            Scroll through thought, not a list. */}
        <div ref={principlesRef} className="pb-32 md:pb-44">
          {PRINCIPLES.map((principle, i) => (
            <div
              key={principle.number}
              className={`principle-moment ${i % 2 === 1 ? "principle-moment-offset" : ""}`}
            >
              {/* Principle atmosphere — supports the active thought */}
              <div className="principle-atmosphere absolute inset-0 pointer-events-none opacity-0" aria-hidden="true" />
              <div className="principle-moment-inner">
                {/* Principle number — quiet anchor */}
                <span className="principle-number block text-[10px] font-semibold text-accent/40 tracking-[0.16em] mb-6">
                  {principle.number}
                </span>

                {/* Atmospheric line — unique per principle */}
                {i < 3 && (
                  <div className="principle-line h-px w-[40px] bg-accent/15 mb-6 origin-left" />
                )}
                {i === 3 && (
                  <div className="principle-line h-px w-[60px] bg-accent/15 mb-6 origin-left" />
                )}

                {/* Principle title — the idea */}
                <h3 className="principle-title font-display text-[clamp(1.75rem,3.6vw,2.6rem)] font-semibold tracking-[-0.02em] mb-5 text-text/95">
                  {principle.title}
                </h3>

                {/* Principle description — the thought behind it */}
                <p className="principle-desc text-text-muted text-[15px] md:text-[16px] leading-[1.8] max-w-[560px]">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
