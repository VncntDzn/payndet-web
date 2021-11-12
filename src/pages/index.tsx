import type { NextPage } from "next";
import Head from "next/head";
import MainLayout from "src/layouts/MainLayout";
import axios from "axios";
import { CustomCarousel, UpcomingAnime } from "src/components";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  PreviewData,
} from "next";

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext<any, PreviewData>
) => {
  const [trendingRes, popularRes, favoriteRes, upcomingRes, currentRes] =
    await Promise.all([
      axios.get(`${process.env.KITSU_URL}/trending/anime`),
      axios.get(`${process.env.KITSU_URL}/anime?sort=-userCount`),
      axios.get(`${process.env.KITSU_URL}/anime?sort=-averageRating`),
      axios.get(`${process.env.KITSU_URL}/anime?filter[status]=upcoming`),
      axios.get(`${process.env.KITSU_URL}/anime?filter[status]=current`),
    ]);

  return {
    props: {
      trending: trendingRes.data,
      popular: popularRes.data,
      favorites: favoriteRes.data,
      upcoming: upcomingRes.data,
      current: currentRes.data,
    },
  };
};

const Home: NextPage = ({
  trending,
  popular,
  favorites,
  upcoming,
  current,
}) => {
  return (
    <>
      <Head>
        <title>Payndet</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <CustomCarousel data={trending} />
        <UpcomingAnime data={upcoming} />
      </MainLayout>
    </>
  );
};

export default Home;
