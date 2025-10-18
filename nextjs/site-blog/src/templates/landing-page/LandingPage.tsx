import {
  CallToAction,
  CustomerStory,
  FeatureSection,
  HeroSection,
  SupportSection,
} from "@/templates/landing-page/section";

export const LandingPage = () => {
  return (
    <article className="flex flex-col gap-10 md:gap-20">
      <HeroSection />
      <FeatureSection />
      <SupportSection />
      <CustomerStory />
      <CallToAction />
    </article>
  );
};
