import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logoVideo from "../assets/video/Astronut.mp4"; 
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/icons8-github.svg";
import navIcon3 from "../assets/img/leetcode-svgrepo-com.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <video src={logoVideo} alt="Logo" autoPlay loop muted style={{ width: "100px" }} />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/sathish-kumar-g-sk10042002/"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://github.com/imsathishkumar1004"><img src={navIcon2} alt="GitHub" /></a>
              <a href="https://leetcode.com/u/jarvis1004/"><img src={navIcon3} alt="LeetCode" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
