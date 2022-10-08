import React, { useState } from 'react';
import { Image, Carousel, Button, Card } from 'react-bootstrap';
import { FaRegIdCard } from 'react-icons/fa';
import Slider from "react-slick";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Modal from 'react-bootstrap/Modal';

export default function OurTools() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    const [smShow, setSmShow] = useState({show:false,img:""});
    const [lgShow, setLgShow] = useState(false);
    const [viewCatalog, setViewCatalog] = useState({catalog:false,img:""})
    return (
        <>
            <div id="services" className="our-services section">
                <div className="services-right-dec">
                    <Image src="images/services-right-dec.png" alt="Girl in a jacket" height="200" />
                </div>
                <div className="container">
                    <div className="services-left-dec">
                        {/* <Image src="images/services-left-dec.png" alt="Girl in a jacket" height="200" /> */}
                    </div>
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="section-heading">
                                <h2>สินค้า <em>ของเรา</em> มีให้เลือกมากมาย </h2>
                                <h2>เลือกดูสินค้า<span>ด้านล่างได้เลย</span></h2>
                                <span>Catalog</span>
                            </div>
                        </div>
                    </div>

                    <div class="container">

                        <Container>

                            <Row>



                                <Col md={3} sm={4} >
                                    <div className='owl-services'>

                                        <a onClick={() => setViewCatalog({...viewCatalog,catalog:true,img:"./images/LINE_ALBUM_220603_3.jpg"})}>
                                            <Image src="./images/LINE_ALBUM_220603_3.jpg" alt="" />
                                        </a>

                                        <h5 className='color-ff695f'>Catalog 1</h5>
                                        <p>0 บาท</p>

                                    </div>

                                </Col>
                                <Col md={3} sm={4} >
                                    <div className='owl-services'>
                                        <a onClick={() => setViewCatalog({...viewCatalog,catalog:true,img:"./images/LINE_ALBUM_220603_2.jpg"})}>
                                            <Image src="./images/LINE_ALBUM_220603_2.jpg" alt="" />
                                        </a>
                                        <h5 className='color-ff695f'>Catalog 2</h5>
                                        <p>0 บาท</p>

                                    </div>

                                </Col>

                                <Col md={3} sm={4}  >
                                    <div className='owl-services'>
                                        <a onClick={() => setViewCatalog({...viewCatalog,catalog:true,img:"./images/LINE_ALBUM_220603_1.jpg"})}>
                                            <Image src="./images/LINE_ALBUM_220603_1.jpg" alt="" />
                                        </a>
                                        <h5 className='color-ff695f'>Catalog 3</h5>

                                        <p>0 บาท</p>

                                    </div>
                                </Col>

                                <Col md={3} sm={4} >
                                    <div className='owl-services'>
                                        <a onClick={() => setViewCatalog({...viewCatalog,catalog:true,img:"./images/LINE_ALBUM_220603_0.jpg"})}>
                                            <Image src="./images/LINE_ALBUM_220603_0.jpg" alt="" />
                                        </a>
                                        <h5 className='color-ff695f'>Catalog 4</h5>
                                        <p>0 บาท</p>

                                    </div>
                                </Col>


                            </Row>
                        </Container>
                        <Modal
                            size="md"
                            show={viewCatalog.catalog}
                            onHide={() => setViewCatalog({...viewCatalog,catalog:false,img:""})}
                            aria-labelledby="example-modal-sizes-title-sm"
                        >                            <Image src={viewCatalog.img} alt="" />
                           
                        </Modal>
                        
                        {/* <Image src="./images/LINE_ALBUM_220603_3.jpg" alt="" /> */}
                        {/* <Image src="./images/LINE_ALBUM_220603_1.jpg" alt="" />
                            <Image src="./images/LINE_ALBUM_220603_0.jpg" alt="" /> */}

                        {/* <Row>
                                <Col md={4} sm={4} lg={3}>
                                    <div className='owl-services'>
                                        <Card className='item mx-0 px-0'>

                                            <Image src="./images/1.png" alt="Girl in a jacket" height="200" />
                                            <h5 className='color-ff695f'>ล้อรถตัดหญ้า</h5>
                                            <p>1200 บาท</p>
                                        </Card>
                                    </div>
                                </Col>

                                <Col md={4} sm={4} lg={3}>
                                    <div className='owl-services'>
                                        <Card className='item mx-0 px-0'>
                                            <Image src="./images/2.png" alt="Girl in a jacket" height="200" />
                                            <h5 className='color-ff695f'>ดุมล้อรถตัดหญ้า</h5>
                                            <p>950 บาท =</p>
                                        </Card>
                                    </div>
                                </Col>
                                <Col md={4} sm={4} lg={3}>
                                    <div className='owl-services'>
                                        <Card className='item mx-0 px-0'>



                                            <Image src="./images/3.png" alt="Girl in a jacket" height="200" />
                                            <h5 className='color-ff695f'>มอเตอร์ล้อรถตัดหญ้า</h5>
                                            <p>1800 บาท </p>
                                        </Card>
                                    </div>
                                </Col>
                                <Col md={4} sm={4} lg={3}>
                                    <div className='owl-services'>
                                        <Card className='item mx-0 px-0'>



                                            <Image src="./images/4.png" alt="Girl in a jacket" height="200" />
                                            <h5 className='color-ff695f'>มอเตอร์ล้อรถตัดหญ้า</h5>
                                            <p>3300 บาท</p>
                                        </Card>
                                    </div>
                                </Col>

                                <Col md={4} sm={4} lg={3}>
                                    <div className='owl-services'>
                                        <Card className='item mx-0 px-0'>

                                            <Image src="./images/5.png" height="200" />
                                            <h5 className='color-ff695f'>มอเตอร์แกนชักรถตัดหญ้า</h5>
                                            <p>1750 บาท</p>
                                        </Card>
                                    </div>
                                </Col>
                                <Col md={4} sm={4} lg={3}>
                                    <div className='owl-services'>
                                        <Card className='item mx-0 px-0'>

                                            <Image src="./images/6.png" alt="Girl in a jacket" height="200" />
                                            <h5 className='color-ff695f'>Lorem ipsum cake two</h5>
                                            <p>2800 บาท</p>
                                        </Card>
                                    </div>
                                </Col>
                                <Col md={4} sm={4} lg={3}>
                                    <div className='owl-services'>
                                        <Card className='item mx-0 px-0'>
                                            <Image src="./images/7.png" alt="Girl in a jacket" height="200" />
                                            <h5 className='color-ff695f'>โมเร่รถตัดหญ้า 2 ร่อง</h5>

                                            <p>700 บาท</p>
                                        </Card>
                                    </div>
                                </Col>
                                <Col md={4} sm={4} lg={3}>
                                    <div className='owl-services'>
                                        <Card className='item mx-0 px-0'>

                                            <Image src="./images/8.png" alt="Girl in a jacket" height="200" />
                                            <h5 className='color-ff695f'>โซ่ 428</h5>
                                            <p>300 บาท</p>
                                        </Card>
                                    </div>
                                </Col>
                                <Col md={4} sm={4} lg={3}>
                                    <div className='owl-services'>
                                        <Card className='item mx-0 px-0'>
                                            <Image src="./images/9.png" alt="Girl in a jacket" height="200" />
                                            <h5 className='color-ff695f'>สเตอร์ 428</h5>
                                            <p>350 บาท</p>
                                        </Card>
                                    </div>
                                </Col>
                                <Col md={4} sm={4} lg={3}>
                                    <div className='owl-services'>
                                        <Card className='item mx-0 px-0'>
                                            <Image src="./images/10.png" alt="Girl in a jacket" height="200" />
                                            <h5 className='color-ff695f'>แท่นเครื่อง แท่นเกียร์</h5>
                                            <p>2500 บาท</p>
                                        </Card>
                                    </div>
                                </Col>
                                <Col md={4} sm={4} lg={3}>
                                    <div className='owl-services'>
                                        <Card className='item mx-0 px-0'>

                                            <Image src="./images/11.png" alt="Girl in a jacket" height="200" />
                                            <h5 className='color-ff695f'>สเตอร์ปรับระดัับโซ่</h5>
                                            <p>350 บาท</p>
                                        </Card>
                                    </div>
                                </Col>
                                <Col md={4} sm={4} lg={3}>
                                    <div className='owl-services'>
                                        <Card className='item mx-0 px-0'>
                                            <Image src="./images/12.png" alt="Girl in a jacket" height="200" />
                                            <h5 className='color-ff695f'>โครงชุดบนรถตัดหญ้า</h5>

                                            <p>3500 บาท</p>
                                        </Card>
                                    </div>
                                </Col>
                                <Col md={4} sm={4} lg={3}>
                                    <div className='owl-services'>
                                        <Card className='item mx-0 px-0'>
                                            <Image src="./images/13.png" alt="Girl in a jacket" height="200" />
                                            <h5 className='color-ff695f'>รีโมท พร้อมรีซีพเวอร์ 10 ช่องความถี่</h5>
                                            <p>2300 บาท</p>
                                        </Card>
                                    </div>
                                </Col>
                                <Col md={4} sm={4} lg={3}>
                                    <div className='owl-services'>
                                        <Card className='item mx-0 px-0'>

                                            <Image src="./images/14.png" alt="Girl in a jacket" height="200" />
                                            <h5 className='color-ff695f'>กล่องควบคุม</h5>
                                            <p>13000 บาท</p>
                                        </Card>
                                    </div>
                                </Col>
                                <Col md={4} sm={4} lg={3}>
                                    <div className='owl-services'>
                                        <Card className='item mx-0 px-0'>

                                            <Image src="./images/15.png" alt="Girl in a jacket" height="200" />
                                            <h5 className='color-ff695f'>เซอร์โว DC6-8.4V</h5>
                                            <p>600 บาท</p>
                                        </Card>
                                    </div>
                                </Col>
                                <Col md={4} sm={4} lg={3}>
                                    <div className='owl-services'>
                                        <Card className='item mx-0 px-0'>
                                            <Image src="./images/16.png" alt="Girl in a jacket" height="200" />
                                            <h5 className='color-ff695f'>โครงถัก รถตัดหญ้า</h5>

                                            <p>2000 บาท</p>
                                        </Card>
                                    </div>
                                </Col>
                                <Col md={4} sm={4} lg={3}>
                                    <div className='owl-services'>
                                        <Card className='item mx-0 px-0'>
                                            <Image src="./images/17.png" alt="Girl in a jacket" height="200" />
                                            <h5 className='color-ff695f'>คลัทแรงเหวี่ยง</h5>

                                            <p>1500 บาท</p>
                                        </Card>
                                    </div>
                                </Col>
                                <Col md={4} sm={4} lg={3}>
                                    <div className='owl-services'>
                                        <Card className='item mx-0 px-0'>
                                            <Image src="./images/18.png" alt="Girl in a jacket" height="200" />
                                            <h5 className='color-ff695f'>ถาดในดัด</h5>

                                            <p>4500 บาท</p>
                                        </Card>
                                    </div>
                                </Col>
                                <Col md={4} sm={4} lg={3}>
                                    <div className='owl-services'>
                                        <Card className='item mx-0 px-0'>
                                            <Image src="./images/19.png" alt="Girl in a jacket" height="200" />
                                            <h5 className='color-ff695f'>ชุดยกใบตัด พร้อมแท่นวางแบดเตอร์รี่</h5>

                                            <p className='p-0'>3000 บาท</p>
                                        </Card>
                                    </div>
                                </Col>
                                <Col md={4} sm={4} lg={3}>
                                    <div className='owl-services'>
                                        <Card className='item mx-0 px-0'>
                                            <Image src="./images/20.png" alt="Girl in a jacket" height="200" />
                                            <h5 className='color-ff695f'>เครื่องยนต์เบนซิน แม็กนั่ม 13 แรง</h5>

                                            <p>6500 บาท</p>
                                        </Card>
                                    </div>
                                </Col>
                                <Col md={4} sm={4} lg={3}>
                                    <div className='owl-services'>
                                        <Card className='item mx-0 px-0'>
                                            <Image src="./images/21.png" alt="Girl in a jacket" height="200" />
                                            <h5 className='color-ff695f'>เฟืองขับมอเตอร์</h5>

                                            <p>350 บาท</p>
                                        </Card>
                                    </div>
                                </Col>
                                <Col md={4} sm={4} lg={3}>
                                    <div className='owl-services'>
                                        <Card className='item mx-0 px-0'>
                                            <Image src="./images/22.png" alt="Girl in a jacket" height="200" />
                                            <h5 className='color-ff695f'>ใบตัดหญ้า 80 ซม.</h5>

                                            <p>1800 บาท</p>
                                        </Card>
                                    </div>
                                </Col>
                                <Col md={4} sm={4} lg={3}>
                                    <div className='owl-services'>
                                        <Card className='item mx-0 px-0'>
                                            <Image src="./images/23.png" alt="Girl in a jacket" height="200" />
                                            <h5 className='color-ff695f'>ใบตัดหญ้า เฉพาะใบ</h5>

                                            <p>1000 บาท</p>
                                        </Card>
                                    </div>
                                </Col>

                            </Row> */}

                    </div>
                </div>
            </div>
        </>
    );
}
