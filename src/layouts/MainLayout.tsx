import React from "react";
import PropTypes from "prop-types";
import { Navbar } from "src/components";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <hr className="w-full" />
      <main className="flex flex-col items-center">
        <div className="w-full lg:w-3/4">{children}</div>
      </main>
    </>
  );
};

MainLayout.propTypes = {};

export default MainLayout;
