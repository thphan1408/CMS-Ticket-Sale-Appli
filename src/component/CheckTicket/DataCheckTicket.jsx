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
        // render: (_, { tags }) => (
        //     <>

        //         {tags.map((controlgate) => {
        //             let color = controlgate.length > 5 ? 'geekblue' : 'A5A8B1';

        //             if(controlgate === "Chưa đối soát"){
        //                 color = '#A5A8B1'
        //             }
        //             else
        //                 color = '#FD5959'

        //         return (
        //                     <controlgate color={color} key={controlgate}>
        //                       {controlgate.toUpperCase()}
        //                     </controlgate>
        //         );
        //         })}
        //     </>
        // )
    }
  ];

const datas = [
    {
        key: '1',
        number: 1,
        ticketNumber: 205314876321,
        useDate: '14/04/2021',
        ticketName: 'Vé cổng',
        gate: 'Cổng 1',
        controlgate: 'Chưa đối soát'
      },
      {
          key: '2',
          number: '',
          ticketNumber: 205314801225,
          useDate: '14/04/2021',
          ticketName: 'Vé cổng',
          gate: 'Cổng 1',
          controlgate: 'Chưa đối soát'
        },
        {
          key: '3',
          number: '',
          ticketNumber: 205314897452,
          useDate: '14/04/2021',
          ticketName: 'Vé cổng',
          gate: 'Cổng 1',
          controlgate: 'Chưa đối soát'
        },
]

export default function DataCheckTicket() {
    return (
        <div className="Table__list__check">
            <Table className="DataCheckTicket" columns={columns} dataSource={datas} />
        </div>
    )
}