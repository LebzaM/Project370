import React, {useState} from 'react'
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/students.jpg";
import "./hero-section.css";
import Atropos from 'atropos/react';
import 'react-chatbot-kit/build/main.css';
import Chatbot from "react-chatbot-kit";
import { Modal } from 'reactstrap';
import chatbot from "../chatbot/chatbot";
import ModalComponent from '../chatbot/ModalComponent';
import config from '../chatbot/config';
import ActionProvider from '../chatbot/ActionProvider';
import MessageParser from '../chatbot/MessageParser';
import Bot from "../../assests/images/Bot.png";
const HeroSection = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

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
              <p className="libby">
                <b>Click on Libby, Our AI Assistant for help.</b>
              </p>
              <img alt='bot' src={Bot} className='bot'  onClick={openModal} />
              
              <ModalComponent isOpen={modalIsOpen} onRequestClose={closeModal}>
              <div className="appchat">
       <div style={{maxWidth: '400px'}}>
       <Chatbot config={config}
         messageParser={MessageParser}
         actionProvider={ActionProvider}/>
       </div>
     </div>
        <button onClick={closeModal} style={{display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:'red', padding:'2px', color:'white', fontWeight:'bolder', borderRadius:'80px'}}>Close </button>
      </ModalComponent>
              
            </div>
            
          </Col>
          
          <Col lg="6" md="6">
          <Atropos className="my-atropos">
            <img src={heroImg} alt="" className="hero" />
            <button>
                       
                        <div id="clip">
                            <div id="leftTop" className="corner"></div>
                            
                            <div id="rightTop" className="corner"></div>
                            
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
