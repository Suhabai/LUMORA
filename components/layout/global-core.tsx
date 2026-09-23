"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import LivingCore from "@/components/core/LivingCore";
import { DirectionalLight } from "@/components/experiments/directional-light";
import { useExperience } from "./experience-context";

// Phase-specific Core configurations
// Each phase defines the Core's spatial position, scale, and breathing rhythm.
// Human: smaller, offset, slower — intimate. Threshold: smallest, centered, still.
// warmth  (0-1) shifts the Core's color toward rose — the material warms.
// softness (0-1) blurs and dims the Core — the material softens into intimacy.
const PHASE_CONFIG: Record<string, {
  x: number; y: number; scale: number; breatheRate: number;
  offsetX: string; offsetY: string;
  warmth: number; softness: number;
}> = {
  entry:      { x: 0,   y: 0,    scale: 1.12, breatheRate: 12, offsetX: "0px",   offsetY: "0px",   warmth: 0.0, softness: 0.0 },
  presence:   { x: 0,   y: 0,    scale: 1.12, breatheRate: 10, offsetX: "0px",   offsetY: "0px",   warmth: 0.0, softness: 0.0 },
  discovery:  { x: 8,   y: -4,   scale: 0.88, breatheRate: 8,  offsetX: "8px",   offsetY: "-4px",  warmth: 0.05, softness: 0.05 },
  thinking:   { x: -5,  y: 6,    scale: 0.7,  breatheRate: 16, offsetX: "-5px",  offsetY: "6px",   warmth: 0.12, softness: 0.14 },
  human:      { x: 12,  y: 8,    scale: 0.6,  breatheRate: 18, offsetX: "12px",  offsetY: "8px",   warmth: 0.85, softness: 0.55 },
  threshold:  { x: 0,   y: 0,    scale: 0.5,  breatheRate: 22, offsetX: "0px",   offsetY: "0px",   warmth: 0.35, softness: 0.82 },
};

