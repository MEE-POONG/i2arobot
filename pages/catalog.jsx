import Head from 'next/head';

import IndexLayout from "components/layouts/IndexLayout";

import { useRecoilState, useSetRecoilState } from 'recoil';

import { useRouter } from 'next/router';
import axios from 'axios';
import { useState } from 'react'

import { Card, Container, Form, Image, Carousel } from 'react-bootstrap';
import SlideHome from 'container/home/home-banner';
import OurTools from 'container/home/our-tools';
import HomeProfile from 'container/home/home-slide';
import HomePricing from 'container/home/home-pricing';
import HomeAbout from 'container/home/home-about';
import HomeVideo from 'container/video/video-views';
export default function Catalog() {
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
Catalog.layout = IndexLayout;