import React from "react";
import { Container, Row, Col } from "reactstrap";

import Annique from "../../assests/images/AnniqueS.webp";
import Beth from "../../assests/images/Beth.webp";
import Martie from "../../assests/images/Martie.jpg";
import courseImg04 from "../../assests/images/ui-ux.png";
import FreeCourseCard from "./FreeCourseCard";
import Marleneh from "../../assests/images/MarleneH.webp";
import "./free-course.css";

const freeCourseData = [
  {
    id: "01",
    title: "Prof Marlene Holmner",
    imgUrl: Marleneh,
    qualification:"BA, BA (Hons), MA, DPhil (Pretoria)",
    students: 5.3,
    
  },
  {
    id: "02",
    title: "Ms Annique Smith",
    imgUrl: Annique,
    qualification:"BIS Multimedia, BIS (Hons) Multimedia, MIS Multimedia (Pretoria)",
    students: 5.3,
    
  },

  {
    id: "03",
    title: "Prof Beth le Roux",
    imgUrl: Beth,
    qualification:"BA (Hons), MIS Publishing, PhD Publishing (Pretoria), Postgraduate Diploma in Translation (UNISA)",
    students: 5.3,
  
  },

  {
    id: "04",
    title: "Prof Martie Mearns",
    imgUrl: Martie,
    qualification:"D. Litt. et Phil. in Information Science (University of Johannesburg)",
    students: 5.3,
    rating: 1.7,
  },
];

const FreeCourse = () => {
  return (
    <section id="lectures">
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h2 className="fw-bold">BIS Lectures and Facilitators</h2>
          </Col>

          {freeCourseData.map((item) => (
            <Col lg="3" md="4" className="mb-4" key={item.id}>
              <FreeCourseCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FreeCourse;
