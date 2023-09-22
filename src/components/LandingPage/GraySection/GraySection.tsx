import { FC } from "react";

type GraySectionProps = {
  children: React.ReactNode;
  className?: string;
};

const GraySection: FC<GraySectionProps> = ({ children, className }) => {
  return (
    <section className={`bg-back-gray w-full py-20 lg:py-11rem ${className}`}>
      <div className="lg:container px-4">{children}</div>
    </section>
  );
};

export default GraySection;
