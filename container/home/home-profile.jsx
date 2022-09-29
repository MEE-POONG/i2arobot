import React, { useState } from 'react';
import { Image, Carousel, Button, Card } from 'react-bootstrap';
import { FaRegIdCard } from 'react-icons/fa';
import Slider from "react-slick";

export default function HomeProfile() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <>
            <div id="portfolio" className="our-portfolio section">
                <div className="portfolio-left-dec">
                    <Image src="images/portfolio-left-dec.png" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="section-heading">
                                <h2>คุณสามารถเลือกซื้อสินค้าเราได้เลย <em>ทางเรายินดีให้บริการ</em> <span>สำหรับคุณลูกค้า</span></h2>
                                <span>นี่คือผลงานของเรา</span>
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
                                        <Image src="./images/portfolio-02.jpg" alt="" />
                                        <div className="hover-effect">
                                            <div className="inner-content">
                                                <a href="#"><h4>Project Two</h4></a>
                                                <span>SEO &amp; Marketing</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item profile">
                                    <div className="thumb">
                                        <Image src="./images/portfolio-03.jpg" alt="" />
                                        <div className="hover-effect">
                                            <div className="inner-content">
                                                <a rel="sponsored" href="https://templatemo.com/tm-562-space-dynamic" target="_parent"><h4>Third Project</h4></a>
                                                <span>Space Dynamic SEO</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item profile">
                                    <div className="thumb">
                                        <Image src="./images/portfolio-04.jpg" alt="" />
                                        <div className="hover-effect">
                                            <div className="inner-content">
                                                <a href="#"><h4>Project Four</h4></a>
                                                <span>Website Marketing</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item profile">
                                    <div className="thumb">
                                        <Image src="./images/portfolio-01.jpg" alt="" />
                                        <div className="hover-effect">
                                            <div className="inner-content">
                                                <a href="#"><h4>Fifth Project</h4></a>
                                                <span>Digital Assets</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item profile">
                                    <div className="thumb">
                                        <Image src="./images/portfolio-02.jpg" alt="" />
                                        <div className="hover-effect">
                                            <div className="inner-content">
                                                <a href="#"><h4>Sixth Project</h4></a>
                                                <span>SEO &amp; Marketing</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item profile">
                                    <div className="thumb">
                                        <Image src="./images/portfolio-03.jpg" alt="" />
                                        <div className="hover-effect">
                                            <div className="inner-content">
                                                <a href="#"><h4>7th Project</h4></a>
                                                <span>SEO &amp; Marketing</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item profile">
                                    <div className="thumb">
                                        <Image src="./images/portfolio-04.jpg" alt="" />
                                        <div className="hover-effect">
                                            <div className="inner-content">
                                                <a href="#"><h4>8th Project</h4></a>
                                                <span>SEO &amp; Marketing</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item profile">
                                    <div className="thumb">
                                        <Image src="./images/portfolio-01.jpg" alt="" />
                                        <div className="hover-effect">
                                            <div className="inner-content">
                                                <a href="#"><h4>9th Project</h4></a>
                                                <span>SEO &amp; Marketing</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item profile">
                                    <div className="thumb">
                                        <Image src="./images/portfolio-02.jpg" alt="" />
                                        <div className="hover-effect">
                                            <div className="inner-content">
                                                <a href="#"><h4>Project Ten</h4></a>
                                                <span>SEO &amp; Marketing</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item profile">
                                    <div className="thumb">
                                        <Image src="./images/portfolio-03.jpg" alt="" />
                                        <div className="hover-effect">
                                            <div className="inner-content">
                                                <a href="#"><h4>Project Eleven</h4></a>
                                                <span>SEO &amp; Marketing</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item profile">
                                    <div className="thumb">
                                        <Image src="./images/portfolio-04.jpg" alt="" />
                                        <div className="hover-effect">
                                            <div className="inner-content">
                                                <a href="#"><h4>12th Project</h4></a>
                                                <span>SEO &amp; Marketing</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}
