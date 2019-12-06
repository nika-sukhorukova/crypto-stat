import React from 'react';
import './style.css';

export default ({ stats }) => (
	<div className="stats_style">
		<div className="stats-block stats_top_row">
			<div className="stats_label">Volume in 24 hours:</div>
			<div className="states_value">
				{Number(stats.total24hVolume).toLocaleString('ru-RU', { maximumFractionDigits: 2 })}
			</div>
		</div>
		<div className="stats-block stats_top_row">
			<div className="stats_label">Market Cap:</div>
			<div className="states_value">
				{Number(stats.totalMarketCap).toLocaleString('ru-RU', { maximumFractionDigits: 2 })}
			</div>
		</div>
		<div className="stats-block stats_down_row">
			<div className="stats_label">Coins:</div>
			<div className="states_value">{Number(stats.total).toLocaleString()}</div>
		</div>
		<div className="stats-block stats_down_row">
			<div className="stats_label">Exchanges:</div>
			<div className="states_value">{Number(stats.totalExchanges).toLocaleString()}</div>
		</div>
		<div className="stats-block stats_down_row">
			<div className="stats_label">Markets:</div>
			<div className="states_value">{Number(stats.totalMarkets).toLocaleString()}</div>
		</div>
	</div>
);
