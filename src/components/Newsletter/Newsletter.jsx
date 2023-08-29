import React from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";
import footerImg from "../../assests/images/pngwing.com (7).png";


const Newsletter = () => {
  return (
    <section>
      <Container className="newsletter">
        <Row>
          <Col lg="12" className="text-center">
            <h2 className="mb-4">Hop on and join us on our BIS Journey</h2>
            <img className="footerpic" src={footerImg} alt="footer"/>
           </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
