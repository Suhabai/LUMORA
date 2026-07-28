import Link from "next/link";
import { SITE_CONFIG } from "@/constants";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Design", href: "#design" },
      { label: "Components", href: "#components" },
      { label: "Roadmap", href: "#roadmap" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#docs" },
      { label: "GitHub", href: "https://github.com/lumora-os/lumora-os" },
      { label: "Changelog", href: "#changelog" },
      { label: "License", href: "#license" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-16 md:py-20" role="contentinfo">
      <div className="max-w-[1280px] mx-auto px-[var(--spacing-container)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
          <div className="col-span-2 md:col-span-2">
            <Link href="/" aria-label={`${SITE_CONFIG.name} — Home`}>
              <span className="inline-flex items-center gap-3 font-bold text-base tracking-tight mb-5">
                <span
                  className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center"
                  aria-hidden="true"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#07070a"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </span>
                LUMORA
              </span>
            </Link>
            <p className="text-[15px] leading-relaxed text-text-muted max-w-[320px] mb-6">
              {SITE_CONFIG.description}
            </p>
            <nav aria-label="Legal">
              <ul className="flex gap-6" role="list">
                <li>
                  <Link
                    href="/privacy"
                    className="text-xs font-medium text-text-muted hover:text-text transition-colors"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-xs font-medium text-text-muted hover:text-text transition-colors"
                  >
                    Terms
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-text mb-5">
                {group.title}
              </h3>
              <nav aria-label={group.title}>
                <ul className="flex flex-col gap-3" role="list">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[15px] text-text-muted hover:text-text transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="text-xs text-text-muted">MIT License</p>
        </div>
      </div>
    </footer>
  );
}
