import React, { useState } from "react";
import PropTypes from "prop-types";
import CustomPagination from "../shared/CustomPagination";
import Image from "next/image";

const UpcomingAnime = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(0);
  // get the current page
  const onPageChange = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };
  const PER_PAGE = 2;
  const offset = currentPage * PER_PAGE;
  let pageCount = data.data.length / 5;
  return (
    <div className="flex flex-col my-5">
      <div className="flex justify-between">
        <h1 className="text-orange text-2xl">Upcoming</h1>
        <div className="bg-red-500 flex justify-center items-center shadow-md">
          <CustomPagination pageCount={pageCount} onPageChange={onPageChange} />
        </div>
      </div>
      <div className="flex">
        {data.data?.length &&
          data.data.slice(offset, offset + PER_PAGE).map((d, i) => (
            <div className="relative h-52 w-52 m-5" key={i}>
              <Image
                src={d.attributes.posterImage.original}
                quality={100}
                layout="fill"
                objectFit="cover"
                alt={d.attributes.titles.en_jp}
              />
              <h1 className="text-lg text-white">
                {d.attributes.titles.en_jp}
              </h1>
            </div>
          ))}
      </div>
    </div>
  );
};

UpcomingAnime.propTypes = {};

export default UpcomingAnime;
