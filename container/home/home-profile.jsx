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
        slidesToScroll: 3
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
                                <h2>Our Recent <em>Projects</em> &amp; Case Studies <span>for Clients</span></h2>
                                <span>Our Portfolio</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="owl-carousel owl-portfolio">
                                <div className="item">
                                    <div className="thumb">
                                        <Image src="images/portfolio-01.jpg" alt="" />
                                        <div className="hover-effect">
                                            <div className="inner-content">
                                                <a rel="sponsored" href="https://templatemo.com/tm-564-plot-listing" target="_parent"><h4>First Project</h4></a>
                                                <span>Plot Listing</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="thumb">
                                        <Image src="images/portfolio-02.jpg" alt="" />
                                        <div className="hover-effect">
                                            <div className="inner-content">
                                                <a href="#"><h4>Project Two</h4></a>
                                                <span>SEO &amp; Marketing</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="thumb">
                                        <Image src="images/portfolio-03.jpg" alt="" />
                                        <Image src={'images/about-left-image.png'} alt="Two Girls working together" />

                                        <div className="hover-effect">
                                            <div className="inner-content">
                                                <a rel="sponsored" href="https://templatemo.com/tm-562-space-dynamic" target="_parent"><h4>Third Project</h4></a>
                                                <span>Space Dynamic SEO</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="thumb">
                                        <Image src="images/portfolio-04.jpg" alt="" />
                                        <div className="hover-effect">
                                            <div className="inner-content">
                                                <a href="#"><h4>Project Four</h4></a>
                                                <span>Website Marketing</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="thumb">
                                        <Image src="images/portfolio-01.jpg" alt="" />
                                        <div className="hover-effect">
                                            <div className="inner-content">
                                                <a href="#"><h4>Fifth Project</h4></a>
                                                <span>Digital Assets</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="thumb">
                                        <Image src="images/portfolio-02.jpg" alt="" />
                                        <div className="hover-effect">
                                            <div className="inner-content">
                                                <a href="#"><h4>Sixth Project</h4></a>
                                                <span>SEO &amp; Marketing</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="thumb">
                                        <Image src="images/portfolio-03.jpg" alt="" />
                                        <div className="hover-effect">
                                            <div className="inner-content">
                                                <a href="#"><h4>7th Project</h4></a>
                                                <span>SEO &amp; Marketing</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="thumb">
                                        <Image src="images/portfolio-04.jpg" alt="" />
                                        <div className="hover-effect">
                                            <div className="inner-content">
                                                <a href="#"><h4>8th Project</h4></a>
                                                <span>SEO &amp; Marketing</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="thumb">
                                        <Image src="images/portfolio-01.jpg" alt="" />
                                        <div className="hover-effect">
                                            <div className="inner-content">
                                                <a href="#"><h4>9th Project</h4></a>
                                                <span>SEO &amp; Marketing</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="thumb">
                                        <Image src="images/portfolio-02.jpg" alt="" />
                                        <div className="hover-effect">
                                            <div className="inner-content">
                                                <a href="#"><h4>Project Ten</h4></a>
                                                <span>SEO &amp; Marketing</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="thumb">
                                        <Image src="images/portfolio-03.jpg" alt="" />
                                        <div className="hover-effect">
                                            <div className="inner-content">
                                                <a href="#"><h4>Project Eleven</h4></a>
                                                <span>SEO &amp; Marketing</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="thumb">
                                        <Image src="images/portfolio-04.jpg" alt="" />
                                        <div className="hover-effect">
                                            <div className="inner-content">
                                                <a href="#"><h4>12th Project</h4></a>
                                                <span>SEO &amp; Marketing</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
