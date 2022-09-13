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
                                <h2>Our Recent <em>Projects</em> &amp; Case Studies <span>for Clients</span></h2>
                                <span>Our Portfolio</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <Slider {...settings}>
                                <Card className="owl-item item">
                                    <div className="thumb">
                                        <Image src="images/portfolio-01.jpg" alt="" />
                                        <div className="hover-effect">
                                            <div className="inner-content">
                                                <a rel="sponsored" href="https://templatemo.com/tm-564-plot-listing" target="_parent"><h4>First Project</h4></a>
                                                <span>Plot Listing</span>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                                <div className="owl-item item">
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
                                <div className="owl-item item">
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
                                <div className="owl-item item">
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
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
