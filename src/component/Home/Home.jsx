import React, {useState} from "react";
import { DatePicker, Space } from "antd";
import { Line } from 'react-chartjs-2';
import "../Layout/Header.css"
import "../Home/Home.css"
import FamilyChart from '../Chart Family/FamilyChart';
import EventChart from '../Chart Family/EventChart';
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
      
      <div className='Chart'>
          <div className="Header__chart">
            <h2 className="Content__chart Semibold-18">Doanh thu</h2>
            
            <Space direction="vetical">
              <DatePicker className='Date__picker--chart' onChange={onChange} />
            </Space>
          </div>

          <div className="Chart__table Canvas">
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
      </div>

      <div className="Content__family">
          <p className="Content__wapper Medium-14">Tổng doanh thu theo tuần</p> 
          <p className="Sub__content--family Medium-14"> <span className="Bold-24">525.145.000</span> đồng</p>

          <div className="date-picker2">
              <Space direction="vertical">
                <DatePicker className='' onChange={onChange} />
              </Space>
          </div>  
            
          <div className='Chart-family'>
              <div className='FamilyPackage'>
                <p>Gói gia đình</p>
                <FamilyChart />
              </div>

              <div className='EventPackage'>
                <p>Gói sự kiện</p>
                <EventChart />
              </div>

              <div className='Sub__content--chart-family'>
                <ul className="Info__list">
                  <li> <div className="Block Block__used"></div> <span className='Text__info Regular-14'>Vé đã sử dụng</span></li>
                  <li> <div className="Block Block__unused"></div> <span className='Text__info Regular-14'>Vé chưa sử dụng</span></li>
                </ul>
              </div>
          </div>
      </div>
    </div>
  );
}
