import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function Section2() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const mockData = [
    {
      id: 1,
      image: "bi bi-shield-check",
      title: "Safe & Hygienic Delivery",
      paragraph:
        "Your safety comes first. Every meal is packed and handled with the highest hygiene standards for a worry-free experience.",
    },
    {
      id: 2,
      image: "bi bi-geo-alt",
      title: "Real-Time Tracking",
      paragraph:
        "Track your meal live from the kitchen to your doorstep with real-time updates.",
    },
  ];

  // ------------------------------------------------------------------------------------------------

  // // Define the category data in an array for easy rendering
  // const categories = [
  //   {
  //     title: "BEST SELLERS",
  //     path: "/bestsellers",
  //     imgSrc: "path/to/sunflower_bestseller.jpg",
  //     altText: "Sunflower Bouquet"
  //   },
  //   {
  //     title: "NEW ARRIVALS",
  //     path: "/newarrivals",
  //     imgSrc: "path/to/new_bouquet.jpg",
  //     altText: "New Arrival Bouquet"
  //   },
  //   {
  //     title: "LUXURY FLOWERS",
  //     path: "/luxuryflowers",
  //     imgSrc: "path/to/red_roses_luxury.jpg",
  //     altText: "Red Roses in a Box"
  //   },
  //   {
  //     title: "PLANTS & SUCCULENTS",
  //     path: "/plants",
  //     imgSrc: "path/to/succulents.jpg",
  //     altText: "Pots of Succulents"
  //   },
  // ];

  return (
    <>
      
      <section className="about-section" id="about">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2>
               Why We Bloom
              </h2>
              <p>
                We believe that flowers are more than just a gift—they are a messenger of joy, sympathy, and love. Our app was created to make sharing those feelings effortless. We partner with master local florists to bring you arrangements that are fresh, stunning, and handcrafted with care. From the moment you tap the screen to the minute your bouquet arrives, we’re dedicated to delivering not just flowers, but a perfect, meaningful moment.
              </p>
              {/* <Link to="/" className="btn order_now btn_red">
                Hungry? See What’s Cooking
              </Link> */}
            </Col>
          </Row>
        </Container>
      </section>

      {/* <section className="about-wrapper">
        <Container>
          <Row className="justify-content-md-center">
            {mockData.map((cardData) => (
              <Col md={6} lg={4} className="mb-4 mb-md-0" key={cardData.id}>
                <div
                  className="about-box text-center"
                  onClick={() => navigate(`/product/${cardData.id}`)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="about-icon">
                    <i className={`${cardData.image} fs-1`}></i>
                  </div>
                  <h4>{cardData.title}</h4>
                  <p>{cardData.paragraph}</p>

                  <button
                    className="btn btn_red mt-3"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(cardData);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section> */}
    </>
  );
}

export default Section2;
