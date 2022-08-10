import React from "react";
import { Col, Row } from "antd";
import { NavLink } from "react-router-dom";

import "../Layout/Header.css"
import "../Menu/Menu.css"

import icon1 from "../../assets/icons/mail.svg"
import icon2 from "../../assets/icons/ring.svg"
import search from "../../assets/icons/Search.svg"
import icon3 from "../../assets/icons/avt.png"

export default function Home() {
  return (
    <div className="Header">
      <Row>
        <Col span={10}>
          <div className="Search">
                <input className='Search__text' type="search" placeholder='Search' /> 
                <button className='Search__btn'>
                  <img className='Search__icon' src={search} />
                </button>
          </div>
        </Col>
        
        <Col  span={14}>
        <div className="AccMailNotify">
          <ul className="AccMailNotify__list">
              <li>
                <NavLink to="">
                    <img className="icon__size--s" src={icon1} />
                </NavLink>
              </li>
              <li>
                <NavLink to="">
                  <img className="icon__size--s" src={icon2} />
                </NavLink>
              </li>
              <li>
                <NavLink to="">
                  <img className="Account__icon" src={icon3} alt="Account" />
                </NavLink>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
}
