import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useRouter } from "next/router";
import Image from "next/image";

const CustomCarousel = ({ data }) => {
  const router = useRouter();
  const handleNavigation = (id: string | number) => {
    router.push(`/kitsu-details/${id}`);
  };
  return (
    <Carousel showThumbs={false} autoPlay={true}>
      {data.data.map((res: any, i: number) => (
        <div
          className="block relative sm:h-auto"
          key={i}
          style={{ height: "40rem" }}
        >
          <Image
            src={res.attributes.coverImage.original}
            quality={100}
            alt={res.attributes.titles.en_j}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute bottom-0 px-3 flex flex-col justify-start bg-gradient-to-r from-red-500 ">
            <h1 className=" text-white text-2xl font-extrabold">
              {res.attributes.titles.en_jp}
            </h1>
            <button
              className="text-red text-left hover:text-orange"
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                handleNavigation(res.id)
              }
            >
              See more
            </button>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
