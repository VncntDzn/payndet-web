import React from "react";
import PropTypes from "prop-types";

import ReactPaginate from "react-paginate";
const CustomPagination = ({ pageCount, onPageChange }) => {
  return (
    <ReactPaginate
      previousLabel={"<"}
      nextLabel={">"}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={pageCount}
      marginPagesDisplayed={1}
      pageRangeDisplayed={5}
      onPageChange={onPageChange}
      containerClassName="flex w-48 items-center justify-evenly sm:w-full"
      pageClassName="p-1"
      activeClassName="bg-blue-dark rounded-md px-3"
    />
  );
};

CustomPagination.propTypes = {};

export default CustomPagination;
