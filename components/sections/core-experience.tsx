import { Reveal } from "@/components/ui/reveal";

export function CoreExperience() {
  return (
    <section
      id="core-experience"
      className="relative py-28 md:py-36"
      aria-labelledby="core-heading"
    >
      <div className="max-w-[1280px] mx-auto px-[var(--spacing-container)]">
        <Reveal variant="slowFade">
          <div className="text-center max-w-[540px] mx-auto">
            <p
              id="core-heading"
              className="font-display text-[clamp(1.4rem,3.2vw,2.1rem)] font-light leading-[1.35] tracking-[-0.01em] text-text-muted"
            >
              A calm, intentional presence that exists at the center of every experience.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
