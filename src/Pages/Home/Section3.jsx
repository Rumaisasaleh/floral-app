import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// ... (Your existing imports)
import roses from '../../assets/brands/products/roses.jpg'
import lilies from '../../assets/brands/products/lillies.jpg'
import orchids from '../../assets/brands/products/Orchids.jpg'
import Daisies from '../../assets/brands/products/Daisies.jpg'
import anthuriums from '../../assets/brands/products/Anthuriums.jpg'
import babysbreath from '../../assets/brands/products/babysbreath.jpg'
import Chrysanthemums from '../../assets/brands/products/Chrysanthemums.jpg'
import tulips from '../../assets/brands/products/Tulips.jpg'
import peruvian from '../../assets/brands/products/peruvian.jpg'
import hydrangeas from '../../assets/brands/products/Hydrangeas.jpg'
import Card from '../../Components/Layouts/Card'
import { Link } from 'react-router-dom'

// ... (Your existing mockData and renderRatingIcons functions)
const mockData = [
    {
        id: "0001",
        image: roses, 
        title: "Classic Rose Bouquet",
        paragraph: "A stunning arrangement of **premium red and white roses**, symbolizing love and purity. A timeless gift for any occasion.",
        rating: 5,
        price: 99.15,
    },
    {
        id: "0002",
        image: lilies, 
        title: "Elegant Lily Arrangement",
        paragraph: "An elegant bouquet featuring **Stargazer lilies** and bright yellow accent flowers, perfect for expressing sympathy or celebration.",
        rating: 4,
        price: 145.75,
    },
    {
        id: "0003",
        image: orchids, 
        title: "Exotic Orchid Mix",
        paragraph: "A delicate mix of **Phalaenopsis orchids** and rich purple flowers, representing luxury and beauty. A long-lasting display.",
        rating: 5,
        price: 110.00,
    },
    {
        id: "0004",
        image: Daisies, 
        title: "Vibrant Gerbera Daisies",
        paragraph: "A cheerful and vibrant arrangement of **Gerbera daisies** in fiery orange and yellow, bringing instant happiness and sunshine.",
        rating: 4,
        price: 92.50,
    },
    {
        id: "0005",
        image: anthuriums, 
        title: "Tropical Anthurium Display",
        paragraph: "Exotic **red anthuriums** and lush tropical foliage, giving a bold and modern feel. A unique statement piece.",
        rating: 5,
        price: 68.99,
    },
    {
        id: "0006",
        image: babysbreath, 
        title: "Delicate Baby's Breath",
        paragraph: "A cloud-like arrangement of **delicate Baby's Breath** (**Gypsophila**), perfect as a filler or a standalone minimalist bouquet.",
        rating: 4,
        price: 98.75,
    },
    {
        id: "0007",
        image: Chrysanthemums,
        title: "Harvest Chrysanthemum Bouquet",
        paragraph: "A full, colorful bouquet of various **Chrysanthemum** varieties, representing joy and longevity.",
        rating: 5,
        price: 70.50,
    },
    {
        id: "0008",
        image: tulips,
        title: "Spring Tulip Assortment",
        paragraph: "A bright bundle of assorted **Tulips** in red, yellow, and pink, symbolizing the arrival of spring and perfect love.",
        rating: 4,
        price: 130.00,
    },
    {
        id: "0009", 
        image: peruvian,
        title: "Alstroemeria (Peruvian Lilies)",
        paragraph: "A mixed arrangement of **Alstroemeria** (Peruvian Lilies), known for their long vase life and representing devotion.",
        rating: 4,
        price: 65.00,
    },
    {
        id: "0010", 
        image: hydrangeas,
        title: "Lush Hydrangea Bouquet", 
        paragraph: "A lush, full bouquet of **Hydrangeas** in mixed colors, offering a classic, voluminous appearance.",
        rating: 4,
        price: 85.00,
    },
];


const renderRatingIcons= (rating) => {
    const stars=[];
    
    for(let i=0; i<5; i++){
        if (rating>0.5){
            stars.push(<i key={i} className='bi bi-star-fill'></i>)
            rating--;
        }
        else if(rating > 0 && rating < 1){
            stars.push(<i key={"half"} className='bi bi-star-half'></i>)
            rating--;
        }
        else{
            stars.push(<i key={`empty${i}`} className='bi bi-star'></i>)
            rating--
        }
    }
    return stars;
}


function Section3() {
    const cardsToShow = 4
    const homePageDishes = mockData.slice(0, cardsToShow);

    return (
        <>
            <section className='menu-section' id='menu'>
                <Container>
                    <Row>
                        <Col lg={{span:8, offset:2}} className='text-center mb-5'>
                            <h2>Freshly Bloomed, Lovingly Arranged</h2>
                            <p className='para'>Our flowers are freshly gathered and beautifully designed to make every occasion unforgettable.</p>
                        </Col>
                    </Row>
                    <Row>
                        {homePageDishes.map((cardData, index) =>(
                            // 👇 KEY CHANGE FOR RESPONSIVE 4-COLUMN LAYOUT
                            // xs={12}: 1 card per row on extra small screens (full width)
                            // sm={6}: 2 cards per row on small screens (6/12 = 50%)
                            // lg={3}: 4 cards per row on large screens (3/12 = 25%)
                            <Col 
                                key={index} 
                                xs={12} 
                                sm={6} 
                                lg={3} // Changed to 3 for 4 items in a 12-column grid
                                className="mb-4" // Removed the custom class 'col-xl-2-4'
                            >
                                    <Card
                                        id={cardData.id} 
                                        image={cardData.image}
                                        rating={cardData.rating}
                                        title={cardData.title}
                                        price={cardData.price}
                                        renderRatingIcons={renderRatingIcons}
                                    />
                            </Col>
                        ))}
                    </Row>

                    {/* ADDED: More Dishes Button that redirects to a new page */}
                    <Row className='text-center mt-4'>
                        <Col>
                            <Link to="/all-dishes" className='btn btn_red order_now'>
                                View More
                            </Link>
                        </Col>
                    </Row>
                        
                    {/*---------------------------------------------------------------------------------- */}
                    <Row className='pt-5 mb-5'>
                        {/* 🎯 LEFT AD BOX: Changed to Wedding & Events */}
                        <Col sm={6} lg={6}>
                            <div className="ads-box ads-img1 mb-5 mb-md-0">
                                {/* You may want to update the background image class 'ads-img1' in your CSS 
                                    to something related to weddings/events. */}
                                <h4 className='mb-0'>Dream <b>Wedding & Events</b></h4>
                                <Link to='/events' className='btn btn_red px-4 rounded-0'>
                                    View Services
                                </Link>
                            </div>
                        </Col>

                        {/* 🎯 RIGHT AD BOX: Changed to Floral Subscription */}
                        <Col sm={6} lg={6}>
                            <div className="ads-box ads-img">
                                {/* You may want to update the background image class 'ads-img' in your CSS 
                                    to something related to recurring delivery. */}
                                <h4 className='mb-0'>Monthly <b>Floral</b> Subscription</h4>
                                <Link to='/subscription' className='btn btn_red px-4 rounded-0'>
                                    Subscribe Now
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Section3
export { mockData, renderRatingIcons };