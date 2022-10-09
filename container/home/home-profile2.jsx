import React, { useState } from 'react';
import { Image, Carousel, Button, Card } from 'react-bootstrap';
import { FaRegIdCard } from 'react-icons/fa';
import Slider from "react-slick";
import Modal from 'react-bootstrap/Modal';


export default function HomeProfile2() {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);
    const [viewLgShow, setViewLgShow] = useState({ test: false, img: "" });

    // viewLgShow = [{
    //     test: false,img:""
    // }]

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
                                        <a onClick={() => setViewLgShow({ ...viewLgShow, test: true, img: "./images/portfolio-05.jpg" })} >
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
                                        <a onClick={() => setViewLgShow({ ...viewLgShow, test: true, img: "./images/portfolio-06.jpg" })} >
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
                                        <a onClick={() => setViewLgShow({ ...viewLgShow, test: true, img: "./images/portfolio-07.jpg" })} >
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
                                        <a onClick={() => setViewLgShow({ ...viewLgShow, test: true, img: "./images/portfolio-08.jpg" })} >
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
                                        <a onClick={() => setViewLgShow({ ...viewLgShow, test: true, img: "./images/portfolio-09.jpg" })} >
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
                                        <a onClick={() => setViewLgShow({ ...viewLgShow, test: true, img: "./images/portfolio-10.jpg" })} >
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
                                        <a onClick={() => setViewLgShow({ ...viewLgShow, test: true, img: "./images/portfolio-11.jpg" })} >
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
                                        <a onClick={() => setViewLgShow({ ...viewLgShow, test: true, img: "./images/portfolio-12.jpg" })} >
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
                                        <a onClick={() => setViewLgShow({ ...viewLgShow, test: true, img: "./images/portfolio-13.jpg" })} >
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
                                        <a onClick={() => setViewLgShow({ ...viewLgShow, test: true, img: "./images/portfolio-14.jpg" })} >
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
                                        <a onClick={() => setViewLgShow({ ...viewLgShow, test: true, img: "./images/portfolio-16.jpg" })} >
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
                className='show-img'
                fullscreen={true}
                show={viewLgShow.test}
                onHide={() => setViewLgShow({ ...viewLgShow, test: false, img: "" })}
                aria-labelledby="example-modal-sizes-title-sm">
                <Button className='bgclcolor' variant="primary" onClick={() => setViewLgShow({ ...viewLgShow, test: false, img: "" })}>
                    Close
                </Button>
                <Image src={viewLgShow.img} alt="" />

                {/* <Carousel indicators={false}
                    wrap={false}>
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
                </Carousel> */}




            </Modal>
        </>
    );
}
