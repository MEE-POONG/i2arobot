import Head from 'next/head';

import IndexPage from "components/layouts/IndexPage";

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
import HomeVideo from 'container/home/home-video';
export default function Home() {
  const router = useRouter();
  const images_1 = [
    '/images/portfolio-05.jpg',
    '/images/portfolio-09.jpg',
    '/images/portfolio-13.jpg',
    '/images/portfolio-14.jpg'
  ]
  const images_2 = [
    '/images/portfolio-20.jpg',
    '/images/portfolio-21.jpg',
    '/images/portfolio-23.jpg',
    '/images/portfolio-24.jpg',
    '/images/portfolio-25.jpg',
  ]
  const images_3 = [
    '/images/portfolio-31.jpg',
    '/images/portfolio-32.jpg',
    '/images/portfolio-33.jpg',
    '/images/portfolio-16.jpg',
  ]


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
        <div id="portfolio" className="our-portfolio section">
          <div className="portfolio-left-dec">
            <Image src="images/portfolio-left-dec.png" alt="" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="section-heading">
                  <h2><em>ตัวอย่างรูปภาพ</em> <span>รถตัดหญ้า</span></h2>
                  <span>Example picture of a lawn mower</span>
                </div>
              </div>
            </div>
          </div>
          <HomeProfile list={images_1} />
          <HomeProfile list={images_2} />
          <HomeProfile list={images_3} />
        </div >
      </div>
    </ >
  );
}
Home.layout = IndexPage;