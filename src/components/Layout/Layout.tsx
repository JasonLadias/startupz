import { FC } from "react";
import DesktopHeader from "../Header/DesktopHeader";
import MobileHeader from "../Header/MobileHeader";

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="bg-white shadow-md py-2 px-4 sticky top-0 z-50">
        <div className="hidden lg:block container">
          <DesktopHeader />
        </div>
        <div className="lg:hidden">
          <MobileHeader />
        </div>
        <main className="bg-white max-w-screen-100 min-h-[calc(100vh-16px)] lg:container">
          {children}
        </main>

        <div>Footer</div>
      </div>
    </>
  );
};

export default Layout;
