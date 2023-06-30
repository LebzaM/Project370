import React from "react";
import { Container, Row, Col } from "reactstrap";
import '../Company-section/company-section.css'
const Company = () => {
  return (
    <section >
      <Container>
        <Row className="section">
          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
               E
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
               B
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
               I
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
              {" "}
              T
            </h3>
          </Col>

          
        </Row>
      </Container>
    </section>
  );
};

export default Company;
