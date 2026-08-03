import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with LUMORA.",
};

export default function ContactPage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-[var(--spacing-container)]">
      <div className="text-center">
        <h1 className="text-[clamp(2rem,5vw,4rem)] font-bold tracking-[-0.03em] mb-4">
          Start a Project
        </h1>
        <p className="text-text-muted text-lg">Coming soon.</p>
      </div>
    </section>
  );
}
