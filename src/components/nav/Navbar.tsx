import { useRouter } from "next/router";
import { Squeeze as Hamburger } from "hamburger-react";
import { SearchIcon } from "src/icons";
import ActiveLink from "./ActiveLink";

const Navbar = () => {
  const router = useRouter();
  /* const [isScrolled, setScrolled] = useState(false) */
  const handleNavigation = () => {
    router.push("/");
  };
  return (
    <nav className="grid grid-cols-10 gap-5 w-full absolute top-0 z-50 bg-transparent justify-between items-center content-center py-2 px-3 xl:px-32">
      <h1
        className="col-span-7 sm:col-span-3 md:text-center xl:text-left text-2xl md:text-3xl xl:text-4xl text-red-600 mt-1 font-extrabold self-start hover:cursor-pointer"
        onClick={handleNavigation}
      >
        PAYNDET
      </h1>
      <div className="hidden col-span-5 sm:flex justify-evenly items-center">
        <ActiveLink className="text-red-500 text-xl" href="/">
          Home
        </ActiveLink>
        <ActiveLink className="text-red-500 text-xl" href="/movies">
          Movies
        </ActiveLink>
        <ActiveLink className="text-red-500 text-xl" href="/series">
          Series
        </ActiveLink>
      </div>
      <div className="col-span-3 sm:col-span-2 flex justify-evenly items-center">
        <SearchIcon className="text-red-500" />
        <Hamburger color="#EF4444" size={23} hideOutline={true} />
      </div>
    </nav>
  );
};

export default Navbar;
