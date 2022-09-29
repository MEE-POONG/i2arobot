import React, { useState } from 'react';
import { Image, Carousel, Button, Card } from 'react-bootstrap';
import { FaRegIdCard } from 'react-icons/fa';
import Slider from "react-slick";

export default function HomeService() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <>
            <div id="services" className="our-services section">
                <div className="services-right-dec">
                    <Image src="./images/services-right-dec.png" alt=""/>
                </div>
                <div className="container">
                    <div className="services-left-dec">
                        <Image src="./images/services-left-dec.png" alt=""/>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="section-heading">
                                <h2>ให้เรา <em>จัดเตรียม</em> บริการที่ดีที่สุดด้วย <span>เครื่องมือของเรา</span></h2>
                                <span>บริการของเรา</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="owl-carousel owl-services">
                                <div className="item">
                                    <h4>Learn More about our Guidelines</h4>
                                    <div className="icon"><Image src="./images/service-icon-01.png" alt=""/></div>
                                    <p>Feel free to use this template for your business</p>
                                </div>
                                <div className="item">
                                    <h4>Develop The Best Strategy for Business</h4>
                                    <div className="icon"><Image src="./images/service-icon-02.png" alt=""/></div>
                                    <p>Get to know more about the topic in details</p>
                                </div>
                                <div className="item">
                                    <h4>UI / UX Design and Development</h4>
                                    <div className="icon"><Image src="./images/service-icon-03.png" alt=""/></div>
                                    <p>Get to know more about the topic in details</p>
                                </div>
                                <div className="item">
                                    <h4>Discover &amp; Explore our SEO Tips</h4>
                                    <div className="icon"><Image src="./images/service-icon-04.png" alt=""/></div>
                                    <p>Feel free to use this template for your business</p>
                                </div>
                                <div className="item">
                                    <h4>Optimizing your websites for Speed</h4>
                                    <div className="icon"><Image src="./images/service-icon-01.png" alt=""/></div>
                                    <p>Get to know more about the topic in details</p>
                                </div>
                                <div className="item">
                                    <h4>See The Strategy In The Market</h4>
                                    <div className="icon"><Image src="./images/service-icon-02.png" alt=""/></div>
                                    <p>Get to know more about the topic in details</p>
                                </div>
                                <div className="item">
                                    <h4>Best Content Ideas for your pages</h4>
                                    <div className="icon"><Image src="./images/service-icon-03.png" alt=""/></div>
                                    <p>Feel free to use this template for your business</p>
                                </div>
                                <div className="item">
                                    <h4>Optimizing Speed for your web pages</h4>
                                    <div className="icon"><Image src="./images/service-icon-04.png" alt=""/></div>
                                    <p>Get to know more about the topic in details</p>
                                </div>
                                <div className="item">
                                    <h4>Accessibility for mobile viewing</h4>
                                    <div className="icon"><Image src="./images/service-icon-01.png" alt=""/></div>
                                    <p>Get to know more about the topic in details</p>
                                </div>
                                <div className="item">
                                    <h4>Content Ideas for your next project</h4>
                                    <div className="icon"><Image src="./images/service-icon-02.png" alt=""/></div>
                                    <p>Feel free to use this template for your business</p>
                                </div>
                                <div className="item">
                                    <h4>UI &amp; UX Design &amp; Development</h4>
                                    <div className="icon"><Image src="./images/service-icon-03.png" alt=""/></div>
                                    <p>Get to know more about the topic in details</p>
                                </div>
                                <div className="item">
                                    <h4>Discover the digital marketing trend</h4>
                                    <div className="icon"><Image src="./images/service-icon-04.png" alt=""/></div>
                                    <p>Get to know more about the topic in details</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
