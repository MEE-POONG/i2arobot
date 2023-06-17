import Head from 'next/head';

import IndexLayout from "components/layouts/IndexLayout";


import { useRouter } from 'next/router';

import VideoViews from 'container/video/video-views';
export default function Home() {
  const router = useRouter();
  return (
    < >
      <Head>
        <title>รถตัดหญ้า บังคับวิทยุ I2arobot | I.O. Design & Home CO., LTD. | บริษัท ไอ.โอ.ดีไซน์ แอนด์ โฮม จำกัด</title>
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
Home.layout = IndexLayout;