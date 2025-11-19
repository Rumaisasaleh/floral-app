import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Section1() {
  return (
    <section className="hero-section" id='home'>
        <Container>
            <Row>
                <Col>
                    <div className='hero-text text-center' style={{marginTop:"50px"}}>
                        <h2 className='text-black '>Where Every Petal <br />Tells a Story.</h2>
                        <p className='text-black pt-2 pb-4'>
                            We handcraft bouquets designed to capture life's biggest moments—from <br />celebration to sympathy—and ensure they arrive fresh, every time.                        </p>
                         {/* <div className="price-badge">
                         <div className='badge-text'>
                                <h4 className='small-text'>Only</h4>
                                <h4 className='big-text'>$5.45</h4>
                        </div>
                        </div> */}
                        <Link to="/catalog" className='btn shop-now'>
                            Shop Now
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Section1
