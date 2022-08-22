import React from 'react';

import FindTicket from './FindTicket/FindTicket';
import DataCheckTicket from './DataCheckTicket';
import { Col, Row } from "antd";


import "./DataCheckTicket"
import "../../App.css"
import "../Layout/Header.css"
import "./CheckTicket.css"

import search from "../../assets/icons/Search.svg";

export default function CheckTicket() {
  return (
    <Row>
      <Col span={15}>
        <div className='Container Check__ticket'>
            <h1 className='Content Bold-36'>Đối soát vé</h1>
            <div className="Sub__content">  
                <div className="Search Search--left">
                  <input className='Search__text' type="number" placeholder='Tìm bằng số vé' /> 
                  <button className='Search__btn'>
                    <img className='Search__icon' src={search} />
                  </button>
                </div>


                <div className="btn">
                    <button className='Check__btn'> <span className='Bold-18'>Chốt đối soát</span></button>
                  {/* <button className='Print__btn Bold-18'> <span> Xuất file (.csv) </span>  </button> */}
                </div>
            </div>
            
            <DataCheckTicket />
        </div>
      </Col>            
      <FindTicket />
    </Row>
  )
}