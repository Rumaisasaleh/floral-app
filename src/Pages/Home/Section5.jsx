import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import StoreIos from '../../assets/StoreIos.png'
import Storeand from '../../assets/Storeand.png'
import download2 from '../../assets/download2.jpeg'
import brand1 from '../../assets/brands/brand-11.png'
import brand2 from '../../assets/brands/brand-12.png'
import brand3 from '../../assets/brands/brand-13.png'
import brand4 from '../../assets/brands/brand-14.png'
import brand5 from '../../assets/brands/brand-15.png'
import brand6 from '../../assets/brands/brand-16.png'
import brand7 from '../../assets/brands/brand-17.png'
import brand8 from '../../assets/brands/brand-18.png'

function Section5() {
  return (
    <>
    <section className='shop-section' id='shop' >
        <Container>
            <Row className='align-items-center'>
                <Col lg={6} className='text-center text-lg-start mb-5 mb-lg-0'>
                <h4>Download Mobile App and</h4>
                <h2>Save upto 20%</h2>
                <p>Order your favorite meals in just a few taps!
                Download our app today and enjoy exclusive offers, faster checkout,
                and savings up to 20% on every order.</p>
                <Link to="/">
                <img src={StoreIos} alt="ios" className='img-fluid store me-3' />
                </Link>
                <Link to="/">
                <img src={Storeand}  alt="android" className='img-fluid store me-3' />
                </Link>
                </Col>
                <Col lg={6}>
                    <img src={download2} width={600} alt="shop" style={{paddingBottom:'50px', paddingTop:'-30px'}} className='img-fluid'/>                
                </Col>
            </Row>
        </Container>
    </section>

    {/* ------------------------------------------------------------- */}

      <section className="brand_section">
        <Container>
          <Row>
            <Carousel>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="brand_img">
                      <img src={brand1} className="img-fluid" alt="brand-1" />
                    </div>
                    <div className="brand_img">
                      <img src={brand2} className="img-fluid" alt="brand-2" />
                    </div>
                    <div className="brand_img">
                      <img src={brand3} className="img-fluid" alt="brand-3" />
                    </div>
                    <div className="brand_img">
                      <img src={brand4} className="img-fluid" alt="brand-4" />
                    </div>
                    <div className="brand_img">
                      <img src={brand5} className="img-fluid" alt="brand-5" />
                    </div>
                    <div className="brand_img">
                      <img src={brand6} className="img-fluid" alt="brand-6" />
                    </div>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="d-flex abign-items-center justify-content-between">
                    <div className="brand_img">
                      <img src={brand3} className="img-fluid" alt="brand-3" />
                    </div>
                    <div className="brand_img">
                      <img src={brand4} className="img-fluid" alt="brand-4" />
                    </div>
                    <div className="brand_img">
                      <img src={brand5} className="img-fluid" alt="brand-5" />
                    </div>
                    <div className="brand_img">
                      <img src={brand6} className="img-fluid" alt="brand-6" />
                    </div>
                    <div className="brand_img">
                      <img src={brand7} className="img-fluid" alt="brand-7" />
                    </div>
                    <div className="brand_img">
                      <img src={brand8} className="img-fluid" alt="brand-8" />
                    </div>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
      </section>
      
    </>
  )
}

export default Section5
 