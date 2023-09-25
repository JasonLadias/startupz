import Anchor from "@/components/Anchor";
import MenuIcon from "@mui/icons-material/Menu";

import { FC, useCallback, useState } from "react";
import MobileMenuDrawer from "./MobileMenuDrawer";
import ClickAwayHandler from "@/components/ClickAwayHandler";
import Image from "next/image";

const MobileHeader: FC = () => {
  const [isShowing, setIsShowing] = useState(false);

  const changeMenuShowing = useCallback(() => {
    setIsShowing((isShowing) => !isShowing);
  }, []);

  return (
    <>
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
        <div
          onClick={() => setIsShowing((isShowing) => !isShowing)}
          className="flex flex-row justify-start items-center gap-10 hover:cursor-pointer"
        >
          <MenuIcon />
        </div>
      </header>
      <ClickAwayHandler onClickAway={() => setIsShowing(false)}>
        <MobileMenuDrawer
          isShowing={isShowing}
          setIsShowing={changeMenuShowing}
        />
      </ClickAwayHandler>
    </>
  );
};

export default MobileHeader;
