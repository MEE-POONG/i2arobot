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
        {/* <OurTools />
        <HomeAbout />
        <HomeProfile />
        <HomePricing /> */}
        {/* <HomeVideo /> */}

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
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <Slider {...settings}>
                                <div className="item profile">
                                    <div className="thumb">
                                        <a onClick={() => setSmShow(true)} >
                                            <Image src="./images/portfolio-05.jpg" alt="" />
                                            <div className="hover-effect">
                                                <div className="inner-content">
                                                    <h4>EXAMPLE PICTURE OF A LAWN MOWER</h4>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="item profile">
                                    <div className="thumb">
                                        <a onClick={() => setSmShow(true)} >
                                            <Image src="./images/portfolio-06.jpg" alt="" />
                                            <div className="hover-effect">
                                                <div className="inner-content">
                                                    <h4>EXAMPLE PICTURE OF A LAWN MOWER</h4>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="item profile">
                                    <div className="thumb">
                                        <a onClick={() => setSmShow(true)} >
                                            <Image src="./images/portfolio-07.jpg" alt="" />
                                            <div className="hover-effect">
                                                <div className="inner-content">
                                                    <h4>EXAMPLE PICTURE OF A LAWN MOWER</h4>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="item profile">
                                    <div className="thumb">
                                        <a onClick={() => setSmShow(true)} >
                                            <Image src="./images/portfolio-08.jpg" alt="" />
                                            <div className="hover-effect">
                                                <div className="inner-content">
                                                    <h4>EXAMPLE PICTURE OF A LAWN MOWER</h4>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="item profile">
                                    <div className="thumb">
                                        <a onClick={() => setSmShow(true)} >
                                            <Image src="./images/portfolio-09.jpg" alt="" />
                                            <div className="hover-effect">
                                                <div className="inner-content">
                                                    <h4>EXAMPLE PICTURE OF A LAWN MOWER</h4>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="item profile">
                                    <div className="thumb">
                                        <a onClick={() => setSmShow(true)} >
                                            <Image src="./images/portfolio-10.jpg" alt="" />
                                            <div className="hover-effect">
                                                <div className="inner-content">
                                                    <h4>EXAMPLE PICTURE OF A LAWN MOWER</h4>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="item profile">
                                    <div className="thumb">
                                        <a onClick={() => setSmShow(true)} >
                                            <Image src="./images/portfolio-11.jpg" alt="" />
                                            <div className="hover-effect">
                                                <div className="inner-content">
                                                    <h4>EXAMPLE PICTURE OF A LAWN MOWER</h4>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="item profile">
                                    <div className="thumb">
                                        <a onClick={() => setSmShow(true)} >
                                            <Image src="./images/portfolio-12.jpg" alt="" />
                                            <div className="hover-effect">
                                                <div className="inner-content">
                                                    <h4>EXAMPLE PICTURE OF A LAWN MOWER</h4>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="item profile">
                                    <div className="thumb">
                                        <a onClick={() => setSmShow(true)} >
                                            <Image src="./images/portfolio-13.jpg" alt="" />
                                            <div className="hover-effect">
                                                <div className="inner-content">
                                                    <h4>EXAMPLE PICTURE OF A LAWN MOWER</h4>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="item profile">
                                    <div className="thumb">
                                        <a onClick={() => setSmShow(true)} >
                                            <Image src="./images/portfolio-14.jpg" alt="" />
                                            <div className="hover-effect">
                                                <div className="inner-content">
                                                    <h4>EXAMPLE PICTURE OF A LAWN MOWER</h4>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="item profile">
                                    <div className="thumb">
                                        <a onClick={() => setSmShow(true)} >
                                            <Image src="./images/portfolio-16.jpg" alt="" />
                                            <div className="hover-effect">
                                                <div className="inner-content">
                                                    <h4>EXAMPLE PICTURE OF A LAWN MOWER</h4>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div >
            <Modal
                size=""
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm">

                <Carousel
                indicators={false}>
                    <Carousel.Item >
                        <Image src="./images/portfolio-05.jpg" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src="./images/portfolio-06.jpg" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src="./images/portfolio-07.jpg" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src="./images/portfolio-08.jpg" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src="./images/portfolio-09.jpg" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src="./images/portfolio-10.jpg" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src="./images/portfolio-11.jpg" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src="./images/portfolio-12.jpg" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src="./images/portfolio-13.jpg" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src="./images/portfolio-14.jpg" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src="./images/portfolio-16.jpg" alt="" />
                    </Carousel.Item>
                </Carousel>



            </Modal>
      </div>
    </ >
  );
}
Home.layout = IndexPage;