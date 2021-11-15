import ActiveLink from "./ActiveLink";
import Search from "../shared/Search";
const HamburgerMenu = () => {
  return (
    <div className="absolute h-screen bg-black z-30 text-white w-52 flex flex-col items-center justify-center top-0 right-0 sm:w-80 ">
      <Search />
      <ActiveLink className="text-red-500 text-xl" href="/">
        Home
      </ActiveLink>
      <ActiveLink className="text-red-500 text-xl" href="/genre/movie">
        Movies
      </ActiveLink>
      <ActiveLink className="text-red-500 text-xl" href="/genre/tv">
        Series
      </ActiveLink>
      <ActiveLink className="text-red-500 text-xl" href="/author">
        Author
      </ActiveLink>
    </div>
  );
};

export default HamburgerMenu;
