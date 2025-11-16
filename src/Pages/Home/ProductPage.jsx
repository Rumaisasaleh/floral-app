import React, { useState } from "react";
import { useParams } from "react-router-dom";
// Note: Assuming these paths are correct for your project structure
import roses from '../../assets/brands/products/roses.jpg';
import lilies from '../../assets/brands/products/lillies.jpg';
import orchids from '../../assets/brands/products/Orchids.jpg';
import anthuriums from '../../assets/brands/products/Anthuriums.jpg';
import babysbreath from '../../assets/brands/products/babysbreath.jpg';
import Chrysanthemums from '../../assets/brands/products/Chrysanthemums.jpg';
import Daisies from '../../assets/brands/products/Daisies.jpg';
import tulips from '../../assets/brands/products/Tulips.jpg';
import peruvian from '../../assets/brands/products/peruvian.jpg';
import hydrangeas from '../../assets/brands/products/Hydrangeas.jpg';
import { useCart } from "../../context/CartContext";

// Helper function to convert numeric rating to star icons
const getStarRating = (rating) => {
    // The image shows 4.8, which we'll simulate for the first product
    const displayRating = rating === 5 ? 4.8 : rating; 
    const fullStars = Math.floor(displayRating);
    const hasHalfStar = (displayRating % 1) >= 0.5;
    
    let stars = '⭐'.repeat(fullStars);
    if (hasHalfStar) {
        stars += '🌟'; // Using 🌟 to represent a half star, or a different emoji/icon
    }
    return stars;
};

// 1. Define your product data array (Corrected duplicate ID)
const products = [
    {
        id: "0001",
        image: roses, 
        title: "Classic Rose Bouquet",
        paragraph: "A stunning arrangement of **premium red and white roses**, symbolizing love and purity. A timeless gift for any occasion.",
        rating: 5, // We'll display 4.8 for this one to match the image
        price: 99.15,
        originalPrice: 120.00, // Added for the 'discount' look in the image
        reviews: 245,
        options: ["Small (12 stems)", "Medium (18 stems)", "Large (24 stems)"], // Adapted from 30ml, 60ml, 100ml
        sku: "FL-RSE-12ST",
        tags: ["Fresh", "Romantic", "Classic"],
    },
    {
        id: "0002",
        image: lilies, 
        title: "Elegant Lily Arrangement",
        paragraph: "An elegant bouquet featuring **Stargazer lilies** and bright yellow accent flowers, perfect for expressing sympathy or celebration.",
        rating: 4,
        price: 145.75,
        originalPrice: 160.00,
        reviews: 180,
        options: ["Standard", "Deluxe", "Premium"],
        sku: "FL-LLY-STDG",
        tags: ["Elegant", "Sympathy", "Bright"],
    },
    // ... (rest of the products are the same, omitting for brevity but they should be in the final file)
    {
        id: "0003",
        image: orchids, 
        title: "Exotic Orchid Mix",
        paragraph: "A delicate mix of **Phalaenopsis orchids** and rich purple flowers, representing luxury and beauty. A long-lasting display.",
        rating: 5,
        price: 110.00,
        originalPrice: 110.00,
        reviews: 300,
        options: ["Potted", "Cut Stems"],
        sku: "FL-ORC-PHTS",
        tags: ["Luxury", "Exotic", "Long-lasting"],
    },
    {
        id: "0004",
        image: Daisies, 
        title: "Vibrant Gerbera Daisies",
        paragraph: "A cheerful and vibrant arrangement of **Gerbera daisies** in fiery orange and yellow, bringing instant happiness and sunshine.",
        rating: 4,
        price: 92.50,
        originalPrice: 100.00,
        reviews: 150,
        options: ["Small", "Large"],
        sku: "FL-DSY-VBRT",
        tags: ["Cheerful", "Vibrant", "Sunshine"],
    },
    {
        id: "0005",
        image: anthuriums, 
        title: "Tropical Anthurium Display",
        paragraph: "Exotic **red anthuriums** and lush tropical foliage, giving a bold and modern feel. A unique statement piece.",
        rating: 5,
        price: 68.99,
        originalPrice: 75.00,
        reviews: 210,
        options: ["Red", "Pink", "White"],
        sku: "FL-ANT-TRP",
        tags: ["Tropical", "Bold", "Modern"],
    },
    {
        id: "0006",
        image: babysbreath, 
        title: "Delicate Baby's Breath",
        paragraph: "A cloud-like arrangement of **delicate Baby's Breath** (**Gypsophila**), perfect as a filler or a standalone minimalist bouquet.",
        rating: 4,
        price: 98.75,
        originalPrice: 105.00,
        reviews: 90,
        options: ["Small", "Large"],
        sku: "FL-GYS-DCLT",
        tags: ["Delicate", "Filler", "Minimalist"],
    },
    {
        id: "0007",
        image: Chrysanthemums,
        title: "Harvest Chrysanthemum Bouquet",
        paragraph: "A full, colorful bouquet of various **Chrysanthemum** varieties, representing joy and longevity.",
        rating: 5,
        price: 70.50,
        originalPrice: 80.00,
        reviews: 220,
        options: ["Mixed Colors", "Single Color"],
        sku: "FL-CHY-HRVST",
        tags: ["Joy", "Longevity", "Harvest"],
    },
    {
        id: "0008",
        image: tulips,
        title: "Spring Tulip Assortment",
        paragraph: "A bright bundle of assorted **Tulips** in red, yellow, and pink, symbolizing the arrival of spring and perfect love.",
        rating: 4,
        price: 130.00,
        originalPrice: 140.00,
        reviews: 160,
        options: ["Red", "Yellow", "Pink", "Mixed"],
        sku: "FL-TLP-SPRG",
        tags: ["Spring", "Love", "Assorted"],
    },
    {
        id: "0009", 
        image: peruvian,
        title: "Alstroemeria (Peruvian Lilies)",
        paragraph: "A mixed arrangement of **Alstroemeria** (Peruvian Lilies), known for their long vase life and representing devotion.",
        rating: 4,
        price: 65.00,
        originalPrice: 70.00,
        reviews: 110,
        options: ["Standard", "Premium"],
        sku: "FL-PER-DVN",
        tags: ["Devotion", "Long-lasting", "Mixed"],
    },
    {
        id: "0010", 
        image: hydrangeas,
        title: "Lush Hydrangea Bouquet", 
        paragraph: "A lush, full bouquet of **Hydrangeas** in mixed colors, offering a classic, voluminous appearance.",
        rating: 4,
        price: 85.00,
        originalPrice: 90.00,
        reviews: 130,
        options: ["Blue", "Pink", "White", "Mixed"],
        sku: "FL-HYD-LSH",
        tags: ["Classic", "Voluminous", "Lush"],
    }
]; 


