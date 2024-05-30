import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import banner from '../assets/banner.png';

export const Banner = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(200);
  const toRotate = ["Web Developer", "Web Designer", "Student"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    } else {
      setDelta(isDeleting ? 100 : 200);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>Hi! I'm Malika</h1>
                  <h1>
                    <span className="txt-rotate" dataPeriod="1000" data-rotate='["Web Developer", "Web Designer", "Student"]'>
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>Aspiring Software Engineer with a Passion for Web Development and Design</p>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5} className="text-center">
            <img src={banner} alt="Rotating Image" className="img-fluid rotating-image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
