import React from 'react'
import {Col, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function cards({image, rating, title, paragraph, price, renderRatingIcons}) {
  return (
    <>
      <Col sm={0} lg={4} xl={3}  className='mb-4'>
        <Card  className="overflow-hidden" style={{ width: '18rem' }}>
          <div className="overflow-hidden">
            <Card.Img variant="top" src={image} />
          </div>         
          <Card.Body>
            <div className="d-flex align-items-center justify-content-between">
              <div className="item-rating">{renderRatingIcons(rating)}</div>
              <div className="wishlist">
                <i class="bi bi-bookmark-heart"></i>
              </div>
            </div>


            <Card.Title>{title}</Card.Title>
            <Card.Text>{paragraph}</Card.Text>

            <div className="d-flex align-items-center justify-content-between">
              <div className="menu-price">
                <h5 className='mb-0'>${price}</h5>
              </div>
              <div className="add-to-cart">
                <Link to='/'>
                <i class="bi bi-cart2"></i> Add To Cart
                </Link>
              </div>
            </div>
          </Card.Body>
        </Card>      
      </Col>
    </>
  )
}

export default cards
