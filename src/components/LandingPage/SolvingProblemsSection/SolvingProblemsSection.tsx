import { YellowH3 } from "@/components/Typographies/Typographies";
import { FC } from "react";

const SolvingProblemsSection: FC = () => {
  return (
    <section className="lg:container py-20 lg:py-11rem px-2">
      <div className="flex flex-row items-end gap-3 justify-center lg:gap-10">
        <img
          src="/assets/thumb-left.svg"
          alt="StartupZ Thumb Left"
          loading="lazy"
          className="object-contain w-10 md:w-auto"
        />
        <YellowH3>We love solving problems!</YellowH3>
        <img
          src="/assets/thumb-right.svg"
          alt="StartupZ Thumb Right"
          loading="lazy"
          className="object-contain w-10 md:w-auto"
        />
      </div>
    </section>
  );
};

export default SolvingProblemsSection;
