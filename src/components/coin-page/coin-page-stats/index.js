import React from 'react';

export const Stats = ({coin}) => {
	return (
		<div className="stats-container">
			<div className="statistics">
				<h2 className="statistics-title">Statistics</h2>
				<span className="stats_rank">Rank: {coin.rank}</span>
			</div>
			<div className="stats">
				<div className="stats_items">
					<div className="block-label">MARKET CAP</div>
					{Number(coin.marketCap).toLocaleString('ru-RU', { maximumFractionDigits: 2 })}
				</div>
				<div className="stats_items">
					<div className="block-label">TOTAL SUPPLY</div>
					{Number(coin.totalSupply).toLocaleString('ru-RU', { maximumFractionDigits: 2 })}
				</div>
				<div className="stats_items">
					<div className="block-label">CIRCULATING SUPPLY</div>
					{Number(coin.circulatingSupply).toLocaleString('ru-RU', {
						maximumFractionDigits: 2
					})}
				</div>
				<div className="stats_items">
					<div className="block-label">CHANGE</div>
					{coin.change}
				</div>
				<div className="stats_items">
					<div className="block-label">ALL-TIME HIGH</div>
					{Number(coin.allTimeHigh.price).toLocaleString('ru-RU', {
						maximumFractionDigits: 2
					})}
				</div>
				<div className="stats_items">
					<div className="block-label">PRICE</div>
					{Number(coin.price).toLocaleString('ru-RU', {
						maximumFractionDigits: 2
					})}
				</div>
			</div>
		</div>
	);
};
