export const SITE_CONFIG = {
  name: "LUMORA",
  tagline: "Design System & Application Framework",
  description:
    "Cinematic future luxury design system for production web applications. Award-level typography, motion, and spacing.",
  url: "https://lumora.dev",
  version: "1.0.0",
} as const;

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#features", label: "Features" },
  { href: "#design", label: "Design" },
  { href: "#components", label: "Components" },
  { href: "#roadmap", label: "Roadmap" },
] as const;

export const FEATURES = [
  {
    number: "01",
    title: "Cinematic Typography",
    description: "Large-scale editorial type with precise tracking and weight control.",
    icon: "Type",
  },
  {
    number: "02",
    title: "Purposeful Motion",
    description: "GSAP and Framer Motion orchestrated for meaningful interactions.",
    icon: "Play",
  },
  {
    number: "03",
    title: "Dark-First Palette",
    description: "Deep backgrounds with luminous accents. Built for extended viewing.",
    icon: "Palette",
  },
  {
    number: "04",
    title: "Luxury Spacing",
    description: "Generous whitespace with fluid responsive scales.",
    icon: "Maximize",
  },
  {
    number: "05",
    title: "Component Architecture",
    description: "Reusable, composable primitives. Server-first, client when needed.",
    icon: "Layers",
  },
  {
    number: "06",
    title: "Production Ready",
    description: "TypeScript strict, accessible, performant, deployable.",
    icon: "CheckCircle",
  },
] as const;

export const DESIGN_PRINCIPLES = [
  {
    title: "Clarity Above All",
    description: "Every element must earn its presence. If it does not serve the user, remove it.",
  },
  {
    title: "Motion With Purpose",
    description: "Animation guides attention and communicates state. Never decoration.",
  },
  {
    title: "Generous Space",
    description: "Whitespace is not empty. It is the breathing room that lets content speak.",
  },
  {
    title: "Darkness as Canvas",
    description: "Dark interfaces reduce fatigue and create depth. Light is the exception, not the rule.",
  },
] as const;

export const STATS = [
  { value: 100, suffix: "%", label: "TypeScript Strict" },
  { value: 100, suffix: "", label: "Lighthouse Accessibility" },
  { value: 95, suffix: "+", label: "Lighthouse Performance" },
] as const;

export const TECH_STACK = [
  { name: "Next.js", role: "Framework" },
  { name: "React", role: "UI Library" },
  { name: "TypeScript", role: "Language" },
  { name: "Tailwind CSS", role: "Styling" },
  { name: "Framer Motion", role: "Animation" },
  { name: "GSAP", role: "Timeline Animation" },
  { name: "Lenis", role: "Smooth Scroll" },
  { name: "Lucide", role: "Icons" },
] as const;
