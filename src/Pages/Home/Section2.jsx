import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Section2() {

        const mockData = [
            {
                icon: "bi bi-shield-check",
                title: "Safe & Hygienic Delivery",
                paragraph: "Your safety comes first. Every meal is packed and handled with the highest hygiene standards for a worry-free experience.",
            },
            {
                icon: "bi bi-geo-alt",
                title: "Real-Time Tracking",
                paragraph: "Track your meal live from the kitchen to your doorstep with real-time updates.",
            },
            {
                icon: "bi bi-lightning-charge",
                title: "Fast & Reliable Service",
                paragraph: "Our delivery partners ensure your food reaches you quickly, fresh, and right on time — every time.",
            },
        ];


  return (
  <>
   <section className='about-section' id="about">
    <Container>
        <Row>
            <Col lg={{span:8, offset:2}} className='text-center'>
                <h2>Welcome to Foodiego, your <br /> ultimate food companion!</h2>
                <p>We’re here to make food ordering simple, fast, and fun. Whether you’re craving a homely meal, a quick bite, or your favorite restaurant’s signature dish, Foodiego brings it all fresh and hot to your doorstep.

                    With an easy-to-use app, smart restaurant search, real-time order tracking, and secure payment options, Foodiego ensures a smooth and satisfying experience every time you order.

                    Our mission is to connect people with great food effortlessly — because everyone deserves to enjoy delicious meals without the wait.

                    Eat what you love, anytime, anywhere — with Foodiego.</p>
                <Link to='/' className='btn order_now btn_red' >
                Hungry? See What’s Cooking
                </Link>    
            </Col>
        </Row>
    </Container>
   </section>
   <section className='about-wrapper'>
    <Container>
        <Row className='justify-content-md-center'>
                {mockData.map((cardData, index)=>(
                <Col md={6} lg={4} className='mb-4 mb-md-0' key={index}>
                    <div className='about-box text-center'>
                        <div className='about-icon'>
                            <i className={`${cardData.icon} fs-1 `}></i>
                        </div>
                        <h4>{cardData.title}</h4>
                        <p>{cardData.paragraph}</p>
                    </div>
                </Col>
                ))}
        </Row>
    </Container>
   </section>
  </>
  )
}

export default Section2
