import { FC } from "react";
import HeroSection from "./HeroSection";
import GraySection from "./GraySection";
import WhoWeAreSection from "./WhoWeAreSection";
import SolvingProblemsSection from "./SolvingProblemsSection/SolvingProblemsSection";
import CoreValuesSection from "./CoreValuesSection";

const LandingPage: FC = () => {
  return (
    <div>
      <HeroSection />
      <GraySection>
        <WhoWeAreSection />
      </GraySection>
      <SolvingProblemsSection />
      <GraySection>
        <CoreValuesSection />
      </GraySection>
    </div>
  );
};

export default LandingPage;
