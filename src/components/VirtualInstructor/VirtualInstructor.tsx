import { FC, useEffect, useState } from "react";
import Image from "next/image";

const VirtualInstructor: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => {
      setIsVisible(false);
    };
  }, []);

  return (
    isVisible && (
      <div className="fixed bottom-2 right-2 lg:bottom-4 lg:right-4 p-4 z-50">
        {/* Close Button */}

        <button
          onClick={() => setIsVisible(false)}
          className="p-2 rounded-full absolute top-1 right-1"
        >
          X
        </button>

        <div
          className="mr-10 p-2 px-4"
          style={{
            backgroundColor: "#46B8C8",
            borderTopLeftRadius: "30px",
            borderTopRightRadius: "30px",
            borderBottomLeftRadius: "30px",
            color: "white",
          }}
        >
          <span style={{ fontSize: "13px" }}>
            Hi! I am Ben, your virtual assistant.
          </span>
          <br />
          <span style={{ fontSize: "13px" }}>
            How can I make your day better?
          </span>
        </div>
        {/* Virtual Instructor Content */}
        <div className="flex flex-col items-end pt-3 w-full space-x-2 w-13 h-13 rounded-full">
          <div className="bg-white p-1 rounded-full shadow-lg">
            <Image
              src="/assets/assistant.svg" // Path to your image
              alt="Virtual Instructor" // Alt text
              width={48} // Width of the image
              height={48} // Height of the image
              className="rounded-full" // Class names
              loading="lazy"
            />
          </div>
        </div>
      </div>
    )
  );
};

export default VirtualInstructor;
