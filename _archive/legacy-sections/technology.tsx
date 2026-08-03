import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { DESIGN_PRINCIPLES } from "@/constants";

export function Technology() {
  return (
    <section
      id="technology"
      className="py-32 md:py-40 border-t border-border"
      aria-labelledby="technology-heading"
    >
      <div className="max-w-[1280px] mx-auto px-[var(--spacing-container)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <Reveal>
            <SectionHeader
              id="technology-heading"
              label="Design Principles"
              title="Built on Beliefs"
              description="Every decision in LUMORA is guided by these core principles. They inform the design tokens, component architecture, and motion system."
            />
          </Reveal>

          <div className="flex flex-col gap-6">
            {DESIGN_PRINCIPLES.map((principle, i) => (
              <Reveal key={principle.title} delay={i * 0.1}>
                <Card>
                  <CardHeader>
                    <CardTitle>{principle.title}</CardTitle>
                    <CardDescription>{principle.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
