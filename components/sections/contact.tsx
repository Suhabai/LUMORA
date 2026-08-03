import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-32 md:py-40"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-[1280px] mx-auto px-[var(--spacing-container)]">
        <Reveal>
          <div className="text-center">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.14em] text-accent mb-6">
              Connect
            </span>
            <h2
              id="contact-heading"
              className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.03em] mb-4"
            >
              Start a Conversation
            </h2>
            <p className="text-text-muted text-lg max-w-[480px] mx-auto mb-10">
              Available for select projects. Let&apos;s create something memorable together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
