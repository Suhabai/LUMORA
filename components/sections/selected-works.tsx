import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import SelectedWorlds from "@/components/worlds/SelectedWorlds";

export function SelectedWorks() {
  return (
    <section
      id="works"
      className="relative py-36 md:py-48 section-divider-top"
      aria-labelledby="works-heading"
    >
      {/* Atmospheric depth — transition from Hero */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(138,46,255,0.02)_0%,transparent_60%)]" />
      </div>

      <div className="max-w-[1280px] mx-auto px-[var(--spacing-container)] relative z-10">
        <Reveal variant="deepReveal">
          <div className="mb-16 md:mb-20 max-w-[520px]">
            <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.16em] text-accent mb-5">
              Selected Work
            </span>
            <h2
              id="works-heading"
              className="font-display text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-[-0.03em] leading-[1.1]"
            >
              Project Worlds
            </h2>
            <p className="text-text-muted text-[15px] leading-[1.6] mt-4 max-w-[400px]">
              Each project is a unique digital world — built with atmosphere, story, and intention.
            </p>
          </div>
        </Reveal>

        <SelectedWorlds />

        <Reveal variant="deepReveal" delay={0.2}>
          <div className="mt-14">
            <Link
              href="/work"
              className="inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-text-muted hover:text-accent transition-colors duration-300 group"
            >
              <span>View All Work</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
