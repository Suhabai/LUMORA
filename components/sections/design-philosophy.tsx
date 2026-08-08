import { Reveal } from "@/components/ui/reveal";

const PRINCIPLES = [
  {
    number: "01",
    title: "Identity Over Trends",
    description:
      "Trends fade. A recognizable language endures. The goal is not to look different for its own sake — it is to build a visual and emotional system that becomes unmistakably yours.",
  },
  {
    number: "02",
    title: "Meaning Over Decoration",
    description:
      "Every gradient, every transition, every pixel of spacing should answer a question. If it does not guide understanding, deepen emotion, or clarify interaction — it does not belong.",
  },
  {
    number: "03",
    title: "Experience Over Features",
    description:
      "A hundred features cannot compensate for a single thoughtless interaction. The measure of design is not what is included, but what the person feels when everything works in silence.",
  },
  {
    number: "04",
    title: "Consistency Creates Identity",
    description:
      "Recognition is built through repetition of meaningful patterns. When rhythm, tone, and behavior remain consistent across every touchpoint, the experience becomes a world — not a collection of pages.",
  },
  {
    number: "05",
    title: "Simplicity Creates Luxury",
    description:
      "The most refined experiences feel inevitable. Not because nothing was added, but because everything that remained was considered. Simplicity is not the absence of effort — it is the result of it.",
  },
];

export function DesignPhilosophy() {
  return (
    <section
      id="philosophy"
      className="relative py-36 md:py-48 section-divider-top"
      aria-labelledby="philosophy-heading"
    >
      {/* Subtle atmospheric presence */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(138,46,255,0.015)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-[1280px] mx-auto px-[var(--spacing-container)] relative z-10">
        {/* ── Section Introduction ──
            Establishes the worldview, not just the heading. */}
        <Reveal variant="deepReveal">
          <div className="mb-20 md:mb-28 max-w-[560px]">
            <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.16em] text-accent mb-5">
              Philosophy
            </span>
            <h2
              id="philosophy-heading"
              className="font-display text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-[-0.03em] leading-[1.1]"
            >
              Less Decoration.
              <br />
              More Intention.
            </h2>
          </div>
        </Reveal>

        {/* ── Principles ──
            Presented as a quiet narrative, not a feature grid.
            Each principle is a moment of reflection. */}
        <div className="max-w-[860px]">
          {PRINCIPLES.map((principle, i) => (
            <Reveal key={principle.number} variant="deepReveal" delay={i * 0.08}>
              <div className="flex items-start gap-6 md:gap-10 py-8 md:py-10 border-t border-border/40 first:border-t-0">
                <span className="text-[10px] font-semibold text-accent/50 tracking-[0.16em] mt-1 shrink-0">
                  {principle.number}
                </span>
                <div>
                  <h3 className="font-display text-[clamp(1.2rem,2.2vw,1.65rem)] font-semibold tracking-[-0.02em] mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-text-muted text-[14px] leading-[1.7]">
                    {principle.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
