import React  from 'react';
import './style.css';
import { Line } from 'react-chartjs-2';

const CoinChart = ({title, historyData, labelText, labels, periodType}) => {
    let periodLabels = labels;
    if(periodType === '24h') {
      periodLabels = labels.map((label)=>(
        label.getHours()
      ))
    } else if(periodType === '7d') {
      periodLabels = labels.map((label)=>(
        label.getDay()
      ))
    } else if (periodType === '30d') {
      periodLabels = labels.map((label)=>(
        label.getDate()
      ))
    } else if (periodType === '1y') {
      periodLabels = labels.map((label)=>(
        label.getMonth()
      ))
    } else {
      periodLabels = labels.map((label)=>(
        label.getFullYear()
      ))
    };

    const data = {
        labels: periodLabels,
        datasets: [
          {
            label: labelText,
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: historyData
          }
        ]
      };
        return(
        <div>
            <h2 className="chart-title">{title}</h2>
            <Line width={1216} height={600} data={data} options={{}}/>
        </div>
        )
    }

export default CoinChart;