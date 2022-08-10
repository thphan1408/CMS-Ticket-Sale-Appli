import React from 'react';
import search from "../../assets/icons/Search.svg";
import "../../App.css"
import "../Layout/Header.css"
import "./CheckTicket.css"

export default function CheckTicket() {
  return (
    <div className='Container'>
      <div className="Navigation__content">
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
      </div>
    </div>
  )
}