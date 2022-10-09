import Head from 'next/head';

import IndexPage from "components/layouts/IndexPage";

import { useRouter } from 'next/router';

import SlideHome from 'container/home/home-banner';

import HomeAbout from 'container/home/home-about';
import HomeVideo from 'container/home/home-video';
export default function Home() {
  const router = useRouter();
  return (
    < >
      <Head>
        <title>HOME | dxx=</title>
        <meta
          name="description"
          content="I2AROBOT 2"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {/* <SlideHome /> */}
        {/* <OurTools /> */}
        {/* <HomeAbout /> */}
        {/* <HomeProfile /> */}
        {/* <HomePricing /> */}
        <HomeVideo />
      </div>
    </ >
  );
}
Home.layout = IndexPage;