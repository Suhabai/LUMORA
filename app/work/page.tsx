import type { Metadata } from "next";
import { WorkExperience } from "@/components/sections/work-experience";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Three worlds, each built around a different truth. OMNIA — precision and structure. NEXORA — intelligence and discovery. VELOCITY — movement and momentum. Explore how different energies shape digital experiences.",
  openGraph: {
    title: "Work — LUMORA",
    description:
      "Three worlds, each built around a different truth. Precision, intelligence, and movement — exploring how different energies shape digital experiences.",
    type: "website",
  },
};

export default function WorkPage() {
  return <WorkExperience />;
}
