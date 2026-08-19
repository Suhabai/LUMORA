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

    const dur = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue(
        "--core-motion-duration"
      ) || "1"
    );

    const ctx = gsap.context(() => {
      // ── HEADING REVEAL ──
      // Emerges from Core focus — the thinking begins
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
      const moments = gsap.utils.toArray<HTMLElement>(".principle-moment");

      // ── STAGE SETUP ──
      // All five thoughts are stacked at the center of one stage.
      // Every thought begins in "quiet anticipation" — invisible, waiting below.
      gsap.set(moments, {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity: 0,
        y: 40,
        scale: 0.97,
        filter: "blur(5px)",
        willChange: "transform, opacity, filter",
      });

      // ── MASTER THOUGHT JOURNEY ──
      // The section is pinned. Scrolling drives a continuous mental
      // progression. One viewport of scroll per thought.
      //
      // Each thought arcs through three states:
      //   Anticipation  (opacity 0,   y 40,  scale 0.97, blur)
      //   Dominant      (opacity 1,   y 0,   scale 1,    sharp)
      //   Faint memory  (opacity 0.15, y -40, scale 0.9,  blurred)
      //
      // Segments overlap by 0.1 — the next thought begins to emerge
      // before the current one fully recedes. They melt, not cut.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: principlesRef.current,
          start: "top top",
          end: `+=${moments.length * 100}%`,
          scrub: 1.1 * dur,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      moments.forEach((moment, i) => {
        const number = moment.querySelector(".principle-number");
        const desc = moment.querySelector(".principle-desc");
        const title = moment.querySelector(".principle-title");
        const line = moment.querySelector(".principle-line");
        const atmosphere = moment.querySelector(".principle-atmosphere");

        // The thought's segment begins slightly early — overlapping the
        // previous thought's memory phase. The journey is one continuous wave.
        const segmentStart = Math.max(0, i - 0.12);
        const emergeDuration = 0.6;
        const recedeAt = segmentStart + 0.68;
        const recedeDuration = 0.42;

        // ── PRINCIPLE ARC ──
        // Anticipation → Dominant → Faint memory
        tl.fromTo(
          moment,
          { opacity: 0, y: 40, scale: 0.97, filter: "blur(5px)" },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: emergeDuration,
            ease: "power2.out",
          },
          segmentStart
        ).to(
          moment,
          {
            opacity: 0.15,
            y: -40,
            scale: 0.9,
            filter: "blur(4px)",
            duration: recedeDuration,
            ease: "power1.inOut",
          },
          recedeAt
        );

        // ── THOUGHT ATMOSPHERE ──
        // A soft radial bloom accompanies the thought, then fades.
        if (atmosphere) {
          tl.fromTo(
            atmosphere,
            { opacity: 0 },
            { opacity: 0.9, duration: 0.55, ease: "power1.out" },
            segmentStart
          ).to(
            atmosphere,
            { opacity: 0, duration: 0.4, ease: "power1.inOut" },
            recedeAt
          );
        }

        // ── ELEMENT REVEALS ──
        // Each element arrives with its own character as the thought forms.

        // Number — the quiet anchor that grounds the thought
        if (number) {
          tl.fromTo(
            number,
            { opacity: 0, y: -8 },
            { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
            segmentStart + 0.1
          );
        }

        // Line — the atmospheric gesture unique to each thought
        if (line) {
          tl.fromTo(
            line,
            { scaleX: 0, opacity: 0 },
            { scaleX: 1, opacity: 1, duration: 0.35, ease: "power3.out" },
            segmentStart + 0.12
          );
        }

        // Title — distinct reveal per principle.
        // Each idea arrives differently, like a thought forming.
        const titleStart = segmentStart + 0.06;
        switch (i % 5) {
          case 0:
            // From the left — a lateral thought
            if (title)
              tl.fromTo(
                title,
                { x: -30, opacity: 0, filter: "blur(3px)" },
                {
                  x: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                  duration: 0.42,
                  ease: "power3.out",
                },
                titleStart
              );
            break;
          case 1:
            // From below with clip reveal — a thought rising
            if (title)
              tl.fromTo(
                title,
                { y: 35, clipPath: "inset(100% 0 0 0)", opacity: 0 },
                {
                  y: 0,
                  clipPath: "inset(0% 0 0 0)",
                  opacity: 1,
                  duration: 0.45,
                  ease: "power3.out",
                },
                titleStart
              );
            break;
          case 2:
            // Scale from center — a thought materializing
            if (title)
              tl.fromTo(
                title,
                { scale: 0.88, opacity: 0, filter: "blur(4px)" },
                {
                  scale: 1,
                  opacity: 1,
                  filter: "blur(0px)",
                  duration: 0.44,
                  ease: "power3.out",
                },
                titleStart
              );
            break;
          case 3:
            // Reveal from right edge — a thought sliding in
            if (title)
              tl.fromTo(
                title,
                { clipPath: "inset(0 100% 0 0)", opacity: 0 },
                {
                  clipPath: "inset(0 0% 0 0)",
                  opacity: 1,
                  duration: 0.45,
                  ease: "power3.out",
                },
                titleStart
              );
            break;
          case 4:
            // Emergence from blur — a thought crystallizing
            if (title)
              tl.fromTo(
                title,
                { opacity: 0, filter: "blur(8px)", y: 8 },
                {
                  opacity: 1,
                  filter: "blur(0px)",
                  y: 0,
                  duration: 0.5,
                  ease: "power3.out",
                },
                titleStart
              );
            break;
        }

        // Description — the thought behind the idea.
        // Always follows the title, completing the thought.
        if (desc) {
          tl.fromTo(
            desc,
            { y: 14, opacity: 0, filter: "blur(2px)" },
            {
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
              duration: 0.35,
              ease: "power2.out",
            },
            segmentStart + 0.22
          );
        }
      });
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
      <div className="max-w-[1280px] mx-auto relative z-10">
        {/* ── Section Introduction ──
            Establishes the worldview. Scrolls normally before the pin. */}
        <div ref={headingRef} className="py-32 md:py-44 max-w-[560px] opacity-0">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.16em] text-accent mb-5 font-sans">
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
            Pinned. Five sequential thoughts on one stage.
            Current = dominant, previous = faint memory, next = anticipation.
            The thoughts overlap and melt into one another. */}
        <div ref={principlesRef} className="philosophy-pin relative">
          <div className="philosophy-stage relative mx-auto w-full max-w-[900px]">
            {/* Line of thought — stable through the entire journey */}
            <div
              className="philosophy-thread absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
              aria-hidden="true"
            />

            {PRINCIPLES.map((principle, i) => (
              <div
                key={principle.number}
                className={`principle-moment ${
                  i % 2 === 1 ? "principle-moment-offset" : ""
                }`}
              >
                {/* Thought atmosphere — the environment of the active idea */}
                <div
                  className="principle-atmosphere absolute inset-0 pointer-events-none opacity-0"
                  aria-hidden="true"
                />

                <div className="principle-moment-inner">
                  {/* Number — quiet anchor */}
                  <span className="principle-number block text-[10px] font-semibold text-accent/40 tracking-[0.16em] mb-6 font-sans">
                    {principle.number}
                  </span>

                  {/* Line — atmospheric gesture */}
                  <div
                    className={`principle-line h-px bg-accent/15 mb-6 origin-left ${
                      i === 3 ? "w-[60px]" : "w-[40px]"
                    }`}
                  />

                  {/* Title — the idea (Cormorant Garamond) */}
                  <h3 className="principle-title font-display text-[clamp(1.75rem,3.6vw,2.6rem)] font-semibold tracking-[-0.02em] mb-5 text-text/95">
                    {principle.title}
                  </h3>

                  {/* Description — the thought behind it (Manrope) */}
                  <p className="principle-desc font-sans text-text-muted text-[15px] md:text-[16px] leading-[1.8] max-w-[560px]">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}