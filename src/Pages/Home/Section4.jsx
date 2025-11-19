import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import promotionImg from '../../assets/brands/promotion.jpg'

function Section4() {
  return (
    <>
      <section className='promotion-section' >
        <Container>
            <Row className='align-items-center'>  
                <Col lg={6} className='text-center mb-5 mb-lg-0'>
                    <img src={promotionImg} width={550} className='img-fluid' alt="promotion" />
                </Col>
                <Col lg={6} className='px-5'>
                    <h2>Grown with love Delivered with care.</h2>
                    <p>Every bouquet we deliver carries more than just blooms — 
                        it carries moments of happiness, comfort, and connection.
                    </p>

                    <ul>
                        <li>
                            <p>From vibrant roses to delicate lilies, each arrangement is crafted 
                            with passion and precision, using only the freshest flowers and timeless 
                            designs. Every bundle is wrapped with care, every fragrance tells a story, 
                            and every petal reminds you that true beauty is created with heart.</p>
                        </li>

                        <li>
                            <p>Semper lacus cursus porta primis ligula risus tempus, where elegance 
                            meets convenience and quality meets charm. Whether it’s a birthday surprise, 
                            a romantic gesture, or a simple “thinking of you” moment — we make sure your 
                            flowers arrive just the way they’re meant to be: fresh, fragrant, and breathtaking.</p>
                        </li>

                        <li>
                            <p>Because flowers aren’t just gifts — they’re how we share joy. 🌸</p>
                        </li>
                    </ul>   
                </Col>
            </Row>
        </Container>
      </section>

      {/* bg parallax */}
{/* 
      <section className='bg-parallax-scroll'></section> */}
    </>
  )
}

export default Section4
