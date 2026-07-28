import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";

const useCases = [
  {
    title: "Consumer Apps",
    description: "Products that compete on experience and visual quality.",
  },
  {
    title: "Premium Brands",
    description: "Interfaces where design signals trust and value.",
  },
  {
    title: "Creative Tools",
    description: "Applications where the interface inspires the work.",
  },
  {
    title: "Marketing Sites",
    description: "Pages where every pixel communicates brand value.",
  },
];

export function TrustBar() {
  return (
    <section className="py-32 border-t border-b border-border" aria-labelledby="usecases-heading">
      <div className="max-w-[1280px] mx-auto px-[var(--spacing-container)]">
        <Reveal>
          <SectionHeader
            id="usecases-heading"
            label="Use Cases"
            title="Built For"
            description="LUMORA is designed for applications that need to feel different."
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, i) => (
            <Reveal key={useCase.title} delay={i * 0.05}>
              <Card>
                <CardHeader>
                  <CardTitle>{useCase.title}</CardTitle>
                  <CardDescription>{useCase.description}</CardDescription>
                </CardHeader>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
