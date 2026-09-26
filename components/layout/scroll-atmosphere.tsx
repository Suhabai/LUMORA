"use client";

import { useEffect, useRef } from "react";
import { useExperience } from "./experience-context";
import type { ExperiencePhase } from "@/components/core/core-types";
import { PHASE_EVENT_MAP } from "@/components/core/core-types";
import { readCurrentSonicSection, SONIC_SECTION_EVENT, type SonicSection } from "./sonic-section-profiles";

// Phase-specific Core state values
// Each phase defines how the Core influences the experience
// Env values position the single global atmospheric field (percent + scale).
const PHASE_STATE: Record<string, {
  breatheRate: number;
  breatheIntensity: number;
  letterSpacing: number;
  lineHeightMod: number;
  sectionPad: number;
  motionDuration: number;
  atmosphereIntensity: number;
  transitionHeight: number;
  envX: number;
  envY: number;
  envScale: number;
  warmth: number;
  depth: number;
  settle: number;
}> = {
  entry:     { breatheRate: 12, breatheIntensity: 0.35, letterSpacing: 0,   lineHeightMod: 1,    sectionPad: 1,    motionDuration: 1,   atmosphereIntensity: 0.55, transitionHeight: 1, envX: 50, envY: 44, envScale: 1.00, warmth: 0.0, depth: 0.0, settle: 0.0 },
  presence:  { breatheRate: 10, breatheIntensity: 0.65, letterSpacing: 0,   lineHeightMod: 1,    sectionPad: 1,    motionDuration: 1,   atmosphereIntensity: 0.82, transitionHeight: 1, envX: 50, envY: 42, envScale: 1.12, warmth: 0.0, depth: 0.0, settle: 0.0 },
  discovery: { breatheRate: 8,  breatheIntensity: 0.85, letterSpacing: 0.01, lineHeightMod: 0.98, sectionPad: 0.97, motionDuration: 0.85, atmosphereIntensity: 0.95, transitionHeight: 0.95, envX: 56, envY: 40, envScale: 1.24, warmth: 0.0, depth: 0.38, settle: 0.0 },
  thinking:  { breatheRate: 16, breatheIntensity: 0.45, letterSpacing: -0.005, lineHeightMod: 1.02, sectionPad: 1.03, motionDuration: 1.2, atmosphereIntensity: 0.6, transitionHeight: 1.05, envX: 44, envY: 46, envScale: 1.04, warmth: 0.10, depth: 0.12, settle: 0.0 },
  human:     { breatheRate: 18, breatheIntensity: 0.35, letterSpacing: -0.008, lineHeightMod: 1.04, sectionPad: 1.05, motionDuration: 1.3, atmosphereIntensity: 0.52, transitionHeight: 1.08, envX: 58, envY: 44, envScale: 0.96, warmth: 0.75, depth: 0.0, settle: 0.0 },
  threshold: { breatheRate: 22, breatheIntensity: 0.18, letterSpacing: -0.003, lineHeightMod: 1.01, sectionPad: 1.02, motionDuration: 1.4, atmosphereIntensity: 0.42, transitionHeight: 1.1, envX: 50, envY: 55, envScale: 0.92, warmth: 0.35, depth: 0.0, settle: 0.88 },
};

