import type { Metadata } from "next";
import { NexoraExperience } from "@/components/worlds/nexora-experience";

export const metadata: Metadata = {
  title: "NEXORA",
  description:
    "NEXORA — an intelligent system shaped by discovery. A digital experience world built on depth and layering. A case study in intelligent restraint.",
  openGraph: {
    title: "NEXORA — LUMORA",
    description:
      "Intelligence, discovery, and depth — a digital experience world built on layered calm.",
    type: "website",
  },
};

export default function NexoraPage() {
  return <NexoraExperience />;
}
