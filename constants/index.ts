export const SITE_CONFIG = {
  name: "LUMORA",
  tagline: "A Cinematic Digital Experience",
  description:
    "A personal portfolio ecosystem built with cinematic storytelling, premium identity, and intentional design.",
  url: "https://lumora.dev",
  version: "1.0.0",
} as const;

export const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/system", label: "System" },
  { href: "/about", label: "About" },
  { href: "/docs", label: "Docs" },
] as const;

export const STATS = [
  { value: 100, suffix: "%", label: "TypeScript Strict" },
] as const;
