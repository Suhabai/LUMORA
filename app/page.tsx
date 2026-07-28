import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Technology } from "@/components/sections/technology";
import { Team } from "@/components/sections/team";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Technology />
      <Team />
      <Testimonials />
      <CTA />
    </>
  );
}
