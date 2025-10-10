import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import hero from "../../assets/hero.png"
import { Link } from 'react-router-dom'

function Section1() {
  return (
    <section className="hero-section" id='home'>
        <Container>
            <Row>
                <Col lg={7} className="mb-5 mb-lg-0">
                    <div className="position-relative" style={{ marginLeft: "100px", marginTop:"-50px"}}>
                        <img src={hero} className="img-fluid" alt="Hero" />
                    </div>
                </Col>
                <Col lg={5}>
                    <div className='hero-text text-center' style={{marginTop:"50px"}}>
                        <h1 className='text-white'>The Stacked Beast Burger</h1>
                        <h6 className='text-white'>Beef Burger</h6>
                        <p className='text-white pt-2 pb-4'>
                            Go big or go home! This burger is for serious appetites. Featuring two huge, hand-pressed patties, double-layered with an incredible amount of ooey-gooey melted cheese. Packed with all the fresh toppings—shredded lettuce, crisp rings of red onion, and ripe tomato.
                        </p>
                         {/* <div className="price-badge">
                         <div className='badge-text'>
                                <h4 className='small-text'>Only</h4>
                                <h4 className='big-text'>$5.45</h4>
                        </div>
                        </div> */}
                        <Link to="/" className='btn order-now'>
                            Order Now
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Section1
