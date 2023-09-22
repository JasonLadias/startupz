import { H2, YellowParagraph } from "@/components/Typographies/Typographies";
import { FC } from "react";
import ValueComponent from "./ValueComponent";

const whoWeAreArray = [
  "We develop innovative products, systems and services",
  "Next we build teams to scale them into companies",
  "Each startup solving one problem at a time",
];

const WhoWeAreSection: FC = () => {
  return (
    <div className="flex flex-col w-full gap-12 lg:gap-20">
      <div className="flex flex-row w-full items-center justify-between gap-8">
        <div className="flex flex-col items-start gap-8 w-3/4">
          <H2>Who we are</H2>
          <YellowParagraph>
            We create products that have innovation and technology at their
            core. We value working with talented people that understand the
            possibilities of today.
          </YellowParagraph>
        </div>
        <div className="w-1/4 flex flex-row justify-end">
          <img
            src="/assets/questionmark.svg"
            alt="StartupZ Hero"
            loading="lazy"
            className="object-contain"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-between gap-4 md:gap-12">
        {whoWeAreArray.map((value, index) => (
          <>
            <ValueComponent key={index} number={index + 1} text={value} />
            <hr className="w-full border-text-gray md:hidden " />
          </>
        ))}
      </div>
    </div>
  );
};

export default WhoWeAreSection;
