import React from 'react'
import { Container, Row, Carousel } from 'react-bootstrap'
import User1 from '../../assets/user/User1.jpeg'
import User2 from '../../assets/user/User2.jpeg'
import User3 from '../../assets/user/User3.jpeg'
import User4 from '../../assets/user/User4.jpeg'

function Section6() {
  return (
    <>
      <section className='blog-section' id='blog'>
        <Container>
          <Row>
            <Carousel>

              <Carousel.Item>
                <Carousel.Caption>
                  <div className="user_img">
                    <img src={User1} className="img-fluid" alt="user-1" />
                  </div>
                  <p>
                    “The bouquet was absolutely stunning! Fresh flowers, beautiful arrangement, 
                    and delivery was perfectly on time. Loved everything about it!”
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
                    “The flowers were so fresh and beautifully wrapped! 
                    They smelled amazing and stayed fresh for days. Highly recommended!”
                  </p>
                  <div className='item-rating mb-2'>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                  </div>
                  <h5>by Ananya Verma</h5>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <Carousel.Caption>
                  <div className="user_img">
                    <img src={User3} className="img-fluid" alt="user-3" />
                  </div>
                  <p>
                    “Loved the arrangement! The colors were vibrant, the flowers were fresh, 
                    and it looked exactly like the picture. Perfect for gifting.”
                  </p>
                  <div className='item-rating mb-2'>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                  </div>
                  <h5>by Neha Kapoor</h5>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <Carousel.Caption>
                  <div className="user_img">
                    <img src={User4} className="img-fluid" alt="user-4" />
                  </div>
                  <p>
                    “Beautiful bouquet and super quick delivery! The packaging kept the flowers 
                    fresh and safe. Totally satisfied with the service.”
                  </p>
                  <div className='item-rating mb-2'>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                  </div>
                  <h5>by Riya Nair</h5>
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
