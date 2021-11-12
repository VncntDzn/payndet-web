import { useRouter } from "next/router";

const Navbar = (props) => {
  const router = useRouter();
  const handleNavigation = () => {
    router.push("/");
  };
  return (
    <nav className="flex flex-col sticky top-0 z-50 p-3 py-5 bg-black">
      <h1
        className="text-2xl md:text-3xl text-orange font-extrabold self-start hover:cursor-pointer"
        onClick={handleNavigation}
      >
        Payndet
      </h1>
    </nav>
  );
};

Navbar.propTypes = {};

export default Navbar;
