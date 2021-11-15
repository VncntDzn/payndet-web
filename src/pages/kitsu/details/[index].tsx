import type { NextPage } from "next";
import Head from "next/head";
import { TabPanel } from "react-tabs";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  PreviewData,
} from "next";
import { KitsuDetails, CustomTabs, KitsuReviews } from "src/components";
import { MainLayout } from "src/layouts";
import axios from "axios";
import YouTube from "react-youtube";

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext<any, PreviewData>
) => {
  const [detailsResult, reviewsResult] = await Promise.all([
    axios.get(`${process.env.KITSU_URL}/anime`, {
      params: {
        "filter[id]": context.params.index,
      },
    }),
    axios.get(`${process.env.KITSU_URL}/anime/${context.params.index}/reviews`),
  ]);

  return {
    props: {
      detailsRes: detailsResult.data,
      reviewsRes: reviewsResult.data,
    }, // will be passed to the page component as props
  };
};
const KitsuAnimeDetails: NextPage = ({ detailsRes, reviewsRes }) => {
  return (
    <MainLayout>
      <Head>
        <title>Payndet | Results</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mt-12">
        {detailsRes.data.map((res: any, i: number) => (
          <div
            className="flex flex-col justify-center items-center px-3"
            key={i}
          >
            <YouTube
              videoId={res.attributes.youtubeVideoId} // defaults -> null
              className="mt-3 rounded-xl flex h-60vh w-90vw xl:w-65vw"
              containerClassName="border-red-500"
            />

            <div className="flex self-center flex-col justify-center items-center sm:px-10 xl:w-90vw">
              <h1 className="text-white text-2xl my-5 xl:-ml-42 xl:text-3xl">
                {res.attributes.titles.en_jp}
              </h1>
              <CustomTabs>
                <TabPanel>
                  <KitsuDetails content={res} />
                </TabPanel>
                <TabPanel>
                  <KitsuReviews content={reviewsRes} />
                </TabPanel>
              </CustomTabs>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default KitsuAnimeDetails;