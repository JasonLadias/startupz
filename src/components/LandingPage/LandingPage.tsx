import { FC } from "react";
import HeroSection from "./HeroSection";
import GraySection from "./GraySection";
import WhoWeAreSection from "./WhoWeAreSection";
import SolvingProblemsSection from "./SolvingProblemsSection";
import CoreValuesSection from "./CoreValuesSection";
import OurWorksSection from "./OurWorksSection";
import WeAreHiringSection from "./WeAreHiringSection";
import Head from "next/head";

const LandingPage: FC = () => {
  return (
    <div>
      <Head>
        <title>StartupZ - Where Dreams Come True</title>
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
    </div>
  );
};

export default LandingPage;
