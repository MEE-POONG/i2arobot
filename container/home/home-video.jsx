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
                                                    <iframe width="100%" height="auto" src="https://www.youtube.com/embed/5ioJMT6nsbc" title="รถตัดหญ้าบังคับวิทยุ" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                                    <div className="overlay-effect">
                                                        <a href="#"><h4>Potential</h4></a>
                                                        <span>ศักยภาพในการตัดหญ้า</span>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <div className="thumb">
                                                    <iframe width="100%" height="auto" src="https://www.youtube.com/embed/Q6LyqP4j7_o" title="14 กรกฎาคม ค.ศ. 2022" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                                    <div className="overlay-effect">
                                                        <a href="#"><h4>Strong</h4></a>
                                                        <span>ความแข็งแรงทนทานในการใช้งาน</span>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <div className="thumb">
                                                    <iframe width="100%" height="auto" src="https://www.youtube.com/embed/V9EILNde0cg" title="รถตัดหญ้างบังคับวิทยุ 13แรง ใบ80cm" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                    <div className="overlay-effect">
                                                        <a href="#"><h4>Control</h4></a>
                                                        <span>ง่ายการควมคุม</span>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="fourth">
                                                <div className="thumb">
                                                    <iframe width="100%" height="auto" src="https://www.youtube.com/embed/dJl9LG-4FV0" title="สเปคเบื้องต้นรถตัดหญ้าบังคับวิทยุ ไอ.โอดีไซน์" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                                    <div className="overlay-effect">
                                                        <a href="#"><h4>Spec</h4></a>
                                                        <span>สเปคเบื้องต้นรถตัดหญ้าบังคับวิทยุ</span>
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
                                                        <Image src="./images/video-thumb-335.jpg" alt="" />
                                                        <div className="inner-content">
                                                            <h4>Potential</h4>
                                                            <span>ศักยภาพในการตัดหญ้า</span>
                                                        </div>
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item >
                                                    <Nav.Link eventKey="second" className='thumb p-0'>
                                                        <Image src="./images/video-thumb-337.jpg" alt="" />
                                                        <div className="inner-content">
                                                            <h4>Strong</h4>
                                                            <span>ความแข็งแรงทนทานในการใช้งาน</span>
                                                        </div>
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="third" className='thumb p-0'>
                                                        <Image src="./images/video-thumb-336.jpg" alt="Marketing" />
                                                        <div className="inner-content">
                                                            <h4>Control</h4>
                                                            <span>ง่ายการควมคุม</span>
                                                        </div>
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="fourth" className='thumb p-0'>
                                                        <Image src="./images/video-thumb-339.jpg" alt="SEO Work" />
                                                        <div className="inner-content">
                                                            <h4>Spec</h4>
                                                            <span>สเปคเบื้องต้นรถตัดหญ้าบังคับวิทยุ</span>
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
