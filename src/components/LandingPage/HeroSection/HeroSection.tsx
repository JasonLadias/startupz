import { FC } from "react";
import Button from "@/components/Button";
import { H1, YellowParagraph } from "@/components/Typographies/Typographies";

const HeroSection: FC = () => {
  return (
    <section className="relative h-[calc(100vh-64px)] flex items-start">
      <div className="lg:container" style={{ marginTop: "30vh" }}>
        {/* Content on the left */}
        <div className="flex-1 flex flex-col items-start justify-start gap-6">
          <H1 style={{ maxWidth: '32rem'}}>We Create Startups.</H1>
          <YellowParagraph>
            We are startup studio that develops and launches new companies.
          </YellowParagraph>
          <Button>See our works</Button>
        </div>

        {/* Image animation on the right */}
      </div>
      <img
        src="/assets/hero.svg"
        alt="Description of Image"
        className="absolute bottom-0 right-0 h-3/4 w-auto object-contain animate-slideInRight"
      />
    </section>
  );
};

export default HeroSection;
