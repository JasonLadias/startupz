import { FC, useEffect, useState } from "react";

const VirtualInstructor: FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 2000);

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
            <img
              src="/assets/assistant.svg"
              alt="Virtual Instructor"
              className="w-12 h-12 rounded-full"
            />
          </div>
        </div>
      </div>
    )
  );
};

export default VirtualInstructor;
