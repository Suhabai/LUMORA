import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";

const useCases = [
  {
    title: "Creative Portfolios",
    description: "Experiences that showcase work with cinematic presence.",
  },
  {
    title: "Personal Brands",
    description: "Interfaces where design communicates identity and values.",
  },
  {
    title: "Project Showcases",
    description: "Stories told through intentional design and motion.",
  },
  {
    title: "Digital Experiences",
    description: "Pages where every pixel serves a purpose.",
  },
];

export function TrustBar() {
  return (
    <section className="py-32 border-t border-b border-border" aria-labelledby="usecases-heading">
      <div className="max-w-[1280px] mx-auto px-[var(--spacing-container)]">
        <Reveal>
          <SectionHeader
            id="usecases-heading"
            label="Purpose"
            title="Built For"
            description="LUMORA is designed for experiences that need to feel different."
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
