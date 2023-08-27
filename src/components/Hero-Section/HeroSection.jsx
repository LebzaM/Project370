import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/students.jpg";
import "./hero-section.css";
import Atropos from 'atropos/react';
const HeroSection = () => {
  return (
    <section id="home">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Welcome to the BIS <br /> Portal for prospective students <br /> Let us show you around
              </h2>
              <p className="mb-5">
                As a prospective BIS student at the University of Pretoria you will be prepared to handle <br/> the 4IR takeover by being equipped with the necessary skills and qualifications so let us take you through it!
              </p>
            </div>
            
          </Col>
          
          <Col lg="6" md="6">
          <Atropos className="my-atropos">
            <img src={heroImg} alt="" className="hero" />
            <button>
                       
                        <div id="clip">
                            <div id="leftTop" className="corner"></div>
                            <div id="rightBottom" className="corner"></div>
                            <div id="rightTop" className="corner"></div>
                            <div id="leftBottom" className="corner"></div>
                        </div>
                        <span id="rightArrow" className="arrow"></span>
                        <span id="leftArrow" className="arrow"></span>
                    </button>
            </Atropos>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
