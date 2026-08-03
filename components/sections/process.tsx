import { Reveal } from "@/components/ui/reveal";

export function Process() {
  return (
    <section
      id="process"
      className="py-32 md:py-40 bg-surface"
      aria-labelledby="process-heading"
    >
      <div className="max-w-[1280px] mx-auto px-[var(--spacing-container)]">
        <Reveal>
          <div className="text-center">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.14em] text-accent mb-6">
              Process
            </span>
            <h2
              id="process-heading"
              className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.03em] mb-4"
            >
              How I Work
            </h2>
            <p className="text-text-muted text-lg max-w-[480px] mx-auto">
              {/* TODO: Implement process section */}
              Understand. Analyze. Plan. Validate. Implement. Review.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
