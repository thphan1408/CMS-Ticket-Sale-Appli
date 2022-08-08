import React from 'react'
import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import "./FamilyChart.css"

ChartJs.register(
    Tooltip, Title, ArcElement, Legend
);
const data = {
    datasets: [{
        data: [13568,56024],
        backgroundColor: [
          'rgba(255, 138, 72, 1)',
          'rgba(79, 117, 255, 1)'
        ]
         
    }]
}
export default function FamilyChart() {
  return (
    <div className="Container__chart">
        <div className='FamilyChart'>
            <Doughnut data={data}/>
        </div>
    </div>

  )
}