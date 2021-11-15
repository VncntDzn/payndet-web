import React from "react";
import PropTypes from "prop-types";
import { Navbar } from "src/components";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center xl:px-32">
        <div className="w-full ">{children}</div>
      </main>
    </>
  );
};

MainLayout.propTypes = {};

export default MainLayout;
