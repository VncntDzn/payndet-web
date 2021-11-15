import { ReactNode } from "react";
import { Navbar } from "src/components";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center xl:px-32">
        <div className="w-full ">{children}</div>
      </main>
    </>
  );
};

export default MainLayout;
