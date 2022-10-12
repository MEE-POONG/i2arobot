import { SLIDER_SETTING } from '@/utils/slider-setting';
import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import Slider from "react-slick";
import ModelShowImage from '../../components/Home/ModelShowImage'



export default function HomeProfile({ list }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                            <Slider {...SLIDER_SETTING}>
                                {list?.map(image => showImageInSlide(image))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div >

        </>
    );


    function showImageInSlide(image) {
        return (
            <>
                <div className="item profile" onClick={handleShow}>
                    <div className="thumb">
                        <Image src={image} alt="" />
                    </div>
                </div>
                <ModelShowImage show={show} image={image} handleClose={handleClose} />
            </>
        );
    }
}
