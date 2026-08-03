import { Reveal } from "@/components/ui/reveal";

export function CoreExperience() {
  return (
    <section
      id="core-experience"
      className="py-32 md:py-40"
      aria-labelledby="core-heading"
    >
      <div className="max-w-[1280px] mx-auto px-[var(--spacing-container)]">
        <Reveal>
          <div className="text-center">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.14em] text-accent mb-6">
              The Living Core
            </span>
            <h2
              id="core-heading"
              className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.03em] mb-4"
            >
              The System Is Alive
            </h2>
            <p className="text-text-muted text-lg max-w-[480px] mx-auto">
              {/* TODO: Implement Living Core — the emotional center of LUMORA */}
              A calm, intentional presence that responds to your journey.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