export function ScrollAtmosphere() {
  const { setPhase, setEvent } = useExperience();
  const lastPhaseRef = useRef<ExperiencePhase>("entry");
  const lastScrollYRef = useRef(0);
  const velocityRef = useRef(0);
  const directionRef = useRef(0);

  useEffect(() => {
    let lastSonicSection: SonicSection | null = null;
    const updateSonicSection = () => {
      if (document.hidden || window.location.pathname !== "/") return;
      const section = readCurrentSonicSection();
      if (section === lastSonicSection) return;
      lastSonicSection = section;
      document.documentElement.dataset.sonicSection = section;
      window.dispatchEvent(new CustomEvent<SonicSection>(SONIC_SECTION_EVENT, { detail: section }));
    };

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      // Set static phase state without animation
      const root = document.documentElement;
      root.style.setProperty("--scroll-progress", "0");
      root.style.setProperty("--hero-fade", "1");
      root.style.setProperty("--scroll-velocity", "0");
      root.style.setProperty("--scroll-direction", "0");
      root.style.setProperty("--core-phase", "presence");
      root.style.setProperty("--core-event", "core-expand");
      const phaseState = PHASE_STATE.presence;
      root.style.setProperty("--core-breathe-rate", `${phaseState.breatheRate}s`);
      root.style.setProperty("--core-breathe-intensity", String(phaseState.breatheIntensity));
      root.style.setProperty("--core-letter-spacing", `${phaseState.letterSpacing}em`);
      root.style.setProperty("--core-line-height-mod", String(phaseState.lineHeightMod));
      root.style.setProperty("--core-section-pad", String(phaseState.sectionPad));
      root.style.setProperty("--core-motion-duration", "0");
      root.style.setProperty("--core-atmosphere-intensity", String(phaseState.atmosphereIntensity));
      root.style.setProperty("--core-transition-height", String(phaseState.transitionHeight));
      root.style.setProperty("--env-field-x", String(phaseState.envX));
      root.style.setProperty("--env-field-y", String(phaseState.envY));
      root.style.setProperty("--env-field-scale", String(phaseState.envScale));
      root.style.setProperty("--env-warmth", String(phaseState.warmth));
      root.style.setProperty("--env-depth", String(phaseState.depth));
      root.style.setProperty("--env-settle", String(phaseState.settle));
      setPhase("presence");
      setEvent("core-expand");
      updateSonicSection();
      window.addEventListener("scroll", updateSonicSection, { passive: true });
      return () => window.removeEventListener("scroll", updateSonicSection);
    }

    let ticking = false;

    function update() {
      const scrollY = window.scrollY;
      updateSonicSection();
      const vh = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight - vh;
      const progress = docHeight > 0 ? Math.min(scrollY / docHeight, 1) : 0;

      // Hero fade: 1 when at top, 0 when scrolled past one viewport
      const heroFade = 1 - Math.min(scrollY / vh, 1);

      // Scroll velocity (px/frame, smoothed)
      const rawDelta = scrollY - lastScrollYRef.current;
      velocityRef.current = velocityRef.current * 0.7 + Math.abs(rawDelta) * 0.3;
      directionRef.current = rawDelta > 0.5 ? 1 : rawDelta < -0.5 ? -1 : directionRef.current;
      lastScrollYRef.current = scrollY;

      // Normalize velocity: 0 = still, 0.2 = slow, 1 = fast
      const maxVelocity = vh * 0.15;
      const normalizedVelocity = Math.min(velocityRef.current / maxVelocity, 1);

      // Phase detection: find which section is most visible
      const sections = document.querySelectorAll<HTMLElement>("section[id]");
      let currentPhase: ExperiencePhase = "entry";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;

        // Section is "in view" if its center is within the viewport
        if (sectionCenter > -vh * 0.3 && sectionCenter < vh * 1.3) {
          const id = section.id;
          if (id === "hero") currentPhase = "presence";
          else if (id === "world-omnia" || id === "world-nexora" || id === "world-velocity" || id === "works") currentPhase = "discovery";
          else if (id === "philosophy") currentPhase = "thinking";
          else if (id === "about") currentPhase = "human";
          else if (id === "contact") currentPhase = "threshold";
        }
      });

      // If at the very top, we're in entry — unless we arrived at a settled
      // destination, which is already at rest. The threshold (contact) and
      // the introspective record (docs) maintain their state instead of
      // replaying the entry.
      const phaseAtTop = currentPhase as string;
      const isSettledDestination = phaseAtTop === "threshold" || phaseAtTop === "thinking";
      if (scrollY < vh * 0.1 && !isSettledDestination) {
        currentPhase = "entry";
      }

      // ── Set CSS custom properties: single authoritative Core state ──
      // All sections consume these. One source of truth.
      const root = document.documentElement;
      const phaseState = PHASE_STATE[currentPhase] || PHASE_STATE.presence;

      // Scroll state
      root.style.setProperty("--scroll-progress", String(progress));
      root.style.setProperty("--hero-fade", String(heroFade));
      root.style.setProperty("--scroll-velocity", String(normalizedVelocity));
      root.style.setProperty("--scroll-direction", String(directionRef.current));

      // Core state
      root.style.setProperty("--core-phase", currentPhase);
      root.style.setProperty("--core-progress", String(progress));
      root.style.setProperty("--core-velocity", String(normalizedVelocity));
      root.style.setProperty("--core-direction", String(directionRef.current));

      // Update React state only on phase change (avoids per-frame re-renders)
      if (currentPhase !== lastPhaseRef.current) {
        lastPhaseRef.current = currentPhase;
        setPhase(currentPhase);
        // Derive core event from phase change — this is the cause
        const newEvent = PHASE_EVENT_MAP[currentPhase] || "core-drift";
        setEvent(newEvent);
        // Set CSS custom property for event-driven animations
        root.style.setProperty("--core-event", newEvent);
      }

      // Phase-dependent modulation (only update on phase change for performance)
      if (currentPhase !== lastPhaseRef.current || !root.style.getPropertyValue("--core-breathe-rate")) {
        root.style.setProperty("--core-breathe-rate", `${phaseState.breatheRate}s`);
        root.style.setProperty("--core-breathe-intensity", String(phaseState.breatheIntensity));
        root.style.setProperty("--core-letter-spacing", `${phaseState.letterSpacing}em`);
        root.style.setProperty("--core-line-height-mod", String(phaseState.lineHeightMod));
        root.style.setProperty("--core-section-pad", String(phaseState.sectionPad));
        root.style.setProperty("--core-motion-duration", String(phaseState.motionDuration));
        root.style.setProperty("--core-atmosphere-intensity", String(phaseState.atmosphereIntensity));
        root.style.setProperty("--core-transition-height", String(phaseState.transitionHeight));

        // Global environment field — one continuous layer, positioned per phase
        root.style.setProperty("--env-field-x", String(phaseState.envX));
        root.style.setProperty("--env-field-y", String(phaseState.envY));
        root.style.setProperty("--env-field-scale", String(phaseState.envScale));
        root.style.setProperty("--env-warmth", String(phaseState.warmth));
        root.style.setProperty("--env-depth", String(phaseState.depth));
        root.style.setProperty("--env-settle", String(phaseState.settle));
      }

      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [setPhase, setEvent]);

  return null;
}
