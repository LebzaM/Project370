import React from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

import img from "../../assests/images/pngwing.com (6).png";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="10" md="12" className="m-auto">
            <div className="testimonial__wrapper d-flex justify-content-between align-items-center ">
              <div className="testimonial__img w-50">
                <img src={img} alt="" className="w-100" />
              </div>

              <div className="testimonial__content w-50">
                <h2 className="mb-4">Our Students Voice</h2>

                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      
                      <p>
                        I'm glad that I decided to be a BIS student because now im well equiped with the skills to be apart of the 4IR.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Olebogeng Mariri</h6>
                        <p>-Final Year Information Science</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                    
                      <p>
                        I found it a bit hard to adjust in my first year but because of the very helpful tutors and lectures at the University of Pretoria. I am now getting distinctions.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Sihle Dladla</h6>
                        <p>-Final Year Information Science</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      
                      <p>
                        I have made lifelong friends and met my future collegues in the information specialist field. I am very excited to start working after graduating.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Lesego Chologi</h6>
                        <p>-Final Year Information Science Student</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      
                      <p>
                        The culture at the University as a whole is unique but the culture in the the BIS department is uch more unique. Come join Us!
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Prince Garane </h6>
                        <p>-Final Year Information Science Student</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
