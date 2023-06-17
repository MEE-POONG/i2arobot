import Head from 'next/head';

import IndexLayout from "components/layouts/IndexLayout";


import { Card, Container, Form, Image, Carousel } from 'react-bootstrap';
import OurTools from 'container/home/our-tools';

export default function Catalog() {

  return (
    < >
      <Head>
        <title>รถตัดหญ้า บังคับวิทยุ i2arobot | I.O. Design & Home CO., LTD. | บริษัท ไอ.โอ.ดีไซน์ แอนด์ โฮม จำกัด</title>
        <meta
          name="description"
          content="I2AROBOT"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>

        <OurTools />

      </div>
    </ >
  );
}
Catalog.layout = IndexLayout;