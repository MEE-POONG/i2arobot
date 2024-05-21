import Head from 'next/head';
import IndexLayout from "components/layouts/IndexLayout";
import { useRouter } from 'next/router';
import SlideHome from 'container/home/home-slide';
import HomeAbout from 'container/home/home-about';
import HomeVideo from 'container/video/video-views';
import VideoGallery from 'container/home/home-videogallery';
export default function HomePage() {
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
        <iframe src='https://me-prompt-technology.com/' style={{ width: '100%', height: '100vh' }}></iframe>
        {/* <SlideHome />
        <HomeAbout />
        <HomeVideo />
        <VideoGallery /> */}
      </div>
    </ >
  );
}
// HomePage.layout = IndexLayout;