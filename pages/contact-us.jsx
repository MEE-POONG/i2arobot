import Head from 'next/head';

import IndexPage from "components/layouts/IndexPage";
import Col from 'react-bootstrap/Col';

import Row from 'react-bootstrap/Row';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { useRouter } from 'next/router';
import axios from 'axios';
import { useState } from 'react'
import { FaPhoneAlt } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaGlobeAsia } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

import { Card, Container, Form, Image, Carousel } from 'react-bootstrap';
import SlideHome from 'container/home/home-banner';
import OurTools from 'container/home/our-tools';
import HomeProfile from 'container/home/home-profile';
import HomePricing from 'container/home/home-pricing';
import HomeAbout from 'container/home/home-about';
import HomeVideo from 'container/home/home-video';
export default function contactus() {


  const router = useRouter();
  return (
    < >
      <Head>
        <title>HOME | dxx=</title>
        <meta
          name="description"
          content="I2AROBOT 2"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {/* <SlideHome /> */}
        {/* <OurTools />
        <HomeAbout />
        <HomeProfile />
        <HomePricing /> */}
        {/* <HomeVideo /> */}

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
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d484.6569287739167!2d100.47176262255218!3d13.642220229992173!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a2cc5d820327%3A0xa613a036b2061a31!2z4LmE4Lit4LmC4LitIOC4lOC4teC5hOC4i-C4meC5jEDguYLguK7guKE!5e0!3m2!1sth!2sth!4v1665041908297!5m2!1sth!2sth"
                  height="600"
                  style={{ borDer: 0 }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                  className='w-m-max w-100' />
              </div>
            </div>

            <hr></hr>

            <div className='container-fluid'>
              <div className='row'>
                <div className='col-lg-9'>
                  <div className='contact-form'>
                    <div class="contact-title mb-30"><h2>Get In Touch</h2>
                    </div>
                  </div>
                  <form className='contact-form'>
                    <div className='row'>
                      <div className="col-lg-6 textarea"><input name="name" placeholder="Name*" type="text" />
                      </div>
                      <div className="col-lg-6 textarea"><input name="email" placeholder="Email*" type="email" />
                      </div>
                      <div className="col-lg-12 textarea"><input name="subject" placeholder="Subject*" type="text" />
                      </div>
                      <div className="col-lg-12 textarea"><textarea name="message" placeholder="Your Message*">
                      </textarea><button className="submit" type="submit">SEND</button>
                      </div>
                    </div>
                  </form>
                </div>
              
              <div className='col-lg-3 contact-form'>
                <p><span><FaMapMarkerAlt /> 21/1 ซอย อนามัยงามเจริญ 25 แยก 2-7 แขวงท่าข้าม เขตบางขุนเทียน 10150</span></p>
                <p><FaGlobeAsia /><a href="mailto:oiio2005@hotmail.co.th">oiio2005@hotmail.co.th</a></p>
                <a href="mailto:oiio2005@yahoo.co.th">oiio2005@yahoo.co.th</a>
                <p><span><FaPhoneAlt /> 02-409-2152-9</span></p>
                <li><FaFacebook href="https://www.facebook.com/profile.php?id=100079971892608" /></li>
              </div>
            </div>
          </div>

        </div>
      </div >



    </div>
    </ >
  );
}
contactus.layout = IndexPage;