import { Reveal } from "@/components/ui/reveal";

export function About() {
  return (
    <section
      id="about"
      className="relative py-36 md:py-44 section-divider-top"
      aria-labelledby="about-heading"
    >
      {/* Warmer atmosphere — connection, not technology */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(138,46,255,0.02)_0%,transparent_65%)]" />
      </div>

      <div className="max-w-[1280px] mx-auto px-[var(--spacing-container)] relative z-10">
        <div className="max-w-[680px]">
          <Reveal variant="deepReveal">
            <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.16em] text-accent mb-5">
              About
            </span>
          </Reveal>

          <Reveal variant="deepReveal" delay={0.08}>
            <h2
              id="about-heading"
              className="font-display text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-[-0.03em] leading-[1.1] mb-8"
            >
              Sohrab
            </h2>
          </Reveal>

          <Reveal variant="deepReveal" delay={0.16}>
            <p className="text-text text-[16px] leading-[1.75] mb-6 max-w-[520px]">
              I believe the best digital interfaces don&apos;t just work — they resonate.
              A carefully timed animation, a subtle shift in light, the right amount of silence
              before a reveal. These are the details that separate a website from an experience.
            </p>
          </Reveal>

          <Reveal variant="deepReveal" delay={0.24}>
            <p className="text-text-muted text-[15px] leading-[1.75] mb-6 max-w-[520px]">
              LUMORA is where I explore that thinking. Every decision here — from the breathing
              rhythm of the Core to the weight of a heading — was deliberate. Not because perfection
              matters, but because respect for the person viewing this does.
            </p>
          </Reveal>

          <Reveal variant="deepReveal" delay={0.32}>
            <p className="text-text-muted text-[15px] leading-[1.75] max-w-[520px]">
              I design and build experiences where motion, atmosphere, and intention come together.
              Not to impress, but to connect.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
