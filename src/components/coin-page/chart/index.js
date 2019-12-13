import React  from 'react';
import './style.css';
import { Line } from 'react-chartjs-2';


class CoinChart extends React.Component {
    render() {
        return(
        <div>
            <h2 className="chart-title">{this.props.tytle}</h2>
            <Line width='1216px' height='600px' historyData={this.props.data} />
        </div>
        )
    }
}

export default CoinChart;