import React from "react";
import { Col, Row } from "antd";
import { Input, Space } from 'antd';
import "../css/Header.css"
import "../Home/Menu.css"

import icon1 from "../../assets/icons/mail.svg"
import icon2 from "../../assets/icons/ring.svg"
// import avt from "../../assets/icons/avt.png"
import Search from "../../assets/imgs/search.png" 


// const { Search } = Input;  

export default function Home() {
  return (
    <div className="header">
     <Row>
      <Col span={16}>
        <div className="Search">
          <input className='Search__text' type="search" placeholder='Search' /> 
          <button className="Search__btn"> <img className='SearchIcon' src={Search} /> </button> 
        </div>
      </Col>
      <Col  span={8}>
      <div className="AccMailNoti">
        <ul>
            <li><img src={icon1} /></li>
            <li><img src={icon2} /></li>
            <li className="Account">
            </li>
        </ul>
      </div>
      </Col>
    </Row>
    </div>
  );
}
