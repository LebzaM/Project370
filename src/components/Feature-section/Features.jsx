import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Quick History",
    desc: "Mr PC Coetzee started training staff members of the Merensky Library in 1938, and ten years later the Department of Library Science was established in 1948 at the University of Pretoria.",
    icon: "ri-history-line",
  },

  {
    title: "Course Duration",
    desc: "3 Years",
    icon: "ri-time-line",
  },

  {
    title: "Qualification",
    desc: "BIS Information Science",
    desc2: "BIS Multimedia",
    desc3: "BIS Publishing Studies",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
                <p>{item.desc2}</p>
                <p>{item.desc3}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
