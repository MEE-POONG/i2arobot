import React, { useState } from 'react';
import { Image, Carousel, Button } from 'react-bootstrap';
import { FaPhoneAlt } from "react-icons/fa";

export default function SlideHome() {
    const [indexCarousel, setIndexCarousel] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndexCarousel(selectedIndex);
    };
    return (
        <>
            <div id="top" className="main-banner">
                <div className="row">
                    <div className="col-lg-6">
                        <Carousel activeIndex={indexCarousel} onSelect={handleSelect} controls={false} indicators={false} indicatorLabels={[3]}>
                            <Carousel.Item >
                                <Image src={'images/logo.png'} alt="logo-nav" className='opacity-0' />
                                <Carousel.Caption className="item header-text text-start b-0 pb-0">
                                    <h6>Welcome to Onix Digital</h6>
                                    <h2>Build <em>your website</em> the best in <span>SEO</span>?</h2>
                                    <p>This is a professional looking HTML Bootstrap 5 website template brought to you by TemplateMo website.</p>
                                    <div className="down-buttons">
                                        <div className="main-blue-button-hover">
                                            <a href="#contact">Message Us Now</a>
                                        </div>
                                        <div className="call-button">
                                            <a href="#"><i className="fa fa-phone"><FaPhoneAlt /></i> 099 -112-4108</a>
                                        </div>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={'images/logo.png'} alt="logo-nav" className='opacity-0' />
                                <Carousel.Caption className="item header-text text-start b-0 pb-0">
                                    <h6>Online Marketing</h6>
                                    <h2>Get the <em>best ideas</em> for <span>your website</span></h2>
                                    <p>You are NOT allowed to redistribute this template ZIP file on any Free CSS collection websites. Contact us for more info. Thank you.</p>
                                    <div className="down-buttons">
                                        <div className="main-blue-button-hover">
                                            <a href="#services">Our Services</a>
                                        </div>
                                        <div className="call-button">
                                            <a href="#"><i className="fa fa-phone"><FaPhoneAlt /></i> 090-080-0760</a>
                                        </div>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={'images/logo.png'} alt="logo-nav" className='opacity-0' />
                                <Carousel.Caption className="item header-text text-start b-0 pb-0">
                                    <h6>Online Marketing</h6>
                                    <h2>Get the <em>best ideas</em> for <span>your website</span></h2>
                                    <p>You are NOT allowed to redistribute this template ZIP file on any Free CSS collection websites. Contact us for more info. Thank you.</p>
                                    <div className="down-buttons">
                                        <div className="main-blue-button-hover">
                                            <a href="#services">Our Services</a>
                                        </div>
                                        <div className="call-button">
                                            <a href="#"><i className="fa fa-phone"><FaPhoneAlt /></i> 090-080-0760</a>
                                        </div>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                        <div className="carousel-indicators position-relative d-flex justify-content-start owl-dots">
                            <Button bsPrefix={indexCarousel === 0 ? "owl-dot active" : "owl-dot"} onClick={() => { setIndexCarousel(0) }} aria-label="Slide 1"></Button>
                            <Button bsPrefix={indexCarousel === 1 ? "owl-dot active" : "owl-dot"} onClick={() => { setIndexCarousel(1) }} aria-label="Slide 2"></Button>
                            <Button bsPrefix={indexCarousel === 2 ? "owl-dot active" : "owl-dot"} onClick={() => { setIndexCarousel(2) }} aria-label="Slide 3"></Button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}
