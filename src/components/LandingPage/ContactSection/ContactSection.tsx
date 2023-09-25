import { H2, YellowParagraph } from "@/components/Typographies/Typographies";
import { FC } from "react";
import ContactForm from "./ContactForm";

const ContactSection: FC = () => {
  return (
    <section className={`bg-back-yellow w-full py-16 relative`}>
      <div className="lg:container px-4 flex flex-col items-start gap-9">
        <H2 style={{ color: "white", maxWidth: "600px" }}>
          Are you ready to board this rocket ship?
        </H2>
        <YellowParagraph style={{ color: "white", fontWeight: 500 }}>
          Share your excitement with us.
        </YellowParagraph>
        <ContactForm />
        <img
          src="/assets/rocket.svg"
          alt="StartupZ Hero"
          className="block lg:hidden"
          style={{
            width: "100%",
            height: "100px",
            objectFit: "contain",
          }}
        />
      </div>
      <img
        src="/assets/rocket.svg"
        alt="StartupZ Hero"
        className="hidden lg:block"
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          width: "50%",
          height: "auto",
          maxHeight: "50%",
          objectFit: "contain",
        }}
      />
    </section>
  );
};

export default ContactSection;
