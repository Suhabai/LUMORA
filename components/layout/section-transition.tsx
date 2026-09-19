"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export type TransitionKind = "core-worlds" | "worlds-thinking" | "thinking-human" | "human-threshold";

interface SectionTransitionProps {
  kind: TransitionKind;
}

export default function SectionTransition({ kind }: SectionTransitionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const dur = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--core-motion-duration") || "1");

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(ref.current?.querySelectorAll(".st-line, .st-dot, .st-bloom") || [], { opacity: 1, scaleX: 1, scaleY: 1, scale: 1 });
        return;
      }
      const lines = ref.current?.querySelectorAll(".st-line");
      const dots = ref.current?.querySelectorAll(".st-dot");
      const blooms = ref.current?.querySelectorAll(".st-bloom");

      lines?.forEach((line, i) => {
        const vertical = line.classList.contains("st-line-v");
        gsap.fromTo(
          line,
          vertical ? { scaleY: 0, opacity: 0 } : { scaleX: 0, opacity: 0 },
          {
            scaleY: 1,
            scaleX: 1,
            opacity: 1,
            duration: 1.4 * dur,
            ease: "power3.out",
            delay: i * 0.12,
            scrollTrigger: {
              trigger: ref.current,
              start: "top 90%",
              end: "bottom 25%",
              scrub: 1.2,
            },
          }
        );
      });

      dots?.forEach((dot) => {
        gsap.fromTo(
          dot,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.2 * dur,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 85%",
              end: "bottom 30%",
              scrub: 1.2,
            },
          }
        );
      });

      blooms?.forEach((bloom) => {
        gsap.fromTo(
          bloom,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1.8 * dur,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 85%",
              end: "bottom 20%",
              scrub: 1.4,
            },
          }
        );
      });
    }, ref);

    return () => ctx.revert();
  }, [kind]);

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none" aria-hidden="true">
      {/* Hero → Worlds: presence migrating downward */}
      {kind === "core-worlds" && (
        <>
          <div className="absolute top-0 bottom-1/2 left-1/2 w-px -translate-x-1/2 overflow-hidden">
            <div className="st-line st-line-v absolute inset-0 bg-gradient-to-b from-transparent to-accent/[0.14]" />
          </div>
          <div className="absolute top-[58%] left-[12%] right-[12%] h-px overflow-hidden">
            <div className="st-line absolute inset-0 bg-gradient-to-r from-transparent via-accent/[0.10] to-transparent" />
          </div>
          <div className="st-dot absolute top-[58%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent/[0.18]" />
        </>
      )}

      {/* Worlds → Thinking: energy concentrating into a single point */}
      {kind === "worlds-thinking" && (
        <>
          <div className="absolute top-[40%] left-[12%] right-[52%] h-px overflow-hidden">
            <div className="st-line absolute inset-0 bg-gradient-to-r from-transparent to-accent/[0.11]" />
          </div>
          <div className="absolute top-[40%] right-[12%] left-[52%] h-px overflow-hidden">
            <div className="st-line absolute inset-0 bg-gradient-to-l from-transparent to-accent/[0.11]" />
          </div>
          <div className="absolute top-[16%] bottom-[16%] left-1/2 w-px bg-gradient-to-b from-transparent via-accent/[0.06] to-transparent" />
          <div className="st-dot absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-accent/[0.16]" />
        </>
      )}

      {/* Thinking → Human: warmth arriving */}
      {kind === "thinking-human" && (
        <>
          <div className="st-line absolute top-1/2 left-[22%] right-[22%] h-px overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/[0.09] to-transparent" />
          </div>
          <div className="st-bloom absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-24 bg-[radial-gradient(ellipse_at_50%_50%,rgba(210,145,255,0.07)_0%,transparent_70%)]" />
        </>
      )}

      {/* Human → Threshold: the journey settling into rest */}
      {kind === "human-threshold" && (
        <>
          <div className="absolute top-[30%] left-[20%] right-[20%] h-px overflow-hidden">
            <div className="st-line absolute inset-0 bg-gradient-to-r from-transparent via-accent/[0.07] to-transparent" />
          </div>
          <div className="absolute top-[50%] left-[28%] right-[28%] h-px overflow-hidden">
            <div className="st-line absolute inset-0 bg-gradient-to-r from-transparent via-accent/[0.09] to-transparent" />
          </div>
          <div className="absolute top-[70%] left-[20%] right-[20%] h-px overflow-hidden">
            <div className="st-line absolute inset-0 bg-gradient-to-r from-transparent via-accent/[0.07] to-transparent" />
          </div>
        </>
      )}
    </div>
  );
}
