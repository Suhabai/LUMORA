"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useMounted } from "@/components/hooks/use-mounted";

export function ContactExperience() {
  const mounted = useMounted();
  const sectionRef = useRef<HTMLElement>(null);
  const plaqueRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const noteRef = useRef<HTMLParagraphElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const signatureRef = useRef<HTMLDivElement>(null);
  const pointWrapRef = useRef<HTMLDivElement>(null);
  const horizonRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!mounted || !sectionRef.current) return;

    // Motion duration derives from Core state — slowest in threshold.
    const dur = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue("--core-motion-duration") || "1"
    );
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (reduceMotion) {
        gsap.set("[data-threshold-reveal]", { opacity: 1, y: 0, filter: "blur(0px)" });
        gsap.set(".threshold-horizon", { opacity: 1 });
        gsap.set(pointWrapRef.current, { opacity: 1, scale: 1 });
        return;
      }

      // ── THE QUIET ARRIVAL ──
      // No motion to speak of. A slow, almost imperceptible surfacing —
      // each element appears as if it was always there, simply becoming
      // visible. The environment has already settled; this page only lets
      // the last words arrive, unhurried.
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.fromTo(
        plaqueRef.current,
        { opacity: 0, y: 14, filter: "blur(4px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.4 * dur },
        0.4
      )
        .fromTo(
          headingRef.current,
          { opacity: 0, y: 24, filter: "blur(6px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.8 * dur },
          0.7
        )
        .fromTo(
          noteRef.current,
          { opacity: 0, y: 12, filter: "blur(3px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.3 * dur },
          1.2
        )
        .fromTo(
          linkRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 1.2 * dur },
          1.6
        )
        .fromTo(
          signatureRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1.1 * dur },
          2.0
        )
        // The horizon assembles last — the settling completes.
        .fromTo(
          horizonRefs.current,
          { opacity: 0 },
          { opacity: 1, duration: 2.4, ease: "power1.inOut" },
          2.2
        )
        // The settled point — the Core's stillness made visible.
        .fromTo(
          pointWrapRef.current,
          { opacity: 0, scale: 0.5 },
          { opacity: 1, scale: 1, duration: 2.2, ease: "power2.out" },
          2.5
        );
    }, sectionRef);

    return () => ctx.revert();
  }, [mounted]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden px-[var(--spacing-container)]"
      aria-labelledby="contact-threshold-heading"
    >
      {/* ── Threshold Environment ──
          The global atmosphere is already settled — warm, soft, still.
          Here a horizon assembles at the base of the page: the journey's
          final resting line. A single point marks where it has settled.
          No form. No conversion. An opening. */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Horizon lines — converging toward stillness */}
        <div
          ref={(el) => {
            if (el) horizonRefs.current[0] = el;
          }}
          className="threshold-horizon absolute bottom-[6%] left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-accent/[0.10] to-transparent"
        />
        <div
          ref={(el) => {
            if (el) horizonRefs.current[1] = el;
          }}
          className="threshold-horizon absolute bottom-[3%] left-[25%] right-[25%] h-px bg-gradient-to-r from-transparent via-accent/[0.06] to-transparent"
        />
        {/* Grounding warmth — the last presence */}
        <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-[radial-gradient(ellipse_at_50%_100%,rgba(130,45,235,0.05)_0%,transparent_60%)]" />
      </div>

      {/* The settled point — where the horizon converges. The Core at rest. */}
      <div
        ref={pointWrapRef}
        className="absolute bottom-[6%] left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0"
        aria-hidden="true"
      >
        <div className="threshold-point" />
      </div>

      {/* ── The Arrival ── */}
      <div className="relative z-10 max-w-[760px] mx-auto w-full text-center">
        {/* Plaque — the room you have entered */}
        <div
          ref={plaqueRef}
          className="opacity-0 text-[10px] font-sans font-semibold uppercase tracking-[0.24em] text-accent/70 mb-10"
        >
          The threshold — an opening
        </div>

        {/* The headline — the thought, completed */}
        <h1
          ref={headingRef}
          id="contact-threshold-heading"
          className="opacity-0 core-type-calm font-display text-[clamp(2.1rem,6.5vw,4.5rem)] font-light tracking-[-0.02em] leading-[1.14] text-text/92"
        >
          The work begins with a conversation.
        </h1>

        {/* A quiet note — no selling, no urgency */}
        <p
          ref={noteRef}
          className="opacity-0 mt-9 font-sans text-[15px] md:text-[16px] leading-[1.85] text-text-muted max-w-[420px] mx-auto"
        >
          No brief, no form, no urgency. Simply a question, and a door left open.
        </p>

        {/* The door — a direct, quiet way to connect */}
        <div className="mt-14">
          <a
            ref={linkRef}
            href="mailto:sohrab@lumora.studio"
            className="opacity-0 group inline-flex flex-col items-center gap-4"
          >
            <span className="font-sans text-[clamp(1.05rem,2.6vw,1.5rem)] font-light tracking-[0.02em] text-text/85 transition-colors duration-700 group-hover:text-accent">
              sohrab@lumora.studio
            </span>
            <span className="h-px w-24 origin-center bg-accent/40 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-32" />
          </a>
        </div>

        {/* Signature — the person behind the world */}
        <div ref={signatureRef} className="opacity-0 mt-24">
          <p className="text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-text-faint">
            Sohrab — LUMORA
          </p>
        </div>
      </div>
    </section>
  );
}