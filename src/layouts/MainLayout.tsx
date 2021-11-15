import { ReactNode } from "react";
import { Footer, Navbar } from "src/components";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center xl:px-32">
        <div className="w-full ">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
