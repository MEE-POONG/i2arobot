import Head from 'next/head';

import IndexPage from "components/layouts/IndexPage";

import { useRecoilState, useSetRecoilState } from 'recoil';

import { useRouter } from 'next/router';
import axios from 'axios';
import { useState } from 'react'

import { Card, Container, Form, Image, Carousel } from 'react-bootstrap';
import SlideHome from 'container/home/slide-home';
import OurTools from 'container/home/our-tools';
import HomeProfile from 'container/home/home-profile';
import HomeService from 'container/home/home-service';
import HomeAbout from 'container/home/home-about';
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
        <HomeAbout/>
        <HomeProfile />
        <HomeService/>
      </div>
    </ >
  );
}
Home.layout = IndexPage;