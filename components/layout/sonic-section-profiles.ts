/** Temporary production-page profiles. Final D.2 scenes can replace these keys. */
export type SonicSection = "hero" | "signature" | "work" | "thinking" | "person" | "contact";

export type SectionProfile = {
  energy: number;
  bloom: number;
  pressure: number;
  core: number;
  neutral: number;
  atmosphere: number;
  coverage: number;
};

export const SONIC_SECTION_EVENT = "lumora:sonic-section";

const PROFILES: Record<SonicSection, SectionProfile> = {
  hero:      { energy: 1,    bloom: 1,    pressure: 1,    core: 1,    neutral: 1,    atmosphere: 1,    coverage: 1 },
  signature: { energy: 0.72, bloom: 0.58, pressure: 0.50, core: 0.70, neutral: 0.82, atmosphere: 0.78, coverage: 0.96 },
  work:      { energy: 0.72, bloom: 0.66, pressure: 0.60, core: 0.75, neutral: 0.88, atmosphere: 0.76, coverage: 0.94 },
  thinking:  { energy: 0.43, bloom: 0.33, pressure: 0.28, core: 0.46, neutral: 0.61, atmosphere: 0.52, coverage: 0.76 },
  person:    { energy: 0.28, bloom: 0.21, pressure: 0.16, core: 0.32, neutral: 0.48, atmosphere: 0.32, coverage: 0.61 },
  contact:   { energy: 0.19, bloom: 0.15, pressure: 0.10, core: 0.22, neutral: 0.39, atmosphere: 0.22, coverage: 0.57 },
};

const SECTION_BY_ID: Record<string, SonicSection> = {
  hero: "hero",
  works: "work",
  philosophy: "thinking",
  about: "person",
  contact: "contact",
};

export function resolveSectionProfile(section: SonicSection, mobile: boolean): SectionProfile {
  const profile = PROFILES[section];
  if (!mobile) return profile;
  const soften = (value: number) => 1 - (1 - value) * 0.6;
  return {
    energy: soften(profile.energy),
    bloom: soften(profile.bloom),
    pressure: soften(profile.pressure),
    core: soften(profile.core) * 0.85,
    neutral: soften(profile.neutral),
    atmosphere: profile.atmosphere,
    coverage: profile.coverage,
  };
}

/** Reads the current homepage composition; no observer or scroll listener lives here. */
export function readCurrentSonicSection(): SonicSection {
  if (typeof document === "undefined" || window.location.pathname !== "/") return "hero";
  const anchor = window.innerHeight * 0.52;
  let current: SonicSection = "hero";
  const sections = document.querySelectorAll<HTMLElement>("main#hero > section, main#hero > [data-sonic-section]");
  for (const section of sections) {
    const id = section.dataset.sonicSection || section.id;
    const profile = SECTION_BY_ID[id] || (id in PROFILES ? id as SonicSection : null);
    if (!profile) continue;
    const rect = section.getBoundingClientRect();
    if (rect.top <= anchor) current = profile;
    if (rect.top <= anchor && rect.bottom > anchor) return profile;
  }
  return current;
}
