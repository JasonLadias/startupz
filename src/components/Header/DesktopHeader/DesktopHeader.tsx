import Anchor from "@/components/Anchor";
import Button from "@/components/Button";
import { FC } from "react";

const DesktopHeader: FC = () => {
  return (
    <div className="flex flex-row items-center justify-between">
      <Anchor href="/">
        <img
          src="/logo.svg"
          alt="logo"
          width={200}
          height={48}
          loading="eager"
        />
      </Anchor>
      <div className="flex flex-row justify-start items-center gap-10">
        <Anchor href="/">
          <span className="text-lg hover:text-brand-green">Startups</span>
        </Anchor>
        <Anchor href="/">
          <span className="text-lg hover:text-brand-green">Contact</span>
        </Anchor>
        <Anchor href="/">
          <Button variant="outlined">Work with us!</Button>
        </Anchor>
      </div>
    </div>
  );
};

export default DesktopHeader;
