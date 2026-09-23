"use client";

import Link from "next/link";

export default function ErrorBoundary({ reset }: { reset: () => void }) {
  return (
    <section
      className="relative flex min-h-[70svh] items-center justify-center overflow-hidden px-[var(--spacing-container)] py-24 text-center"
      aria-labelledby="route-error-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_46%_35%_at_50%_45%,rgba(138,46,255,0.12),transparent_72%)]"
        aria-hidden="true"
      />
      <div className="relative max-w-[580px]">
        <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-accent/70">
          A quiet interruption
        </p>
        <h1
          id="route-error-heading"
          className="mt-8 font-display text-[clamp(2.4rem,7vw,5rem)] font-light leading-[1.03] tracking-[-0.025em] text-text/95"
        >
          The experience needs a moment.
        </h1>
        <p className="mx-auto mt-7 max-w-[400px] text-[15px] leading-[1.8] text-text-muted">
          You can try this view again, or return to the beginning.
        </p>
        <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={reset}
            className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-text-muted transition-colors duration-300 hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Try again
          </button>
          <Link
            href="/"
            className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-accent/85 transition-colors duration-300 hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Return home
          </Link>
        </div>
      </div>
    </section>
  );
}
