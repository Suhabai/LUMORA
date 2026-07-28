"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/constants";

export function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 40, clipPath: "inset(100% 0 0 0)" },
      { opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)", duration: 1.2 }
    )
      .fromTo(
        taglineRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.6"
      )
      .fromTo(
        descriptionRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.4"
      )
      .fromTo(
        ctasRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.4"
      );
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-[var(--spacing-container)]"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--accent)_0%,_transparent_60%)] opacity-15 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[160px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-[820px] text-center relative z-10">
        <div ref={taglineRef} className="opacity-0">
          <span className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-accent/20 bg-accent-soft text-accent text-[11px] font-semibold uppercase tracking-[0.14em] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" aria-hidden="true" />
            Accepting New Patients — Limited Spots Available
          </span>
        </div>

        <h1
          ref={headingRef}
          id="hero-heading"
          className="text-[clamp(3rem,8vw,6.5rem)] font-bold leading-[0.94] tracking-[-0.04em] mb-6 opacity-0"
        >
          The Future
          <br />
          of <span className="text-accent">Dentistry</span>
        </h1>

        <p
          ref={descriptionRef}
          className="text-lg leading-[1.7] text-text-muted max-w-[520px] mx-auto mb-10 opacity-0"
        >
          {SITE_CONFIG.description}
        </p>

        <div ref={ctasRef} className="flex flex-col sm:flex-row gap-4 justify-center opacity-0">
          <Button variant="primary" size="lg">
            Book Consultation
          </Button>
          <Button variant="ghost" size="lg">
            Our Services
          </Button>
        </div>

        <div className="mt-20 flex flex-col items-center gap-2">
          <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-text-muted">
            Explore
          </span>
          <ArrowDown size={16} className="text-text-muted animate-bounce" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
