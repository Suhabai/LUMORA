"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMounted } from "@/components/hooks/use-mounted";

gsap.registerPlugin(ScrollTrigger);

const CORE_STATES = [
  {
    id: "entry",
    label: "Entry",
    mood: "The moment of arrival. The environment opens, and the Core begins its pulse.",
    warm: false,
    duration: "3.6s",
  },
  {
    id: "presence",
    label: "Presence",
    mood: "Calm being. The Core breathes quietly behind the whole journey.",
    warm: false,
    duration: "5s",
  },
  {
    id: "discovery",
    label: "Discovery",
    mood: "The first step into a world. Attention gathers; light reaches forward.",
    warm: false,
    duration: "4.2s",
  },
  {
    id: "worlds",
    label: "Worlds",
    mood: "The worlds open. Each one carries its own geometry, tone, and rhythm.",
    warm: false,
    duration: "4.6s",
  },
  {
    id: "thinking",
    label: "Thinking",
    mood: "Reflection. The system slows, gathers itself, and considers.",
    warm: false,
    duration: "6s",
  },
  {
    id: "human",
    label: "Human",
    mood: "The machine steps back. Warmth rises; the connection becomes human.",
    warm: true,
    duration: "3.8s",
  },
  {
    id: "threshold",
    label: "Threshold",
    mood: "Stillness before the question. The Core settles, and the visitor answers.",
    warm: true,
    duration: "7s",
  },
];

const PRINCIPLES = [
  "Identity over trends.",
  "Meaning over decoration.",
  "Simplicity creates luxury.",
];