export function GlobalCore({ enableDirectionalLight = false }: { enableDirectionalLight?: boolean }) {
  const { phase, event } = useExperience();
  const containerRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const envRef = useRef<HTMLDivElement>(null);
  const hasAppeared = useRef(false);
  const rafRef = useRef<number>(0);
  const prevEventRef = useRef<string>("");

  // ── North Star Entry Sequence ──
  // 0.0s  Environment already exists (opacity 1 from start)
  // 0.4s  Core becomes perceptible
  // 1.0s  Core establishes its breathing rhythm
  //
  // The environment must not appear as a normal page fade.
  // The user should feel: "The space was already here."
  useEffect(() => {
    if (!containerRef.current || !coreRef.current) return;
    if (!hasAppeared.current) {
      hasAppeared.current = true;

      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // Environment is already present — it was always here
      if (envRef.current) {
        gsap.set(envRef.current, { opacity: 1 });
      }

      if (prefersReducedMotion) {
        gsap.set(coreRef.current, { opacity: 1, scale: 1 });
        return;
      }

      // Core emerges at 0.4s — becomes perceptible, not fully formed
      gsap.fromTo(
        coreRef.current,
        { opacity: 0, scale: 0.65 },
        { opacity: 1, scale: 1, duration: 1.6, ease: "power2.out", delay: 0.4 }
      );
    }
  }, []);

  // ── Core Warmth & Softness ──
  // Driven by phase. The material's character changes with the journey:
  // presence is sharp and vivid; human becomes warm and soft;
  // threshold is soft and nearly still.
  useEffect(() => {
    if (!containerRef.current) return;
    const config = PHASE_CONFIG[phase] || PHASE_CONFIG.presence;
    containerRef.current.style.setProperty("--core-warmth", String(config.warmth));
    containerRef.current.style.setProperty("--core-softness", String(config.softness));
  }, [phase]);

  // ── Core Event Response ──
  // When the Core event changes, the environment responds causally.
  // The settle event is phase-aware: human and threshold have distinct expressions.
  useEffect(() => {
    if (!containerRef.current || !coreRef.current) return;
    if (event === prevEventRef.current) return;
    prevEventRef.current = event;

    const root = document.documentElement;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Set event CSS class for event-driven animations
    root.style.setProperty("--core-event", event);

    if (prefersReducedMotion) {
      const config = PHASE_CONFIG[phase] || PHASE_CONFIG.presence;
      gsap.set(coreRef.current, { scale: config.scale, x: config.x || 0, y: config.y || 0 });
      return;
    }

    // Event-specific Core behavior
    switch (event) {
      case "core-awaken":
        // Core becomes perceptible — environment responds
        gsap.to(coreRef.current, {
          scale: 1,
          duration: 1.4,
          ease: "power2.out",
        });
        break;

      case "core-expand":
        // Core breathes outward — presence establishes
        gsap.to(coreRef.current, {
          scale: PHASE_CONFIG.presence.scale,
          duration: 1.8,
          ease: "power3.out",
        });
        break;

      case "core-compress":
        // Core concentrates inward — thinking begins
        gsap.to(coreRef.current, {
          scale: PHASE_CONFIG.thinking.scale,
          x: PHASE_CONFIG.thinking.x,
          y: PHASE_CONFIG.thinking.y,
          duration: 2.0,
          ease: "power3.inOut",
        });
        break;

      case "core-drift":
        // Core shifts depth — discovery/worlds
        gsap.to(coreRef.current, {
          scale: PHASE_CONFIG.discovery.scale,
          x: PHASE_CONFIG.discovery.x,
          y: PHASE_CONFIG.discovery.y,
          duration: 1.6,
          ease: "power3.out",
        });
        break;

      case "core-focus":
        // Core thinks — philosophy concentration
        gsap.to(coreRef.current, {
          scale: PHASE_CONFIG.thinking.scale,
          x: PHASE_CONFIG.thinking.x,
          y: PHASE_CONFIG.thinking.y,
          duration: 2.2,
          ease: "power2.inOut",
        });
        break;

      case "core-settle": {
        // Core settles — phase-aware.
        // Human: offset, warm, intimate. Threshold: centered, still, final.
        const config = phase === "threshold"
          ? PHASE_CONFIG.threshold
          : PHASE_CONFIG.human;

        gsap.to(coreRef.current, {
          scale: config.scale,
          x: config.x,
          y: config.y,
          duration: phase === "threshold" ? 3.0 : 2.4,
          ease: "power2.inOut",
        });

        // Environment responds to settling — warmth and settle values
        // set by scroll-atmosphere CSS custom properties
        break;
      }

      case "core-release":
        // Core releases energy — velocity/direction
        gsap.to(coreRef.current, {
          scale: PHASE_CONFIG.discovery.scale,
          x: 0,
          y: 0,
          duration: 1.4,
          ease: "power3.out",
        });
        break;
    }
  }, [event, phase]);

  // Scroll-linked behavior: velocity, direction, phase-based offsets
  // The first scroll should create a noticeable but restrained response.
  // Core reacts, environmental field shifts, atmosphere stretches subtly.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    function updateCore() {
      if (!containerRef.current) return;

      const root = document.documentElement;
      const velocity = parseFloat(root.style.getPropertyValue("--scroll-velocity") || "0");
      const direction = parseFloat(root.style.getPropertyValue("--scroll-direction") || "0");

      const config = PHASE_CONFIG[phase] || PHASE_CONFIG.presence;

      // Velocity-driven drift: subtle horizontal stretch on fast scroll
      const velocityDrift = velocity * direction * 14;
      const velocityStretch = 1 + velocity * 0.05;

      // Apply transform via CSS custom properties (GPU-composited, no re-render).
      // Set on the container so the environment layer inherits and follows the Core.
      containerRef.current.style.setProperty("--core-offset-x", `${config.x + velocityDrift}px`);
      containerRef.current.style.setProperty("--core-offset-y", `${config.y}px`);
      containerRef.current.style.setProperty("--core-phase-scale", String(config.scale));
      containerRef.current.style.setProperty("--core-velocity-stretch", String(velocityStretch));

      rafRef.current = requestAnimationFrame(updateCore);
    }

    rafRef.current = requestAnimationFrame(updateCore);
    return () => cancelAnimationFrame(rafRef.current);
  }, [phase]);

  // Map experience phase to core mode
  const modeMap: Record<string, "entry" | "presence" | "discovery" | "worlds" | "thinking" | "human" | "threshold"> = {
    entry: "entry",
    presence: "presence",
    discovery: "discovery",
    worlds: "worlds",
    thinking: "thinking",
    human: "human",
    threshold: "threshold",
  };

  const coreMode = modeMap[phase] || "presence";

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center"
      aria-hidden="true"
    >
      {/* ── Global Environment Layer ──
          One continuous atmosphere, coupled to the Core's position and scale.
          The background evolves with the Core — it never resets per section.
          Environmental traces extend from the Core into the surrounding space. */}
      <div
        ref={envRef}
        className="env-layer"
        style={{
          transform:
            "translate(calc(var(--core-offset-x, 0px) * 2.2), calc(var(--core-offset-y, 0px) * 2.2)) scale(calc(var(--core-phase-scale, 1) * 1.7))",
          transition: "transform 2.0s cubic-bezier(0.16, 1, 0.3, 1)",
          willChange: "transform",
          zIndex: 0,
        }}
      >
        <div className="env-void" />
        <div className="env-field" />
        <div className="env-depth" />
        <div className="env-warmth" />
        <div className="env-settle" />
        <div className="env-mist" />
        <div className="env-traces" />
        <div className="env-vignette" />
      </div>

      {/* ── EXPERIMENT B: Directional Light ──
          Subtle atmospheric light field layered between environment and Core.
          z-1: above environment (z-0), below core (z-2).
          Controlled by enableDirectionalLight prop. */}
      {enableDirectionalLight && <DirectionalLight />}

      {/* ── The Living Core ──
          The material itself. As the journey deepens it grows smaller,
          slower, warmer, and softer. In the threshold it becomes a
          quiet, distant presence — nearly still. */}
      <div
        ref={coreRef}
        className="relative"
        style={{
          transform: "translate(var(--core-offset-x, 0px), var(--core-offset-y, 0px)) scale(var(--core-phase-scale, 1)) scaleX(var(--core-velocity-stretch, 1))",
          filter: "blur(calc(var(--core-softness, 0) * 1.1px)) hue-rotate(calc(var(--core-warmth, 0) * 16deg)) saturate(calc(1 + var(--core-warmth, 0) * 0.18)) brightness(calc(1.02 - var(--core-softness, 0) * 0.12))",
          transition: "transform 2.0s cubic-bezier(0.16, 1, 0.3, 1), filter 2.6s cubic-bezier(0.16, 1, 0.3, 1)",
          willChange: "transform, filter",
          zIndex: 2,
        }}
      >
        <LivingCore
          mode={coreMode}
          intensity="medium"
          interaction="none"
        />
        {/* Warmth veil — the material's glow leans toward rose in human moments.
            Rests above the Core, softening its edges as intimacy grows. */}
        <div className="core-warmth-veil" />
      </div>
    </div>
  );
}
