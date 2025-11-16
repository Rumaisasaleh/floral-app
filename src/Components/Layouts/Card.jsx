import React from 'react';
import { Card as BCard } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

// Inline styles for overlay icons
const iconStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#333',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    cursor: 'pointer'
};

function Card({id, image, rating, title, price, renderRatingIcons}) {
    const { addToCart } = useCart();

    // --- Safety Check for Price ---
    // Safely parse price, defaulting to 0 if null/undefined/invalid
    const numericPrice = parseFloat(price) || 0; 
    const product = { id, title, price: numericPrice, image, quantity: 1 };

    // Safely calculate original price only if numericPrice is valid
    const originalPrice = (numericPrice > 0) 
        ? (numericPrice * 1.25).toFixed(2) // Safe calculation
        : '0.00'; // Default price if data is missing
        
    const discountPercentage = 20;

    const handleAddToCart = (e) => {
        e.preventDefault(); 
        e.stopPropagation(); 
        addToCart(product); 
        alert(`${title} added to your cart!`); 
    };

    // Prepare description text safely
    // const shortParagraph = paragraph 
    //     ? paragraph.replace(/\*\*/g, '').substring(0, 50) + '...' 
    //     : 'No description provided.';


    return (
        <Link to={`/product/${id}`} className='text-decoration-none d-block h-100'>
            <BCard className="overflow-hidden h-100" style={{ boxShadow: '0 4px 10px rgba(0,0,0,0.05)', transition: 'transform 0.2s', border: 'none' }}>
                
                {/* Image Section */}
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                    
                    {/* Discount Badge */}
                    <div style={{
                        position: 'absolute',
                        top: '15px',
                        left: '15px',
                        backgroundColor: ' #685a35', 
                        color: 'white',
                        padding: '5px 10px',
                        borderRadius: '10px',
                        fontSize: '0.6em',
                        fontWeight: 'bold',
                        zIndex: 10
                    }}>
                        {discountPercentage}% OFF
                    </div>

                    <BCard.Img 
                        variant="top" 
                        src={image} 
                        style={{ height: '250px',borderRadius:'15px', objectFit: 'cover' }}
                    />
                    
                    {/* Wishlist/Quick View Icons */}
                    <div style={{
                        position: 'absolute',
                        top: '15px',
                        right: '15px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px'
                    }}>
                        <div className="wishlist" style={iconStyle}>
                            <i className="bi bi-heart"></i>
                        </div>
                        <div className="quick-view" style={iconStyle}>
                            <i className="bi bi-arrows-fullscreen"></i>
                        </div>
                        <div className="add-to-cart-icon" style={iconStyle} onClick={handleAddToCart}>
                            <i className="bi bi-bag"></i> {/* Bag icon for "add to cart" */}
                        </div>
                    </div>
                </div>         
                
                {/* Card Body - Content */}
                <BCard.Body className='d-flex flex-column' style={{ padding: '15px' }}>
                    
                    {/* Category and Rating (Top Row) */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
                        <p style={{ margin: 0, fontSize: '0.9em', color: '#999' }}>
                            Flower Bouquet
                        </p>
                      {/* --- MODIFIED RATING SECTION START --- */}
                        <div className="item-rating text-warning" style={{ display: 'flex', alignItems: 'center' }}>
                              {/* Display a single star emoji */}
                            <span style={{ color: '#ffc107', fontSize: '1.2em' }}>
                                ⭐
                            </span>
                            <span style={{ marginRight: '5px', color: '#333', fontWeight: 'bold' }}>
                                {/* Display the numeric rating, rounded to one decimal place */}
                                {(rating || 0).toFixed(1)}
                            </span>
                        </div>
                        {/* --- MODIFIED RATING SECTION END --- */}
                    </div>

                    {/* Title */}
                    <BCard.Title className='text-dark' style={{ fontSize: '1.1em', fontWeight: '600', marginBottom: '8px' }}>
                        {title}
                    </BCard.Title>

                    {/* Price */}
                      <div className="menu-price" style={{ marginBottom: '10px' }}>
                        <span  
                            style={{ 
                                color: '#bd9d44', // Changed color here
                                fontSize: '1.0em', 
                                fontWeight: 'bold', 
                                marginRight: '8px', 
                                marginLeft:'-13px' 
                            }}>
                            ${numericPrice.toFixed(2)}
                        </span>
                        <span className='text-muted' style={{ fontSize: '0.7em', textDecoration: 'line-through' }}>
                            ${originalPrice}
                        </span>
                    </div>
                    
                    {/* Description */}
                    {/* <BCard.Text className='text-muted flex-grow-1' style={{ fontSize: '0.85em', lineHeight: '1.4', marginBottom: '15px' }}>
                        {shortParagraph}
                    </BCard.Text> */}

                    {/* Action Button (Add to Cart) */}
                    {/* <div className="add-to-cart mt-auto">
                        <button
                            className='btn btn-block'
                            onClick={handleAddToCart}
                            style={{ 
                                width: '100%', 
                                backgroundColor: '#bd9d44',
                                color: 'white',
                                border: 'none',
                                padding: '8px 0',
                                borderRadius: '5px',
                                fontSize: '0.9em'
                            }}
                        >
                            <i className="bi bi-cart2 me-1"></i> Add To Cart
                        </button>
                    </div> */}

                </BCard.Body>
            </BCard>      
        </Link>
    );
}

export default Card;