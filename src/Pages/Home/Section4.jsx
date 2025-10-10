import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import promotionImg from '../../assets/promotion.jpeg'

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
                    <h2>Made with love. Delivered with care.</h2>
                    <p>Every meal we deliver carries more than just flavor —
                       it carries moments of happiness, comfort, and connection.</p>
                    <ul>
                        <li>
                            <p>From spicy bites to sweet treats,
                            each dish is prepared with passion and precision,
                            using only the freshest ingredients and authentic recipes.
                            Every box is sealed with care, every aroma tells a story,
                            and every bite reminds you that great food is made with heart.</p>
                        </li> 
                        <li>
                            <p>Semper lacus cursus porta primis ligula risus tempus,
                            where taste meets convenience, and quality meets comfort.
                            Whether it’s a quick lunch, a cozy dinner,
                            or a midnight craving that can’t wait —
                            we make sure your food arrives just the way it’s meant to be: hot, safe, and satisfying.</p>
                        </li> 
                        <li>
                            <p>Because food isn’t just fuel — it’s how we share joy.</p>
                        </li> 
                    </ul>   
                </Col>
            </Row>
        </Container>
      </section>

      {/* bg parallax */}

      <section className='bg-parallax-scroll'></section>
    </>
  )
}

export default Section4
