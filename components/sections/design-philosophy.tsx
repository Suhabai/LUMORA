import { Reveal } from "@/components/ui/reveal";

const PRINCIPLES = [
  {
    number: "01",
    title: "Identity Over Trends",
    description: "Build a recognizable language, not temporary styles.",
  },
  {
    number: "02",
    title: "Meaning Over Decoration",
    description: "Every element must have purpose.",
  },
  {
    number: "03",
    title: "Experience Over Features",
    description: "Quality is more important than quantity.",
  },
  {
    number: "04",
    title: "Consistency Creates Identity",
    description: "Repeated meaningful patterns build recognition.",
  },
  {
    number: "05",
    title: "Simplicity Creates Luxury",
    description: "Controlled simplicity is the ultimate premium.",
  },
];

export function DesignPhilosophy() {
  return (
    <section
      id="philosophy"
      className="py-32 md:py-40"
      aria-labelledby="philosophy-heading"
    >
      <div className="max-w-[1280px] mx-auto px-[var(--spacing-container)]">
        <Reveal>
          <div className="text-center mb-20">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.14em] text-accent mb-6">
              Philosophy
            </span>
            <h2
              id="philosophy-heading"
              className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.03em] mb-4"
            >
              Less Decoration. More Intention.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {PRINCIPLES.map((principle, i) => (
            <Reveal key={principle.number} delay={i * 0.1}>
              <div className="text-center md:text-left">
                <span className="text-[11px] font-semibold text-accent tracking-[0.14em]">
                  {principle.number}
                </span>
                <h3 className="text-lg font-bold mt-2 mb-2">{principle.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
