import React, { useState } from "react";
import CustomPagination from "../shared/CustomPagination";
import Image from "next/image";

const UpcomingAnime = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(0);
  // get the current page
  const onPageChange = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };
  const PER_PAGE = 10;
  const offset = currentPage * PER_PAGE;
  let pageCount = data.data.length / 10;
  return (
    <div className="flex flex-col my-5">
      <div className="flex justify-between mx-3">
        <h1 className="text-red-600 text-2xl">Upcoming</h1>
        <div className=" flex justify-center items-center text-white shadow-md">
          <CustomPagination pageCount={pageCount} onPageChange={onPageChange} />
        </div>
      </div>

      {/* Overflow to have horizontal scroll */}
      <div className="flex overflow-x-scroll">
        {data.data?.length &&
          data.data.slice(offset, offset + PER_PAGE).map((d, i) => (
            <div key={i}>
              <div className="relative h-64 w-52 m-5 sm:h-60">
                <Image
                  src={d.attributes.posterImage.original}
                  quality={100}
                  layout="fill"
                  objectFit="cover"
                  alt={d.attributes.titles.en_jp}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

UpcomingAnime.propTypes = {};

export default UpcomingAnime;
