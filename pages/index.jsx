import Head from 'next/head';

import IndexPage from "components/layouts/IndexPage";

import { useRecoilState, useSetRecoilState } from 'recoil';

import { useRouter } from 'next/router';
import axios from 'axios';
import { useState } from 'react'

import { Card, Container, Form, Image, Carousel } from 'react-bootstrap';
import SlideHome from 'container/home/slide-home';
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
      </div>
    </ >
  );
}
Home.layout = IndexPage;