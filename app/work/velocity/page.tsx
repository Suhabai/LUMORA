import type { Metadata } from "next";
import { VelocityExperience } from "@/components/worlds/velocity-experience";

export const metadata: Metadata = {
  title: "VELOCITY",
  description:
    "VELOCITY — movement, direction, and momentum. A digital experience world built around kinetic flow. A case study in directed energy.",
  openGraph: {
    title: "VELOCITY — LUMORA",
    description:
      "Movement, direction, and momentum — a digital experience world built on directed energy.",
    type: "website",
  },
};

export default function VelocityPage() {
  return <VelocityExperience />;
}