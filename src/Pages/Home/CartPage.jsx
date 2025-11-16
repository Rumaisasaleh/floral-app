import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, FormControl } from 'react-bootstrap';
import { useCart } from '../../context/CartContext';

// --- Custom Styles to match the minimalist, divided theme ---
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
    subscriptionPrice: {
        fontSize: '0.8rem',
        color: '#007bff', // Blue text for subscription option
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
        borderLeft: '1px solid #ccc',
        paddingLeft: '50px',
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
        fontSize: '1rem', // Smaller than subtotal in the image
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
    // Correct usage of the imported hook, assuming your hook manages quantity
    const { cartItems, removeFromCart, updateQuantity } = useCart();
    
    // --- Total Calculation Logic ---
    const calculateSubtotal = () => {
        // Assume price is stored correctly and quantity is a property of the item
        return cartItems.reduce((total, item) => 
            total + (parseFloat(item.price || 0) * (item.quantity || 1)), 0
        );
    };

    const subtotal = calculateSubtotal().toFixed(2);
    const shippingCost = 0.00; // Assuming 'Free' shipping
    const taxEstimated = 0.00; // Assuming '$0.00' tax
    const total = (parseFloat(subtotal) + shippingCost + taxEstimated).toFixed(2);
    
    // --- Mock Data Extension for Visual Match (Keep if needed for display) ---
    const renderCartItems = cartItems.map(item => ({
        ...item,
        details: item.details || "Mint / 100 mg / x1", 
        subscriptionPrice: item.subscriptionPrice || (parseFloat(item.price || 0) * 0.9).toFixed(2),
        quantity: item.quantity || 1
    }));
    // -------------------------------------------------------------------------

    // *** NEW FUNCTION: Handles the mailto redirect ***
    const handleCheckout = () => {
        const recipientEmail = "sales@yourcompany.com"; // <-- Replace with your target email
        const subject = "Quotation Request for Floral Items";
        
        // 1. Build the body content line by line
        let bodyContent = "Hello,\n\nI would like to request a quotation for the following items:\n\n";
        
        renderCartItems.forEach(item => {
            // Format each item line
            const line = `- ${item.title} | Details: ${item.details} | Qty: ${item.quantity} | Price: $${(parseFloat(item.price || 0) * item.quantity).toFixed(2)}`;
            bodyContent += line + "\n";
        });

        bodyContent += `\nTotal: $${total}\n\nThank you.`;

        // 2. Encode the subject and body for the mailto URL
        const encodedSubject = encodeURIComponent(subject);
        const encodedBody = encodeURIComponent(bodyContent);

        // 3. Create the final mailto link and open it
        const mailtoLink = `mailto:${recipientEmail}?subject=${encodedSubject}&body=${encodedBody}`;
        
        window.location.href = mailtoLink;
    };
    // ************************************************

    const contentColSize = 7;
    const totalsColSize = 5;

    // // --- Mock Data Extension for Visual Match (Remove if your cartItems already have these fields) ---
    // // This is used to replicate the exact fields shown in the image (details, subscription price)
    // const renderCartItems = cartItems.map(item => ({
    //     ...item,
    //     // Mocking structure based on image, replace with real data if available
    //     details: item.details || "Mint / 100 mg / x1", 
    //     subscriptionPrice: item.subscriptionPrice || (parseFloat(item.price || 0) * 0.9).toFixed(2),
    //     quantity: item.quantity || 1 // Fallback quantity
    // }));
    // // ------------------------------------------------------------------------------------------------

    // // Splitting the content columns
    // const contentColSize = 7;
    // const totalsColSize = 5;

    return (
        <Container className="py-5 mt-5">
            <Row className="justify-content-center">
                <Col lg={11}>
                    <div style={{ paddingLeft: '20px' }}>
                        {/* <span style={{ fontSize: '0.9rem' }}>&lt; Back</span> */}
                        <h1 style={customStyles.cartHeading}>Your Cart</h1>
                    </div>

                    <Row>
                        {/* Left Column: Product List and Coupon */}
                        <Col lg={contentColSize} style={{ paddingRight: '30px' }}>
                            
                            {/* Product List */}
                            {renderCartItems.map((item) => (
                                <Row key={item.id} style={customStyles.productRow}>
                                    {/* Remove button */}
                                    <Col xs={1} onClick={() => removeFromCart(item.id)}>
                                        <span style={customStyles.removeItem}>&times;</span>
                                    </Col>
                                    {/* Image */}
                                    <Col xs={2}>
                                        <img 
                                            src={item.image || 'placeholder.jpg'} 
                                            alt={item.title} 
                                            style={{ width: '80px', height: '80px', objectFit: 'cover' }} 
                                        />
                                    </Col>
                                    {/* Title, Details, and Subscription Options */}
                                    <Col xs={5}>
                                        <p style={customStyles.productTitle}>{item.title}</p>
                                        <p style={customStyles.productDetails}>{item.details}</p>
                                        <div className="mt-2">
                                         {/* Display the standard price as simple text/label, NOT a radio button */}
                                            {/* <p style={{ margin: '0', fontSize: '1rem', fontWeight: 'bold' }}>
                                                ${parseFloat(item.price || 0).toFixed(2)}
                                            </p> */}
                                            {/* <Form.Check 
                                                type="radio"
                                                label={`$${item.subscriptionPrice} / month`}
                                                name={`price-option-${item.id}`}
                                                id={`option2-${item.id}`}
                                                style={customStyles.subscriptionPrice}
                                            /> */}
                                        </div>
                                    </Col>
                                    {/* Quantity and Price */}
                                    <Col xs={4} className="d-flex justify-content-end align-items-center">
                                        {/* Quantity Controls */}
                                        <div className="d-flex align-items-center me-3">
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
                                        <div className="text-end">
                                            <p style={customStyles.productTitle}>${(parseFloat(item.price || 0) * item.quantity).toFixed(2)}</p>
                                            {/* Sub price below final price as per screenshot */}
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
                                <Form className="d-flex align-items-center">
                                    <FormControl 
                                        type="text" 
                                        placeholder="Coupon code" 
                                        style={customStyles.couponInput}
                                    />
                                    <Button variant="light" style={customStyles.applyButton}>
                                        APPLY
                                    </Button>
                                    <small className="ms-auto" style={{ cursor: 'pointer', fontSize: '0.8rem', color: '#666', textTransform: 'uppercase' }}>
                                        UPDATE CART
                                    </small>
                                </Form>
                            </div>
                        </Col>

                        {/* Right Column: Cart Totals */}
                        <Col lg={totalsColSize} style={customStyles.totalsBox}>
                            <h3 style={customStyles.totalsHeading}>Cart Totals</h3>
                            
                            {/* <div style={customStyles.totalsRow}>
                                <span>Shipping (3-5 Business Days)</span>
                                <span>{shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}</span>
                            </div> */}
                            {/* <div style={customStyles.totalsRow}>
                                <span>TAX (estimated for the United States (US))</span>
                                <span>${taxEstimated.toFixed(2)}</span>
                            </div>
                             */}
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
                                onClick={handleCheckout} // <--- This calls the function
                                disabled={cartItems.length === 0} // Optional: Disable if cart is empty
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