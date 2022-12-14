import React, { useState, useEffect } from 'react';

import Modal from "./Modal/Modal"
import DataManage from './DataManage';
import { NavLink } from "react-router-dom";
import "../../App.css"
import "./Manage.css"

// Import icons, images
import filter from "../../assets/icons/Filter.svg"
import search from "../../assets/icons/Search.svg"

export default function Manage() {
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

    return (
      <div className='Container'>
          <h1 className='Content Bold-36'>Danh sách vé</h1>
            
          <div className="Event__packages">
            <ul className='List__packages__event'>
              <li>
                <a className="Family Semibold-16">
                  Gói gia đình
                </a>
              </li>
              <li>
                <a className="Event Semibold-16" >
                  Gói sự kiện
                </a>
              </li>
            </ul>
          </div>

          <div className="Sub__content">  
            <div className="Search Search--left">
              <input className='Search__text' type="number" placeholder='Tìm bằng số vé' /> 
              <button className='Search__btn'>
                <img className='Search__icon' src={search} />
              </button>
            </div>
            
            <div className="btn">
                <button className='Filter__btn Bold-18' onClick={() => setOpenModal(true)}><img className='Filter__icon' src={filter} />Lọc vé</button>
                <button className='Print__btn Bold-18'>Xuất file (.csv) </button>
            </div>
          </div>

          <DataManage />

        { openModal && <Modal onClose={() => setOpenModal(false)}/>}
      </div>
);
}