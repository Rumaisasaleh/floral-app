import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, FormControl } from 'react-bootstrap';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom'; // <-- ADDED: For navigation

// --- Custom Styles ---
const customStyles = {
    // General Layout
    cartHeading: {
        fontSize: '2rem',
        fontWeight: 400,
        textTransform: 'uppercase',
        marginBottom: '2rem',
        letterSpacing: '0.1em',
    },
    // NEW: Back Button Style (Transparent with dark border/text)
    backButton: {
        backgroundColor: 'transparent',
        borderColor: 'transparent', 
        color: '#1a1a1a',
        fontWeight: 500,
        padding: '8px 15px',
        borderRadius: '0',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        fontSize: '0.9rem',
        transition: 'all 0.3s ease',
    },
    // NEW: Hover Effect Style
    backButtonHover: {
        borderColor: '#1a1a1a',
        color: '#1a1a1a',
    },
    // Product List (Left Side)
    productRow: {
        borderBottom: '1px solid #eee',
        paddingBottom: '20px',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'flex-start',
    },
    productTitle: {
        fontWeight: 500,
        fontSize: '1rem',
        marginBottom: '0',
    },
    productDetails: {
        fontSize: '0.8rem',
        color: '#666',
        marginTop: '3px',
    },
    quantityControl: {
        border: '1px solid #ccc',
        borderRadius: '0',
        width: '25px',
        height: '25px',
        textAlign: 'center',
        padding: '0',
        backgroundColor: 'transparent',
        lineHeight: '23px',
    },
    quantityInput: {
        width: '35px',
        height: '25px',
        textAlign: 'center',
        border: '1px solid #ccc',
        margin: '0 -1px',
        display: 'inline-block',
        padding: '0',
    },
    removeItem: {
        cursor: 'pointer',
        fontSize: '1.2rem',
        color: '#666',
        paddingTop: '5px',
    },
    // Cart Totals (Right Side)
    totalsBox: {
        paddingLeft: '20px', 
        marginTop: '3rem', 
    },
    totalsHeading: {
        fontSize: '1.2rem',
        fontWeight: 500,
        textTransform: 'uppercase',
        marginBottom: '20px',
        letterSpacing: '0.1em',
    },
    totalsRow: {
        marginBottom: '10px',
        fontSize: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
    },
    totalsSeparator: {
        borderBottom: '1px solid #ccc',
        margin: '15px 0',
    },
    totalsTotal: {
        fontWeight: 600,
        fontSize: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '15px',
    },
    checkoutButton: {
        backgroundColor: '#1a1a1a',
        borderColor: '#1a1a1a',
        color: '#fff',
        fontWeight: 500,
        marginTop: '30px',
        padding: '12px 20px',
        borderRadius: '0',
        textTransform: 'uppercase',
        letterSpacing: '1px',
    },
    couponInput: {
        borderRadius: '0',
        padding: '8px',
        fontSize: '0.9rem',
        height: '38px',
        border: '1px solid #ccc',
        width: '180px', 
    },
    applyButton: {
        backgroundColor: '#fff',
        borderColor: '#ccc',
        color: '#000',
        borderRadius: '0',
        padding: '8px 20px',
        marginLeft: '10px',
        fontSize: '0.9rem',
        height: '38px',
    }
};

