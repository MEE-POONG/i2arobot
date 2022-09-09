import React, { useState } from 'react';
import { Image, Carousel, Button, Card } from 'react-bootstrap';
import { FaRegIdCard } from 'react-icons/fa';
import Slider from "react-slick";

export default function OurTools() {
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
                    <Image src="images/services-right-dec.png" alt="" />
                </div>
                <div className="container">
                    <div className="services-left-dec">
                        <Image src="images/services-left-dec.png" alt="" />
                    </div>
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="section-heading">
                                <h2>We <em>Provide</em> The Best Service With <span>Our Tools</span></h2>
                                <span>Our Services</span>
                            </div>
                        </div>
                    </div>
                    <Slider {...settings}>
                        <div className='owl-services'>
                            <Card className='item'>
                                <h4>Learn More about our Guidelines</h4>
                                <FaRegIdCard className='icon'/>
                                <p>Feel free to use this template for your business</p>
                            </Card>
                        </div>
                        <div className='owl-services'>
                            <Card className='item'>
                                <h4>Learn More about our Guidelines</h4>
                                <FaRegIdCard className='icon'/>
                                <p>Feel free to use this template for your business</p>
                            </Card>
                        </div>
                        <div className='owl-services'>
                            <Card className='item'>
                                <h4>Learn More about our Guidelines</h4>
                                <FaRegIdCard className='icon'/>
                                <p>Feel free to use this template for your business</p>
                            </Card>
                        </div>
                        <div className='owl-services'>
                            <Card className='item'>
                                <h4>Learn More about our Guidelines</h4>
                                <FaRegIdCard className='icon'/>
                                <p>Feel free to use this template for your business</p>
                            </Card>
                        </div>
                        <div className='owl-services'>
                            <Card className='item'>
                                <h4>Learn More about our Guidelines</h4>
                                <FaRegIdCard className='icon'/>
                                <p>Feel free to use this template for your business</p>
                            </Card>
                        </div>
                        <div className='owl-services'>
                            <Card className='item'>
                                <h4>Learn More about our Guidelines</h4>
                                <FaRegIdCard className='icon'/>
                                <p>Feel free to use this template for your business</p>
                            </Card>
                        </div>
                        <div className='owl-services'>
                            <Card className='item'>
                                <h4>Learn More about our Guidelines</h4>
                                <FaRegIdCard className='icon'/>
                                <p>Feel free to use this template for your business</p>
                            </Card>
                        </div>
                        <div className='owl-services'>
                            <Card className='item'>
                                <h4>Learn More about our Guidelines</h4>
                                <FaRegIdCard className='icon'/>
                                <p>Feel free to use this template for your business</p>
                            </Card>
                        </div>
                        <div className='owl-services'>
                            <Card className='item'>
                                <h4>Learn More about our Guidelines</h4>
                                <FaRegIdCard className='icon'/>
                                <p>Feel free to use this template for your business</p>
                            </Card>
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    );
}
