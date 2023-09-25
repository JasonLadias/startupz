import Anchor from "@/components/Anchor";
import Button from "@/components/Button";
import { H2, YellowParagraph } from "@/components/Typographies/Typographies";
import { FC } from "react";

const WeAreHiringSection: FC = () => {
  return (
    <section
      id="hiring"
      className={`bg-back-gray w-full py-20 lg:py-11rem relative flex flex-col items-center`}
    >
      <div className="flex flex-row items-center justify-between md:hidden">
        <img
          src="/assets/employee.svg" // Change this to your image path
          alt="Startupz Employee"
          loading="lazy" 
          className="h-auto w-1/4"
        />
        <img
          src="/assets/employer.svg" // Change this to your image path
          alt="Startupz Employer"
          loading="lazy" 
          className="h-auto w-1/4"
        />
      </div>
      <img
        src="/assets/employee.svg" // Change this to your image path
        alt="Startupz Employee"
        loading="lazy" 
        style={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
        }}
        className="h-1/2 max-w-1/4 hidden md:block"
      />

      {/* Right Image */}
      <img
        src="/assets/employer.svg" // Change this to your image path
        alt="Startupz Employer"
        loading="lazy" 
        style={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
        }}
        className="h-1/2 max-w-1/4 hidden md:block"
      />
      <div className="px-4 flex flex-col gap-4 center max-w-full md:max-w-1/2">
        <H2 style={{ textAlign: "center" }}>We are hiring!</H2>
        <YellowParagraph style={{ textAlign: "center" }}>
          {
            "We're always looking for talented people to join and help build our startups. Check out our current openings"
          }
        </YellowParagraph>
        <div className="flex flex-col items-center">
          <Anchor href="/jobs">
            <Button variant="contained">See current openings</Button>
          </Anchor>
        </div>
      </div>
    </section>
  );
};

export default WeAreHiringSection;
