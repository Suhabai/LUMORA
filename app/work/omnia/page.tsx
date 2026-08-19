import type { Metadata } from "next";
import { OmniaExperience } from "@/components/worlds/omnia-experience";

export const metadata: Metadata = {
  title: "OMNIA",
  description:
    "OMNIA — precision, structure, and silence. A digital experience world built around control. A case study in architectural restraint.",
  openGraph: {
    title: "OMNIA — LUMORA",
    description:
      "Precision, structure, and silence — a digital experience world built around control.",
    type: "website",
  },
};

export default function OmniaPage() {
  return <OmniaExperience />;
}