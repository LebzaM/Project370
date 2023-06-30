import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/about-us.png";
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2>About BIS undergraduate program</h2>
              <p>
              UP offers three main programmes with courses relevant to the trends of the information and knowledge age and economy and the Fourth Industrial Revolution: Information Science , Multimedia and Publishing Studies . <br/> Some of the areas in which we specialise include Knowledge Management, Virtual Reality, and Electronic Publishing. In addition to under- and postgraduate programmes in these areas, we also offer a Masters degree in Information Technology specialising in Library and Information Science.
              </p>

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
               
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
