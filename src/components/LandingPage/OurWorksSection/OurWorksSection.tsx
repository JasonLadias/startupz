import Anchor from "@/components/Anchor";
import { H2, YellowH3 } from "@/components/Typographies/Typographies";
import { FC } from "react";
import WorkCard from "./WorkCard";
import { ourWorks } from "@/services/constants";

const OurWorksSection: FC = () => {
  return (
    <section id="works" className="w-full py-20 lg:py-11rem lg:container">
      <div className="flex flex-col items-center gap-10 px-4 lg:px-0">
        <H2 style={{ textAlign: "center" }}>Our Works</H2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {ourWorks.map((work, index) => (
            <div key={index}>
              <WorkCard previousWork={work} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row items-center gap-3 justify-center lg:gap-10 mt-20 lg:mt-40">
        <img
          src="/assets/thumb-left.svg"
          alt="StartupZ Thumb Left"
          loading="lazy"
          className="object-contain min-w-10 md:w-auto"
        />
        <YellowH3 style={{ textAlign: "center" }}>
          Startups create a world that actually is better. Any problem that can
          be solved, will be solved by a startup, and that is a huge
          opportunity.
        </YellowH3>
        <img
          src="/assets/thumb-right.svg"
          alt="StartupZ Thumb Right"
          loading="lazy"
          className="object-contain min-w-10 md:w-auto"
        />
      </div>
    </section>
  );
};

export default OurWorksSection;
