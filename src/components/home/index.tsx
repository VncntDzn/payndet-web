import React from "react";
import PropTypes from "prop-types";
import CustomCarousel from "./CustomCarousel";

const LandingPage = ({data}) => {
  return (
    <div>
      <button onClick={() => console.log(data)}>asd</button>
    </div>
  );
};

LandingPage.propTypes = {};

export default LandingPage;
