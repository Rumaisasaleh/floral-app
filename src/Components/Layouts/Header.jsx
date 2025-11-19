import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import "../../Styles/HeaderStyle.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link as ScrollLink } from 'react-scroll';
import Logo from "../../assets/brands/logo.jpg";
import { useCart } from "../../context/CartContext";

function Header() {
    const { cartItems } = useCart();
    const location = useLocation();
    const [nav, setNav] = useState(false);

    // --- NEW LOGIC: Determine if the auxiliary links should be hidden ---
    const hiddenLinkPaths = ['/cart', '/all-dishes'];
    const shouldHideAuxiliaryLinks = hiddenLinkPaths.includes(location.pathname);
    // -------------------------------------------------------------------

    // Function to handle scroll event
    const changeValueOnScroll = () => {
        const scrollValue = document?.documentElement?.scrollTop;
        setNav(scrollValue > 100);
    };

    // useEffect manages the scroll listener and sets the default state for non-home pages
    useEffect(() => {
        if (location.pathname === '/') {
            changeValueOnScroll(); 
            window.addEventListener("scroll", changeValueOnScroll);
            
            return () => window.removeEventListener("scroll", changeValueOnScroll);
        } else {
            setNav(true);
        }
    }, [location.pathname]);

    // Determine the final class: always 'sticky' if not on home, or use the scroll state (nav) if on home.
    const headerClass = location.pathname !== '/' ? 'sticky' : (nav ? 'sticky' : '');

    return (
      <header>
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
                            
                            {/* FIX: Use Nav.Link for HOME and OUR MENU for automatic spacing */}
                            {/* 1. HOME link */}
                            <Nav.Link as={Link} to="/" className='active-menu-link'>HOME</Nav.Link>
                            
                            {/* 2. OUR MENU link */}
                            <Nav.Link as={Link} to="/catalog" className='active-menu-link'>CATALOG</Nav.Link>
                            
                            {/* 3. CONDITIONAL LINKS: ABOUT, BLOG, CONTACT */}
                            {!shouldHideAuxiliaryLinks && (
                                <>
                                    <Nav.Link as={ScrollLink} to="about" smooth={true} duration={600} offset={-70}>About</Nav.Link>
                                    <Nav.Link as={ScrollLink} to="blog" smooth={true} duration={600} offset={-70}>Blog</Nav.Link>
                                    <Nav.Link as={ScrollLink} to="contact" smooth={true} duration={600} offset={-70}>Contact</Nav.Link>
                                </>
                            )}
                            
                            {/* 4. CART link - Always visible */}
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