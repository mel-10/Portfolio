import { Col, Container, Row } from "react-bootstrap";
import aboutme from "../assets/aboutme.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const AboutMe = () => {
  return (
    <section className="About" id="about-me">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6} className="aboutme-bx">
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={`camera-click ${isVisible ? "animate__animated animate__flash" : ""}`}>
                  <img src={aboutme} alt="AboutMe" />
                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col md={6}>
            <div className="about-me-heading">
              <h2>About Me</h2>
              <p>
                Hey there! I'm Malika, a final-year student at SVNIT, passionate about web development. I've mastered front-end technologies like HTML, CSS, and JavaScript and dived into back-end development using Node.js. With a problem-solving mindset, I create responsive, user-centric designs. Seeking opportunities to apply my skills in real-world scenarios!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
