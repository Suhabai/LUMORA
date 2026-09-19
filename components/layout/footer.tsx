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
                {/* M Core — always visible */}
                <svg
                  viewBox="0 0 1000 1000"
                  fill="var(--color-text)"
                  className="w-6 h-6"
                  aria-hidden="true"
                >
                  <path d="M258,50L328,50L328,950L258,950ZM664,50L734,50L734,922L656,950L664,950ZM328,50L540,411L664,50Z" />
                </svg>
                {/* Wordmark — 28px desktop, 24px mobile */}
                <svg
                  viewBox="0 0 3600 1000"
                  fill="var(--color-text)"
                  className="h-6 md:h-7 w-auto"
                  aria-hidden="true"
                >
                  <path d="M80,100 L150,100 L150,730 L338,730 L338,800 L80,800 Z M610,100 L680,100 L680,700 Q680,795 775,795 L935,795 Q1035,795 1035,700 L1035,100 L1105,100 L1105,700 Q1105,830 1010,830 L775,830 Q610,830 610,700 Z M1130,100 L1200,100 L1200,800 L1130,800 Z M1200,100 L1209,100 L1405,370 L1385,370 Z M1405,370 L1428,370 L1598,100 L1528,100 Z M1528,100 L1598,100 L1598,790 L1524,800 L1528,800 Z M2040,100 A227,307 0 1,1 2040,800 A227,307 0 1,1 2040,100 Z M2040,271 A193,263 0 1,0 2040,629 A193,263 0 1,0 2040,271 Z M2330,100 L2400,100 L2400,800 L2330,800 Z M2400,100 L2840,100 A157,167 0 0,1 2585,478 L2400,478 Z M2435,135 L2775,135 A122,132 0 0,1 2580,442 L2435,442 Z M2400,478 L2435,478 L2690,800 L2390,800 Z M3136,100 L3144,100 L2994,800 L2934,800 Z M3136,100 L3144,100 L3346,800 L3286,800 Z M3043,530 L3232,530 L3232,580 L3043,580 Z" />
                </svg>
              </span>
            </Link>
            <p className="text-[13px] text-text-muted/70 max-w-[280px]">
              A cinematic digital experience.
            </p>
          </div>

          {/* Minimal links */}
          <div className="flex items-center gap-6">
            <a
              href="#works"
              className="text-[12px] font-medium text-text-muted/60 hover:text-text-muted transition-colors duration-300"
            >
              Worlds
            </a>
            <a
              href="#about"
              className="text-[12px] font-medium text-text-muted/60 hover:text-text-muted transition-colors duration-300"
            >
              Person
            </a>
            <a
              href="#contact"
              className="text-[12px] font-medium text-text-muted/60 hover:text-text-muted transition-colors duration-300"
            >
              Connect
            </a>
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
