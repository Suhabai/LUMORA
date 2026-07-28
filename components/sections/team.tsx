import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { TECH_STACK } from "@/constants";

export function Team() {
  return (
    <section
      id="team"
      className="py-32 md:py-40 bg-surface border-t border-border"
      aria-labelledby="team-heading"
    >
      <div className="max-w-[1280px] mx-auto px-[var(--spacing-container)]">
        <Reveal>
          <SectionHeader
            id="team-heading"
            label="Tech Stack"
            title="Built With"
            description="Modern technologies chosen for performance, developer experience, and maintainability."
          />
        </Reveal>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_STACK.map((tech, i) => (
            <Reveal key={tech.name} delay={i * 0.08}>
              <Card>
                <CardHeader>
                  <CardTitle>{tech.name}</CardTitle>
                  <CardDescription>{tech.role}</CardDescription>
                </CardHeader>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
