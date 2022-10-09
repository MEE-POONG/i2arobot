import Head from 'next/head';

import IndexPage from "components/layouts/IndexPage";

import { useRecoilState, useSetRecoilState } from 'recoil';

import { useRouter } from 'next/router';
import axios from 'axios';
import { useState } from 'react'

import { Card, Container, Form, Image, Carousel } from 'react-bootstrap';
import SlideHome from 'container/home/home-banner';
import OurTools from 'container/home/our-tools';
import HomeProfile from 'container/home/home-profile';
import HomePricing from 'container/home/home-pricing';
import HomeAbout from 'container/home/home-about';
import HomeVideo from 'container/home/home-video';
<<<<<<<< HEAD:pages/catalog.jsx
export default function Catalog() {
========
export default function catalog() {
>>>>>>>> 7fdc1f3e02ff93e03810a06241aff2251f95de91:pages/allcatalog.jsx
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

        <OurTools />

      </div>
    </ >
  );
}
<<<<<<<< HEAD:pages/catalog.jsx
Catalog.layout = IndexPage;
========

catalog.layout = IndexPage;
>>>>>>>> 7fdc1f3e02ff93e03810a06241aff2251f95de91:pages/allcatalog.jsx
