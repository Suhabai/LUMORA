import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative py-36 md:py-44"
      aria-labelledby="contact-heading"
    >
      {/* Warmer atmosphere — calm, personal */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(138,46,255,0.025)_0%,transparent_65%)]" />
      </div>

      <div className="max-w-[1280px] mx-auto px-[var(--spacing-container)] relative z-10">
        <div className="text-center">
          <Reveal variant="slowFade">
            <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.16em] text-accent mb-6">
              Connect
            </span>
          </Reveal>

          <Reveal variant="deepReveal" delay={0.08}>
            <h2
              id="contact-heading"
              className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.03em] mb-5"
            >
              Start a Conversation
            </h2>
          </Reveal>

          <Reveal variant="deepReveal" delay={0.16}>
            <p className="text-text-muted text-[16px] leading-[1.7] max-w-[440px] mx-auto mb-10">
              Available for select projects. Let&apos;s create something memorable together.
            </p>
          </Reveal>

          <Reveal variant="deepReveal" delay={0.24}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                <Link href="/contact">Start a Project</Link>
              </Button>
              <Button variant="ghost" size="lg">
                <Link href="/work">View Work</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
