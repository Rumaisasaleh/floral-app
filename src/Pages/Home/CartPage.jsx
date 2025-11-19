import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, FormControl } from 'react-bootstrap';
import { useCart } from '../../context/CartContext';

// --- Custom Styles to match the minimalist, divided theme ---
// NOTE: I've added a media query approach for 'totalsBox' within the component logic 
// to remove the border on mobile screens for a cleaner look.
const customStyles = {
    // General Layout
    cartHeading: {
        fontSize: '2rem',
        fontWeight: 400,
        textTransform: 'uppercase',
        marginBottom: '2rem',
        letterSpacing: '0.1em',
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
    // Removed borderLeft here, will apply it conditionally via CSS/logic
    totalsBox: {
        paddingLeft: '20px', // Default small padding
        marginTop: '3rem', // Add space above totals on mobile
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
        width: '180px', // Fixed width for desktop
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
    // Correct usage of the imported hook, assuming your hook manages quantity
    const { cartItems, removeFromCart, updateQuantity } = useCart();
    
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
    
    // Mock Data Extension for Visual Match 
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

    // Define column sizes for different screen sizes
    // xs={12} ensures full width on extra-small/mobile screens.
    const contentColSizes = { xs: 12, lg: 7 };
    const totalsColSizes = { xs: 12, lg: 5 };

    // Conditionally apply desktop-only styles
    const getTotalsBoxStyles = () => {
        const desktopStyles = {
            ...customStyles.totalsBox,
            borderLeft: '1px solid #ccc',
            paddingLeft: '50px',
            marginTop: '0', // Remove mobile margin on desktop
        };
        // Use a simple check or component-level logic since React-Bootstrap handles breakpoints
        // We apply default mobile-first styles, then merge desktop styles for 'lg' or larger
        return desktopStyles;
    };
    
    return (
        <Container className="py-5 mt-5">
            <Row className="justify-content-center">
                <Col lg={11}>
                    <div className="ps-3 ps-lg-0" style={{ paddingLeft: '20px' }}>
                        <h1 style={customStyles.cartHeading}>Your Cart</h1>
                    </div>

                    <Row>
                        {/* Left Column: Product List and Coupon */}
                        {/* Use contentColSizes for responsive widths. Removed extra paddingRight for cleaner mobile layout. */}
                        <Col {...contentColSizes} className="pe-lg-5"> 
                            
                            {/* Product List */}
                            {renderCartItems.map((item) => (
                                <Row key={item.id} style={customStyles.productRow}>
                                    {/* Remove button (Col xs={1} works on all sizes) */}
                                    <Col xs={1} onClick={() => removeFromCart(item.id)}>
                                        <span style={customStyles.removeItem}>&times;</span>
                                    </Col>
                                    {/* Image (Col xs={3} adjusted from xs={2} for mobile spacing) */}
                                    <Col xs={3} sm={2}>
                                        <img 
                                            src={item.image || 'placeholder.jpg'} 
                                            alt={item.title} 
                                            style={{ width: '80px', height: '80px', objectFit: 'cover' }} 
                                        />
                                    </Col>
                                    {/* Title, Details, and Subscription Options (Col xs={8} adjusted from xs={5}) */}
                                    <Col xs={8} sm={5}>
                                        <p style={customStyles.productTitle}>{item.title}</p>
                                        <p style={customStyles.productDetails}>{item.details}</p>
                                    </Col>
                                    {/* Quantity and Price (Col xs={12} or xs={4}) 
                                       Stack on XS, align right on SM/LG */}
                                    <Col xs={12} sm={4} className="d-flex flex-column flex-sm-row justify-content-sm-end align-items-sm-center mt-3 mt-sm-0">
                                        
                                        {/* Quantity Controls */}
                                        <div className="d-flex align-items-center me-sm-3 mb-2 mb-sm-0">
                                            <Button 
                                                variant="light" 
                                                style={customStyles.quantityControl} 
                                                onClick={() => updateQuantity && updateQuantity(item.id, item.quantity - 1)}
                                            >
                                                -
                                            </Button>
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
                                            >
                                                +
                                            </Button>
                                        </div>
                                        
                                        {/* Final Price */}
                                        <div className="text-start text-sm-end">
                                            <p style={customStyles.productTitle}>${(parseFloat(item.price || 0) * item.quantity).toFixed(2)}</p>
                                            {/* Line-through price (kept for visual match) */}
                                            <p style={{...customStyles.productDetails, textDecoration: 'line-through'}}>
                                                ${(parseFloat(item.price || 0) * item.quantity).toFixed(2)}
                                            </p> 
                                        </div>
                                    </Col>
                                </Row>
                            ))}
                            
                            {/* Coupon Code and Update Cart */}
                            <div className="mt-5">
                                <p style={{ fontSize: '0.9rem', color: '#000' }}>Have a coupon? Enter your code.</p>
                                {/* Adjusted Form to flex-wrap on mobile and full width for input */}
                                <Form className="d-flex flex-wrap align-items-center">
                                    <FormControl 
                                        type="text" 
                                        placeholder="Coupon code" 
                                        // On mobile, take up full width below the button, and half on tablet/desktop
                                        className="mb-2 mb-sm-0" 
                                        style={{...customStyles.couponInput, width: '100%', maxWidth: '200px'}} 
                                    />
                                    <Button variant="light" style={customStyles.applyButton}>
                                        APPLY
                                    </Button>
                                    <small className="ms-auto mt-2 mt-sm-0" style={{ cursor: 'pointer', fontSize: '0.8rem', color: '#666', textTransform: 'uppercase' }}>
                                        UPDATE CART
                                    </small>
                                </Form>
                            </div>
                        </Col>

                        {/* Right Column: Cart Totals */}
                        {/* Use totalsColSizes for responsive widths. Added className to apply desktop styles conditionally. */}
                        <Col {...totalsColSizes} 
                             // Apply desktop-only styles only when the screen size is 'lg' or larger
                             className="border-start-lg border-start-md border-start-0" 
                             style={{
                                 ...customStyles.totalsBox,
                                 borderLeft: window.innerWidth >= 992 ? '1px solid #ccc' : 'none', // 992px is lg breakpoint
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
                                <small style={{ cursor: 'pointer', color: '#666', textTransform: 'uppercase' }}>
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