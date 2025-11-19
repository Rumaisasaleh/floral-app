import { useState, useEffect } from 'react'; // <-- ADDED useEffect
import { useLocation, Link } from 'react-router-dom'; // <-- ADDED useLocation
import "../../Styles/HeaderStyle.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link as ScrollLink } from 'react-scroll';
import Logo from "../../assets/brands/logo.jpg";
import { useCart } from "../../context/CartContext";

function Header() {
    const { cartItems } = useCart();
    const location = useLocation(); // <-- Hook to get current URL path
    const [nav, setNav] = useState(false);

    // Function to handle scroll event
    const changeValueOnScroll = () => {
        const scrollValue = document?.documentElement?.scrollTop;
        // The header becomes sticky (solid) if scrolled down more than 100px
        setNav(scrollValue > 100);
    };

    // useEffect manages the scroll listener and sets the default state for non-home pages
    useEffect(() => {
        // Check if we are on the homepage
        if (location.pathname === '/') {
            // Set initial state based on current scroll position
            changeValueOnScroll(); 
            
            // Add scroll listener for transparency/stickiness effect
            window.addEventListener("scroll", changeValueOnScroll);

            // Cleanup function to remove the listener when the component unmounts or the path changes
            return () => window.removeEventListener("scroll", changeValueOnScroll);
        } else {
            // If it's NOT the homepage, force the 'sticky' state (solid background) immediately
            setNav(true);
        }
    }, [location.pathname]); // Re-run this effect whenever the URL path changes

    // Determine the final class: always 'sticky' if not on home, or use the scroll state (nav) if on home.
    const headerClass = location.pathname !== '/' ? 'sticky' : (nav ? 'sticky' : '');

    return (
        <header>
            {/* Apply the calculated class */}
            <Navbar collapseOnSelect expand="lg" className={headerClass}>
                <Container>
                    <Navbar.Brand href="#home">
                        <Link to='/' className='logo'>
                            <img src={Logo} alt="Logo" style={{width:'70px',height:'50px'}} className="img-fluid" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            {/* Use Link or ScrollLink based on destination */}
                            <Link to="/" className='active-menu-link'>HOME</Link>
                            <Nav.Link as={ScrollLink} to="about" smooth={true} duration={600} offset={-70}>About</Nav.Link>
                            <Link to="/all-dishes" className='active-menu-link'>OUR MENU</Link>
                            {/* <Nav.Link as={ScrollLink} to="shop" smooth={true} duration={600} offset={-70}>Shop</Nav.Link> */}
                            <Nav.Link as={ScrollLink} to="blog" smooth={true} duration={600} offset={-70}>Blog</Nav.Link>
                            <Nav.Link as={ScrollLink} to="contact" smooth={true} duration={600} offset={-70}>Contact</Nav.Link>

                            <Nav.Link as={Link} to="/cart">
                                <div className='cart position-relative'>
                                    <i className="bi bi-bag fs-5"></i>
                                    <em className='roundpoint position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                                        {cartItems.length}
                                    </em>
                                </div>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;