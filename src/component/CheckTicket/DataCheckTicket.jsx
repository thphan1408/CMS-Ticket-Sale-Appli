import React from 'react'
import { Table, Tag } from 'antd';
import "./Checkticket.css"

const columns = [
  {
    title: 'STT',
    dataIndex: 'number',
    key: 'number',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Số vé',
    dataIndex: 'ticketNumber',
    key: 'ticketNumber',
  },
    {
      title: 'Ngày sử dụng',
      dataIndex: 'useDate',
      key: 'useDate',
    },
    {
      title: 'Tên loại vé',
      dataIndex: 'ticketName',
      key: 'ticketName',
    },
  {
    title: 'Cổng check - in',
    key: 'gate',
    dataIndex: 'gate',
    
  },
  {
      title: '',
      dataIndex: 'controlgate',
      key: 'controlgate',
  },
];
const datas = [
  {
    key: '1',
    number: 1,
    ticketNumber: 205314876321    ,
    useDate: '14/04/2021',
    ticketName: 'Vé cổng',
    gate: 'Cổng 1',
    controlgate: 'Chốt đối soát'
  },
  {
      key: '',
      number: '',
      ticketNumber: 205314801225,
      useDate: '14/04/2021',
      ticketName: 'Vé cổng',
      gate: 'Cổng 1',
      controlgate: 'Chốt đối soát'
    },
    {
      key: '',
      number: '',
      ticketNumber: 205314897452,
      useDate: '14/04/2021',
      ticketName: 'Vé cổng',
      gate: 'Cổng 1',
      controlgate: 'Chốt đối soát'
    }, {
      key: '',
      number: '',
      ticketNumber: 205314821403,
      useDate: '14/04/2021',
      ticketName: 'Vé cổng',
      gate: 'Cổng 1',
      controlgate: 'Chốt đối soát'
    },
    {
      key: '2',
      number: 2,
      ticketNumber: 205314860215,
      useDate: '14/04/2021',
      ticketName: 'Vé cổng',
      gate: 'Cổng 1',
      controlgate: 'Chốt đối soát'
    },
    {
      key: '3',
      number: 3,
      ticketNumber: 205314848965,
      useDate: '14/04/2021',
      ticketName: 'Vé cổng',
      gate: 'Cổng 1',
      controlgate: 'Chốt đối soát'
    },
    {
      key: '4',
      number: 4,
      ticketNumber: 205314830221,
      useDate: '14/04/2021',
      ticketName: 'Vé cổng',
      gate: 'Cổng 1',
      controlgate: 'Chốt đối soát'
    },
    {
      key: '5',
      number: 5,
      ticketNumber: 205314814777,
      useDate: '14/04/2021',
      ticketName: 'Vé cổng',
      gate: 'Cổng 1',
      controlgate: 'Chốt đối soát'
    },
    {
      key: '6',
      number: 6,
      ticketNumber: 205314801258,
      useDate: '14/04/2021',
      ticketName: 'Vé cổng',
      gate: 'Cổng 1',
      controlgate: 'Chốt đối soát'
    },
    {
      key: '7',
      number: 7,
      ticketNumber: 205314887931,
      useDate: '14/04/2021',
      ticketName: 'Vé cổng',
      gate: 'Cổng 1',
      controlgate: 'Chốt đối soát'
    },
    {
      key: '8',
      number: 8,
      ticketNumber: 205314897456,
      useDate: '14/04/2021',
      ticketName: 'Vé cổng',
      gate: 'Cổng 1',
      controlgate: 'Chốt đối soát'
    },
    {
      key: '9',
      number: 9,
      ticketNumber: 205318776875,
      useDate: '14/04/2021',
      ticketName: 'Vé cổng',
      gate: 'Cổng 1',
      controlgate: 'Chốt đối soát'
    },

]

export default function DataCheckTicket() {
    return (
        <div className="Table__list__check">
            <Table className="DataCheckTicket" columns={columns} dataSource={datas} />
        </div>
    )
}