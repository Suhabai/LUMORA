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
              label="Get Started"
              title="Build Something Beautiful"
              description="LUMORA gives you the foundation. You bring the vision."
              centered
            />
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                View Documentation
              </Button>
              <Button variant="ghost" size="lg">
                <a href="https://github.com/lumora-os/lumora-os">
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
