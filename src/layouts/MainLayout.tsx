import React from "react";
import PropTypes from "prop-types";
import { Navbar } from "src/components";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <hr className="w-full" />
      <main className="flex flex-col items-center">
        <div className="w-full">{children}</div>
      </main>
    </>
  );
};

MainLayout.propTypes = {};

export default MainLayout;
