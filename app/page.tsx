import { HeroSection } from "./sections/hero";
import { ServicesSection } from "./sections/services";
// import { PricingSection } from "./sections/expertise";
import { TestimonialsSection } from "./sections/testimonials";
import { PartnersSection } from "./sections/partners";
import { CallToActionSection } from "./sections/cta";
import { AboutSection } from "./sections/about";
import { Reveal } from "./components/reveal";
import { IntegrationsSection } from "./sections/integrations";
import { ImplementationSection } from "./sections/implementation";
import { SecuritySection } from "./sections/security";
import { FAQSection } from "./sections/faq";

export default function Home() {
  return (
    <main className="relative pb-16">
      <div className="absolute inset-x-0 top-0 -z-10 mx-auto h-[600px] max-w-5xl bg-[radial-gradient(circle,_rgba(43,189,238,0.14)_0%,_rgba(43,189,238,0)_70%)] blur-3xl" />
      <Reveal variant="up"><HeroSection /></Reveal>
      <Reveal variant="up" delayMs={100}><AboutSection /></Reveal>
      <Reveal variant="up" delayMs={140}><ServicesSection /></Reveal>
      <Reveal variant="up" delayMs={160}><IntegrationsSection /></Reveal>
      <Reveal variant="up" delayMs={180}><ImplementationSection /></Reveal>
      <Reveal variant="up" delayMs={200}><SecuritySection /></Reveal>
      <Reveal variant="up" delayMs={220}><TestimonialsSection /></Reveal>
      {/* <PricingSection /> */}
      <Reveal variant="up" delayMs={240}><PartnersSection /></Reveal>
      <Reveal variant="up" delayMs={260}><FAQSection /></Reveal>
      <Reveal variant="up" delayMs={280}><CallToActionSection /></Reveal>
    </main>
  );
}
