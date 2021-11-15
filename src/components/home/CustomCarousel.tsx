import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useRouter } from "next/router";
import { StarIcon } from "src/icons";
import Image from "next/image";
import { AxiosResponse } from "axios";

const CustomCarousel = ({ data }: AxiosResponse<any, any>) => {
  const router = useRouter();
  const handleNavigation = (id: string | number) => {
    router.push(`/kitsu/details/${id}`);
  };
  return (
    <Carousel
      showThumbs={false}
      autoPlay={true}
      infiniteLoop
      className="xl:-mx-32"
    >
      {data.data.map((res: any, i: number) => (
        <div className="block relative h-96 xl:h-75vh" key={i}>
          <Image
            src={res.attributes.coverImage.original}
            quality={100}
            alt={res.attributes.titles.en_jp}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute bottom-8 left-3 flex flex-col justify-start bg-gradient-to-r from-red-600 p-3 sm:left-10 lg:left-20 xl:left-28 xl:p-5 xl:w-1/3">
            <h1 className=" text-white text-xl text-left font-extrabold lg:text-2xl xl:text-4xl">
              {res.attributes.titles.en_jp}
            </h1>
            <p className="text-left flex text-white">
              <StarIcon className={"text-yellow-300"} />{" "}
              {res.attributes.averageRating} / 100
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
