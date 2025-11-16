import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Bestseller from '../../assets/brands/bestseller.jpg';
import NewArrival from '../../assets/brands/newarrival.jpg';
import Luxury from '../../assets/brands/luxury.jpg';
import Plants from '../../assets/brands/plants.jpg';

function MenuSection() {
      // Define the category data in an array for easy rendering
  const categories = [
    {
      title: "BEST SELLERS",
      path: "/bestsellers",
      imgSrc: Bestseller,
      altText: "Sunflower Bouquet"
    },
    {
      title: "NEW ARRIVALS",
      path: "/newarrivals",
      imgSrc: NewArrival,
      altText: "New Arrival Bouquet"
    },
    {
      title: "LUXURY FLOWERS",
      path: "/luxuryflowers",
      imgSrc: Luxury,
      altText: "Red Roses in a Box"
    },
    {
      title: "PLANTS & SUCCULENTS",
      path: "/plants",
      imgSrc: Plants,
      altText: "Pots of Succulents"
    },
  ];
  return (
<section className="category-grid">
      <Container>
        {/* The Row component will contain all the category Col components */}
        <Row className="category-links justify-content-center">
          
          {categories.map((category, index) => (
            // Col: Defines the size for responsiveness.
            // lg=3: 3 out of 12 columns on large screens (4 items per row)
            // md=6: 6 out of 12 columns on medium screens (2 items per row)
            <Col 
              key={index} 
              lg={2} 
              md={6} 
              className="mb-4" // Margin bottom for spacing between rows
            >
              {/* Link: Replaces the <a> tag for React Router navigation */}
              <Link to={category.path} className="category-item">
                
                <h3 className="category-title">{category.title}</h3>
                
                <div className="image-container">
                  <img src={category.imgSrc} alt={category.altText} />
                </div>
                
              </Link>
            </Col>
          ))}
          
        </Row>
      </Container>
    </section>
  )
}

export default MenuSection
