import { H2 } from "@/components/Typographies/Typographies";
import { FC, Fragment } from "react";
import CoreValueComponent from "./CoreValueComponent";

const coreValuesArray = [
  {
    title: "01. Innovation",
    text: "Startupz operates where entrepreneurship and technology intersect. We design solutions and turn them into businesses models.",
  },
  {
    title: "02. People",
    text: "Talent is what enable us to create great companies.",
  },
];

const CoreValuesSection: FC = () => {
  return (
    <div className="flex flex-col w-full gap-12 lg:gap-20">
      <div className="flex flex-row w-full items-center justify-between gap-8">
        <div className="flex flex-col items-start gap-8 w-3/4">
          <H2>Our core Values</H2>
        </div>
        <div className="w-1/4 flex flex-row justify-end">
          <img
            src="/assets/lightbulb.svg"
            alt="StartupZ LightBulb"
            loading="lazy"
            className="object-contain"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-between gap-4 md:gap-12">
        {coreValuesArray.map((value, index) => (
          <Fragment key={index}>
            <CoreValueComponent title={value.title} text={value.text} />
            <hr className="w-full border-text-gray md:hidden " />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default CoreValuesSection;
