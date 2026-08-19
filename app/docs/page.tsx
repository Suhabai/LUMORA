import type { Metadata } from "next";
import { DocsExperience } from "@/components/docs/docs-experience";

export const metadata: Metadata = {
  title: "The Record",
  description:
    "The LUMORA Record — the foundations of the experience, kept as an editorial document. Architecture, design language, and the living core.",
  openGraph: {
    title: "The Record — LUMORA",
    description:
      "The foundations of LUMORA, kept as a living document.",
    type: "website",
  },
};

export default function DocsPage() {
  return <DocsExperience />;
}