import React  from 'react';
import './style.css';
import { Line } from 'react-chartjs-2';
import * as l from './catalog';


const CoinChart = ({tytle, historyDatas, labelText}) => {
    const data = {
        labels: l.dayPeriodLabel,
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
            data: historyDatas.map((historyData) => (
                Number(historyData)
            ))
          }
        ]
      };
        return(
        <div>
            <h2 className="chart-title">{tytle}</h2>
            <Line width={1216} height={600} data={data} options={{}}/>
        </div>
        )
    }

export default CoinChart;