export function SystemExperience() {
  const mounted = useMounted();
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!mounted || !pageRef.current) return;

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        gsap.set(
          "[data-system-entrance], [data-system-reveal]",
          { opacity: 1, y: 0, rotation: 0, scale: 1, filter: "blur(0px)" }
        );
        return;
      }

      // ── THE ENTRANCE ──
      // The exhibition opens: the title surfaces from a blur, and the
      // small notes follow in a quiet rhythm.
      gsap.timeline()
        .to("[data-system-entrance]", {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          stagger: 0.12,
          duration: 1.0,
          ease: "power2.out",
        }, 0.2);

      // ── THE WALK ──
      // Each element surfaces as it enters the viewing frame - a slow,
      // scrubbed rise that keeps the whole exhibition in continuous motion
      // rather than discrete appearances. Spatial continuity, not slides.
      gsap.utils.toArray<HTMLElement>("[data-system-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30, filter: "blur(4px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              end: "top 55%",
              scrub: 1,
            },
          }
        );
      });

      // ── THE MATERIALS ──
      // Colour plates settle into place as they surface - a small rotation
      // resolving into the resting angle of the wall.
      gsap.utils.toArray<HTMLElement>(".system-swatch").forEach((el) => {
        gsap.fromTo(
          el,
          { rotation: 2, scale: 0.97 },
          {
            rotation: 0,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              end: "top 60%",
              scrub: 1,
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
      className="system-experience relative min-h-screen overflow-hidden"
      aria-label="The LUMORA design system - a spatial exhibition of rules and intention"
    >
      {/* ── Ambient atmosphere ──
          A faint signature light in the upper distance, a soft presence
          below - the gallery is never empty, never loud. */}
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(55% 45% at 72% 8%, rgba(138,46,255,0.07), transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(40% 35% at 8% 92%, rgba(138,46,255,0.045), transparent 70%)",
          }}
        />
      </div>

      {/* ═══════════════════════════════════════════════════
          THE ENTRANCE
          ═══════════════════════════════════════════════════ */}
      <header className="relative z-10 min-h-screen flex flex-col justify-center px-[var(--spacing-container)]">
        <div
          className="text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-accent/70 mb-8"
          data-system-entrance
        >
          The System — A Spatial Exhibition
        </div>

        <h1
          className="font-display text-[clamp(3rem,11vw,7.5rem)] font-medium tracking-[-0.02em] leading-[0.95] text-text"
          data-system-entrance
        >
          Rules &amp; Intention
        </h1>

        <div className="relative mt-12 w-24 h-px bg-accent/40" data-system-entrance>
          <span className="absolute -top-[3px] left-0 w-1.5 h-1.5 rounded-full bg-accent" />
        </div>

        <p
          className="mt-9 max-w-[470px] font-sans text-[15px] md:text-[16px] leading-[1.8] text-text-muted"
          data-system-entrance
        >
          LUMORA is built through deliberate decisions. This exhibition opens the language —
          the type that speaks, the materials that hold the light, and the living states of
          the Core.
        </p>
      </header>

      {/* ═══════════════════════════════════════════════════
          PLATE 01 — TYPOGRAPHY
          Two voices, placed at different depths in the room.
          ═══════════════════════════════════════════════════ */}
      <section className="system-plate relative z-10 px-[var(--spacing-container)] py-32 md:py-44">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-7" data-system-reveal>
            <div className="text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-text-faint mb-8">
              Plate 01 — Typography
            </div>
            <h2 className="font-display text-[clamp(1.75rem,3.6vw,2.6rem)] font-medium tracking-[-0.02em] leading-[1.1] text-text/95">
              Two voices, one room.
            </h2>
          </div>
        </div>

        {/* Display specimen */}
        <div className="mt-24 md:mt-32 grid grid-cols-12 gap-6 items-start">
          <div className="col-span-12 md:col-span-8" data-system-reveal>
            <div className="text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-accent/70 mb-7">
              Cormorant Garamond — Display
            </div>
            <div className="font-display text-[clamp(3rem,11vw,8rem)] font-medium leading-[0.9] tracking-[-0.02em] text-text/90">
              Quiet,
              <br />
              alive.
            </div>
          </div>
          <div className="col-span-12 md:col-span-3 md:col-start-10 md:mt-48" data-system-reveal>
            <p className="font-sans text-[13px] leading-[1.85] text-text-muted">
              The cinematic voice. Editorial, breathing, human. Used for titles, moments,
              and the emotional anchors of the experience.
            </p>
          </div>
        </div>

        {/* Interface specimen */}
        <div className="mt-28 md:mt-44 grid grid-cols-12 gap-6 items-start">
          <div className="col-span-12 md:col-span-7 md:col-start-6" data-system-reveal>
            <div className="text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-accent/70 mb-7">
              Manrope — Interface
            </div>
            <div className="font-sans text-[clamp(1.6rem,4vw,2.8rem)] font-normal leading-[1.3] tracking-[-0.01em] text-text/80">
              Precision is calm. Readability is respect.
            </div>
          </div>
          <div className="col-span-12 md:col-span-3 md:col-start-3 md:mt-36" data-system-reveal>
            <p className="font-sans text-[13px] leading-[1.85] text-text-muted">
              The interface voice. Precise, quiet, reliable. Used for reading, guidance,
              and the small notes that keep the journey clear.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          PLATE 02 — PALETTE
          Four materials, hung as plates on the wall.
          ═══════════════════════════════════════════════════ */}
      <section className="system-plate relative z-10 px-[var(--spacing-container)] py-32 md:py-44">
        <div className="grid grid-cols-12 gap-6 items-start">
          <div className="col-span-12 md:col-span-6" data-system-reveal>
            <div className="text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-text-faint mb-8">
              Plate 02 — Palette
            </div>
            <h2 className="font-display text-[clamp(1.75rem,3.6vw,2.6rem)] font-medium tracking-[-0.02em] leading-[1.1] text-text/95">
              Four materials.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 md:mt-2" data-system-reveal>
            <p className="font-sans text-[14px] leading-[1.85] text-text-muted">
              Color is not decoration. Each material has a role — a foundation, a surface,
              an atmosphere, a signature. They are used with intention, never at random.
            </p>
          </div>
        </div>

        <div className="mt-24 md:mt-32 grid grid-cols-12 gap-6 items-start">
          {/* Void */}
          <div className="col-span-6 md:col-span-4 md:col-start-1 rotate-[-1deg]">
            <div className="system-swatch" data-system-reveal>
              <div className="relative h-44 md:h-56 rounded-md border border-white/10 bg-[#07070a] overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(60% 60% at 70% 20%, rgba(138,46,255,0.10), transparent 70%)",
                  }}
                />
              </div>
              <div className="mt-5">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-display text-[1.35rem] leading-none text-text/90">Void</span>
                  <span className="text-[10px] font-sans uppercase tracking-[0.18em] text-text-faint">#07070a</span>
                </div>
                <div className="mt-2 text-[10px] font-sans uppercase tracking-[0.2em] text-accent/60">
                  Foundation
                </div>
                <p className="mt-3 font-sans text-[12px] leading-[1.7] text-text-muted">
                  Depth, focus, mystery. The canvas of every world.
                </p>
              </div>
            </div>
          </div>

          {/* Accent */}
          <div className="col-span-6 md:col-span-5 md:col-start-8 md:mt-24 rotate-[1.5deg]">
            <div className="system-swatch" data-system-reveal>
              <div
                className="relative h-52 md:h-64 rounded-md overflow-hidden shadow-[0_0_70px_rgba(138,46,255,0.35)]"
                style={{ background: "linear-gradient(135deg, #8a2eff, #b96cff)" }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(80% 80% at 50% 100%, rgba(255,255,255,0.22), transparent 60%)",
                  }}
                />
              </div>
              <div className="mt-5">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-display text-[1.35rem] leading-none text-text/90">Accent</span>
                  <span className="text-[10px] font-sans uppercase tracking-[0.18em] text-text-faint">#8a2eff</span>
                </div>
                <div className="mt-2 text-[10px] font-sans uppercase tracking-[0.2em] text-accent/60">
                  Signature Energy
                </div>
                <p className="mt-3 font-sans text-[12px] leading-[1.7] text-text-muted">
                  Presence, intelligence, creativity. Used with intention, never at random.
                </p>
              </div>
            </div>
          </div>

          {/* Graphite */}
          <div className="col-span-5 md:col-span-4 md:col-start-3 md:-mt-16 rotate-[0.5deg]">
            <div className="system-swatch" data-system-reveal>
              <div className="relative h-40 md:h-48 rounded-md border border-white/10 bg-[#101018] overflow-hidden" />
              <div className="mt-5">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-display text-[1.35rem] leading-none text-text/90">Graphite</span>
                  <span className="text-[10px] font-sans uppercase tracking-[0.18em] text-text-faint">#101018</span>
                </div>
                <div className="mt-2 text-[10px] font-sans uppercase tracking-[0.2em] text-accent/60">
                  Structural Surface
                </div>
                <p className="mt-3 font-sans text-[12px] leading-[1.7] text-text-muted">
                  Precision, stability, quality. The quiet structure beneath the experience.
                </p>
              </div>
            </div>
          </div>

          {/* Mist */}
          <div className="col-span-6 md:col-span-3 md:col-start-10 md:mt-12 rotate-[-0.5deg]">
            <div className="system-swatch" data-system-reveal>
              <div className="relative h-40 md:h-48 rounded-md bg-[#101018] overflow-hidden">
                <div className="absolute inset-0 rounded-md bg-white/[0.06]" />
              </div>
              <div className="mt-5">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-display text-[1.35rem] leading-none text-text/90">Mist</span>
                  <span className="text-[10px] font-sans uppercase tracking-[0.18em] text-text-faint">white/6%</span>
                </div>
                <div className="mt-2 text-[10px] font-sans uppercase tracking-[0.2em] text-accent/60">
                  Atmosphere
                </div>
                <p className="mt-3 font-sans text-[12px] leading-[1.7] text-text-muted">
                  Calm, space, lightness. The soft layer that lets things breathe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          PLATE 03 — CORE STATES
          A corridor. One Core, seven moods, each breathing at its own pace.
          ═══════════════════════════════════════════════════ */}
      <section className="system-plate relative z-10 px-[var(--spacing-container)] py-32 md:py-44">
        <div className="grid grid-cols-12 gap-6 items-start">
          <div className="col-span-12 md:col-span-6" data-system-reveal>
            <div className="text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-text-faint mb-8">
              Plate 03 — Core States
            </div>
            <h2 className="font-display text-[clamp(1.75rem,3.6vw,2.6rem)] font-medium tracking-[-0.02em] leading-[1.1] text-text/95">
              One Core, seven moods.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 md:mt-2" data-system-reveal>
            <p className="font-sans text-[14px] leading-[1.85] text-text-muted">
              The Core is not a decoration — it is the living center. Across the journey it
              moves through seven semantic states, each with its own presence, warmth, and
              rhythm.
            </p>
          </div>
        </div>

        {/* The corridor */}
        <div className="relative mt-24 md:mt-32 pl-10">
          <div className="absolute left-[4px] top-0 bottom-0 w-px bg-accent/10" aria-hidden="true" />
          <div className="flex flex-col gap-14 md:gap-16">
            {CORE_STATES.map((s, i) => (
              <div
                key={s.id}
                className={`relative md:pl-2 ${i % 2 === 1 ? "md:ml-[24%] md:text-right" : ""}`}
                data-system-reveal
              >
                <span
                  className={`absolute left-0 top-2 system-state-dot ${
                    s.warm ? "system-state-dot--warm" : ""
                  }`}
                  style={{ animationDuration: s.duration }}
                  aria-hidden="true"
                />
                <div className={`pl-7 md:pl-9 ${i % 2 === 1 ? "md:flex md:flex-col md:items-end" : ""}`}>
                  <div className="flex items-baseline gap-3">
                    <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-accent/50">
                      State {i + 1}
                    </span>
                    <span className="font-display text-[clamp(1.4rem,2.6vw,2rem)] font-medium leading-none text-text/90">
                      {s.label}
                    </span>
                  </div>
                  <p className={`mt-3 font-sans text-[13px] md:text-[14px] leading-[1.8] text-text-muted max-w-[440px]`}>
                    {s.mood}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          THE EXHIBITION ENDS
          The rules, as the final plate.
          ═══════════════════════════════════════════════════ */}
      <section className="system-plate relative z-10 px-[var(--spacing-container)] pt-8 pb-32 md:pb-44">
        <div className="max-w-[680px]">
          <div className="text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-text-faint" data-system-reveal>
            The Exhibition Ends
          </div>

          <div className="mt-16 space-y-10">
            {PRINCIPLES.map((p) => (
              <h3
                key={p}
                className="font-display text-[clamp(1.9rem,5vw,3.4rem)] font-medium leading-[1.05] tracking-[-0.02em] text-text/90"
                data-system-reveal
              >
                {p}
              </h3>
            ))}
          </div>

          <p
            className="mt-16 max-w-[440px] font-sans text-[14px] leading-[1.85] text-text-muted"
            data-system-reveal
          >
            Every element must have a purpose. Every motion must have a reason. This is the
            standard the system holds.
          </p>

          <Link
            href="/"
            className="group mt-16 inline-flex flex-col items-start gap-3"
            data-system-reveal
          >
            <span className="font-display text-[clamp(1.6rem,4vw,2.6rem)] font-medium leading-none text-text/90 transition-colors duration-700 group-hover:text-accent">
              Return to the experience
            </span>
            <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-text-faint">
              Back to the beginning
            </span>
          </Link>
        </div>
      </section>
    </section>
  );
}