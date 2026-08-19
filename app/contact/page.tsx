import type { Metadata } from "next";
import { ContactExperience } from "@/components/contact/contact-experience";

export const metadata: Metadata = {
  title: "The Threshold",
  description:
    "The work begins with a conversation. A quiet, direct way to reach Sohrab and LUMORA.",
  openGraph: {
    title: "The Threshold — LUMORA",
    description:
      "The work begins with a conversation. An opening, not a form.",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactExperience />;
}