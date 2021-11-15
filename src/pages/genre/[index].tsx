import { useRouter } from "next/router";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  PreviewData,
} from "next";
import { MainLayout } from "src/layouts";
import Image from "next/image";
import axios from "axios";

import Head from "next/head";
import { SubtypeProps } from "src/types";
import { AttributesProps } from "src/components/home/types";
export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext<any, PreviewData>
) => {
  const genreResult = await axios.get(`${process.env.KITSU_URL}/anime`, {
    params: {
      "filter[subtype]": context.params.index,
    },
  });

  return {
    props: {
      result: genreResult.data,
      genre: context.params.index,
    }, // will be passed to the page component as props
  };
};
const Genre = ({ result, genre }: SubtypeProps) => {
  const router = useRouter();
  const handleNavigation = (id: number): any => {
    router.push(`/kitsu/details/${id}`);
  };
  return (
    <MainLayout>
      <Head>
        <title>Payndet | Genre</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center my-12 xl:my-16">
        <h1 className="self-start text-xl px-3">
          Result for:{" "}
          <span
            className="text-red-500 font-extrabold italic"
            onClick={() => console.log(result)}
          >
            {genre}
          </span>
        </h1>

        <div className="flex flex-wrap items-center justify-center">
          {result.data.map(({ attributes, id }: AttributesProps) => (
            <div key={id}>
              <div className="relative h-64 w-52 m-5 sm:h-60 inset-0 bg-cover bg-center z-0">
                <Image
                  src={attributes.posterImage.original}
                  quality={100}
                  layout="fill"
                  objectFit="cover"
                  alt={attributes.titles.en_jp}
                />
                <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-30 flex justify-center items-center border-4 border-white">
                  <button
                    onClick={() => handleNavigation(id)}
                    className="text-xl border-2 bg-black text-white font-semibold p-2 rounded-md"
                  >
                    See More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Genre;
