import { FC } from "react";
import DesktopHeader from "../Header/DesktopHeader";
import MobileHeader from "../Header/MobileHeader";
import Footer from "../Footer";

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="bg-white shadow-md sticky top-0 z-50">
        <div className="hidden lg:block container p-4">
          <DesktopHeader />
        </div>
        <div className="lg:hidden py-2 px-4">
          <MobileHeader />
        </div>
        <main className="bg-white max-w-screen-100 min-h-[calc(100vh-16px)]">
          {children}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Layout;
