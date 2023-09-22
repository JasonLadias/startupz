import {
  BlackParagraph,
  YellowNumberSpan,
} from "@/components/Typographies/Typographies";
import { FC } from "react";

type ValueComponentProps = {
  number: number;
  text: string;
};

const ValueComponent: FC<ValueComponentProps> = ({ number, text }) => {
  return (
    <div className="flex flex-row md:flex-col items-center md:items-start gap-4">
      <YellowNumberSpan>{number}</YellowNumberSpan>
      <hr className="w-10 border-text-gray hidden md:block" />
      <div className="md:mt-4">
        <BlackParagraph>{text}</BlackParagraph>
      </div>
    </div>
  );
};

export default ValueComponent;
