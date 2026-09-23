import Link from "next/link";

export default function NotFound() {
  return (
    <section
      className="relative flex min-h-[70svh] items-center justify-center overflow-hidden px-[var(--spacing-container)] py-24 text-center"
      aria-labelledby="not-found-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_46%_35%_at_50%_45%,rgba(138,46,255,0.12),transparent_72%)]"
        aria-hidden="true"
      />
      <div className="relative max-w-[580px]">
        <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-accent/70">
          404 — Unmapped threshold
        </p>
        <h1
          id="not-found-heading"
          className="mt-8 font-display text-[clamp(2.4rem,7vw,5rem)] font-light leading-[1.03] tracking-[-0.025em] text-text/95"
        >
          This path has gone quiet.
        </h1>
        <p className="mx-auto mt-7 max-w-[400px] text-[15px] leading-[1.8] text-text-muted">
          The page you are looking for is not part of the current LUMORA experience.
        </p>
        <Link
          href="/"
          className="group mt-12 inline-flex flex-col items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-text-muted transition-colors duration-300 group-hover:text-text">
            Return to the beginning
          </span>
          <span className="h-px w-20 bg-accent/45 transition-all duration-300 group-hover:w-28" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
