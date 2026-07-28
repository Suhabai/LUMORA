import { Brain, ScanLine, Zap } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { TECHNOLOGY_FEATURES } from "@/constants";

const iconMap = {
  Brain,
  ScanLine,
  Zap,
} as const;

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
              label="Technology"
              title="Precision Meets Innovation"
              description="We invest in the latest dental technology to ensure faster, safer, and more accurate treatments."
            />
          </Reveal>

          <div className="flex flex-col gap-6">
            {TECHNOLOGY_FEATURES.map((feature, i) => {
              const Icon = iconMap[feature.icon];
              return (
                <Reveal key={feature.title} delay={i * 0.1}>
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <Icon size={20} className="text-accent" aria-hidden="true" />
                        <CardTitle>{feature.title}</CardTitle>
                      </div>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
