import { Hero } from "@/components/sections/hero";
import { CoreExperience } from "@/components/sections/core-experience";
import { SelectedWorks } from "@/components/sections/selected-works";
import { DesignPhilosophy } from "@/components/sections/design-philosophy";
import { Process } from "@/components/sections/process";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <CoreExperience />
      <SelectedWorks />
      <DesignPhilosophy />
      <Process />
      <About />
      <Contact />
    </>
  );
}
