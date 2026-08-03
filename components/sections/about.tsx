import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { Counter } from "@/components/ui/counter";
import { STATS } from "@/constants";

export function About() {
  return (
    <section id="about" className="py-32 md:py-40" aria-labelledby="about-heading">
      <div className="max-w-[1280px] mx-auto px-[var(--spacing-container)]">
        <Reveal>
          <SectionHeader
            id="about-heading"
            label="About"
            title="Built With Intention"
            description="LUMORA is a personal portfolio ecosystem where every component, token, and motion is crafted to create a memorable digital experience."
          />
        </Reveal>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <Counter target={stat.value} suffix={stat.suffix} />
                <p className="text-sm text-text-muted mt-3">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
