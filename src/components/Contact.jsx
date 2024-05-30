import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/contactImg.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6} className="contain-bx">
                        <div class="image-container">
                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <img className={isVisible ? "animate__animated animate__fadeIn" : ""}
                                        src={contactImg} alt="ContactUs" />
                                }
                            </TrackVisibility>
                        </div>
                    </Col>
                    <Col md={6}>
                        <h2>Contact</h2>
                        <div className="contact-links">
                            <p>You can reach me via email:</p>
                            <a href="mailto:mkaramkar@gmail.com" className="email-link">mkaramkar@gmail.com</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
