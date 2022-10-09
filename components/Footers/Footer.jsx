import React from "react";
import { Image } from 'react-bootstrap';
import { FaBehance, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="footer-dec">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="about footer-item">
                <div className="logo">
                  <a href="#">
                    <Image src={'images/iodesign.png'} alt="logo-nav" />
                  </a>
                </div>
                <a href="#">info@company.com</a>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa">
                        <FaFacebookF />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa">
                        <FaTwitter />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa">
                        <FaBehance />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa">
                        <FaInstagram />
                      </i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="services footer-item">
                <h4>แข็งแรงทนทาน</h4>
                <ul>
                  <p>วัสดุชันดี</p>
                  <p>ทนทานต่อการใช้งาน</p>
                  <p>ตัดได้นาน เครื่องไม่ร้อนง่าย</p>
                  
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="community footer-item">
                <h4>พร้อมลุยทุกสถานะการ</h4>
                <ul>
                <p> หญ็าสูงก็ตัดได้</p>
                  <p>มีกิ่งไม้ ก้อนหิน ก็ตัดได้</p>
                  
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="subscribe-newsletters footer-item">
                <h4>สะดวกในการตัดหญ้า</h4>
                <p>ไม่ต้องเปลืองอรงของเรา บังคับง่าย</p>
                <form action="#" method="get">
                  <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email" required="" />
                  <button type="submit" id="form-submit" className="main-button "><i className="fa fa-paper-plane-o"></i></button>
                </form>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="copyright">
                <p>Copyright © 2021 Onix Digital Co., Ltd. All Rights Reserved.
                  <br />
                  Designed by <a rel="nofollow" href="https://templatemo.com" title="free CSS templates">TemplateMo</a>
                  <br />
                  Distributed by <a href="https://themewagon.com">Themewagon</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