function ProductPage() {
    const { id } = useParams();
    const product = products.find(p => p.id === id);
    const [selectedOption, setSelectedOption] = useState(product?.options[0] || "");
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState("Review"); // Default to 'Review' like in the image
    const { addToCart } = useCart();

      const handleAddToCart = (e) => {
        e.preventDefault(); 
        e.stopPropagation(); 
        addToCart(product); 
        alert(`${title} added to your cart!`); 
    };

    if (!product) {
        return (
            <div className="mt-5" style={{ textAlign: "center", padding: "50px" }}>
                <h2>Product Not Found 😔</h2>
                <p>Could not find details for item ID: **{id}**.</p>
            </div>
        );
    }
    
    // --- Handlers for Quantity ---
    const incrementQuantity = () => setQuantity(prev => prev + 1);
    const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

    // --- Content for the Tabs (for display purposes) ---
    const renderTabContent = () => {
        switch (activeTab) {
            case "Description":
                return <p style={{lineHeight: 1.6}}>{product.paragraph.replace(/\*\*/g, '')}</p>; // Remove bold for tab content
            case "Additional Information":
                return (
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>**SKU:** {product.sku}</li>
                        <li>**Tags:** {product.tags.join(', ')}</li>
                        <li>**Price:** ${product.price.toFixed(2)}</li>
                    </ul>
                );
            case "Review":
            default:
                // Mock review content to match the look of the image (4.8 / 5 star breakdown)
                return (
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                            <h3 style={{ margin: 0, marginRight: '10px' }}>4.8</h3>
                            <div style={{ color: '#ffc107', fontSize: '1.2em' }}>{getStarRating(5)}</div> 
                        </div>
                        <p style={{ color: '#555' }}>Based on {product.reviews} reviews</p>
                        {/* Simplified Mock Star Breakdown */}
                        <div style={{ marginTop: '20px' }}>
                            {/* The 5-star bar is mostly full in the image, simulating the high rating */}
                            <div style={{ display: 'flex', alignItems: 'center', margin: '5px 0' }}>
                                <span style={{ width: '60px', color: '#555' }}>5 Star</span>
                                <div style={{ flex: 1, height: '8px', backgroundColor: '#e0e0e0', borderRadius: '4px', margin: '0 10px' }}>
                                    <div style={{ width: '90%', height: '100%', backgroundColor: '#ffc107', borderRadius: '4px' }}></div>
                                </div>
                                <span style={{ width: '40px', textAlign: 'right', color: '#555' }}>90%</span>
                            </div>
                            {/* Lower bars */}
                            <div style={{ display: 'flex', alignItems: 'center', margin: '5px 0' }}>
                                <span style={{ width: '60px', color: '#555' }}>4 Star</span>
                                <div style={{ flex: 1, height: '8px', backgroundColor: '#e0e0e0', borderRadius: '4px', margin: '0 10px' }}>
                                    <div style={{ width: '5%', height: '100%', backgroundColor: '#ffc107', borderRadius: '4px' }}></div>
                                </div>
                                <span style={{ width: '40px', textAlign: 'right', color: '#555' }}>5%</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', margin: '5px 0' }}>
                                <span style={{ width: '60px', color: '#555' }}>3 Star</span>
                                <div style={{ flex: 1, height: '8px', backgroundColor: '#e0e0e0', borderRadius: '4px', margin: '0 10px' }}>
                                    <div style={{ width: '2%', height: '100%', backgroundColor: '#ffc107', borderRadius: '4px' }}></div>
                                </div>
                                <span style={{ width: '40px', textAlign: 'right', color: '#555' }}>2%</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', margin: '5px 0' }}>
                                <span style={{ width: '60px', color: '#555' }}>2 Star</span>
                                <div style={{ flex: 1, height: '8px', backgroundColor: '#e0e0e0', borderRadius: '4px', margin: '0 10px' }}>
                                    <div style={{ width: '1%', height: '100%', backgroundColor: '#ffc107', borderRadius: '4px' }}></div>
                                </div>
                                <span style={{ width: '40px', textAlign: 'right', color: '#555' }}>1%</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', margin: '5px 0' }}>
                                <span style={{ width: '60px', color: '#555' }}>1 Star</span>
                                <div style={{ flex: 1, height: '8px', backgroundColor: '#e0e0e0', borderRadius: '4px', margin: '0 10px' }}>
                                    <div style={{ width: '2%', height: '100%', backgroundColor: '#ffc107', borderRadius: '4px' }}></div>
                                </div>
                                <span style={{ width: '40px', textAlign: 'right', color: '#555' }}>2%</span>
                            </div>
                        </div>
                    </div>
                );
        }
    };
    
    // --- Styling for Tabs ---
    const tabStyle = (tabName) => ({
        padding: '10px 20px',
        cursor: 'pointer',
        borderBottom: activeTab === tabName ? '2px solid #333' : '2px solid transparent',
        color: activeTab === tabName ? '#333' : '#777',
        fontWeight: activeTab === tabName ? '600' : '400',
        transition: 'all 0.2s',
        fontSize: '1.1em'
    });

    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px 0' }}>
            
            <div style={{ padding: '0 50px',  marginTop:"100px"}}>

                {/* --- Main Product Layout (Image & Details) --- */}
                <div style={{
                    display: 'flex',
                    gap: '50px',
                    alignItems: 'flex-start',
                }}>
                    
                    {/* --- LEFT SIDE: IMAGE & THUMBNAILS --- */}
                    <div style={{ flex: 1, minWidth: '450px' }}>
                        {/* Main Image Container */}
                        <div style={{ 
                            border: '1px solid #eee', 
                            borderRadius: '5px', 
                            overflow: 'hidden',
                            position: 'relative'
                        }}>
                            {/* Mock navigation buttons matching the image */}
                            <div style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', cursor: 'pointer', color: '#fff', fontSize: '2em' }}>
                                ❮
                            </div>
                            <div style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', cursor: 'pointer', color: '#fff', fontSize: '2em' }}>
                                ❯
                            </div>
                            <img
                                src={product.image}
                                alt={product.title}
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                            />
                        </div>

                        {/* Thumbnail Images */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
                            {/* Mocking 4 thumbnails */}
                            {[product.image, product.image, product.image, product.image].map((imgSrc, index) => (
                                <div 
                                    key={index}
                                    style={{ 
                                        width: '23%', 
                                        height: '100px', 
                                        overflow: 'hidden', 
                                        borderRadius: '5px',
                                        border: index === 0 ? '2px solid #5cb85c' : '1px solid #eee', // Active thumbnail
                                        cursor: 'pointer'
                                    }}
                                >
                                    <img src={imgSrc} alt={`Thumbnail ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* --- RIGHT SIDE: DESCRIPTION & ACTIONS --- */}
                    <div style={{ flex: 1.2, padding: '0 20px' }}>
                        <h1 style={{ marginBottom: '5px', fontSize: '2em' }}>{product.title}</h1>
                        
                        {/* Rating and Reviews */}
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                            <span style={{ fontSize: '1.2em', color: '#ffc107', marginRight: '5px' }}>
                                {getStarRating(product.rating)}
                            </span>
                            <span style={{ color: '#333', fontWeight: 'bold', marginRight: '5px' }}>
                                4.8
                            </span>
                            <span style={{ color: '#777' }}>
                                ({product.reviews} Reviews)
                            </span>
                            <span style={{ color: '#5cb85c', marginLeft: '20px', cursor: 'pointer' }}>
                                <small>Share</small> 
                            </span>
                        </div>
                        
                        {/* Price with Discount */}
                        <p style={{ 
                            fontSize: '1.5em', 
                            fontWeight: 'bold', 
                            marginBottom: '10px' 
                        }}>
                            {`$${product.price.toFixed(2)}`}
                            <span style={{ 
                                fontSize: '0.6em', 
                                fontWeight: 'normal', 
                                color: '#999', 
                                textDecoration: 'line-through',
                                marginLeft: '10px'
                            }}>
                                {`$${product.originalPrice.toFixed(2)}`}
                            </span>
                        </p>

                        {/* Short Description */}
                        <p style={{ fontSize: '1em', lineHeight: '1.5', color: '#555', marginBottom: '30px' }}>
                            {/* Using a placeholder text as the paragraph is too long for this section */}
                            {product.paragraph.replace(/\*\*/g, '').substring(0, 150) + "..."}
                        </p>

                        {/* Size/Volume Options */}
                        <div style={{ marginBottom: '30px' }}>
                            <h4 style={{ margin: '0 0 10px 0', fontSize: '1.1em', fontWeight: '600' }}>
                                Size/Volume
                            </h4>
                            <div style={{ display: 'flex', gap: '15px' }}>
                                {product.options.slice(0, 3).map((option, index) => ( // Only show first 3 options to match image layout
                                    <button 
                                        key={index}
                                        onClick={() => setSelectedOption(option)}
                                        style={{
                                            padding: '10px 15px',
                                            backgroundColor: selectedOption === option ? '#5cb85c' : 'white',
                                            color: selectedOption === option ? 'white' : '#333',
                                            border: selectedOption === option ? '1px solid #5cb85c' : '1px solid #ccc',
                                            borderRadius: '5px',
                                            cursor: 'pointer',
                                            fontWeight: '500',
                                            minWidth: '70px',
                                            transition: 'all 0.2s'
                                        }}
                                    >
                                        {/* Display a simplified label to match the image's "30ml" look */}
                                        {option.split(' ')[0]} 
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity Selector and Buttons */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
                            
                            {/* Quantity Selector */}
                            <div style={{ display: 'flex', border: '1px solid #ccc', borderRadius: '5px', overflow: 'hidden' }}>
                                <button 
                                    onClick={decrementQuantity} 
                                    style={qtyButtonStyle}
                                >
                                    -
                                </button>
                                <div style={qtyValueStyle}>
                                    {quantity}
                                </div>
                                <button 
                                    onClick={incrementQuantity} 
                                    style={qtyButtonStyle}
                                >
                                    +
                                </button>
                            </div>

                            {/* Add to Cart Button */}
                            <button style={{
                                padding: '12px 25px',
                                fontSize: '1em',
                                backgroundColor: '#fff',
                                color: '#5cb85c',
                                border: '1px solid #5cb85c',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                fontWeight: 'bold',
                                transition: 'all 0.2s'
                            }}  onClick={handleAddToCart}>
                                Add to Cart
                            </button>

                            {/* Buy Now Button */}
                            <button style={{
                                padding: '12px 25px',
                                fontSize: '1em',
                                backgroundColor: '#f0ad4e', // Yellowish-brown color from image
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                fontWeight: 'bold',
                                transition: 'all 0.2s'
                            }}>
                                Buy Now
                            </button>
                        </div>
                        
                        {/* SKU and Tags */}
                        <div style={{ fontSize: '0.9em', color: '#777', borderTop: '1px solid #eee', paddingTop: '15px' }}>
                            <p style={{ margin: '5px 0' }}><b>Tags:</b> {product.tags.join(', ')}</p>
                            <p style={{ margin: '5px 0' }}><b>Share:</b><span style={{ color: '#5cb85c' }}>{/* Mock icons here */} Facebook, Twitter, Pinterest</span></p>
                        </div>
                    </div>
                </div>

                {/* --- Tabs for Description, Info, Review --- */}
                <div style={{ marginTop: '50px', borderTop: '1px solid #eee' }}>
                    <div style={{ display: 'flex', gap: '30px', borderBottom: '1px solid #eee', marginBottom: '20px' }}>
                        {["Description", "Additional Information", "Review"].map(tab => (
                            <div 
                                key={tab} 
                                style={tabStyle(tab)}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </div>
                        ))}
                    </div>
                    
                    {/* Tab Content */}
                    <div style={{ padding: '20px 0' }}>
                        {renderTabContent()}
                    </div>
                </div>
            </div>
        </div>
    );
}

// Inline styles for the Quantity Selector buttons
const qtyButtonStyle = {
    padding: '10px 15px',
    backgroundColor: '#f8f8f8',
    color: '#333',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1em'
};

const qtyValueStyle = {
    padding: '10px 15px',
    borderLeft: '1px solid #ccc',
    borderRight: '1px solid #ccc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    fontWeight: 'bold'
};


export default ProductPage;