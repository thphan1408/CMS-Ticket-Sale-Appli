import React from 'react';
import {Table, Tag } from 'antd';


import "./Manage.css"
import "../../App.css"

// Import icons, images
import filter from "../../assets/icons/Filter.svg"
import search from "../../assets/icons/Search.svg"

const columns = [
    {
      title: 'STT',
      dataIndex: 'number',
      key: 'number',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Booking code',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: 'Số vé',
      dataIndex: 'ticketNumber',
      key: 'ticketNumber',
    },
    {
        title: 'Tình trạng sử dụng',
        dataIndex: 'tags',
        key: 'tags',
        render: (_, { tags }) => (
            <>
              {tags.map((tag) => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
      
                if (tag === 'loser') {
                  color = 'volcano';
                }
      
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          ),
      },
      {
        title: 'Ngày sử dụng',
        dataIndex: 'useDate',
        key: 'useDate',
      },
      {
        title: 'Ngày xuất vé',
        dataIndex: 'releaseDate',
        key: 'releaseDate',
      },
    {
      title: 'Cổng check - in',
      key: 'gate',
      dataIndex: 'gate',
      
    },
  ]; 
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
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
];

export default function Manage() {
    return (
      <div className='Container'>
        <div className="Navigation__content">
          <h1 className='Content Bold-36'>Danh sách vé</h1>
          <div className="Sub__content">  
            <div className="Search Search--left">
              <input className='Search__text' type="text" placeholder='Tìm bằng số vé' /> 
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

          <div className="Table__list">
            <Table className="Ticket__list" columns={columns} dataSource={data} />
          </div>
        </div>


      </div>
    )
  }