import { FC } from "react";
import Button from "@/components/Button";
import { H1, YellowParagraph } from "@/components/Typographies/Typographies";

const HeroSection: FC = () => {
  return (
    <section className="relative lg:h-[calc(100vh-64px)] flex items-start">
      <div className="lg:container w-full py-12 px-4">
        {/* Image for mobile */}
        <div className="lg:hidden my-3 flex flex-col items-center w-full">
          <div className="sm:max-w-2/3">
            <img
              src="/assets/hero.svg"
              alt="StartupZ Hero"
              className="w-full object-contain "
            />
          </div>
        </div>
        <div className="mt-10 lg:mt-30vh lg:max-w-1/2">
          {/* Content on the left */}
          <div className="flex-1 flex flex-col items-center lg:items-start justify-start gap-6">
            <div className="lg:max-w-32rem">
              <H1>We Create Startups.</H1>
            </div>
            <YellowParagraph>
              We are startup studio that develops and launches new companies.
            </YellowParagraph>
            <Button>See our works</Button>
          </div>
        </div>
        {/* Image animation on the right */}
      </div>

      <img
        src="/assets/hero.svg"
        alt="StartupZ Hero"
        className="absolute bottom-0 right-0 h-auto w-1/2 object-contain animate-slideInRight hidden lg:block"
      />
    </section>
  );
};

export default HeroSection;
