"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { Reveal } from "@/components/ui/reveal";
import { useMounted } from "@/components/hooks/use-mounted";

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Understand",
    text: "Before designing anything, we listen. The problem is always more specific than the brief suggests.",
  },
  {
    number: "02",
    title: "Shape",
    text: "We define the structure, the feeling, and the constraints. Clarity at this stage prevents confusion later.",
  },
  {
    number: "03",
    title: "Design",
    text: "Every visual decision is intentional. The interface communicates through hierarchy, rhythm, and restraint.",
  },
  {
    number: "04",
    title: "Build",
    text: "The experience is engineered with the same care as the design. Performance is part of the experience.",
  },
  {
    number: "05",
    title: "Refine",
    text: "The final pass is about removing everything that doesn't serve the experience. What remains is inevitable.",
  },
];

export function AboutExperience() {
  const mounted = useMounted();
  const philosophyRef = useRef<HTMLElement>(null);

  // ── Philosophy Word Reveal ──
  // "Experience should feel alive." — staggered word-by-word
  useEffect(() => {
    if (!mounted || !philosophyRef.current) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      philosophyRef.current
        ?.querySelectorAll(".phil-word")
        .forEach((el) => {
          (el as HTMLElement).style.opacity = "1";
        });
      return;
    }

    const ctx = gsap.context(() => {
      const words = philosophyRef.current?.querySelectorAll(".phil-word");
      if (!words) return;

      gsap.fromTo(
        words,
        { opacity: 0, y: 10, clipPath: "inset(100% 0 0 0)" },
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0% 0 0 0)",
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: philosophyRef.current,
            start: "top 78%",
          },
        }
      );
    }, philosophyRef);

    return () => ctx.revert();
  }, [mounted]);

  return (
    <>
      {/* ═══════════════════════════════════════════════
          SECTION 01 — THE STUDIO

          LUMORA is introduced first.
          The visitor immediately understands what this is.
          ═══════════════════════════════════════════════ */}
      <section
        id="about-studio"
        className="relative min-h-[85vh] flex flex-col justify-center px-[var(--spacing-container)] overflow-hidden"
        aria-labelledby="studio-heading"
      >
        {/* Ambient atmosphere — warm, centered */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(138,46,255,0.03)_0%,transparent_60%)]" />
        </div>

        <div className="relative z-10 max-w-[720px] py-32 md:py-44">
          <Reveal variant="fadeUp" delay={0}>
            <p className="text-accent text-[10px] font-semibold uppercase tracking-[0.18em] mb-6">
              The Studio
            </p>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.1}>
            <h1
              id="studio-heading"
              className="font-display text-[clamp(3rem,8vw,6rem)] font-bold leading-[0.95] tracking-[-0.04em] mb-8"
            >
              LUMORA
            </h1>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.2}>
            <p className="text-text text-[17px] md:text-[19px] leading-[1.75] max-w-[520px] mb-6">
              A digital studio focused on cinematic web experiences.
            </p>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.3}>
            <p className="text-text-muted text-[15px] md:text-[16px] leading-[1.8] max-w-[480px]">
              We build experiences that feel alive — through intention, response,
              clarity, and presence. Every detail is a decision. Every decision
              serves the experience.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 02 — THE HUMAN PRESENCE

          Sohrab is introduced briefly, secondarily.
          The studio remains visually dominant.
          ═══════════════════════════════════════════════ */}
      <section
        id="about-person"
        className="relative px-[var(--spacing-container)]"
        aria-labelledby="person-heading"
      >
        <div className="max-w-[720px] mx-auto py-24 md:py-36">
          <Reveal variant="fadeUp">
            <p className="text-accent text-[10px] font-semibold uppercase tracking-[0.18em] mb-6">
              Behind the work
            </p>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.1}>
            <h2
              id="person-heading"
              className="font-display text-[clamp(1.6rem,4vw,2.8rem)] font-bold leading-[1.05] tracking-[-0.03em] mb-6"
            >
              Sohrab
            </h2>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.15}>
            <p className="text-text-muted text-[10px] font-semibold uppercase tracking-[0.14em] mb-8">
              Designer &amp; Developer
            </p>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.2}>
            <p className="text-text-muted text-[15px] md:text-[16px] leading-[1.8] max-w-[480px]">
              I design and build cinematic web experiences. The thing I keep
              coming back to is timing — how a moment lands, when silence matters
              more than motion, what pace makes information feel right.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 03 — PHILOSOPHY

          "Experience should feel alive."
          A restrained statement section.
          Typography carries the weight.
          ═══════════════════════════════════════════════ */}
      <section
        ref={philosophyRef}
        id="about-philosophy"
        className="relative px-[var(--spacing-container)]"
        aria-labelledby="philosophy-heading"
      >
        <div className="max-w-[720px] mx-auto py-24 md:py-36 text-center">
          <Reveal variant="fadeUp">
            <p className="text-accent text-[10px] font-semibold uppercase tracking-[0.18em] mb-12">
              Philosophy
            </p>
          </Reveal>

          <h2
            id="philosophy-heading"
            className="font-display text-[clamp(1.8rem,4.5vw,3rem)] font-light leading-[1.2] tracking-[-0.02em] mb-16"
          >
            <span className="phil-word inline-block mr-[0.3em] opacity-0">
              Experience
            </span>
            <span className="phil-word inline-block mr-[0.3em] opacity-0">
              should
            </span>
            <span className="phil-word inline-block mr-[0.3em] opacity-0">
              feel
            </span>
            <span className="phil-word inline-block text-accent opacity-0">
              alive.
            </span>
          </h2>

          <Reveal variant="fadeUp" delay={0.4}>
            <p className="text-text-muted text-[15px] md:text-[16px] leading-[1.8] max-w-[480px] mx-auto">
              Not louder. Not busier. Alive through intention, response,
              clarity, emotion, and presence.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 04 — WHY LUMORA EXISTS

          Trust statement.
          A project is a form of trust.
          ═══════════════════════════════════════════════ */}
      <section
        id="about-trust"
        className="relative px-[var(--spacing-container)]"
        aria-labelledby="trust-heading"
      >
        <div className="max-w-[720px] mx-auto py-24 md:py-36">
          <Reveal variant="fadeUp">
            <p className="text-accent text-[10px] font-semibold uppercase tracking-[0.18em] mb-6">
              Why we exist
            </p>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.1}>
            <h2
              id="trust-heading"
              className="font-display text-[clamp(1.8rem,4.5vw,3rem)] font-bold leading-[1.1] tracking-[-0.03em] mb-10"
            >
              A project is a form of trust.
            </h2>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.15}>
            <p className="text-text-muted text-[15px] md:text-[16px] leading-[1.8] max-w-[520px] mb-8">
              A client trusts the studio with an idea, a reputation, and a
              problem that needs solving. That trust is not taken lightly.
            </p>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.2}>
            <p className="text-text-muted text-[15px] md:text-[16px] leading-[1.8] max-w-[520px] mb-8">
              We care about how the experience looks. We care about how it
              behaves. Most importantly, we care about whether it solves the
              actual problem.
            </p>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.25}>
            <p className="text-text-faint text-[14px] leading-[1.8] max-w-[440px]">
              The result should feel inevitable — nothing to add, nothing to
              remove. That standard is the promise.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 05 — HOW WE WORK

          Process as numbered steps.
          Turns philosophy into credible process.
          ═══════════════════════════════════════════════ */}
      <section
        id="about-process"
        className="relative px-[var(--spacing-container)]"
        aria-labelledby="process-heading"
      >
        <div className="max-w-[720px] mx-auto py-24 md:py-36">
          <Reveal variant="fadeUp">
            <p className="text-accent text-[10px] font-semibold uppercase tracking-[0.18em] mb-6">
              How we work
            </p>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.1}>
            <h2
              id="process-heading"
              className="font-display text-[clamp(1.8rem,4.5vw,3rem)] font-bold leading-[1.1] tracking-[-0.03em] mb-14"
            >
              From understanding
              <br />
              to refinement.
            </h2>
          </Reveal>

          <div className="space-y-12">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.number} variant="fadeUp" delay={0.1 + i * 0.08}>
                <div className="flex gap-6 md:gap-8">
                  <span className="text-[10px] font-medium tabular-nums text-text-faint/60 mt-1.5 shrink-0">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-display text-[clamp(1.2rem,2.5vw,1.6rem)] font-semibold tracking-[-0.02em] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-text-muted text-[14px] md:text-[15px] leading-[1.75] max-w-[440px]">
                      {step.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 06 — WHAT LUMORA BUILDS

          Focused offering. Not a long service list.
          ═══════════════════════════════════════════════ */}
      <section
        id="about-offering"
        className="relative px-[var(--spacing-container)]"
        aria-labelledby="offering-heading"
      >
        <div className="max-w-[720px] mx-auto py-24 md:py-36">
          <Reveal variant="fadeUp">
            <p className="text-accent text-[10px] font-semibold uppercase tracking-[0.18em] mb-6">
              What we build
            </p>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.1}>
            <h2
              id="offering-heading"
              className="font-display text-[clamp(1.8rem,4.5vw,3rem)] font-bold leading-[1.1] tracking-[-0.03em] mb-10"
            >
              Cinematic websites.
            </h2>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.15}>
            <p className="text-text-muted text-[15px] md:text-[16px] leading-[1.8] max-w-[480px] mb-10">
              Web experiences that feel alive. Built for people who understand
              that the experience is the product.
            </p>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.2}>
            <div className="flex flex-wrap gap-3">
              {["Luxury Brands", "Restaurants", "Personal Brands"].map(
                (audience) => (
                  <span
                    key={audience}
                    className="inline-flex items-center rounded-full px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-text-muted border border-border/40"
                  >
                    {audience}
                  </span>
                )
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 07 — ONE STUDIO. ONE VISION.

          The advantage of the studio model.
          Connected path from idea → design → build.
          ═══════════════════════════════════════════════ */}
      <section
        id="about-vision"
        className="relative px-[var(--spacing-container)]"
        aria-labelledby="vision-heading"
      >
        <div className="max-w-[720px] mx-auto py-24 md:py-36 text-center">
          <Reveal variant="fadeUp">
            <p className="text-accent text-[10px] font-semibold uppercase tracking-[0.18em] mb-10">
              One studio. One vision.
            </p>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.1}>
            <h2
              id="vision-heading"
              className="font-display text-[clamp(1.6rem,4vw,2.6rem)] font-light leading-[1.25] tracking-[-0.02em] max-w-[560px] mx-auto mb-8"
            >
              One connected path from idea
              <br />
              to design to build.
            </h2>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.15}>
            <p className="text-text-muted text-[15px] leading-[1.8] max-w-[440px] mx-auto">
              No handoffs between disconnected teams. One connected vision
              carries the project from first conversation to final detail.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 08 — SELECTED WORK

          Subtle bridge to the Work experience.
          Proof, not repetition.
          ═══════════════════════════════════════════════ */}
      <section
        id="about-work"
        className="relative px-[var(--spacing-container)]"
        aria-labelledby="work-bridge-heading"
      >
        <div className="max-w-[720px] mx-auto py-24 md:py-36 text-center">
          {/* Divider — visual threshold */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="w-16 h-px bg-border/30" aria-hidden="true" />
            <span className="w-1.5 h-1.5 rounded-full bg-accent/20" aria-hidden="true" />
            <span className="w-16 h-px bg-border/30" aria-hidden="true" />
          </div>

          <Reveal variant="fadeUp">
            <p className="text-accent text-[10px] font-semibold uppercase tracking-[0.18em] mb-8">
              Selected Work
            </p>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.1}>
            <h2
              id="work-bridge-heading"
              className="font-display text-[clamp(1.4rem,3.5vw,2.2rem)] font-light leading-[1.3] tracking-[-0.01em] mb-10"
            >
              The thinking, made visible.
            </h2>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.15}>
            <Link
              href="/work"
              className="inline-flex items-center gap-3 group"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-text-muted transition-colors duration-500 group-hover:text-accent">
                Explore the work
              </span>
              <svg
                className="w-3.5 h-3.5 text-text-muted transition-all ease-[cubic-bezier(0.16,1,0.3,1)] duration-[600ms] group-hover:text-accent group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 09 — CONNECTION

          Close naturally.
          "Have something worth building?"
          ═══════════════════════════════════════════════ */}
      <section
        id="about-connection"
        className="relative px-[var(--spacing-container)]"
        aria-labelledby="connection-heading"
      >
        <div className="max-w-[640px] mx-auto py-24 md:py-40 text-center">
          <Reveal variant="fadeUp">
            <h2
              id="connection-heading"
              className="font-display text-[clamp(1.6rem,4vw,2.6rem)] font-light leading-[1.25] tracking-[-0.02em] mb-10"
            >
              Have something worth building?
            </h2>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.1}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 group"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-text-muted transition-colors duration-500 group-hover:text-accent">
                Let&apos;s talk
              </span>
              <svg
                className="w-3.5 h-3.5 text-text-muted transition-all ease-[cubic-bezier(0.16,1,0.3,1)] duration-[600ms] group-hover:text-accent group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Link>
          </Reveal>

          {/* Quiet closing */}
          <Reveal variant="fadeUp" delay={0.2}>
            <p className="text-text-faint text-[12px] leading-[1.7] mt-16">
              The work begins with a conversation.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
