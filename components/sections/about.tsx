import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";

export function About() {
  return (
    <section id="about" className="py-32 md:py-40" aria-labelledby="about-heading">
      <div className="max-w-[1280px] mx-auto px-[var(--spacing-container)]">
        <Reveal>
          <SectionHeader
            id="about-heading"
            label="About"
            title="Independent Designer & Creative Developer"
            description="I design and build digital experiences where motion, atmosphere, and intention come together. Every project is crafted to feel alive."
          />
        </Reveal>
      </div>
    </section>
  );
}
