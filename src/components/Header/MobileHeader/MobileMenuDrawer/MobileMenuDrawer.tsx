import { FC } from "react";
import { Transition } from "@headlessui/react";
import Anchor from "@/components/Anchor";
import CloseIcon from "@mui/icons-material/Close";

export type MobileHeaderProps = {
  isShowing: boolean;
  setIsShowing: () => void;
};

const MobileHeader: FC<MobileHeaderProps> = ({ isShowing, setIsShowing }) => {
  return (
    <Transition
      show={isShowing}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Transition.Child
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed right-0 top-0 bg-back-gray opacity-100 z-10 h-full sm:w-1/2 w-full px-4 py-2">
          <div className="flex flex-row items-center justify-between border-b-1 border-black pb-1">
            <Anchor href="/">
              <img
                src="/logo.svg"
                alt="logo"
                width={200}
                height={48}
                loading="eager"
                className="sm:hidden"
              />
            </Anchor>
            <div
              onClick={setIsShowing}
              className="flex flex-row justify-start items-center gap-10 hover:cursor-pointer sm:h-10"
            >
              <CloseIcon />
            </div>
          </div>
          {/* Add your menu items here */}
          <div className="flex flex-col items-end w-full gap-2 mt-3">
            <div className="w-full bg-black h-1" />

            <Anchor href="/" onClick={setIsShowing}>
              <span className="text-lg text-text-gray hover:text-brand-green">
                Startups
              </span>
            </Anchor>
            <div className="w-full border-b border-black" />
            <Anchor href="/" onClick={setIsShowing}>
              <span className="text-lg text-text-gray hover:text-brand-green">
                Contact
              </span>
            </Anchor>
            <div className="w-full border-b border-black" />

            <Anchor href="/" onClick={setIsShowing}>
              <span className="text-lg text-text-gray hover:text-brand-green">
                Work with us!
              </span>
            </Anchor>
            <div className="w-full border-b border-black" />
          </div>
        </div>
      </Transition.Child>
    </Transition>
  );
};

export default MobileHeader;
