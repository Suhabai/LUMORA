"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WorldTransition from "./WorldTransition";
import type { World } from "./world-types";

gsap.registerPlugin(ScrollTrigger);

interface WorldSectionProps {
  world: World;
  index: number;
}

export default function WorldSection({ world, index }: WorldSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const geometryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;

    // Motion duration derives from Core state
    const dur = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--core-motion-duration") || "1");

    const ctx = gsap.context(() => {
      // ── OMNIA: CORE COMPRESSES → STRUCTURE ASSEMBLES ──
      // Core compresses/focuses toward center.
      // The central axis emerges from that focus.
      // Then structural lines, floor bands, brackets.
      // The Core establishes the coordinate system.
      // OMNIA's geometry is generated from the Core's centered precision.
      if (world.id === "omnia" && geometryRef.current) {
        const axis = geometryRef.current.querySelector(".omnia-axis");
        const guides = geometryRef.current.querySelectorAll(".omnia-guide");
        const floors = geometryRef.current.querySelectorAll(".omnia-floor");
        const brackets = geometryRef.current.querySelectorAll(".omnia-bracket");
        const coremark = geometryRef.current.querySelector(".omnia-coremark");

        // Core compression causes axis descent
        if (axis) {
          gsap.fromTo(
            axis,
            { scaleY: 0, opacity: 0 },
            {
              scaleY: 1,
              opacity: 1,
              duration: 1.6 * dur,
              ease: "power3.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 78%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        // Axis causes structural guides to emerge
        if (guides.length) {
          gsap.fromTo(
            guides,
            { scaleY: 0, opacity: 0 },
            {
              scaleY: 1,
              opacity: 1,
              duration: 1.2 * dur,
              ease: "power3.out",
              stagger: 0.15,
              delay: 0.3 * dur,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 78%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        // Guides cause floor bands to extend
        if (floors.length) {
          gsap.fromTo(
            floors,
            { scaleX: 0, opacity: 0 },
            {
              scaleX: 1,
              opacity: 1,
              duration: 1.2 * dur,
              ease: "power3.out",
              stagger: 0.12,
              delay: 0.45 * dur,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 78%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        // Floors cause brackets to anchor
        if (brackets.length) {
          gsap.fromTo(
            brackets,
            { opacity: 0, scale: 0.5 },
            {
              opacity: 1,
              scale: 1,
              duration: 1.0 * dur,
              ease: "power2.out",
              stagger: 0.08,
              delay: 0.8 * dur,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 78%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        // Brackets cause coremark to appear — the final anchor
        if (coremark) {
          gsap.fromTo(
            coremark,
            { opacity: 0, scale: 0 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.9 * dur,
              ease: "power2.out",
              delay: 1.1 * dur,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 78%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        // Structure complete → content appears
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2 * dur,
            ease: "power3.out",
            delay: 0.9 * dur,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // ── NEXORA: CORE DRIFTS → DEPTH UNFOLDS ──
      // Core shifts into depth/discovery state.
      // First depth plane emerges from that shift.
      // Then plane 2, plane 3, hidden thread, content.
      // The layers feel created because the Core moved deeper.
      if (world.id === "nexora" && geometryRef.current) {
        const layers = geometryRef.current.querySelectorAll(".nexora-layer");
        const hidden = geometryRef.current.querySelectorAll(".nexora-hidden");

        // Core drift causes depth planes to unfold
        gsap.fromTo(
          layers,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2 * dur,
            ease: "power3.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 78%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Depth causes hidden thread to be revealed
        if (hidden.length) {
          gsap.fromTo(
            hidden,
            { opacity: 0, scaleY: 0.4 },
            {
              opacity: 1,
              scaleY: 1,
              duration: 1.4 * dur,
              ease: "power2.out",
              stagger: 0.25,
              delay: 0.6 * dur,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 65%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        // Depth resolves → foreground plane edge appears
        const front = sectionRef.current?.querySelector(".nexora-front");
        if (front) {
          gsap.fromTo(
            front,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 1.6 * dur,
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
                end: "center center",
                scrub: 1.2,
              },
            }
          );
        }

        // Layers settle → content reveals
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 1.0 * dur,
            ease: "power3.out",
            delay: 0.6 * dur,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // ── VELOCITY: CORE RELEASES → DIRECTION LAUNCHES ──
      // Core releases directional energy.
      // First directional line launches from that release.
      // Then trajectory, momentum dot, secondary lines, content.
      // Movement direction originates from the Core's phase transition.
      if (world.id === "velocity" && geometryRef.current) {
        const lines = geometryRef.current.querySelectorAll(".velocity-line");
        const accents = geometryRef.current.querySelectorAll(".velocity-accent");
        const dash = geometryRef.current.querySelector(".velocity-dash");
        const dot = geometryRef.current.querySelector(".velocity-dot");

        // Core release causes directional lines to launch
        if (lines.length) {
          gsap.fromTo(
            lines,
            { x: -110, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 1.0 * dur,
              ease: "power3.out",
              stagger: 0.08,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 78%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        // Lines cause counter-tension to resolve
        if (accents.length) {
          gsap.fromTo(
            accents,
            { x: 70, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 1.2 * dur,
              ease: "power3.out",
              stagger: 0.1,
              delay: 0.2 * dur,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 78%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        // Trajectory draws toward content — momentum made visible
        if (dash) {
          gsap.fromTo(
            dash,
            { scaleX: 0, opacity: 0 },
            {
              scaleX: 1,
              opacity: 1,
              duration: 1.3 * dur,
              ease: "power2.out",
              delay: 0.35 * dur,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        // Momentum dot rides the trajectory as you approach
        if (dot) {
          gsap.fromTo(
            dot,
            { x: 90, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
                end: "center center",
                scrub: 1.5,
              },
            }
          );
        }

        // Direction stabilizes → content enters with inertial momentum
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 1.0 * dur,
            ease: "power3.out",
            delay: 0.4 * dur,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // ── NEXORA: Scroll-linked depth shift ──
      // Each plane moves at its own rate — depth feels spatial.
      if (world.id === "nexora" && geometryRef.current) {
        const wraps = geometryRef.current.querySelectorAll(".nexora-wrap");
        const rates = [0.05, 0.12, 0.22];
        wraps.forEach((wrap, i) => {
          const rate = rates[i % rates.length];
          gsap.to(wrap, {
            y: () => -rate * 150,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [world.id]);

  // World-specific spatial alignment
  const spatialStyles: Record<string, { align: string; composition: string }> = {
    omnia: {
      align: "items-center text-center",
      composition: "max-w-[600px] mx-auto",
    },
    nexora: {
      align: "items-start text-left",
      composition: "max-w-[560px]",
    },
    velocity: {
      align: "items-end text-right",
      composition: "max-w-[560px] ml-auto",
    },
  };

  const spatial = spatialStyles[world.id] || spatialStyles.omnia;

  return (
    <section
      ref={sectionRef}
      id={`world-${world.id}`}
      className={`relative min-h-[85vh] flex ${spatial.align} px-[var(--spacing-container)] overflow-hidden`}
      aria-labelledby={`world-heading-${world.id}`}
    >
      {/* ── World Geometry: Spatial Signature ──
          Each world's geometry participates in the composition.
          The atmosphere itself is global — the Core's single field. */}
      <div
        ref={geometryRef}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        {/* OMNIA — Architectural System */}
        {world.id === "omnia" && (
          <>
            {/* The Core's axis descending */}
            <div className="omnia-axis absolute top-[6%] bottom-[6%] left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-accent/[0.18] to-transparent" />
            {/* Measurement ticks — the axis is a measure */}
            <div className="omnia-floor absolute top-[20%] left-1/2 -translate-x-1/2 w-7 h-px bg-accent/[0.18]" />
            <div className="omnia-floor absolute bottom-[20%] left-1/2 -translate-x-1/2 w-7 h-px bg-accent/[0.18]" />
            {/* Vertical guides — aligned to the text block edges */}
            <div className="omnia-guide-l omnia-guide absolute top-[13%] bottom-[13%] w-px bg-gradient-to-b from-transparent via-accent/[0.10] to-transparent" />
            <div className="omnia-guide-r omnia-guide absolute top-[13%] bottom-[13%] w-px bg-gradient-to-b from-transparent via-accent/[0.10] to-transparent" />
            {/* Floor bands — structure across the scene */}
            <div className="omnia-floor absolute top-[30%] left-[18%] right-[18%] h-px bg-gradient-to-r from-transparent via-accent/[0.11] to-transparent" />
            <div className="omnia-floor absolute top-[50%] left-[18%] right-[18%] h-px bg-gradient-to-r from-transparent via-accent/[0.07] to-transparent" />
            <div className="omnia-floor absolute top-[70%] left-[18%] right-[18%] h-px bg-gradient-to-r from-transparent via-accent/[0.11] to-transparent" />
            {/* Corner brackets — structural anchors at the content corners */}
            <div className="omnia-bracket omnia-corner absolute top-[16%] left-[16%] w-3.5 h-3.5 border-t border-l border-accent/[0.22]" />
            <div className="omnia-bracket omnia-corner absolute top-[16%] right-[16%] w-3.5 h-3.5 border-t border-r border-accent/[0.22]" />
            <div className="omnia-bracket omnia-corner absolute bottom-[16%] left-[16%] w-3.5 h-3.5 border-b border-l border-accent/[0.22]" />
            <div className="omnia-bracket omnia-corner absolute bottom-[16%] right-[16%] w-3.5 h-3.5 border-b border-r border-accent/[0.22]" />
            {/* Core anchor — where the axis meets the Core's presence */}
            <div className="omnia-coremark absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent/[0.35]" />
          </>
        )}

        {/* NEXORA — Depth System */}
        {world.id === "nexora" && (
          <>
            {/* Deep plane — the receding surface */}
            <div className="nexora-wrap nexora-deep absolute top-[8%] right-[6%] w-[46%] h-[74%]">
              <div className="nexora-layer absolute inset-0 border border-accent/[0.07] rounded-sm" />
            </div>
            {/* Mid plane — offset, revealing what lies behind */}
            <div className="nexora-wrap nexora-mid absolute top-[22%] right-[13%] w-[38%] h-[56%]">
              <div className="nexora-layer absolute inset-0 border border-accent/[0.10] rounded-sm bg-accent/[0.018]" />
            </div>
            {/* Near plane — the surface closest to the visitor */}
            <div className="nexora-wrap nexora-near absolute top-[36%] right-[20%] w-[30%] h-[36%]">
              <div className="nexora-layer absolute inset-0 border border-accent/[0.14] rounded-sm bg-accent/[0.028]" />
            </div>
            {/* Hidden layer — a vertical thread, revealed by depth */}
            <div className="nexora-hidden absolute top-[12%] right-[4%] bottom-[12%] w-px bg-gradient-to-b from-transparent via-accent/[0.18] to-transparent" />
            {/* Hidden layer — a horizontal thread */}
            <div className="nexora-hidden absolute top-[58%] right-[26%] w-[40%] h-px bg-gradient-to-r from-accent/[0.14] to-transparent" />
            {/* Depth point — a distant marker beyond the planes */}
            <div className="nexora-layer absolute top-[30%] right-[24%] w-1.5 h-1.5 rounded-full bg-accent/[0.22]" />
            {/* Depth falloff — light sinking into the distance */}
            <div className="nexora-layer absolute inset-0 bg-[radial-gradient(ellipse_at_72%_45%,rgba(180,110,255,0.07)_0%,transparent_48%)]" />
          </>
        )}

        {/* VELOCITY — Directional System */}
        {world.id === "velocity" && (
          <>
            {/* Directional flow field — the world is already moving */}
            <div className="velocity-field absolute inset-0">
              <div className="absolute top-[16%] left-[-4%] w-[78%] h-px -rotate-[14deg]">
                <div className="velocity-line absolute inset-0 bg-gradient-to-r from-accent/[0.24] via-accent/[0.10] to-transparent" />
              </div>
              <div className="absolute top-[28%] left-[2%] w-[66%] h-px -rotate-[14deg]">
                <div className="velocity-line absolute inset-0 bg-gradient-to-r from-accent/[0.16] via-accent/[0.06] to-transparent" />
              </div>
              <div className="absolute top-[40%] left-[6%] w-[54%] h-px -rotate-[14deg]">
                <div className="velocity-line absolute inset-0 bg-gradient-to-r from-accent/[0.12] via-accent/[0.04] to-transparent" />
              </div>
              <div className="absolute top-[52%] left-[10%] w-[44%] h-px -rotate-[14deg]">
                <div className="velocity-line absolute inset-0 bg-gradient-to-r from-accent/[0.09] via-accent/[0.03] to-transparent" />
              </div>
            </div>
            {/* Counter tension — resolving from the right */}
            <div className="absolute top-[24%] right-[2%] w-[42%] h-px rotate-[6deg]">
              <div className="velocity-accent absolute inset-0 bg-gradient-to-l from-accent/[0.12] to-transparent" />
            </div>
            <div className="absolute top-[36%] right-[9%] w-[32%] h-px rotate-[6deg]">
              <div className="velocity-accent absolute inset-0 bg-gradient-to-l from-accent/[0.08] to-transparent" />
            </div>
            {/* Trajectory — dashes guiding the eye toward the content */}
            <div className="velocity-dash absolute top-[46%] left-[6%] w-[42%] h-px" />
            {/* Momentum dot — rides the trajectory */}
            <div className="velocity-dot absolute top-[46%] left-[22%] w-2 h-2 rounded-full bg-accent/[0.32]" />
            {/* Direction glow */}
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(170,90,255,0.07)_0%,transparent_50%)]" />
          </>
        )}
      </div>

      {/* ── Content Layer ──
          World identity, not portfolio card content. */}
      <div ref={contentRef} className={`relative z-10 ${spatial.composition} py-20 md:py-32`}>
        {/* World category — quiet identity signal */}
        <p className="text-accent text-[9px] font-semibold uppercase tracking-[0.16em] mb-4 md:mb-6">
          {world.category}
        </p>

        {/* World title — the name of this universe */}
        <h2
          id={`world-heading-${world.id}`}
          className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[0.92] tracking-[-0.04em] mb-6 md:mb-8"
        >
          {world.title}
        </h2>

        {/* World description — what this place is */}
        <p className="text-text-muted text-[16px] md:text-[18px] leading-[1.7] mb-8 md:mb-10 max-w-[480px]">
          {world.description}
        </p>

        {/* Feeling signals — the texture of this world */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 mb-10 md:mb-14">
          {world.feeling.map((item) => (
            <span
              key={item}
              className="text-[10px] font-medium uppercase tracking-[0.12em] text-text-faint"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Enter World — the threshold.
            Each world's CTA has its own interaction character. */}
        <Link
          href={`/work/${world.id}`}
          className={`inline-flex items-center gap-3 group ${
            world.id === "omnia" ? "cta-omnia" :
            world.id === "nexora" ? "cta-nexora" :
            "cta-velocity"
          }`}
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-text-muted transition-colors duration-500 group-hover:text-accent">
            Enter World
          </span>
          <svg
            className={`w-4 h-4 text-text-muted transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-accent ${
              world.id === "velocity" ? "group-hover:translate-x-1.5" : "group-hover:translate-x-1"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </Link>
      </div>

      {/* ── Foreground Plane Edge (NEXORA) ──
          A layer passes in front of the content — the content exists
          partially between layers. Visible, painted above text. */}
      {world.id === "nexora" && (
        <div className="absolute inset-0 pointer-events-none z-20" aria-hidden="true">
          <div className="nexora-front absolute top-[72%] left-[2%] right-[4%] h-px bg-gradient-to-r from-accent/[0.14] via-accent/[0.06] to-transparent" />
        </div>
      )}

      {/* ── World Transition ──
          Narrative bridge into the next world.
          Structure → Discovery → Momentum. */}
      {index < 2 && <WorldTransition worldId={world.id} />}
    </section>
  );
}
