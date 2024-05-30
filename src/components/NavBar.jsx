import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/logo.png';
import { Link as ScrollLink } from 'react-scroll';
import navIcon1 from '../assets/github (1).svg';
import navIcon2 from '../assets/linkedin (2).svg';
import navIcon3 from '../assets/instagram (1).svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
            onUpdateActiveLink(); // Update active link on scroll
        };
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = () => {
        const scrollPosition = window.scrollY;
        const homeSection = document.getElementById('home').offsetTop;
        const aboutMeSection = document.getElementById('about-me').offsetTop;
        const contactSection = document.getElementById('contact').offsetTop;

        if (scrollPosition >= homeSection && scrollPosition < aboutMeSection) {
            setActiveLink('home');
        } else if (scrollPosition >= aboutMeSection && scrollPosition < contactSection) {
            setActiveLink('about-me');
        } else if (scrollPosition >= contactSection) {
            setActiveLink('contact');
        }
    };

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand>
                    <ScrollLink to="coder" smooth={true} duration={300}>
                        <img src={logo} width={55} alt="Logo" />
                    </ScrollLink>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"> </span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <ScrollLink to='home' smooth={true} duration={200} className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}>Home</ScrollLink>
                        <ScrollLink to='about-me' smooth={true} duration={200} className={activeLink === 'about-me' ? 'active navbar-link' : 'navbar-link'}>About me</ScrollLink>
                        <ScrollLink to='project' smooth={true} duration={200} className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'}>Projects</ScrollLink>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://github.com/mel-10"><img src={navIcon1} alt="" /></a>
                            <a href="https://www.linkedin.com/in/malika-karamkar-522577203/"><img src={navIcon2} alt="" /></a>
                            <a href="https://www.instagram.com/malikaa.k/"><img src={navIcon3} alt="" /></a>
                        </div>
                        <a href="mailto:mkaramkar@gmail.com">
                            <button className="vvd"><span>Let's Connect</span></button>
                        </a>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
