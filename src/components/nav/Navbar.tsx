import { useState } from "react";
import { useRouter } from "next/router";
import { Squeeze as Hamburger } from "hamburger-react";
import { SearchIcon, UserIcon } from "src/icons";
import Search from "../shared/Search";
import ActiveLink from "./ActiveLink";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/");
  };

  return (
    <nav className="grid grid-cols-10 gap-5 w-full absolute top-0 z-50 bg-transparent justify-between items-center content-center py-2 px-3 xl:px-32">
      <button
        className="col-span-7 text-left self-start text-red-600 mt-1 font-extrabold sm:col-span-3 md:text-center xl:text-left text-2xl md:text-3xl xl:text-4xl "
        onClick={handleNavigation}
      >
        PAYNDET
      </button>
      <div className="hidden self-center col-span-5 sm:flex justify-evenly items-center">
        <ActiveLink className="text-red-500 text-xl" href="/">
          Home
        </ActiveLink>
        <ActiveLink className="text-red-500 text-xl" href="/genre/movie">
          Movies
        </ActiveLink>
        <ActiveLink className="text-red-500 text-xl" href="/genre/tv">
          Series
        </ActiveLink>
      </div>
      <div className="col-span-3 flex justify-evenly items-center z-50 relative  sm:col-span-2">
        <div className="hidden sm:block">
          <Search />
        </div>
        <div className="hidden sm:block" onClick={() => router.push('/profile')}>
          <UserIcon className="text-red-500" />
        </div>
        <div className="sm:hidden">
          <Hamburger
            onToggle={() => setToggle(!toggle)}
            color="#EF4444"
            size={23}
            hideOutline={true}
          />
        </div>
      </div>
      {toggle && <HamburgerMenu />}
    </nav>
  );
};

export default Navbar;
