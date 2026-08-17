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
              <span className="inline-flex items-center gap-3 font-bold text-base tracking-tight mb-3">
                <span
                  className="w-7 h-7 rounded-lg bg-accent/10 border border-accent/15 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-accent)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </span>
                LUMORA
              </span>
            </Link>
            <p className="text-[13px] text-text-muted/50 max-w-[280px]">
              A cinematic digital experience.
            </p>
          </div>

          {/* Minimal links */}
          <div className="flex items-center gap-6">
            <a
              href="#works"
              className="text-[12px] font-medium text-text-muted/40 hover:text-text-muted transition-colors duration-300"
            >
              Worlds
            </a>
            <a
              href="#about"
              className="text-[12px] font-medium text-text-muted/40 hover:text-text-muted transition-colors duration-300"
            >
              Person
            </a>
            <a
              href="#contact"
              className="text-[12px] font-medium text-text-muted/40 hover:text-text-muted transition-colors duration-300"
            >
              Connect
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[11px] text-text-muted/30">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}
          </p>
          <p className="text-[11px] text-text-muted/30">
            Designed &amp; built by Sohrab
          </p>
        </div>
      </div>
    </footer>
  );
}
