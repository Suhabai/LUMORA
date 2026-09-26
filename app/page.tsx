import { Hero } from "@/components/sections/hero";
import { HeroV2 } from "@/components/experiments/hero-v2";
import { HeroV3 } from "@/components/sections/hero-v3";
import { LivingThreshold } from "@/components/experiments/living-threshold";
import { SignatureMoment } from "@/components/experiments/signature-moment";
import { SelectedWorks } from "@/components/sections/selected-works";
import { DesignPhilosophy } from "@/components/sections/design-philosophy";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import SectionTransition from "@/components/layout/section-transition";

// ═══════════════════════════════════════════════════════════
// HERO VARIANT SWITCH
// "baseline"         → current approved hero (original)
// "living-light"     → Hero V2 experimental variant
// "living-environment" → Hero V3: composed cinematic frame
//
// To revert: change HERO_VARIANT to "baseline"
// ═══════════════════════════════════════════════════════════
const HERO_VARIANT: "baseline" | "living-light" | "living-environment" = "living-light";

// ═══════════════════════════════════════════════════════════
// TRANSITION VARIANT SWITCH
// "baseline"         → current SectionTransition lines/dots
// "living-threshold" → Experiment T: cinematic threshold
// "signature-moment" → Experiment S: high-impact living threshold
//
// To revert: change TRANSITION_VARIANT to "baseline"
// ═══════════════════════════════════════════════════════════
const TRANSITION_VARIANT: "baseline" | "living-threshold" | "signature-moment" = "signature-moment";

export default function Home() {
  return (
    <>
      {HERO_VARIANT === "living-environment" ? (
        <HeroV3 />
      ) : HERO_VARIANT === "living-light" ? (
        <HeroV2 />
      ) : (
        <Hero />
      )}

      {/* ── Transition: Hero → Worlds ──
          The Core's presence migrates downward into the first world.
          Core state: presence → discovery. */}
      <div className="relative overflow-hidden core-transition" data-sonic-section="signature" aria-hidden="true">
        {TRANSITION_VARIANT === "signature-moment" ? (
          <SignatureMoment />
        ) : TRANSITION_VARIANT === "living-threshold" ? (
          <LivingThreshold />
        ) : (
          <SectionTransition kind="core-worlds" />
        )}
      </div>

      <SelectedWorks />

      {/* ── Transition: Worlds → Thinking ──
          Energy concentrates into a single point of thought.
          Core state: discovery → thinking. */}
      <div className="relative overflow-hidden core-transition" data-sonic-section="thinking" aria-hidden="true">
        <SectionTransition kind="worlds-thinking" />
      </div>

      <DesignPhilosophy />

      {/* ── Transition: Thinking → Human ──
          Distance becomes intimacy. Warmth arrives.
          Core state: thinking → human. */}
      <div className="relative overflow-hidden core-transition" data-sonic-section="person" aria-hidden="true">
        <SectionTransition kind="thinking-human" />
      </div>

      <About />

      {/* ── Transition: Human → Threshold ──
          Arrival and rest.
          Core state: human → threshold. */}
      <div className="relative overflow-hidden core-transition" data-sonic-section="contact" aria-hidden="true">
        <SectionTransition kind="human-threshold" />
      </div>

      <Contact />
    </>
  );
}
