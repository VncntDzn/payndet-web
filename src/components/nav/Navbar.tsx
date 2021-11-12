import React from "react";
import PropTypes from "prop-types";

const Navbar = (props) => {
  return (
    <nav className="flex flex-col sticky top-0 z-50 p-3 bg-black">
      <h1 className="text-2xl md:text-3xl text-orange font-extrabold">
        Payndet
      </h1>
    </nav>
  );
};

Navbar.propTypes = {};

export default Navbar;
