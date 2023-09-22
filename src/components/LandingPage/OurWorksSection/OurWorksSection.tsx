import Anchor from "@/components/Anchor";
import { H2, YellowH3 } from "@/components/Typographies/Typographies";
import { FC } from "react";
import WorkCard from "./WorkCard";

export type WorkObject = {
  title: string;
  description: string;
  image: string;
  color: string;
  url: string;
};

const ourWorks: WorkObject[] = [
  {
    title: "Tolq",
    description:
      "Tolq is the translation solution built for e-commerce. It provides all pieces of the localization puzzle in one single integrated solution.",
    image: "/works/tolq.svg",
    url: "/works/tolq",
    color: "#A9BC87",
  },
  {
    title: "Feedback Labs",
    description:
      "Feedback Labs turns feedback into actionable insights for your team.",
    image: "/works/feedbacklabs.svg",
    url: "/works/feedbacklabs",
    color: " #8BB5C9",
  },
  {
    title: "Codekeeper",
    description:
      "Codekeeper is an all-in-one solution for software developers and publishers to provide source code escrow as part of service level and license agreements.",
    image: "/works/codekeeper.svg",
    url: "/works/codekeeper",
    color: "#00A0B6",
  },
  {
    title: "LegalSite",
    description:
      "Protected against legal risks, privacy compliant and always up-to-date with the latest regulatory developments.",
    image: "/works/legalsite.svg",
    url: "/works/legal-site",
    color: "#8B60D3",
  },
];

const OurWorksSection: FC = () => {
  return (
    <section className="w-full py-20 lg:py-11rem lg:container">
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
