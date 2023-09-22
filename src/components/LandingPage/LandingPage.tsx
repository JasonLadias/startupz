import { FC } from "react";
import HeroSection from "./HeroSection";
import GraySection from "./GraySection";
import WhoWeAreSection from "./WhoWeAreSection";

const LandingPage: FC = () => {
  return (
    <div>
      <HeroSection />
      <GraySection>
        <WhoWeAreSection />
      </GraySection>
    </div>
  );
};

export default LandingPage;
