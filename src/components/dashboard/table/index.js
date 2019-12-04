import React from 'react';
import './style.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default ({ onClick, coins, order }) => (
	<Table>
		<TableHead className="table_head">
			<TableRow>
				<TableCell
					className={order === 'asc' ? 'sort_btn sort_reverse' : 'sort_btn sort_straight'}
					data-name="coinranking"
					onClick={onClick}
				>
					CRYPTOCURRENCY
				</TableCell>
				<TableCell
					className={order === 'asc' ? 'sort_btn sort_reverse' : 'sort_btn sort_straight'}
					data-name="marketCap"
					onClick={onClick}
				>
					MARCET CAP
				</TableCell>
				<TableCell
					className={order === 'asc' ? 'sort_btn sort_reverse' : 'sort_btn sort_straight'}
					data-name="price"
					onClick={onClick}
				>
					PRICE
				</TableCell>
				<TableCell
					className={order === 'asc' ? 'sort_btn sort_reverse' : 'sort_btn sort_straight'}
					data-name="change"
					onClick={onClick}
				>
					CHANGE
				</TableCell>
			</TableRow>
		</TableHead>
		<TableBody>
			{coins.map((coin) => (
				<TableRow className="table_row_style" key={coin.uuid}>
					<TableCell className="table_date currency_style">
						<div className="first_column">
							<a
								className="list_item_link"
								href={coin.websiteUrl}
								target="_blank"
								rel="noopener noreferrer"
							>
								{coin.rank}
								<img className="coin_img" src={coin.iconUrl} alt={coin.name} />
								<h3 title={coin.description} style={{ color: coin.color }}>
									{coin.name}
								</h3>
							</a>
						</div>
					</TableCell>
					<TableCell className="table_date market_cap_style">
						{Number(coin.marketCap).toLocaleString('ru-RU', { maximumFractionDigits: 2 })}
					</TableCell>
					<TableCell className="table_date ">
						{Number(coin.price).toLocaleString('ru-RU', { maximumFractionDigits: 2 })}
					</TableCell>
					<TableCell
						style={coin.change >= 0 ? { color: 'A400' } : { color: '900' }}
						className={
							coin.change >= 0 ? (
								'table_date change_style change_indicator_green'
							) : (
								'table_date change_style change_indicator_red'
							)
						}
					>
						{coin.change}
					</TableCell>
				</TableRow>
			))}
		</TableBody>
	</Table>
);
