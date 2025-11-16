import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// Import the mockData and renderRatingIcons logic from Section3
import { mockData, renderRatingIcons } from '../Home/Section3'; 
import Card from '../../Components/Layouts/Card'; // Adjust path as needed

// NOTE: You will need to export mockData and renderRatingIcons from Section3.jsx for this to work.
// See the extra instructions below.

function AllDishesPage() {
  return (
    <Container className="py-5">
      <Row>
        <Col lg={{ span: 8, offset: 2 }} className='text-center mb-5 mt-5'>
          <h2>Our Complete Menu</h2>
          <p className='para'>Discover all our fresh, hot, and satisfying dishes, available for delivery.</p>
        </Col>
      </Row>
      <Row>
        {mockData.map((cardData, index) => (
          <Col key={index} sm={6} lg={4} xl={3} className="mb-4">
            <Card
              id={cardData.id}
              image={cardData.image}
              rating={cardData.rating}
              title={cardData.title}
              paragraph={cardData.paragraph}
              price={cardData.price}
              renderRatingIcons={renderRatingIcons}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AllDishesPage;