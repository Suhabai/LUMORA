import type { Metadata } from "next";
import { AboutExperience } from "@/components/sections/about-experience";

export const metadata: Metadata = {
  title: "About",
  description:
    "LUMORA — a digital studio focused on cinematic web experiences. Experience should feel alive. One studio, one vision, one connected path from idea to design to build.",
  openGraph: {
    title: "About — LUMORA",
    description:
      "A digital studio focused on cinematic web experiences. Experience should feel alive.",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutExperience />;
}
