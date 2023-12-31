import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/web-design.png";
import courseImg2 from "../../assests/images/graphics-design.png";
import courseImg3 from "../../assests/images/ui-ux.png";
import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "BIS Information Science",
    description: "This package focuses on the use of information technology and the processing of information products and is designed to train students in the management, retrieval and organisation of information, as well as to teach them how to add value to, package and distribute information.",
    lesson: "APS 28",
    students: 1.5,
    rating: 5.9,
    imgUrl: courseImg1,
    url:'https://drive.google.com/file/d/1D3_V4M8mEFe1Qu6-4U2fJbYqxtDrFM_f/view?usp=sharing',
  },

  {
    id: "02",
    title: "BIS Mutltimedia",
    description:"Multimedia documents include text, graphics, sound, video and animation. The purpose of this qualification is to enable students to understand the necessary concepts to build multimedia products and maintain the products.",
    lesson: "APS 30",
    students: 2.5,
    rating: 5.9,
    imgUrl: courseImg2,
    url:'https://drive.google.com/file/d/1tW7TQkfAKT_QeCqnEG6zLMFH1DJR-WwH/view?usp=sharing',
  },

  {
    id: "03",
    title: "BIS Publishing",
    description:" Students are equipped with background knowledge on the local and international publishing industry, role players and trends, and both print and digital formats, as well as relevant workplace skills.",
    lesson: "APS 28",
    students: 1,
    rating: 5.9,
    imgUrl: courseImg3,
    url:'https://drive.google.com/file/d/11MJodInYzXlWxrt1fXQM-uXnvcdwsmyh/view?usp=sharing',
  },
];

const Courses = () => {
  return (
    <section id="courses">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>BIS Courses</h2>
                <p>
                  BIS offers a range of courses to choose from <br/>
                  *click on the picture for more 

                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn" onClick={()=> window.open('https://www.up.ac.za/information-science', '_blank')}>See All</button>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
