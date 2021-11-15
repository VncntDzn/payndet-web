import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useRouter } from "next/router";
import Image from "next/image";
import Rating from "react-rating";

const CustomCarousel = ({ data }) => {
  const router = useRouter();
  const handleNavigation = (id: string | number) => {
    router.push(`/kitsu-details/${id}`);
  };
  return (
    <Carousel showThumbs={false} autoPlay={true} className="xl:-mx-32" >
      {data.data.map((res: any, i: number) => (
        <div className="block relative h-96 xl:h-75vh" key={i}>
          <Image
            src={res.attributes.coverImage.original}
            quality={100}
            alt={res.attributes.titles.en_jp}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute bottom-8 p-5 flex flex-col justify-start bg-gradient-to-r from-red-600 xl:w-1/3">
            <h1 className=" text-white text-3xl text-left font-extrabold">
              {res.attributes.titles.en_jp}
            </h1>
            <p className="text-left text-white">
              Rating: {res.attributes.averageRating} / 100
            </p>
            <button
              className="text-red text-left text-white hover:p-2 transform hover:-translate-y-1"
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                handleNavigation(res.id)
              }
            >
              See More
            </button>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
