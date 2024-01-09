import { useEffect, useState } from "react";
import { Navbar,Container, Nav} from "react-bootstrap";
import logo from '../assets/logo.png';
import navIcon1 from '../assets/github (1).svg';
import navIcon2 from '../assets/linkedin (2).svg';
import navIcon3 from '../assets/instagram (1).svg';

export const NavBar = () => {
    const[activeLink,setActiveLink]=useState('home');
    const[scrolled,setScrolled]=useState(false);

    useEffect(()=> {
        const onScroll =() =>{
            if(window.scrollY > 50){
                setScrolled(true);
            } else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll",onScroll);
        
        return () => window.removeEventListener("scroll",onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return(
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container> 
                <Navbar.Brand href="#home">
                    <img src={logo} width={55} />
                </Navbar.Brand>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"> </span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#about" className={activeLink === 'about-me' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('about-me')}>About me</Nav.Link>
                        <Nav.Link href="#hmu" className={activeLink === 'hmu' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('hmu')}>Contact Me</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://github.com/mel-10"><img src={navIcon1} alt=""/></a>
                            <a href="https://www.linkedin.com/in/malika-karamkar-522577203/"><img src={navIcon2} alt=""/></a>
                            <a href="https://www.instagram.com/malikaa.k/"><img src={navIcon3} alt=""/></a>
                        </div>
                        <button className="vvd" onClick={()=> console.log('connect')}><span>Let's Connect</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}