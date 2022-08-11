import React from 'react';
import "./DataManage"
import "./Manage.css"
import "../../App.css"
// Import icons, images
import filter from "../../assets/icons/Filter.svg"
import search from "../../assets/icons/Search.svg"
import DataManage from './DataManage';

export default function Manage() {
    return (
      <div className='Container'>
        <div className="Navigation__content">
          <h1 className='Content Bold-36'>Danh sách vé</h1>
          <div className="Sub__content">  
            <div className="Search Search--left">
              <input className='Search__text' type="number" placeholder='Tìm bằng số vé' /> 
              <button className='Search__btn'>
                <img className='Search__icon' src={search} />
              </button>
            </div>


            <div className="Filter">
              <ul className='Filter__list'>
                  <li>
                    <button className='Filter__btn Bold-18'><img className='Filter__icon' src={filter} />Lọc vé</button>
                  </li>
                  <li>
                    <button className='Print__btn Bold-18'>Xuất file (.csv) </button>
                  </li>
              </ul>
            </div>
          </div>
          <DataManage />
        </div>
      </div>
    )
  }