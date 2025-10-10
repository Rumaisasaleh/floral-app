import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  // Scroll State
  const [isVisible, setIsVisible] = useState(false);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  });
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h6>Location</h6>
                <p>5505 Waterford District</p>
                <p>Dr, Miami, FL 33126</p>
                <p>United States</p>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h6>Working Hours</h6>
                <p>Mon-Fri: 9:00AM - 10:00PM</p>
                <p>Saturday: 10:00AM - 8:30PM</p>
                <p>Sunday: 12:00PM - 5:00PM</p>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h6>Order Now</h6>
                <p>Quaerat neque purus ipsum</p>
                <p>
                  <Link to="tel:9998887777" className="calling">
                    999-888-7777
                  </Link>
                </p>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h6>Follow Us</h6>
                <p>Quaerat neque purus ipsum</p>
                <ul className="list-unstyled text-center mt-2">
                  <li>
                    <Link to="/">
                      <i class="bi bi-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i class="bi bi-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i class="bi bi-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i class="bi bi-youtube"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className="copy_right">
            <Col>
              <div>
                <ul className="list-unstyled text-center mb-0" >
                  <li>
                    <Link to="/" className="text-decoration-none text-dark">
                      © 2023 <span>CODE4EDUCATION</span>. All Rights Reserved
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-decoration-none text-dark" >About Us</Link>
                  </li>
                  <li>
                    <Link to="/" className="text-decoration-none text-dark" >Terms Of Use</Link>
                  </li>
                  <li>
                    <Link to="/" className="text-decoration-none text-dark" >Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Sroll To Top */}
      {isVisible && (
        <div className="scroll_top" onClick={scrollTop}>
          <i class="bi bi-arrow-up"></i>
        </div>
      )}
    </>
  );
}

export default Footer;