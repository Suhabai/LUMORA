import {
  Shield,
  Sparkles,
  Layers,
  Smile,
  Zap,
  Activity,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { SERVICES } from "@/constants";

const iconMap = {
  Shield,
  Sparkles,
  Layers,
  Smile,
  Zap,
  Activity,
} as const;

export function Services() {
  return (
    <section
      id="services"
      className="py-32 md:py-40 bg-surface border-t border-border"
      aria-labelledby="services-heading"
    >
      <div className="max-w-[1280px] mx-auto px-[var(--spacing-container)]">
        <Reveal>
          <SectionHeader
            id="services-heading"
            label="Our Services"
            title="Comprehensive, Personalized Care"
            description="From routine wellness to complex restoration, we deliver treatments tailored to your unique needs."
          />
        </Reveal>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <Reveal key={service.number} delay={i * 0.05}>
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-1">
                      <Icon size={20} className="text-accent" aria-hidden="true" />
                      <span className="text-xs font-mono text-text-muted" aria-hidden="true">
                        {service.number}
                      </span>
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
