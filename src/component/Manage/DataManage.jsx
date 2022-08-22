import React, { useState } from 'react';
import { Space } from 'antd';
import {Table, Tag } from 'antd';

import ModalEvent from './ModalEvent';
import "./Manage.css"
import "../../App.css"
import icon from "../../assets/icons/ellipsis.svg"



export default function DataManage() {
  const [showModalEvent, setShowModalEvent] = useState(false);

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
                let color = tag.length > 8 && tag.length < 12 ? 'geekblue' : 'green';
      
                if (tag === 'Hết hạn') {
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
    {
      title: '',
      key: 'action',
      render: (_) => (
        <Space>
          <button className='Action__modal--table' onClick={() => setShowModalEvent(true)}> <img src={icon}/> </button>
        </Space>
      )
    }
  ];
  const datas = [
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
        number: 2,
        code: 'ALTOJMNB',
        ticketNumber: 236784631642,
        tags: ['Chưa sử dụng'],
        useDate: '14/04/2021',
        releaseDate: '14/04/2021',
        gate: '-'
      },
      {
        key: '3',
        number: 3,
        code: 'ALTQTYJH',
        ticketNumber: 487621489474,
        tags: ['Hết hạn'],
        useDate: '14/04/2021',
        releaseDate: '14/04/2021',
        gate: '-'
      },
      {
        key: '4',
        number: 4,
        code: 'ALTCFSDF',
        ticketNumber: 156464891479,
        tags: ['Hết hạn'],
        useDate: '14/04/2021',
        releaseDate: '14/04/2021',
        gate: '-'
      },
      {
        key: '5',
        number: 1,
        code: 'ALTFGHJU',
        ticketNumber: 123456789034,
        tags: ['Đã sử dụng'],
        useDate: '14/04/2021',
        releaseDate: '14/04/2021',
        gate: 'Cổng 1'
      },
      {
        key: '6',
        number: 1,
        code: 'ALTFGHJU',
        ticketNumber: 123456789034,
        tags: ['Đã sử dụng'],
        useDate: '14/04/2021',
        releaseDate: '14/04/2021',
        gate: 'Cổng 1'
      },
      {
        key: '7',
        number: 1,
        code: 'ALTFGHJU',
        ticketNumber: 123456789034,
        tags: ['Đã sử dụng'],
        useDate: '14/04/2021',
        releaseDate: '14/04/2021',
        gate: 'Cổng 1'
      },
      {
        key: '8',
        number: 1,
        code: 'ALTFGHJU',
        ticketNumber: 123456789034,
        tags: ['Đã sử dụng'],
        useDate: '14/04/2021',
        releaseDate: '14/04/2021',
        gate: 'Cổng 1'
      },
      {
        key: '9',
        number: 1,
        code: 'ALTFGHJU',
        ticketNumber: 123456789034,
        tags: ['Đã sử dụng'],
        useDate: '14/04/2021',
        releaseDate: '14/04/2021',
        gate: 'Cổng 1'
      },
      {
        key: '10',
        number: 1,
        code: 'ALTFGHJU',
        ticketNumber: 123456789034,
        tags: ['Đã sử dụng'],
        useDate: '14/04/2021',
        releaseDate: '14/04/2021',
        gate: 'Cổng 1'
      },
      {
        key: '11',
        number: 1,
        code: 'ALTFGHJU',
        ticketNumber: 123456789034,
        tags: ['Đã sử dụng'],
        useDate: '14/04/2021',
        releaseDate: '14/04/2021',
        gate: 'Cổng 1'
      },
      {
        key: '12',
        number: 1,
        code: 'ALTFGHJU',
        ticketNumber: 123456789034,
        tags: ['Đã sử dụng'],
        useDate: '14/04/2021',
        releaseDate: '14/04/2021',
        gate: 'Cổng 1'
      },
    {
      key: '13',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['Hết hạn'],
    },
    {
      key: '14',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['Chưa sử dụng'],
    },
  ];

    return(
        <div className="Table__list">
                <Table className="Ticket__list" columns={columns} dataSource={datas} />

                { showModalEvent && <ModalEvent onClose={() => setShowModalEvent(false)}/>}
        </div>


    )
}