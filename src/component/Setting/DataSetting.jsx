import { Space, Table, Tag } from 'antd';
import React, { useState } from "react"
import update from '../../assets/icons/Update.svg';
import "./Setting.css"
import "./DataSetting.css"
import ModalDataSetting from './ModalData/ModalDataSetting';

function DataSetting (){

  const [openModal, setOpenModal] = useState(false);

  const columns = [
    {
        title: 'STT',
        dataIndex: 'number',
        key: 'number',
      },
      {
        title: 'Mã gói',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'Tên gói vé',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Ngày áp dụng',
        dataIndex: 'applyDate',
        key: 'applyDate',
      },
      {
        title: 'Ngày hết hạn',
        dataIndex: 'expiredDate',
        key: 'expiredDate',
      },
      {
        title: 'Giá vé (VNĐ/Vé)',
        dataIndex: 'priceTicket',
        key: 'priceTicket',
      },
      {
        title: 'Giá Combo (VNĐ/Combo)',
        dataIndex: 'priceCombo',
        key: 'priceCombo',
      },
  {
    title: 'Tình trạng',
    key: 'status',
    dataIndex: 'status',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 6 ? 'green' : 'volcano';
          return (
            <Tag color={color} key={tag}>
              {tag}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_) => (
      
      <Space size="middle">
        <button className='Update__data' onClick={() => setOpenModal(true)}><img src={update} /> Cập nhật</button>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    number: 1,
    id: 'ALT20210501',
    name: 'Gói gia đình',
    applyDate: '14/04/2021 08:00:00',
    expiredDate: '14/04/2021 23:00:00',
    priceTicket: '90.000 VNĐ',
    priceCombo: '360.000 VNĐ/4 Vé',
    tags: ['Đang áp dụng'],
  },
  {
    key: '2',
    number: 2,
    id: 'ALT20210501',
    name: 'Gói sự kiện',
    applyDate: '14/04/2021 08:00:00',
    expiredDate: '14/04/2021 23:00:00',
    priceTicket: '20.000 VNĐ',
    priceCombo: '-',
    tags: ['Tắt'],
  },
];

    return(
        <div className="Table__list">
            <Table className='Ticket__list'  columns={columns} dataSource={data} />
            { openModal && <ModalDataSetting onClose={() => setOpenModal(false)}/>}
        </div>
    );   
}

export default DataSetting