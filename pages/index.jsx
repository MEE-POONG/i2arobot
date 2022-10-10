import Head from 'next/head';

import IndexPage from "components/layouts/IndexPage";

import { useRouter } from 'next/router';

import SlideHome from 'container/home/home-banner';

import OurTools from 'container/home/our-tools';
import HomeProfile from 'container/home/home-profile';
import HomePricing from 'container/home/home-pricing';
import Homenext from 'container/home/home-next';


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
        <SlideHome />
        {/* <OurTools /> */}
        <HomeAbout />
        {/* <HomeProfile /> */}
        {/* <HomePricing /> */}
        {/* <HomeVideo /> */}
        <Homenext />
      </div>
    </ >
  );
}
Home.layout = IndexPage;