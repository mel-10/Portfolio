import {Col, Container, Row} from "react-bootstrap";
import aboutme from "../assets/aboutme.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const AboutMe=()=>{
    return(
        <section className="About" id="aboutme">
        <Container>
            <Row className="align-items-center">

                    <Col size={12} md={6} className="aboutme-bx">
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <img className={isVisible ? "animate__animated animate__fadeIn" : ""}
                                    src={aboutme} alt="AboutMe" />
                            }
                        </TrackVisibility>
                    </Col>
            
                    <Col md={6}>
                        <div className="about-me-heading">
                            <h2>About Me</h2>
                            <p>Hello! I'm Malika, a final-year student pursuing ECE at Sardar Vallabhbhai National Institute of Technology (SVNIT). Passionate about web development, I've spent my college years mastering front-end technologies like HTML, CSS, and JavaScript frameworks.<br/> With a knack for problem-solving, I've dived into back-end development using Node.js and database management with SQL and NoSQL databases. My project-driven approach has honed my skills in creating responsive, user-centric designs. Currently seeking opportunities to apply my knowledge in real-world scenarios and eager to contribute to innovative web development projects.</p>
                        </div>
                    </Col>
            </Row>
        </Container>
       
    </section>
    )
}