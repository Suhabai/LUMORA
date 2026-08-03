import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export function SelectedWorks() {
  return (
    <section
      id="works"
      className="py-32 md:py-40 bg-surface"
      aria-labelledby="works-heading"
    >
      <div className="max-w-[1280px] mx-auto px-[var(--spacing-container)]">
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.14em] text-accent mb-6">
              Selected Work
            </span>
            <h2
              id="works-heading"
              className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.03em] mb-4"
            >
              Project Worlds
            </h2>
            <p className="text-text-muted text-lg max-w-[480px] mx-auto">
              Each project is a unique digital world — atmosphere, story, and experience.
            </p>
          </div>
        </Reveal>

        {/* TODO: Implement project world cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["OMNIA", "NEXORA", "VELOCITY"].map((project) => (
            <Reveal key={project}>
              <Link
                href={`/work/${project.toLowerCase()}`}
                className="group block rounded-[var(--radius-xl)] border border-border bg-elevated p-8 transition-all duration-300 hover:border-accent/30"
              >
                <h3 className="font-display text-2xl font-bold mb-2">{project}</h3>
                <p className="text-text-muted text-sm">Coming soon.</p>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 text-center">
            <Button variant="ghost" size="lg">
              <Link href="/work">View All Work</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
