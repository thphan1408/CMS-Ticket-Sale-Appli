import React, {useState} from "react";
import { DatePicker, Space } from "antd";
import { Line } from 'react-chartjs-2';
import "../css/Header.css"
import "../Home/Home.css"
import "../../App.css"


import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';

ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

export default function Home() {

  const [data] = useState({
    labels: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'CN'],
    datasets: [ 
      {
        data: [130, 176, 210, 240, 200, 260, 194,], 
        backgroundColor: 'rgba(250, 160, 95, 0.16)',
        borderColor: 'rgba(255, 138, 72, 1)',
        tension: .6,
        fill: true,
      }
  
    ]
  })

  return (
    <div className="Container">
      <h1 className="Content Bold-36">Thống kê</h1>
      

     
      <div className='chart'>
        <div className="Header__chart">
          <h2 className="Content__chart Semibold-18">Doanh thu</h2>
          
          <Space direction="vetical">
            <DatePicker className='Date__picker--chart' onChange={onChange} />
          </Space>
        </div>

          <Line data={data} options={{
              plugins: {
                legend: { 
                  display: false
                }
          },
          scales: {
            x:{
              grid: {
                display: false
                }
              }
          }
          }}/>
        </div>
          <p className="Content__wapper">Tổng doanh thu theo tuần</p> 
          <p className="Sub__content"><span>525.145.000</span> đồng</p>
            <Space direction="vertical">
              <DatePicker className='date-picker2' onChange={onChange} />
            </Space>
    </div>
  );
}
