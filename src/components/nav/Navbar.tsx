import { useRouter } from "next/router";

const Navbar = (props) => {
  const router = useRouter();
  const handleNavigation = () => {
    router.push("/");
  };
  return (
    <nav className="flex flex-col sticky top-0 z-50 p-3 bg-black">
      <button
        className="text-2xl md:text-3xl text-orange font-extrabold self-start"
        onClick={handleNavigation}
      >
        Payndet
      </button>
    </nav>
  );
};

Navbar.propTypes = {};

export default Navbar;
