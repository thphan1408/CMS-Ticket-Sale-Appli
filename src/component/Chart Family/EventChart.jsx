import React from 'react'
import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import "./EventChart.css"

ChartJs.register(
    Tooltip, Title, ArcElement, Legend
);
const data = {
    datasets: [{
        data: [28302,30256],
        backgroundColor: [
          'rgba(255, 138, 72, 1)',
          'rgba(79, 117, 255, 1)'
        ]
         
    }]
}
export default function EventChart() {
  return (
    <div className='EventChart'>
    <Doughnut data={data}/>
</div>
  )
}   