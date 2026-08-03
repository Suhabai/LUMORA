import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";

export function CTA() {
  return (
    <section
      id="contact"
      className="py-32 md:py-40 bg-surface border-t border-border"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-[1280px] mx-auto px-[var(--spacing-container)]">
        <Reveal>
          <div className="text-center">
            <SectionHeader
              id="cta-heading"
              label="Get in Touch"
              title="Begin Your Journey"
              description="Let's create something memorable together."
              centered
            />
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                <Link href="/contact">Start a Project</Link>
              </Button>
              <Button variant="ghost" size="lg">
                <Link href="/work">View Work</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
