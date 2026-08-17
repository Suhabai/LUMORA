import { Hero } from "@/components/sections/hero";
import { SelectedWorks } from "@/components/sections/selected-works";
import { DesignPhilosophy } from "@/components/sections/design-philosophy";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import SectionTransition from "@/components/layout/section-transition";

export default function Home() {
  return (
    <>
      <Hero />

      {/* ── Transition: Hero → Worlds ──
          The Core's presence migrates downward into the first world.
          Core state: presence → discovery. */}
      <div className="relative overflow-hidden core-transition" aria-hidden="true">
        <SectionTransition kind="core-worlds" />
      </div>

      <SelectedWorks />

      {/* ── Transition: Worlds → Thinking ──
          Energy concentrates into a single point of thought.
          Core state: discovery → thinking. */}
      <div className="relative overflow-hidden core-transition" aria-hidden="true">
        <SectionTransition kind="worlds-thinking" />
      </div>

      <DesignPhilosophy />

      {/* ── Transition: Thinking → Human ──
          Distance becomes intimacy. Warmth arrives.
          Core state: thinking → human. */}
      <div className="relative overflow-hidden core-transition" aria-hidden="true">
        <SectionTransition kind="thinking-human" />
      </div>

      <About />

      {/* ── Transition: Human → Threshold ──
          Arrival and rest.
          Core state: human → threshold. */}
      <div className="relative overflow-hidden core-transition" aria-hidden="true">
        <SectionTransition kind="human-threshold" />
      </div>

      <Contact />
    </>
  );
}
