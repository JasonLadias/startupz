import { FC } from "react";
import HeroSection from "./HeroSection";
import GraySection from "./GraySection";
import WhoWeAreSection from "./WhoWeAreSection";
import SolvingProblemsSection from "./SolvingProblemsSection";
import CoreValuesSection from "./CoreValuesSection";
import OurWorksSection from "./OurWorksSection";
import WeAreHiringSection from "./WeAreHiringSection";
import Head from "next/head";
import ContactSection from "./ContactSection";

const LandingPage: FC = () => {
  return (
    <div>
      <Head>
        <title>StartupZ - Where Dreams Come True</title>
        <meta name="description" content="StartupZ - Where Dreams Come True" />
      </Head>
      <HeroSection />
      <GraySection>
        <WhoWeAreSection />
      </GraySection>
      <SolvingProblemsSection />
      <GraySection>
        <CoreValuesSection />
      </GraySection>
      <OurWorksSection />
      <WeAreHiringSection />
      <ContactSection />
    </div>
  );
};

export default LandingPage;
