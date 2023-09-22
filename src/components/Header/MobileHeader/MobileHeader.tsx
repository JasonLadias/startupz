import Anchor from "@/components/Anchor";
import MenuIcon from "@mui/icons-material/Menu";

import { FC, useCallback, useState } from "react";
import MobileMenuDrawer from "./MobileMenuDrawer";

const MobileHeader: FC = () => {
  const [isShowing, setIsShowing] = useState(false);

  const changeMenuShowing = useCallback(() => {
    setIsShowing((isShowing) => !isShowing);
  }, []);

  return (
    <>
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
        <div
          onClick={() => setIsShowing((isShowing) => !isShowing)}
          className="flex flex-row justify-start items-center gap-10 hover:cursor-pointer"
        >
          <MenuIcon />
        </div>
      </div>
      <MobileMenuDrawer
        isShowing={isShowing}
        setIsShowing={changeMenuShowing}
      />
    </>
  );
};

export default MobileHeader;
