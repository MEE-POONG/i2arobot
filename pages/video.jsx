import Head from 'next/head';

import IndexPage from "components/layouts/IndexPage";


import { useRouter } from 'next/router';

import VideoViews from 'container/video/video-views';
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
        <VideoViews />
      </div>
    </ >
  );
}
Home.layout = IndexPage;