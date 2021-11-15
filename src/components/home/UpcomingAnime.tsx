import React, { useState } from "react";
import CustomPagination from "../shared/CustomPagination";
import Image from "next/image";
import ChevronRightIcon from "src/icons/ChevronRightIcon";

const UpcomingAnime = ({ result }) => {
  const [currentPage, setCurrentPage] = useState(0);
  // get the current page
  const onPageChange = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };
  const PER_PAGE = 10;
  const offset = currentPage * PER_PAGE;
  let pageCount = result.data.length / 10;
  return (
    <div className="flex flex-col my-5">
      <div className="flex justify-between mx-3">
        <h1 className="flex  items-center text-red-500 xl:text-3xl">
          Upcoming <ChevronRightIcon />
        </h1>
        <div className=" flex justify-center items-center text-white shadow-md">
          <CustomPagination pageCount={pageCount} onPageChange={onPageChange} />
        </div>
      </div>

      {/* Overflow to have horizontal scroll */}
      <div className="flex overflow-x-auto scrollbar scrollbar-thumb-custom-light scrollbar-track-custom  scrollbar-thumb-rounded-full scrollbar-track-rounded-full mx-3">
        {result.data?.length &&
          result.data
            .slice(offset, offset + PER_PAGE)
            .map(({ attributes, id }) => (
              <div className="mb-2" key={id}>
                <div className="relative h-64 w-52 m-5 sm:h-60 inset-0 bg-cover bg-center z-0">
                  <Image
                    src={attributes.posterImage.original}
                    quality={100}
                    layout="fill"
                    objectFit="cover"
                    alt={attributes.titles.en_jp}
                  />
                  <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-30 flex justify-center items-center border-4 border-white">
                    <p className="text-xl border-2 bg-black text-white font-semibold p-2 rounded-md">
                      See More
                    </p>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

UpcomingAnime.propTypes = {};

export default UpcomingAnime;
