import Link from "next/link";
import { SITE_CONFIG } from "@/constants";

export function Footer() {
  return (
    <footer className="relative border-t border-border/30 py-16 md:py-20" role="contentinfo">
      <div className="max-w-[1280px] mx-auto px-[var(--spacing-container)]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Identity */}
          <div>
            <Link href="/" aria-label={`${SITE_CONFIG.name} — Home`}>
              <span className="inline-flex items-center gap-2 mb-3">
                {/* Approved luminous identity mark */}
                <img
                  src="/brand/lumora-mark-luminous.webp"
                  alt=""
                  className="w-6 h-6 object-contain"
                  aria-hidden="true"
                />
                {/* Quiet text wordmark */}
                <span className="whitespace-nowrap font-sans text-[18px] md:text-[22px] font-light leading-none tracking-[0.32em] text-text">
                  LUMORA
                </span>
              </span>
            </Link>
            <p className="text-[13px] text-text-muted/70 max-w-[280px]">
              A cinematic digital experience.
            </p>
          </div>

          {/* Minimal links */}
          <div className="flex items-center gap-6">
            <Link
              href="/#works"
              className="text-[12px] font-medium text-text-muted/60 hover:text-text-muted transition-colors duration-300"
            >
              Worlds
            </Link>
            <Link
              href="/#about"
              className="text-[12px] font-medium text-text-muted/60 hover:text-text-muted transition-colors duration-300"
            >
              Person
            </Link>
            <Link
              href="/#contact"
              className="text-[12px] font-medium text-text-muted/60 hover:text-text-muted transition-colors duration-300"
            >
              Connect
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[11px] text-text-muted/40">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}
          </p>
          <p className="text-[11px] text-text-muted/40">
            Designed &amp; built by Sohrab
          </p>
        </div>
      </div>
    </footer>
  );
}
