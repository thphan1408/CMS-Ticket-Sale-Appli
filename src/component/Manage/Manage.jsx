import React from 'react';
import { Space, Table, Tag } from 'antd';


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
      <div className='content'>
          <h1 style={{ marginLeft:24}}>Danh sách vé</h1>
          
          {/* <input className='SearchList' type="search" placeholder='Search' /> <img className='SearchIcon' src={Search} /> */}
          <ul className='Filter'>
              {/* <li><button><img src={Filter} />Lọc vé</button></li> */}
              <li><button>Xuất file </button></li>
          </ul>
          <Table className="TicketList" columns={columns} dataSource={data} />
      </div>
    )
  }