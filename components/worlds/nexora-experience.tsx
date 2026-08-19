"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NexoraGeometry } from "./world-geometry";
import { useMounted } from "@/components/hooks/use-mounted";

gsap.registerPlugin(ScrollTrigger);

const LAYERS = [
  {
    number: "01",
    title: "Surface",
    text: "What the visitor sees first: one clear layer, deliberately incomplete. Enough to act, never enough to overwhelm. The calm is the design.",
  },
  {
    number: "02",
    title: "Depth",
    text: "The second layer holds the detail. Revealed only by intent — a hover, a scroll, a question asked. It is always there, never in the way.",
  },
  {
    number: "03",
    title: "Hidden",
    text: "The deepest layer is invisible until it matters. Inference, memory, preference — the intelligence beneath the interface, doing its work silently.",
  },
];

export function NexoraExperience() {
  const mounted = useMounted();
  const pageRef = useRef<HTMLElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mounted || !pageRef.current) return;

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        // Reduced motion: present the full depth immediately.
        if (backdropRef.current) gsap.set(backdropRef.current, { opacity: 1 });
        gsap.set("[data-geometry]", { opacity: 1, x: 0, y: 0, scale: 1, scaleX: 1, scaleY: 1 });
        gsap.set(
          ".nexora-hero-label, .nexora-hero-title, .nexora-hero-tagline, .nexora-hero-spec, .nexora-hero-glass, [data-nexora-reveal], [data-nexora-glass]",
          { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
        );
        return;
      }

      // ── INITIAL STATES ──
      // The depth planes begin as a flat, overlapping stack of dark glass.
      // Threads are collapsed. The depth point has not surfaced.
      // Content waits behind a blur, as if seen through translucent glass.
      if (backdropRef.current) gsap.set(backdropRef.current, { opacity: 0 });
      gsap.set(".nexora-plane-deep", { x: -40, scale: 0.82, filter: "blur(2px)" });
      gsap.set(".nexora-plane-mid", { x: -100, scale: 0.86, filter: "blur(2px)" });
      gsap.set(".nexora-plane-near", { x: -160, scale: 0.9, filter: "blur(2px)" });
      gsap.set(".nexora-thread[x1='980']", { scaleY: 0 });
      gsap.set(".nexora-thread[y1='480']", { scaleX: 0 });
      gsap.set(".nexora-depth-point, .nexora-depth-ring", { scale: 0 });
      gsap.set(".nexora-hero-glass", { opacity: 0, scale: 0.94, filter: "blur(3px)" });
      gsap.set(
        ".nexora-hero-label, .nexora-hero-title, .nexora-hero-tagline, .nexora-hero-spec",
        { y: 20, filter: "blur(6px)" }
      );

      // ── THE UNFOLD SEQUENCE ──
      // The environment separates into distinct Z-depth planes:
      //   1. The depth recedes — deep plane settles into the distance.
      //   2. The mid plane separates, revealing the space behind it.
      //   3. The near plane surfaces toward the visitor.
      //   4. The hidden threads draw in — the scaffolding between depths.
      //   5. The depth point surfaces — something far away becomes visible.
      //   6. Content emerges progressively, as if surfacing through glass.
      const tl = gsap.timeline({ onComplete: setupParallax });

      tl.to(backdropRef.current, { opacity: 1, duration: 1.1, ease: "power1.out" }, 0)
        .to(".nexora-plane-deep", { x: 0, scale: 0.9, filter: "blur(0px)", duration: 1.2, ease: "power3.inOut" }, 0.25)
        .to(".nexora-plane-mid", { x: -40, scale: 0.98, filter: "blur(0px)", duration: 1.2, ease: "power3.inOut" }, 0.4)
        .to(".nexora-plane-near", { x: -80, scale: 1.06, filter: "blur(0px)", duration: 1.2, ease: "power3.inOut" }, 0.55)
        .to(".nexora-thread[x1='980']", { scaleY: 1, duration: 0.6, ease: "power3.inOut" }, 0.7)
        .to(".nexora-thread[y1='480']", { scaleX: 1, duration: 0.6, ease: "power3.inOut" }, 0.78)
        .to(".nexora-depth-point, .nexora-depth-ring", { scale: 1, duration: 0.5, ease: "power2.out" }, 0.9)
        .to(".nexora-hero-label", { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.5, ease: "power2.out" }, 0.85)
        .to(".nexora-hero-glass", { opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.7, stagger: 0.12, ease: "power3.out" }, 0.9)
        .to(".nexora-hero-title", { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7, ease: "power2.out" }, 0.95)
        .to(".nexora-hero-tagline", { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.55, ease: "power2.out" }, 1.05)
        .to(".nexora-hero-spec", { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.5, ease: "power2.out" }, 1.15);

      // ── DEPTH PARALLAX ──
      // Runs after the unfold completes, so it begins from the
      // separated positions. Each plane travels at a different speed
      // as the visitor descends — the classic depth parallax.
      // Deep moves least, near moves most.
      function setupParallax() {
        const st = gsap.timeline({
          scrollTrigger: {
            trigger: pageRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.2,
          },
        });
        st.to(".nexora-plane-deep", { x: 70, y: 30, duration: 1 }, 0)
          .to(".nexora-plane-mid", { x: 110, y: 60, duration: 1 }, 0)
          .to(".nexora-plane-near", { x: 160, y: 100, duration: 1 }, 0)
          .to(".nexora-thread", { x: 40, duration: 1 }, 0)
          .to("circle[fill*='nexora-falloff']", { x: 30, y: 20, duration: 1 }, 0);
      }

      // ── CONTENT REVEALS ──
      // Standard blocks surface from below.
      gsap.utils.toArray<HTMLElement>("[data-nexora-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Glass panels surface from depth — scale and blur clear as they rise.
      gsap.utils.toArray<HTMLElement>("[data-nexora-glass]").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.94, filter: "blur(4px)" },
          {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Content sits on different visual planes: each glass layer panel
      // drifts at its own speed as it passes through the viewport.
      gsap.utils.toArray<HTMLElement>(".nexora-layer-panel").forEach((panel, i) => {
        const drift = i % 2 === 0 ? 50 : -70;
        gsap.fromTo(
          panel,
          { y: 0 },
          {
            y: drift,
            scrollTrigger: {
              trigger: panel,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.4,
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
      className="nexora-experience relative min-h-screen overflow-hidden"
      aria-label="NEXORA — a case study in intelligence, discovery, and depth"
    >
      {/* ── Persistent NEXORA Depth ──
          The high-contrast NEXORA geometry frames the page from behind.
          Its planes move at different parallax speeds as the visitor descends,
          so the page itself reads as layered space. */}
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div
          ref={backdropRef}
          className="nexora-backdrop absolute inset-0 opacity-0 [mask-image:linear-gradient(to_bottom,transparent,black_14%,black_84%,transparent)]"
        >
          <div className="absolute inset-0 opacity-50">
            <NexoraGeometry coreState="present" />
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          HERO — The Unfold
          Text on the near plane, depth planes receding on the right.
          Asymmetric. Exploratory. Never symmetrical.
          ═══════════════════════════════════════════════════ */}
      <header className="relative z-10 min-h-screen flex items-center px-[var(--spacing-container)]">
        <div className="grid grid-cols-12 gap-6 w-full items-center">
          {/* Left — the content, on the near plane */}
          <div className="col-span-12 md:col-span-7 md:pr-8">
            <div className="nexora-hero-label text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-accent/70 mb-8 opacity-0">
              02 — Intelligent System
            </div>

            <h1 className="nexora-hero-title font-display text-[clamp(3.5rem,12vw,8rem)] font-medium tracking-[-0.02em] leading-[0.95] text-text opacity-0">
              NEXORA
            </h1>

            <p className="nexora-hero-tagline mt-8 max-w-[420px] font-sans text-[15px] md:text-[16px] leading-[1.8] text-text-muted opacity-0">
              An intelligent system shaped by discovery. Each layer reveals something —
              depth, not display.
            </p>

            {/* Spec — layered, uneven, exploratory */}
            <div className="nexora-hero-spec mt-12 space-y-3 text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-text-faint opacity-0">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent/25" />
                <span>Year — 2026</span>
              </div>
              <div className="flex items-center gap-3 ml-5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent/20" />
                <span>Discipline — Intelligent Systems</span>
              </div>
              <div className="flex items-center gap-3 ml-10">
                <span className="w-1.5 h-1.5 rounded-full bg-accent/15" />
                <span>Role — Design &amp; Direction</span>
              </div>
            </div>
          </div>

          {/* Right — floating glass layers on the far plane */}
          <div className="col-span-5 relative h-[420px] hidden md:block">
            <div className="nexora-hero-glass nexora-glass absolute top-2 right-6 w-[70%] h-40 rounded-md p-5 opacity-0">
              <div className="text-[9px] font-sans font-semibold uppercase tracking-[0.2em] text-accent/50 mb-2">
                Layer 01 — Data plane
              </div>
              <div className="h-px w-16 bg-accent/25 mb-4" />
              <p className="font-sans text-[11px] leading-[1.7] text-text-faint">
                One clear surface. Deliberately incomplete.
              </p>
            </div>
            <div className="nexora-hero-glass nexora-glass absolute top-24 right-0 w-[60%] h-36 rounded-md p-5 opacity-0">
              <div className="text-[9px] font-sans font-semibold uppercase tracking-[0.2em] text-accent/50 mb-2">
                Layer 02 — Inference
              </div>
              <div className="h-px w-16 bg-accent/25 mb-4" />
              <p className="font-sans text-[11px] leading-[1.7] text-text-faint">
                Revealed by intent. Always near, never in the way.
              </p>
            </div>
            <div className="nexora-hero-glass nexora-glass absolute bottom-0 right-14 w-[50%] h-28 rounded-md p-5 opacity-0">
              <div className="text-[9px] font-sans font-semibold uppercase tracking-[0.2em] text-accent/40 mb-2">
                Layer 03 — Hidden
              </div>
              <p className="font-sans text-[11px] leading-[1.7] text-text-faint">
                The intelligence beneath.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════
          01 — THE BRIEF
          ═══════════════════════════════════════════════════ */}
      <section className="relative z-10 px-[var(--spacing-container)] py-32 md:py-44">
        <div className="grid grid-cols-12 gap-6 items-start">
          <div className="col-span-12 md:col-span-4 md:pt-2">
            <div className="text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-text-faint opacity-0" data-nexora-reveal>
              01 — The Brief
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <div className="opacity-0" data-nexora-reveal>
              <h2 className="font-display text-[clamp(1.75rem,3.6vw,2.6rem)] font-medium tracking-[-0.02em] leading-[1.1] mb-8 text-text/95">
                The answer was hidden in layers.
              </h2>
              <p className="font-sans text-text-muted text-[15px] md:text-[16px] leading-[1.85] max-w-[460px]">
                NEXORA needed to feel intelligent without announcing intelligence.
                The interface had to surface the right information at the right depth —
                never all at once, never out of reach. So we built a system that reveals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          02 — THE LAYERS
          Three exploration panels, overlapping and offset at different depths.
          ═══════════════════════════════════════════════════ */}
      <section className="relative z-10 px-[var(--spacing-container)] py-8 md:py-12">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-accent/70 mb-16 md:mb-24 opacity-0" data-nexora-reveal>
            02 — The Layers
          </div>

          <div className="relative flex flex-col gap-14 md:gap-0">
            {LAYERS.map((layer, i) => (
              <div
                key={layer.number}
                className={`relative md:-my-8 ${
                  i % 2 === 1 ? "md:ml-[22%]" : "md:mr-[22%]"
                }`}
              >
                <div
                  className="nexora-glass nexora-layer-panel relative rounded-md p-8 md:p-12 opacity-0"
                  data-nexora-glass
                >
                  {/* Offset glass backing — a second plane behind the panel */}
                  <div
                    className={`absolute inset-0 rounded-md border border-accent/[0.08] ${
                      i % 2 === 1 ? "-translate-x-3 translate-y-3" : "translate-x-3 -translate-y-3"
                    }`}
                    aria-hidden="true"
                  />
                  <div className="relative">
                    <div className="text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-accent/50 mb-5">
                      Layer {layer.number}
                    </div>
                    <h3 className="font-display text-[clamp(1.5rem,3vw,2.2rem)] font-medium tracking-[-0.02em] leading-[1.1] mb-5 text-text/92">
                      {layer.title}
                    </h3>
                    <p className="font-sans text-text-muted text-[15px] md:text-[16px] leading-[1.85] max-w-[480px]">
                      {layer.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          03 — THE DISCOVERY
          A layered system diagram — the result framed as depth.
          ═══════════════════════════════════════════════════ */}
      <section className="relative z-10 px-[var(--spacing-container)] py-32 md:py-44">
        <div className="grid grid-cols-12 gap-6 items-center">
          {/* The layered system — the "image" of the project */}
          <div className="col-span-12 md:col-span-6 relative h-[380px] md:h-[460px]">
            <div className="nexora-system absolute inset-6">
              <div className="nexora-system-rect absolute top-[8%] left-[4%] right-[30%] bottom-[20%] rounded-md border border-accent/20 bg-accent/[0.03] opacity-0" data-nexora-glass />
              <div className="nexora-system-rect absolute top-[22%] left-[16%] right-[16%] bottom-[8%] rounded-md border border-accent/30 bg-accent/[0.05] opacity-0" data-nexora-glass />
              <div className="nexora-system-rect absolute top-[36%] left-[30%] right-[6%] bottom-[2%] rounded-md border border-accent/40 bg-accent/[0.07] opacity-0" data-nexora-glass />
              <div className="absolute top-[40%] left-[52%] w-1.5 h-1.5 rounded-full bg-white/90 shadow-[0_0_14px_rgba(210,140,255,0.6)] opacity-0" data-nexora-glass />
              <div className="absolute top-[46%] left-[64%] w-3.5 h-3.5 rounded-full border border-accent/40 opacity-0" data-nexora-glass />
            </div>
          </div>

          {/* The discovery — text surfacing on the near plane */}
          <div className="col-span-12 md:col-span-5 md:col-start-8">
            <div className="text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-accent/70 mb-8 opacity-0" data-nexora-reveal>
              03 — The Discovery
            </div>
            <h2 className="font-display text-[clamp(1.75rem,3.6vw,2.6rem)] font-medium tracking-[-0.02em] leading-[1.12] mb-8 text-text/95 opacity-0" data-nexora-reveal>
              The interface learns.
              <br />
              The visitor only notices the calm.
            </h2>
            <p className="font-sans text-text-muted text-[15px] md:text-[16px] leading-[1.85] max-w-[440px] opacity-0" data-nexora-reveal>
              Every interaction teaches the system. Over time, NEXORA stops asking and
              starts knowing — the depth becomes invisible, and the experience feels inevitable.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          NEXT WORLD
          ═══════════════════════════════════════════════════ */}
      <section className="relative z-10 px-[var(--spacing-container)] pt-8 pb-32 md:pb-44">
        <div className="flex flex-col items-start md:items-end gap-6">
          <div className="text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-text-faint opacity-0" data-nexora-reveal>
            Next World
          </div>
          <Link
            href="/work/velocity"
            className="group inline-flex flex-col items-start gap-4 opacity-0"
            data-nexora-reveal
          >
            <span className="font-display text-[clamp(2.5rem,8vw,5rem)] font-medium tracking-[-0.02em] leading-none text-text/90 transition-colors duration-700 group-hover:text-accent">
              VELOCITY
            </span>
            <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-text-faint transition-colors duration-700 group-hover:text-accent/80">
              Energy with a destination.
            </span>
          </Link>
        </div>
      </section>
    </section>
  );
}