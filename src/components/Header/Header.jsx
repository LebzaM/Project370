import React, { useRef } from "react";
import { Container } from "reactstrap";
import "./header.css";
import AboutUs from '../About-us/AboutUs'
import { Link, animateScroll as scroll} from 'react-scroll';
const navLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "About",
    url: "#",
  },

  {
    display: "Courses",
    url: "#",
  },
  {
    display: "Campus",
    url: "#",
  },
  {
    display: "Lecturers",
    url: "#",
  },
];

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h5 className=" d-flex align-items-center gap-1">
              <i class="ri-pantone-line"></i> Prospective BIS Students
            </h5>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {/* {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <a href={item.url}>{item.display}</a>
                  </li>
                ))} */}
                
                <Link to='home' activeClass="active" smooth={true} spy={true}><li className="nav__item"><a>Home</a></li></Link>
                <Link to='about' activeClass="active" smooth={true} spy={true} offset={-200}><li className="nav__item"><a>About</a></li></Link>
                <Link to='courses' activeClass="active" smooth={true} spy={true} offset={-20}><li className="nav__item"><a>Courses</a></li></Link>
                <Link to='campus' activeClass="active" smooth={true} spy={true} offset={-20}><li className="nav__item"><a>Campus</a></li></Link>
                <Link to='lectures' activeClass="active" smooth={true} spy={true} offset={-20}><li className="nav__item"><a>Lectures</a></li></Link>
              </ul>
            </div>

            
          </div>

          <div className="mobile__menu">
            <span>
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
