import type { Metadata } from "next";
import { SystemExperience } from "@/components/system/system-experience";

export const metadata: Metadata = {
  title: "The System",
  description:
    "The LUMORA design system — type, palette, and the living states of the Core. A spatial exhibition of rules and intention.",
  openGraph: {
    title: "The System — LUMORA",
    description:
      "A spatial exhibition of the LUMORA design language: type, palette, and the living states of the Core.",
    type: "website",
  },
};

export default function SystemPage() {
  return <SystemExperience />;
}