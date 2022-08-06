import React from 'react';
import { Space, Table, Tag } from 'antd';
import "./Manage.css"

// Import icons, images
import filter from "../../assets/icons/Filter.svg"
import search from "../../assets/icons/Search.svg"

const columns = [
    {
      title: 'STT',
      dataIndex: 'number',
      key: 'number',
      render: (text) => <a>{text}</a>,
    }
]  
const data = [
    {
      key: '1',
      number: 1,
      code: 'ALTFGHJU',
      ticketNumber: 123456789034,
      tags: ['Đã sử dụng'],
      useDate: '14/04/2021',
      releaseDate: '14/04/2021',
      gate: 'Cổng 1'
    }
]

export default function Manage() {
    return (
      <div className='Content__manage'>
          <h1 style={{ marginLeft:24}}>Danh sách vé</h1>
        <div className="Nav__content">

          <div className="Search">
            <input className='Search__list' type="search" placeholder='Search' /> 
            <img className='Search__icon' src={search} />
          </div>


          <div className="Filter">
            <ul className='Filter__list'>
                <li><button><img src={filter} />Lọc vé</button></li>
                <li><button>Xuất file </button></li>
            </ul>
          </div>

        </div>
          <Table className="Ticket__list" columns={columns} dataSource={data} />
      </div>
    )
  }