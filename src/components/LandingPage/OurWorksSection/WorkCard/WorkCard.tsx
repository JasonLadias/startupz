import { FC } from "react";
import Button from "@/components/Button"; // Assuming you have a Button component
import { WorkObject } from "../OurWorksSection";
import {
  CardSubTitles,
  CardTitles,
} from "@/components/Typographies/Typographies";
import Anchor from "@/components/Anchor";

interface CardProps {
  previousWork: WorkObject;
}

const WorkCard: FC<CardProps> = ({ previousWork }) => {
  return (
    <div className="flex flex-col items-center justify-between p-10 gap-4 bg-white rounded-lg border shadow-lg w-full h-full group hover:bg-gray-100 transition duration-200">
      {/* Title with dynamic color */}
      <div className="flex flex-col items-center gap-4">
        <CardTitles style={{ color: previousWork.color }}>
          {previousWork.title}
        </CardTitles>

        {/* Description */}
        <CardSubTitles>{previousWork.description}</CardSubTitles>
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="w-full mb-4">
          <img
            src={previousWork.image}
            alt={previousWork.title}
            className="w-full h-48 object-contain group-hover:animate-custom-bounce"
          />
        </div>

        {/* Button */}
        <Anchor href={previousWork.url}>
          <Button variant="outlined">More</Button>
        </Anchor>
      </div>
    </div>
  );
};

export default WorkCard;
