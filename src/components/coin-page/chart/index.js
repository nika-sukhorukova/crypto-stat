import React from 'react';
import './style.css';
import { Line } from 'react-chartjs-2';

const CoinChart = ({ historyData, labels, periodType }) => {
	let periodLabels = labels;
	
	const options = {
		legend: {
			display: false
		},
		scales: {
			xAxes: [
				{
					display: true,
					gridLines: {
						display: false,
						color: '#f2f2f2'
					},
					scaleLabel: {
						display: true,
						labelString: 'period'
					},
					ticks: {
						autoSkip: true,
						maxRotation: 360,
						minRotation: 360,
						maxTicksLimit: 24,
						padding: 30
					},
					type: 'time',
					time: {
						parser: 'YYYY-MM-DD HH:mm:ss'
					}
				}
			],
			yAxes: [
				{
					display: true,
					gridLines: {
						display: true,
						color: '#f2f2f2'
					},
					scaleLabel: {
						display: true,
						labelString: 'price'
					}
				}
			]
		},
		tooltips: {
			callbacks: {
				title: function(tooltipItem, data) {
					return data['labels'][tooltipItem[0]['index']].toLocaleString();
				},
				label: function(tooltipItem, data) {
					return data['datasets'][0]['data'][tooltipItem['index']].toLocaleString('ru-RU', {
						maximumFractionDigits: 2
					});
				}
			}
		}
	};

	const data = {
		labels: periodLabels,
		datasets: [
			{
				fill: true,
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
	return (
		<div>
			<Line width={1216} height={600} data={data} options={options} />
		</div>
	);
};

export default CoinChart;
