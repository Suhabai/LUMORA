"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { VelocityGeometry } from "./world-geometry";
import { useMounted } from "@/components/hooks/use-mounted";

gsap.registerPlugin(ScrollTrigger);

const MOVEMENTS = [
  {
    number: "01",
    title: "Acceleration",
    text: "The release. Energy held still, then set free - not faster, just certain of its direction.",
  },
  {
    number: "02",
    title: "Flow",
    text: "Energy finds its line. Once moving, everything follows the same current. No wasted motion, no noise.",
  },
  {
    number: "03",
    title: "Direction",
    text: "The line becomes purpose. Movement earns meaning when it points somewhere. VELOCITY always arrives.",
  },
];

export function VelocityExperience() {
  const mounted = useMounted();
  const pageRef = useRef<HTMLElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mounted || !pageRef.current) return;

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        if (backdropRef.current) gsap.set(backdropRef.current, { opacity: 1 });
        gsap.set("[data-geometry]", { opacity: 1, x: 0, scaleX: 1, scaleY: 1 });
        gsap.set(
          ".velocity-hero-label, .velocity-hero-title, .velocity-hero-tagline, .velocity-hero-spec, .velocity-hero-frame, [data-velocity-reveal], [data-velocity-frame]",
          { opacity: 1, x: 0, y: 0, scale: 1, rotation: 0, filter: "blur(0px)" }
        );
        return;
      }

      // ── INITIAL STATES ──
      // The field begins still. Trajectories are collapsed at their source,
      // counter-tension resolved, the dash stream withdrawn, and the momentum
      // dot waits at the far end of its line. Content sits behind a blur.
      if (backdropRef.current) gsap.set(backdropRef.current, { opacity: 0 });
      gsap.set(".velocity-trajectory", { scaleX: 0 });
      gsap.set(".velocity-counter", { scaleX: 0 });
      gsap.set(".velocity-dash-stream", { scaleX: 0 });
      gsap.set(".velocity-momentum-dot, .velocity-momentum-ring", { x: -240, scale: 0.5 });
      gsap.set(".velocity-hero-frame", { opacity: 0, x: 70, rotation: 4 });
      gsap.set(
        ".velocity-hero-label, .velocity-hero-title",
        { x: -40, y: -24, filter: "blur(6px)" }
      );
      gsap.set(
        ".velocity-hero-tagline, .velocity-hero-spec",
        { x: 30, y: 26, filter: "blur(5px)" }
      );

      // ── THE RELEASE SEQUENCE ──
      // 1. The backdrop surfaces from the dark.
      // 2. Trajectories draw out along their diagonal, cascading from the top -
      //    the strongest line releases first, and the field follows.
      // 3. Counter-tension resolves from the right, holding the energy.
      // 4. The dash stream extends.
      // 5. The momentum dot rides its line into place, ring trailing.
      // 6. Content enters along the diagonal - title from the source,
      //    supporting lines from the resolving counter-flow.
      const tl = gsap.timeline({ onComplete: setupParallax });

      tl.to(backdropRef.current, { opacity: 1, duration: 1.0, ease: "power1.out" }, 0)
        .to(".velocity-trajectory", { scaleX: 1, duration: 1.1, stagger: 0.08, ease: "power3.inOut" }, 0.15)
        .to(".velocity-counter", { scaleX: 1, duration: 0.9, stagger: 0.1, ease: "power3.inOut" }, 0.5)
        .to(".velocity-dash-stream", { scaleX: 1, duration: 0.8, ease: "power3.inOut" }, 0.68)
        .to(".velocity-momentum-dot", { x: 0, scale: 1, duration: 1.0, ease: "power3.out" }, 0.78)
        .to(".velocity-momentum-ring", { x: 0, scale: 1, duration: 1.0, ease: "power3.out" }, 0.84)
        .to(".velocity-hero-label", { opacity: 1, x: 0, y: 0, filter: "blur(0px)", duration: 0.5, ease: "power2.out" }, 0.88)
        .to(".velocity-hero-title", { opacity: 1, x: 0, y: 0, filter: "blur(0px)", duration: 0.75, ease: "power2.out" }, 0.95)
        .to(".velocity-hero-frame", { opacity: 1, x: 0, rotation: -3, duration: 0.8, stagger: 0.14, ease: "power3.out" }, 1.0)
        .to(".velocity-hero-tagline", { opacity: 1, x: 0, y: 0, filter: "blur(0px)", duration: 0.6, ease: "power2.out" }, 1.08)
        .to(".velocity-hero-spec", { opacity: 1, x: 0, y: 0, filter: "blur(0px)", duration: 0.55, ease: "power2.out" }, 1.16);

      // ── DIRECTION PARALLAX ──
      // Runs after the release completes, so it begins from the final positions.
      // As the visitor descends, trajectories flow forward along the diagonal,
      // counter-tension resolves against the flow, and the momentum dot
      // rides further along its line - each element at its own speed.
      function setupParallax() {
        const st = gsap.timeline({
          scrollTrigger: {
            trigger: pageRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.2,
          },
        });
        st.to(".velocity-trajectory", { x: 110, duration: 1, stagger: { each: 0.05, from: "start" } }, 0)
          .to(".velocity-dash-stream", { x: 130, duration: 1 }, 0)
          .to(".velocity-counter", { x: -90, duration: 1 }, 0)
          .to(".velocity-momentum-dot, .velocity-momentum-ring", { x: 165, duration: 1 }, 0)
          .to("rect[fill*='velocity-glow']", { x: 40, y: 25, duration: 1 }, 0);
      }

      // ── CONTENT REVEALS ──
      // Text blocks enter along the diagonal - arriving, not appearing.
      gsap.utils.toArray<HTMLElement>("[data-velocity-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: 22, y: 30 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.95,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Visual frames swing into their resting angle as they surface.
      gsap.utils.toArray<HTMLElement>("[data-velocity-frame]").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.95, rotation: 3, filter: "blur(4px)" },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
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

      // Moving panels drift at their own speeds - content on different planes.
      gsap.utils.toArray<HTMLElement>(".velocity-drift-panel").forEach((panel, i) => {
        const drift = i % 2 === 0 ? 55 : -65;
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
      className="velocity-experience relative min-h-screen overflow-hidden"
      aria-label="VELOCITY - a case study in movement, direction, and momentum"
    >
      {/* ── Persistent VELOCITY Field ──
          The high-contrast VELOCITY geometry frames the page from behind.
          Its trajectories flow forward and its counter-tension resolves
          against the flow as the visitor descends, so the page itself
          carries the momentum. */}
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div
          ref={backdropRef}
          className="velocity-backdrop absolute inset-0 opacity-0 [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_82%,transparent)]"
        >
          <div className="absolute inset-0 opacity-50">
            <VelocityGeometry coreState="present" />
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          HERO — The Release
          Content enters along the diagonal. Asymmetric. Directional.
          ═══════════════════════════════════════════════════ */}
      <header className="relative z-10 min-h-screen flex items-center px-[var(--spacing-container)]">
        <div className="grid grid-cols-12 gap-6 w-full items-center">
          {/* Left — the content, released along the flow */}
          <div className="col-span-12 md:col-span-7 md:pr-10">
            <div className="velocity-hero-label text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-accent/70 mb-8 opacity-0">
              03 — Momentum
            </div>

            <h1 className="velocity-hero-title font-display text-[clamp(3.5rem,12vw,8rem)] font-medium tracking-[-0.02em] leading-[0.95] text-text opacity-0">
              VELOCITY
            </h1>

            <p className="velocity-hero-tagline mt-8 max-w-[420px] font-sans text-[15px] md:text-[16px] leading-[1.8] text-text-muted opacity-0">
              Movement with direction. Energy that flows toward a purpose —
              released, never wasted.
            </p>

            {/* Spec — trailing the flow, offset toward the destination */}
            <div className="velocity-hero-spec mt-12 space-y-3 text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-text-faint opacity-0">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent/25" />
                <span>Year — 2026</span>
              </div>
              <div className="flex items-center gap-3 ml-5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent/20" />
                <span>Discipline — Kinetic Experience</span>
              </div>
              <div className="flex items-center gap-3 ml-10">
                <span className="w-1.5 h-1.5 rounded-full bg-accent/15" />
                <span>Role — Design &amp; Direction</span>
              </div>
            </div>
          </div>

          {/* Right — a freeze-frame of the field on the far plane */}
          <div className="col-span-5 relative h-[340px] hidden md:block">
            <div className="velocity-hero-frame velocity-glass absolute top-6 right-2 w-[72%] h-36 rounded-md p-5 opacity-0">
              <div className="text-[9px] font-sans font-semibold uppercase tracking-[0.2em] text-accent/50 mb-3">
                Frame — Trajectory
              </div>
              <div className="relative h-10">
                <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-accent/50 via-accent/25 to-transparent" />
                <div className="absolute top-1/2 left-[62%] w-1.5 h-1.5 -translate-y-1/2 rounded-full bg-white/90 shadow-[0_0_12px_rgba(210,140,255,0.6)]" />
              </div>
              <p className="mt-3 font-sans text-[11px] leading-[1.7] text-text-faint">
                Energy held still, then set free.
              </p>
            </div>
            <div className="velocity-hero-frame velocity-glass absolute bottom-2 right-10 w-[58%] h-28 rounded-md p-5 opacity-0">
              <div className="text-[9px] font-sans font-semibold uppercase tracking-[0.2em] text-accent/50 mb-3">
                Frame — Resolution
              </div>
              <div className="relative h-8">
                <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-l from-accent/40 via-accent/15 to-transparent" />
              </div>
              <p className="mt-2 font-sans text-[11px] leading-[1.7] text-text-faint">
                Counter-tension holds the line.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════
          01 — THE BRIEF
          Pushed right, counter to the flow - the tension that frames it.
          ═══════════════════════════════════════════════════ */}
      <section className="relative z-10 px-[var(--spacing-container)] py-32 md:py-44">
        <div className="grid grid-cols-12 gap-6 items-start">
          <div className="col-span-12 md:col-span-4 md:pt-2 md:order-2">
            <div className="text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-text-faint opacity-0" data-velocity-reveal>
              01 — The Brief
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 md:col-start-6 md:order-1">
            <div className="opacity-0" data-velocity-reveal>
              <h2 className="font-display text-[clamp(1.75rem,3.6vw,2.6rem)] font-medium tracking-[-0.02em] leading-[1.1] mb-8 text-text/95">
                Momentum is a feeling,
                <br />
                not a feature.
              </h2>
              <p className="font-sans text-text-muted text-[15px] md:text-[16px] leading-[1.85] max-w-[460px]">
                VELOCITY had to communicate speed without shouting. The energy had
                to feel directed - arriving somewhere, not spinning in place. So we
                built movement as a language: every line flows, every element knows
                where it is going.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          02 — THE MOVEMENTS
          Three moments, offset along the diagonal, each riding its own line.
          ═══════════════════════════════════════════════════ */}
      <section className="relative z-10 px-[var(--spacing-container)] py-8 md:py-12">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-accent/70 mb-16 md:mb-24 opacity-0" data-velocity-reveal>
            02 — The Movements
          </div>

          <div className="relative flex flex-col gap-16 md:gap-0">
            {MOVEMENTS.map((m, i) => (
              <div
                key={m.number}
                className={`relative md:-my-6 ${i % 2 === 1 ? "md:ml-[24%]" : "md:mr-[24%]"}`}
              >
                {/* In-page trace line - the energy passes behind the words */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 -rotate-[14deg] h-px pointer-events-none"
                  style={{
                    left: i % 2 === 1 ? "auto" : "18%",
                    right: i % 2 === 1 ? "18%" : "auto",
                    width: "62%",
                    background: "linear-gradient(to right, rgba(138,46,255,0.28), rgba(138,46,255,0.06), transparent)",
                  }}
                  aria-hidden="true"
                />
                <div
                  className="velocity-glass velocity-drift-panel relative rounded-md p-8 md:p-12 opacity-0"
                  data-velocity-frame
                >
                  <div className="relative">
                    <div className="text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-accent/50 mb-5">
                      Moment {m.number}
                    </div>
                    <h3 className="font-display text-[clamp(1.5rem,3vw,2.2rem)] font-medium tracking-[-0.02em] leading-[1.1] mb-5 text-text/92">
                      {m.title}
                    </h3>
                    <p className="font-sans text-text-muted text-[15px] md:text-[16px] leading-[1.85] max-w-[480px]">
                      {m.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          03 — THE RESULT
          The speed-frame - the project image - alongside the arrival.
          ═══════════════════════════════════════════════════ */}
      <section className="relative z-10 px-[var(--spacing-container)] py-32 md:py-44">
        <div className="grid grid-cols-12 gap-6 items-center">
          {/* The speed-frame - a freeze-frame of the field */}
          <div className="col-span-12 md:col-span-6 relative h-[360px] md:h-[440px]">
            <div
              className="velocity-glass velocity-drift-panel absolute inset-6 rounded-md p-6 opacity-0"
              data-velocity-frame
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-[9px] font-sans font-semibold uppercase tracking-[0.2em] text-accent/50">
                  Speed Frame
                </span>
                <span className="text-[9px] font-sans font-semibold uppercase tracking-[0.2em] text-text-faint">
                  0.00s
                </span>
              </div>

              <div className="relative h-[68%]">
                {/* Trajectory */}
                <div className="absolute top-[30%] left-[-4%] right-[8%] h-px bg-gradient-to-r from-accent/60 via-accent/30 to-transparent" />
                {/* Momentum dot riding the line */}
                <div className="absolute top-[30%] left-[58%] w-2 h-2 -translate-y-1/2 rounded-full bg-white/95 shadow-[0_0_16px_rgba(210,140,255,0.7)]" />
                <div className="absolute top-[30%] left-[58%] w-6 h-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/50" />
                {/* Counter-tension resolving from the right */}
                <div className="absolute bottom-[18%] right-[-4%] left-[34%] h-px bg-gradient-to-l from-accent/40 via-accent/15 to-transparent" />
                {/* Dashed stream */}
                <div className="absolute top-[55%] left-[6%] w-[52%] h-px border-t border-dashed border-accent/40" />
              </div>

              <div className="flex items-center gap-3 text-[9px] font-sans font-semibold uppercase tracking-[0.2em] text-text-faint">
                <span className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                <span>Frame 01 — Trajectory / Flow / Arrival</span>
              </div>
            </div>
          </div>

          {/* The arrival - text on the near plane */}
          <div className="col-span-12 md:col-span-5 md:col-start-8">
            <div className="text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-accent/70 mb-8 opacity-0" data-velocity-reveal>
              03 — The Result
            </div>
            <h2 className="font-display text-[clamp(1.75rem,3.6vw,2.6rem)] font-medium tracking-[-0.02em] leading-[1.12] mb-8 text-text/95 opacity-0" data-velocity-reveal>
              Momentum without noise.
              <br />
              Direction without force.
            </h2>
            <p className="font-sans text-text-muted text-[15px] md:text-[16px] leading-[1.85] max-w-[440px] opacity-0" data-velocity-reveal>
              The experience moves because every element has a destination. Users
              feel the release at the entrance and the arrival at the end - and
              everything between flows along a single, intentional line.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          THE CIRCLE RETURNS
          The final world closes the loop back to the first.
          ═══════════════════════════════════════════════════ */}
      <section className="relative z-10 px-[var(--spacing-container)] pt-8 pb-32 md:pb-44">
        <div className="flex flex-col items-start md:items-end gap-6">
          <div className="text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-text-faint opacity-0" data-velocity-reveal>
            The World Returns
          </div>
          <Link
            href="/work/omnia"
            className="group inline-flex flex-col items-start gap-4 opacity-0"
            data-velocity-reveal
          >
            <span className="font-display text-[clamp(2.5rem,8vw,5rem)] font-medium tracking-[-0.02em] leading-none text-text/90 transition-colors duration-700 group-hover:text-accent">
              OMNIA
            </span>
            <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-text-faint transition-colors duration-700 group-hover:text-accent/80">
              The circle begins again.
            </span>
          </Link>
        </div>
      </section>
    </section>
  );
}