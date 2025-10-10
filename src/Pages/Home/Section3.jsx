import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import burger from '../../assets/burger.png'
import salmon from '../../assets/salmon.png'
import mushroom from '../../assets/mushroom.png'
import paneer from '../../assets/paneer.png'
import chocolava from '../../assets/chocolava.png'
import curry from '../../assets/curry.png'
import cheesecake from '../../assets/cheesecake.png'
import shrimp from '../../assets/shrimp.png'
import falafeel from '../../assets/falafeel.png'
import pie from '../../assets/pie.png'
import Card from '../../Components/Layouts/Card'
import { Link } from 'react-router-dom'

  const mockData = [
//   {
//     id: "0001",
//     image: burger,
//     title: "Crispy Chicken",
//     paragraph: "Chicken breast, chili sauce, tomatoes, pickles, coleslaw.",
//     rating: 5,
//     price: 99.15,
//   },
  {
    id: "0002",
    image: salmon,
    title: "Grilled Salmon Fillet",
    paragraph: "Atlantic salmon, lemon butter sauce, roasted asparagus, quinoa.",
    rating: 4,
    price: 145.75,
  },
  {
    id: "0003",
    image: mushroom,
    title: "Mushroom Ravioli",
    paragraph: "Homemade pasta, ricotta cheese, wild mushroom filling, truffle cream sauce.",
    rating: 5,
    price: 110.00,
  },
  {
    id: "0004",
    image: paneer,
    title: "Tandoori Paneer Skewers",
    paragraph: "Marinated cottage cheese, bell peppers, onions, mint chutney.",
    rating: 4,
    price: 92.50,
  },
  {
    id: "0005",
    image: chocolava,
    title: "Chocolate Lava Cake",
    paragraph: "Warm molten center, vanilla bean ice cream, raspberry drizzle.",
    rating: 5,
    price: 68.99,
  },
  {
    id: "0006",
    image: curry, // Mock Image: ChickenTikkaMasala
    title: "Chicken Tikka Masala",
    paragraph: "Marinated chicken, rich tomato cream sauce, basmati rice, naan bread.",
    rating: 4,
    price: 98.75,
  },

  {
    id: "0007",
    image: cheesecake, // Mock Image: NewYorkCheesecake
    title: "Classic Cheesecake",
    paragraph: "Creamy cheesecake, graham cracker crust, strawberry compote.",
    rating: 5,
    price: 70.50,
  },
  {
    id: "0008",
    image: shrimp, // Mock Image: ShrimpScampi
    title: "Garlic Shrimp Scampi",
    paragraph: "Jumbo shrimp, garlic butter sauce, linguine pasta, fresh parsley.",
    rating: 4,
    price: 130.00,
  },
//   {
//     id: "009",
//     image: falafeel, // Mock Image: FalafelPlatter
//     title: "Mediterranean Falafel Platter",
//     paragraph: "Crispy falafel, hummus, pita bread, fresh salad, tahini sauce.",
//     rating: 4,
//     price: 80.00,
//   },
  {
    id: "0010",
    image: pie, // Mock Image: LemonMeringuePie
    title: "Zesty Lemon Meringue Pie",
    paragraph: "Tangy lemon custard, fluffy meringue, buttery crust.",
    rating: 4,
    price: 65.00,
  },
];

// rating logical data
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



  return (
    <>
      <section className='menu-section' id='menu'>
        <Container>
            <Row>
                <Col lg={{span:8, offset:2}} className='text-center mb-5'>
                    <h2>Made Fresh, Served Hot</h2>
                    <p className='para'>Every item on our menu is prepared fresh to order using premium ingredients and authentic recipes.</p>
                </Col>
            </Row>
         <Row>
            {mockData.map((cardData, index) =>(
                // You MUST wrap the Card in a Col component for Bootstrap's grid to work
                <Col key={index} className="mb-4">
                    <Card
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

            {/*---------------------------------------------------------------------------------- */}

            <Row className='pt-5'>
                <Col sm={6} lg={6}>
                <div className="ads-box ads-img1 mb-5 mb-md-0">
                    <h4 className='mb-0'>Free <b>Dessert</b> Day</h4>
                    <Link to='/' className='btn btn_red px-4 rounded-0'>
                    learn more
                    </Link>
                </div>
                </Col>    
                <Col sm={6} lg={6}>
                <div className="ads-box ads-img">
                    <h4 className='mb-0'><b>Birthday</b> Special Offer</h4>
                    <Link to='/' className='btn btn_red px-4 rounded-0'>
                    Learn More
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
