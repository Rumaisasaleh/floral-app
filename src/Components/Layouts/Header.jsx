import React, {useState} from 'react'
import "../../Styles/HeaderStyle.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link as ScrollLink } from 'react-scroll';
import Logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';

function Header() {

  const [nav, setNav] = useState(false);

  // SCROLL

  const changeValueOnScroll =() =>{
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  };

  window.addEventListener("scroll", changeValueOnScroll);

  return (
    <header>
    <Navbar collapseOnSelect expand="lg" className={`${nav === true ? "sticky" : ""}`}>
      <Container>
        <Navbar.Brand href="#home">
          <Link to='/' className='logo'>
          <img src={Logo} alt="Logo" className="img-fluid"/>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={ScrollLink} to="home" smooth={true} duration={600} offset={-70}>Home</Nav.Link>
            <Nav.Link as={ScrollLink} to="about" smooth={true} duration={600} offset={-70}>About</Nav.Link>
            <Nav.Link as={ScrollLink} to="menu" smooth={true} duration={600} offset={-70}>Our Menu</Nav.Link>
            <Nav.Link as={ScrollLink} to="shop" smooth={true} duration={600} offset={-70}>Shop</Nav.Link>
            <Nav.Link as={ScrollLink} to="blog" smooth={true} duration={600} offset={-70}>Blog</Nav.Link>
            <Nav.Link as={ScrollLink} to="contact" smooth={true} duration={600} offset={-70}>Contact</Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <div className='cart'>
                  <i class="bi bi-bag fs-5"></i>
                  <em className='roundpoint'>2</em>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    </header>
  )
}

export default Header
