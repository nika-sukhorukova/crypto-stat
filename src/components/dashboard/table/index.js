import React from 'react';
import './style.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Box from '@material-ui/core/Box';

export default ({ onClick, coins, order, activeColumn }) => {
	let icon_path = '';
	if (order === 'asc') {
		icon_path = 'https://cdn.coinranking.com/assets/2792d3e91a5fff26ba40339ae338ae8c.svg';
	} else {
		icon_path = 'https://cdn.coinranking.com/assets/73019f36257528696063c75020873c88.svg';
	}

	return (
		<Table>
			<TableHead className="table_head">
				<TableRow>
					<TableCell
						className="sort_btn"
						onClick={(event) => onClick(event, 'coinranking')}
						style={{ color: '#0277bd' }}
					>
						<Box display="flex" justifyContent="flex-start" alignItems="center">
							CRYPTOCURRENCY
							{activeColumn === 'coinranking' && (
								<div className={'indicator_block'}>
									<img className="direction_icon" src={icon_path} alt="indicator" />
								</div>
							)}
						</Box>
					</TableCell>
					<TableCell
						className="sort_btn"
						onClick={(event) => onClick(event, 'marketCap')}
						style={{ color: '#0277bd' }}
					>
						<Box display="flex" justifyContent="center" alignItems="center">
							MARCET CAP
							{activeColumn === 'marketCap' ? (
								<div className={'indicator_block'}>
									<img className="direction_icon" src={icon_path} alt="indicator" />
								</div>
							) : (
								<div className={'indicator_stub'} />
							)}
						</Box>
					</TableCell>
					<TableCell
						className="sort_btn"
						onClick={(event) => onClick(event, 'price')}
						style={{ color: '#0277bd' }}
					>
						<Box display="flex" justifyContent="center" alignItems="center">
							PRICE
							{activeColumn === 'price' ? (
								<div className={'indicator_block'}>
									<img className="direction_icon" src={icon_path} alt="indicator" />
								</div>
							) : (
								<div className={'indicator_stub'} />
							)}
						</Box>
					</TableCell>
					<TableCell
						className="sort_btn"
						onClick={(event) => onClick(event, 'change')}
						style={{ color: '#0277bd' }}
					>
						<Box display="flex" justifyContent="flex-end" alignItems="center">
							CHANGE
							{activeColumn === 'change' ? (
								<div className={'indicator_block'}>
									<img className="direction_icon" src={icon_path} alt="indicator" />
								</div>
							) : (
								<div className={'indicator_stub'} />
							)}
						</Box>
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
									<div className="rank_style">{coin.rank}</div>
									<div className="coin_img">
										<img width="20px" height="30px" src={coin.iconUrl} alt={coin.symbol} />
									</div>
									<h3 title={coin.description} style={{ color: coin.color }}>
										{coin.name}
									</h3>
								</a>
							</div>
						</TableCell>
						<TableCell className="table_date market_cap_style">
							<Box display="flex" justifyContent="center">
								{Number(coin.marketCap).toLocaleString('ru-RU', { maximumFractionDigits: 2 })}
							</Box>
						</TableCell>
						<TableCell className="table_date ">
							<Box display="flex" justifyContent="center">
								{Number(coin.price).toLocaleString('ru-RU', { maximumFractionDigits: 2 })}
							</Box>
						</TableCell>
						<TableCell
							className={'change_block'}
							style={coin.change >= 0 ? { color: '#00c853' } : { color: '#c62828' }}
						>
							<Box display="flex" justifyContent="flex-end" alignItems="center">
								{coin.change}
								<div className={'indicator_block'}>
									<img
										className="change_icon"
										src={
											coin.change >= 0 ? (
												'https://cdn.coinranking.com/assets/a349eb78cb17b19e226837c3e06851d8.svg'
											) : (
												'https://cdn.coinranking.com/assets/54d9a9b09f1e2029348014becb7eec8a.svg'
											)
										}
										alt="indicator"
									/>
								</div>
							</Box>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
};