function CartPage() {
    const navigate = useNavigate(); // <-- Initialize navigation hook
    const { cartItems, removeFromCart, updateQuantity } = useCart();
    
    const [isHovered, setIsHovered] = useState(false); // <-- State for hover effect

    // --- Total Calculation Logic ---
    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => 
            total + (parseFloat(item.price || 0) * (item.quantity || 1)), 0
        );
    };

    const subtotal = calculateSubtotal().toFixed(2);
    const shippingCost = 0.00;
    const taxEstimated = 0.00;
    const total = (parseFloat(subtotal) + shippingCost + taxEstimated).toFixed(2);
    
    const renderCartItems = cartItems.map(item => ({
        ...item,
        details: item.details || "Mint / 100 mg / x1", 
        subscriptionPrice: item.subscriptionPrice || (parseFloat(item.price || 0) * 0.9).toFixed(2),
        quantity: item.quantity || 1
    }));
    // -------------------------------------------------------------------------

    // *** Handles the mailto redirect ***
    const handleCheckout = () => {
        const recipientEmail = "sales@yourcompany.com";
        const subject = "Quotation Request for Floral Items";
        
        let bodyContent = "Hello,\n\nI would like to request a quotation for the following items:\n\n";
        
        renderCartItems.forEach(item => {
            const line = `- ${item.title} | Details: ${item.details} | Qty: ${item.quantity} | Price: $${(parseFloat(item.price || 0) * item.quantity).toFixed(2)}`;
            bodyContent += line + "\n";
        });

        bodyContent += `\nTotal: $${total}\n\nThank you.`;

        const encodedSubject = encodeURIComponent(subject);
        const encodedBody = encodeURIComponent(bodyContent);

        const mailtoLink = `mailto:${recipientEmail}?subject=${encodedSubject}&body=${encodedBody}`;
        
        window.location.href = mailtoLink;
    };
    // ************************************************

    // Function to go back to the previous page
    const handleGoBack = () => {
        navigate(-1); 
    };

    // Define column sizes for different screen sizes
    const contentColSizes = { xs: 12, lg: 7 };
    const totalsColSizes = { xs: 12, lg: 5 };
    
    return (
        <Container className="py-5 mt-5">
            <Row className="justify-content-center">
                <Col lg={11}>
                    
                    {/* NEW ROW FOR THE BACK BUTTON - ABOVE CART HEADING */}
                    <Row className="mb-3">
                        <Col className="ps-3 ps-lg-0" style={{ paddingLeft: '20px' }}>
                            <Button 
                                variant="outline-dark" 
                                onClick={handleGoBack}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                style={{
                                    ...customStyles.backButton,
                                    ...(isHovered ? customStyles.backButtonHover : {}),
                                }}
                            >
                                &lt; Back
                            </Button>
                        </Col>
                    </Row>
                    
                    {/* Main Cart Content */}
                    <div className="ps-3 ps-lg-0" style={{ paddingLeft: '20px' }}>
                        <h1 style={customStyles.cartHeading}>Your Cart</h1> 
                    </div>

                    <Row>
                        {/* Left Column: Product List and Coupon */}
                        <Col {...contentColSizes} className="pe-lg-5"> 
                            
                            {/* Product List */}
                            {renderCartItems.map((item) => (
                                <Row key={item.id} style={customStyles.productRow}>
                                    {/* Remove button */}
                                    <Col xs={1} onClick={() => removeFromCart(item.id)}>
                                        <span style={customStyles.removeItem}>&times;</span>
                                    </Col>
                                    {/* Image */}
                                    <Col xs={3} sm={2}>
                                        <img 
                                            src={item.image || 'placeholder.jpg'} 
                                            alt={item.title} 
                                            style={{ width: '80px', height: '80px', objectFit: 'cover' }} 
                                        />
                                    </Col>
                                    {/* Title and Details */}
                                    <Col xs={8} sm={5}>
                                        <p style={customStyles.productTitle}>{item.title}</p>
                                        <p style={customStyles.productDetails}>{item.details}</p>
                                    </Col>
                                    {/* Quantity and Price */}
                                    <Col xs={12} sm={4} className="d-flex flex-column flex-sm-row justify-content-sm-end align-items-sm-center mt-3 mt-sm-0">
                                        
                                        {/* Quantity Controls */}
                                        <div className="d-flex align-items-center me-sm-3 mb-2 mb-sm-0">
                                            <Button 
                                                variant="light" 
                                                style={customStyles.quantityControl} 
                                                onClick={() => updateQuantity && updateQuantity(item.id, item.quantity - 1)}
                                            >-</Button>
                                            <FormControl 
                                                className='ms-2 me-2'
                                                type="text" 
                                                value={item.quantity} 
                                                readOnly 
                                                style={customStyles.quantityInput}
                                            />
                                            <Button 
                                                variant="light" 
                                                style={customStyles.quantityControl} 
                                                onClick={() => updateQuantity && updateQuantity(item.id, item.quantity + 1)}
                                            >+</Button>
                                        </div>
                                        
                                        {/* Final Price */}
                                        <div className="text-start text-sm-end">
                                            <p style={customStyles.productTitle}>${(parseFloat(item.price || 0) * item.quantity).toFixed(2)}</p>
                                            <p style={{...customStyles.productDetails, textDecoration: 'line-through'}}>
                                                ${(parseFloat(item.price || 0) * item.quantity).toFixed(2)}
                                            </p> 
                                        </div>
                                    </Col>
                                </Row>
                            ))}
                        </Col>

                        {/* Right Column: Cart Totals */}
                        <Col {...totalsColSizes} 
                             className="border-start-lg border-start-md border-start-0" 
                             style={{
                                 ...customStyles.totalsBox,
                                 // Conditional inline styles for border/padding based on screen size (lg breakpoint 992px)
                                 borderLeft: window.innerWidth >= 992 ? '1px solid #ccc' : 'none',
                                 paddingLeft: window.innerWidth >= 992 ? '50px' : '20px',
                                 marginTop: window.innerWidth < 992 ? '3rem' : '0',
                             }}>
                             
                            <h3 style={customStyles.totalsHeading}>Cart Totals</h3>
                            
                            <div style={customStyles.totalsSeparator}></div>
                            
                            <div style={customStyles.totalsRow}>
                                <span>Subtotal</span>
                                <span><b>${subtotal}</b></span>
                            </div>
                            
                            <div style={customStyles.totalsSeparator}></div>

                            <div style={customStyles.totalsTotal}>
                                <span><b>Total</b></span>
                                <span><b>${total}</b></span>
                            </div>

                            <Button 
                                variant="dark" 
                                className="w-100" 
                                style={customStyles.checkoutButton}
                                onClick={handleCheckout}
                                disabled={cartItems.length === 0}
                            >
                                PROCEED TO CHECKOUT
                            </Button>
                            
                            <p className="text-center mt-3">
                                <small 
                                    style={{ cursor: 'pointer', color: '#666', textTransform: 'uppercase' }}
                                    onClick={handleGoBack}
                                >
                                    &lt; CONTINUE SHOPPING
                                </small>
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default CartPage;