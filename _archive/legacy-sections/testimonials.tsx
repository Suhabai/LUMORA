import { Card, CardHeader, CardDescription } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";

const quotes = [
  {
    quote: "LUMORA transformed how we think about design systems. The attention to detail in every token and component is remarkable.",
    name: "Design Team",
    initials: "DT",
  },
  {
    quote: "Finally, a design system that understands dark mode is not an afterthought. It's the foundation.",
    name: "Engineering Lead",
    initials: "EL",
  },
  {
    quote: "The motion system alone saved us weeks of development. Every animation feels intentional and premium.",
    name: "Product Manager",
    initials: "PM",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-32 md:py-40 border-t border-border"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-[1280px] mx-auto px-[var(--spacing-container)]">
        <Reveal>
          <SectionHeader
            id="testimonials-heading"
            label="Testimonials"
            title="Trusted by Teams"
          />
        </Reveal>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
          {quotes.map((quote) => (
            <Reveal key={quote.name}>
              <Card>
                <CardHeader>
                  <CardDescription className="italic">
                    &ldquo;{quote.quote}&rdquo;
                  </CardDescription>
                  <div className="flex items-center gap-3 mt-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                      <span className="text-xs font-bold text-accent" aria-hidden="true">
                        {quote.initials}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-text">{quote.name}</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
