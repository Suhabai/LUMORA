import { Reveal } from "@/components/ui/reveal";

export function Process() {
  return (
    <section
      id="process"
      className="relative py-32 md:py-40 bg-surface section-divider-top"
      aria-labelledby="process-heading"
    >
      <div className="max-w-[1280px] mx-auto px-[var(--spacing-container)]">
        <Reveal variant="deepReveal">
          <div className="text-center max-w-[560px] mx-auto">
            <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.16em] text-accent mb-6">
              Process
            </span>
            <h2
              id="process-heading"
              className="font-display text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-[-0.03em] mb-5"
            >
              How I Work
            </h2>
            <p className="text-text-muted text-[15px] leading-[1.7]">
              Understand. Analyze. Plan. Validate. Implement. Review.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
