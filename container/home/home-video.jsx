import React, { useState } from 'react';
import { Image, Carousel, Button, Card } from 'react-bootstrap';
import { FaRegIdCard } from 'react-icons/fa';
import Slider from "react-slick";

export default function HomeVideo() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <>
            <div id="video" className="our-videos section">
                <div className="videos-left-dec">
                    <Image src="./images/videos-left-dec.png" alt="" />
                </div>
                <div className="videos-right-dec">
                    <Image src="./images/videos-right-dec.png" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="naccs">
                                <div className="grid">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <ul className="nacc">
                                                <li className="active">
                                                    <div>
                                                        <div className="thumb">
                                                            <iframe width="100%" height="auto" src="https://www.youtube.com/embed/JynGuQx4a1Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                            <div className="overlay-effect">
                                                                <a href="#"><h4>Project One</h4></a>
                                                                <span>SEO &amp; Marketing</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div>
                                                        <div className="thumb">
                                                            <iframe width="100%" height="auto" src="https://www.youtube.com/embed/RdJBSFpcO4M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                            <div className="overlay-effect">
                                                                <a href="#"><h4>Second Project</h4></a>
                                                                <span>Advertising &amp; Marketing</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div>
                                                        <div className="thumb">
                                                            <iframe width="100%" height="auto" src="https://www.youtube.com/embed/ZlfAjbQiL78" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                            <div className="overlay-effect">
                                                                <a href="#"><h4>Project Three</h4></a>
                                                                <span>Digital &amp; Marketing</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div>
                                                        <div className="thumb">
                                                            <iframe width="100%" height="auto" src="https://www.youtube.com/embed/mx1WseE7-0Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                            <div className="overlay-effect">
                                                                <a href="#"><h4>Fourth Project</h4></a>
                                                                <span>SEO &amp; Advertising</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="menu">
                                                <div className="active">
                                                    <div className="thumb">
                                                        <Image src="./images/video-thumb-01.png" alt="" />
                                                        <div className="inner-content">
                                                            <h4>Project One</h4>
                                                            <span>SEO &amp; Marketing</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="thumb">
                                                        <Image src="./images/video-thumb-02.png" alt="" />
                                                        <div className="inner-content">
                                                            <h4>Second Project</h4>
                                                            <span>Advertising &amp; Marketing</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="thumb">
                                                        <Image src="./images/video-thumb-03.png" alt="Marketing" />
                                                        <div className="inner-content">
                                                            <h4>Project Three</h4>
                                                            <span>Digital &amp; Marketing</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="thumb">
                                                        <Image src="./images/video-thumb-04.png" alt="SEO Work" />
                                                        <div className="inner-content">
                                                            <h4>Fourth Project</h4>
                                                            <span>SEO &amp; Advertising</span>
                                                        </div>
                                                    </div>
                                                </div>
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
