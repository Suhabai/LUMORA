"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { WorldId } from "./world-types";

gsap.registerPlugin(ScrollTrigger);

interface WorldTransitionProps {
  worldId: WorldId;
}

export default function WorldTransition({ worldId }: WorldTransitionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const dur = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--core-motion-duration") || "1");

    const ctx = gsap.context(() => {
      // ── OMNIA → NEXORA: STRUCTURE BECOMES DEPTH ──
      // OMNIA's axis relaxes.
      // Structural lines separate.
      // The separation creates layers.
      // Those layers become NEXORA.
      // The visitor feels: structure becoming depth.
      if (worldId === "omnia") {
        const left = ref.current?.querySelector(".wt-omnia-left");
        const right = ref.current?.querySelector(".wt-omnia-right");
        const plane = ref.current?.querySelector(".wt-omnia-plane");

        // Structure relaxes → lines separate
        if (left) {
          gsap.fromTo(
            left,
            { x: 0, opacity: 0.7 },
            {
              x: -26,
              opacity: 0,
              duration: 1.8 * dur,
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: ref.current,
                start: "top 88%",
                end: "bottom 25%",
                scrub: 1.2,
              },
            }
          );
        }

        if (right) {
          gsap.fromTo(
            right,
            { x: 0, opacity: 0.7 },
            {
              x: 26,
              opacity: 0,
              duration: 1.8 * dur,
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: ref.current,
                start: "top 88%",
                end: "bottom 25%",
                scrub: 1.2,
              },
            }
          );
        }

        // Separation creates layer — the first NEXORA plane
        if (plane) {
          gsap.fromTo(
            plane,
            { opacity: 0, scaleY: 0.5 },
            {
              opacity: 1,
              scaleY: 1,
              duration: 2 * dur,
              ease: "power2.out",
              scrollTrigger: {
                trigger: ref.current,
                start: "top 75%",
                end: "bottom 15%",
                scrub: 1.4,
              },
            }
          );
        }
      }

      // ── NEXORA → VELOCITY: DEPTH BECOMES MOTION ──
      // NEXORA layers lose alignment.
      // Layers separate directionally.
      // That separation becomes trajectory.
      // Trajectory becomes VELOCITY.
      // The visitor feels: depth becoming motion.
      if (worldId === "nexora") {
        const diags = ref.current?.querySelectorAll(".wt-nexora-diag");
        const flow = ref.current?.querySelector(".wt-nexora-flow");

        // Layers lose alignment → become diagonals
        if (diags?.length) {
          gsap.fromTo(
            diags,
            { opacity: 0, scaleY: 0.4 },
            {
              opacity: 1,
              scaleY: 1,
              duration: 1.6 * dur,
              ease: "power2.out",
              stagger: 0.12,
              scrollTrigger: {
                trigger: ref.current,
                start: "top 88%",
                end: "bottom 30%",
                scrub: 1.2,
              },
            }
          );
        }

        // Diagonals become trajectory — flow begins
        if (flow) {
          gsap.fromTo(
            flow,
            { scaleX: 0, opacity: 0 },
            {
              scaleX: 1,
              opacity: 1,
              duration: 1.8 * dur,
              ease: "power2.out",
              scrollTrigger: {
                trigger: ref.current,
                start: "top 70%",
                end: "bottom 10%",
                scrub: 1.4,
              },
            }
          );
        }
      }
    }, ref);

    return () => ctx.revert();
  }, [worldId]);

  return (
    <div
      ref={ref}
      className="absolute bottom-0 left-0 right-0 h-32 md:h-40 pointer-events-none"
      aria-hidden="true"
    >
      {worldId === "omnia" && (
        <>
          {/* Structure line splitting apart — structure becoming depth */}
          <div className="absolute top-1/2 left-[8%] right-[50%] h-px -translate-y-1/2 overflow-hidden">
            <div className="wt-omnia-left absolute inset-0 bg-gradient-to-r from-transparent to-accent/[0.13]" />
          </div>
          <div className="absolute top-1/2 right-[8%] left-[50%] h-px -translate-y-1/2 overflow-hidden">
            <div className="wt-omnia-right absolute inset-0 bg-gradient-to-l from-transparent to-accent/[0.13]" />
          </div>
          {/* Layer plane emerging from the structure — first NEXORA plane */}
          <div className="wt-omnia-plane absolute bottom-[10%] left-[28%] right-[28%] h-[34%] border border-accent/[0.07] rounded-sm" />
        </>
      )}

      {worldId === "nexora" && (
        <>
          {/* Layers tilting into diagonals — depth becoming motion */}
          <div className="absolute top-[34%] left-[16%] right-[16%] h-px overflow-hidden -rotate-[7deg]">
            <div className="wt-nexora-diag absolute inset-0 bg-gradient-to-r from-transparent via-accent/[0.11] to-transparent" />
          </div>
          <div className="absolute top-[58%] left-[22%] right-[22%] h-px overflow-hidden -rotate-[7deg]">
            <div className="wt-nexora-diag absolute inset-0 bg-gradient-to-r from-transparent via-accent/[0.06] to-transparent" />
          </div>
          {/* Flow beginning — trajectory emerges from diagonal separation */}
          <div className="wt-nexora-flow absolute bottom-[14%] left-[10%] w-[30%] h-px velocity-dash" />
        </>
      )}
    </div>
  );
}
