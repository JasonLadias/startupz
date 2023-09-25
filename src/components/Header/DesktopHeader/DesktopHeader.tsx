import Anchor from "@/components/Anchor";
import Button from "@/components/Button";
import Image from "next/image";
import { FC } from "react";

const DesktopHeader: FC = () => {
  return (
    <header className="flex flex-row items-center justify-between">
      <Anchor href="/">
        <Image
          src="/logo.svg"
          alt="logo"
          width={200}
          height={48}
          priority={true}
        />
      </Anchor>
      <div className="flex flex-row justify-start items-center gap-10">
        <Anchor href="#works">
          <span className="text-lg text-text-gray hover:text-brand-green">
            Startups
          </span>
        </Anchor>
        <Anchor href="#hiring">
          <span className="text-lg text-text-gray hover:text-brand-green">
            Contact
          </span>
        </Anchor>
        <Anchor href="/jobs">
          <Button variant="outlined">Work with us!</Button>
        </Anchor>
      </div>
    </header>
  );
};

export default DesktopHeader;
