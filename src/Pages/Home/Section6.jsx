import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import User1 from '../../assets/user/User1.jpeg'
import User2 from '../../assets/user/User2.jpeg'
import User3 from '../../assets/user/User3.jpeg'
import User4 from '../../assets/user/User4.jpeg'

function Section6() {
  return (
    <>
      <section className='blog-section' id='blog' >
        <Container>
            <Row>
                  <Carousel>
                              <Carousel.Item>
                                <Carousel.Caption>
                                 <div className="user_img">
                                      <img src={User1} className="img-fluid" alt="user-1" />
                                 </div>
                                 <p>
                                    “The food arrived hot and fresh! I loved the quick delivery and the packaging was neat. Definitely ordering again!”
                                 </p>
                                 <div className='item-rating mb-2'>
                                   <i className='bi bi-star-fill'></i>                         
                                   <i className='bi bi-star-fill'></i>                         
                                   <i className='bi bi-star-fill'></i>                         
                                   <i className='bi bi-star-fill'></i>                         
                                   <i className='bi bi-star-fill'></i>                                                          
                                   </div>
                                   <h5>by Priya Sharma</h5> 
                                   </Carousel.Caption>
                              </Carousel.Item>
                                <Carousel.Item>
                                <Carousel.Caption>
                                 <div className="user_img">
                                      <img src={User2} className="img-fluid" alt="user-2" />
                                 </div>
                                 <p>
                                    “The food arrived hot and fresh! I loved the quick delivery and the packaging was neat. Definitely ordering again!”
                                 </p>
                                 <div className='item-rating mb-2'>
                                   <i className='bi bi-star-fill'></i>                         
                                   <i className='bi bi-star-fill'></i>                         
                                   <i className='bi bi-star-fill'></i>                         
                                   <i className='bi bi-star-fill'></i>                         
                                   <i className='bi bi-star-fill'></i>                                                          
                                   </div>
                                   <h5>by Priya Sharma</h5> 
                                   </Carousel.Caption>
                              </Carousel.Item>
                                <Carousel.Item>
                                <Carousel.Caption>
                                 <div className="user_img">
                                      <img src={User3} className="img-fluid" alt="user-3" />
                                 </div>
                                 <p>
                                    “The food arrived hot and fresh! I loved the quick delivery and the packaging was neat. Definitely ordering again!”
                                 </p>
                                 <div className='item-rating mb-2'>
                                   <i className='bi bi-star-fill'></i>                         
                                   <i className='bi bi-star-fill'></i>                         
                                   <i className='bi bi-star-fill'></i>                         
                                   <i className='bi bi-star-fill'></i>                         
                                   <i className='bi bi-star-fill'></i>                                                          
                                   </div>
                                   <h5>by Priya Sharma</h5> 
                                   </Carousel.Caption>
                              </Carousel.Item>
                                <Carousel.Item>
                                <Carousel.Caption>
                                 <div className="user_img">
                                      <img src={User4} className="img-fluid" alt="user-1" />
                                 </div>
                                 <p>
                                    “The food arrived hot and fresh! I loved the quick delivery and the packaging was neat. Definitely ordering again!”
                                 </p>
                                 <div className='item-rating mb-2'>
                                   <i className='bi bi-star-fill'></i>                         
                                   <i className='bi bi-star-fill'></i>                         
                                   <i className='bi bi-star-fill'></i>                         
                                   <i className='bi bi-star-fill'></i>                         
                                   <i className='bi bi-star-fill'></i>                                                          
                                   </div>
                                   <h5>by Priya Sharma</h5> 
                                   </Carousel.Caption>
                              </Carousel.Item>
                  </Carousel>
            </Row>
        </Container>
      </section>
    </>
  )
}

export default Section6
