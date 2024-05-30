import { Container, Row, Col } from "react-bootstrap";
import { MailChimpForm } from "./MailChimpForm";
import logo from "../assets/logo.png"
import navIcon1 from "../assets/github w.svg";
import navIcon2 from "../assets/instagram w.svg";
import navIcon3 from "../assets/linkedin w.svg";



export const Footer = () => {
    return (
      <footer className="footer">
        <Container>
          <Row className="align-items-center">
          
            <Col size={12} sm={6}>
              <p>Thank you for visiting !</p>
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
              <div className="social-icon">
                <a href="#"><img src={navIcon1} alt="Icon" /></a>
                <a href="#"><img src={navIcon2} alt="Icon" /></a>
                <a href="#"><img src={navIcon3} alt="Icon" /></a>
              </div>
              <p>Copyright &copy; 2024. All Rights Reserved</p>
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }