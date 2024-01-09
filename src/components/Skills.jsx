import { Col, Container, Row } from "react-bootstrap";
import skills from "../assets/skills.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Skills = () => {
  return (
    <section className="Skills" id="skills">
      <Container>
        <Row className="align-items-center">

          <Col size={12} md={6} className="skills-bx">
            <div className="skills-heading">
              <h2>Skills</h2>
              <p><b>Continuous learning</b> is the key to thriving in the dynamic landscape of software development. With a diverse skill set in programming languages such as C++, Python, and JavaScript, along with expertise in web and back-end development, I've embraced a learning-centric approach to stay updated with cutting-edge technologies.</p>
              <ul>
                <li>Programming Languages:  C++,Python, JavaScript</li>
                <li>Web Development: HTML, CSS, JavaScript (React)</li>
                <li>Back-End Development: Node.js, Mongo DB, Firebase, SQL</li>
                <li>Version Control: Git, GitHub</li>
              </ul>
            </div>
          </Col>

          <Col md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__fadeIn" : ""}
                  src={skills} alt="Skills" />
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    

    </section>
  )
}