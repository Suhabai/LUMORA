import { Star } from "lucide-react";
import { Card, CardHeader, CardDescription } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { TESTIMONIALS } from "@/constants";

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
            title="What Our Patients Say"
          />
        </Reveal>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <Reveal key={testimonial.name}>
              <Card>
                <CardHeader>
                  <div className="flex gap-1 mb-2" aria-label={`${testimonial.rating} out of 5 stars`}>
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={14} className="fill-accent text-accent" aria-hidden="true" />
                    ))}
                  </div>
                  <CardDescription className="italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </CardDescription>
                  <div className="flex items-center gap-3 mt-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                      <span className="text-xs font-bold text-accent" aria-hidden="true">
                        {testimonial.initials}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-text">{testimonial.name}</p>
                      <p className="text-xs text-text-muted">Patient since {testimonial.since}</p>
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
