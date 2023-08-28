import React from "react";
import { Container, Row, Col } from "reactstrap";
import '../Company-section/company-section.css';
// import AnimatedCursor from "react-animated-cursor"
const Company = () => {
  return (
    <section>
      <Container className="faculty">
        <Row className="section">
        <h3 className="ebit">
               -EBIT-
            </h3>
            <div className="App">
    {/* Animated cursor does not work on deployment */}
    {/* <AnimatedCursor className="mobilecursor"
      innerSize={8}
      outerSize={8}
      color='10, 25, 242'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        {
          target: '.custom',
          options: {
            innerSize: 5,
            outerSize: 1,
            color: '10, 25, 242',
            outerAlpha: 0.9,
            innerScale: 0.7,
            outerScale: 5
          }
        }
      ]}
    /> */}
    </div>

          
        </Row>
      </Container>
    </section>
  );
};

export default Company;
