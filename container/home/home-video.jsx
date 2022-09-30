import React, { useState } from 'react';
import { Image, Carousel, Button, Nav, Tab, Row, Col } from 'react-bootstrap';
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
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <div className="naccs">
                            <div className="grid">
                                <Row>
                                    <Col lg="8">
                                        <Tab.Content className="nacc">
                                            <Tab.Pane eventKey="first">
                                                <div className="thumb">
                                                    <iframe width="100%" height="auto" src="https://www.youtube.com/embed/JynGuQx4a1Y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                                    <div className="overlay-effect">
                                                        <a href="#"><h4>Project One</h4></a>
                                                        <span>SEO &amp; Marketing</span>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <div className="thumb">
                                                    <iframe width="100%" height="auto" src="https://www.youtube.com/embed/RdJBSFpcO4M" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                                    <div className="overlay-effect">
                                                        <a href="#"><h4>Second Project</h4></a>
                                                        <span>Advertising &amp; Marketing</span>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <div className="thumb">
                                                    <iframe width="100%" height="auto" src="https://www.youtube.com/embed/ZlfAjbQiL78" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                                    <div className="overlay-effect">
                                                        <a href="#"><h4>Project Three</h4></a>
                                                        <span>Digital &amp; Marketing</span>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="fourth">
                                                <div className="thumb">
                                                    <iframe width="100%" height="auto" src="https://www.youtube.com/embed/mx1WseE7-0Y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                                    <div className="overlay-effect">
                                                        <a href="#"><h4>Fourth Project</h4></a>
                                                        <span>SEO &amp; Advertising</span>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                    <Col lg="4">
                                        <div className="menu">
                                            <Nav variant="pills" className="flex-column">
                                                <Nav.Item >
                                                    <Nav.Link eventKey="first" className='thumb p-0'>
                                                        <Image src="./images/video-thumb-01.png" alt="" />
                                                        <div className="inner-content">
                                                            <h4>Project One</h4>
                                                            <span>SEO &amp; Marketing</span>
                                                        </div>
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item >
                                                    <Nav.Link eventKey="second" className='thumb p-0'>
                                                        <Image src="./images/video-thumb-02.png" alt="" />
                                                        <div className="inner-content">
                                                            <h4>Second Project</h4>
                                                            <span>Advertising &amp; Marketing</span>
                                                        </div>
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="third" className='thumb p-0'>
                                                        <Image src="./images/video-thumb-03.png" alt="Marketing" />
                                                        <div className="inner-content">
                                                            <h4>Project Three</h4>
                                                            <span>Digital &amp; Marketing</span>
                                                        </div>
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="fourth" className='thumb p-0'>
                                                        <Image src="./images/video-thumb-04.png" alt="SEO Work" />
                                                        <div className="inner-content">
                                                            <h4>Fourth Project</h4>
                                                            <span>SEO &amp; Advertising</span>
                                                        </div>
                                                    </Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Tab.Container>
                </div>
            </div>
            <div id="subscribe" className="subscribe">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner-content">
                                <div className="row">
                                    <div className="col-lg-10 offset-lg-1">
                                        <h2>Know Your Website SEO Score by Email</h2>
                                        <form id="subscribe" action="" method="get">
                                            <input type="text" name="website" id="website" placeholder="Your Website URL" required="" />
                                            <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email"
                                                required="" />
                                            <button type="submit" id="form-submit" className="main-button ">Subscribe</button>
                                        </form>
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
