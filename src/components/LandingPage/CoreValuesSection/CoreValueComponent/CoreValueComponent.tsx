import {
  BlackParagraph,
  YellowNumberSpan,
} from "@/components/Typographies/Typographies";
import { FC } from "react";

type CoreValueComponentProps = {
  title: string;
  text: string;
};

const CoreValueComponent: FC<CoreValueComponentProps> = ({ title, text }) => {
  return (
    <div className="flex flex-col items-start gap-4 w-full lg:w-1/2">
      <YellowNumberSpan>{title}</YellowNumberSpan>
      <hr className="w-10 border-text-gray hidden md:block" />
      <div className="md:mt-4">
        <BlackParagraph>{text}</BlackParagraph>
      </div>
    </div>
  );
};

export default CoreValueComponent;
