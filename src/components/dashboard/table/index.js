import React from 'react';
import './style.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Box from '@material-ui/core/Box';
import { withRouter } from 'react-router';
import BlueArrow from './img/svg/blue-arrow-up.svg';
import GreenArrow from './img/svg/arrow-up.svg';
import RedArrow from './img/svg/arrow-down.svg';
import DefaultIcon from './img/svg/coin-default.svg';

export default withRouter(({ onClick, coins, order, activeColumn, history }) => {
	return (
		<Table className="table">
			<TableHead className="table_head">
				<TableRow>
					<TableCell
						className="sort_btn"
						onClick={(event) => onClick(event, 'coinranking')}
						style={{ color: '#0277bd' }}
					>
						<Box display="flex" justifyContent="flex-start" alignItems="center">
							<span>CRYPTOCURRENCY</span>
							{activeColumn === 'coinranking' && (
								<div className={'indicator_block'}>
									<img
										className={`direction_icon ${order === 'asc' ? '' : 'arrow-down'}`}
										src={BlueArrow}
										alt="indicator"
									/>
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
							<span className="market_cap">MARKET CAP</span>
							{activeColumn === 'marketCap' ? (
								<div className={'indicator_block'}>
									<img className={`direction_icon ${order === 'asc' ? '' : 'arrow-down'}`} src={BlueArrow} alt="indicator" />
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
							<span className="price">PRICE</span>
							{activeColumn === 'price' ? (
								<div className={'indicator_block'}>
									<img className={`direction_icon ${order === 'asc' ? '' : 'arrow-down'}`} src={BlueArrow} alt="indicator" />
								</div>
							) : (
								<div className={'indicator_stub'} />
							)}
						</Box>
					</TableCell>
					<TableCell
						className="sort_btn"
						onClick={(event) => onClick(event, 'change')}
						style={{ color: '#0277bd', paddingRight: '0' }}
					>
						<Box display="flex" justifyContent="flex-end" alignItems="center">
							<span className="change">CHANGE</span>
							{activeColumn === 'change' ? (
								<div className={'indicator_block'}>
									<img className={`direction_icon ${order === 'asc' ? '' : 'arrow-down'}`} src={BlueArrow} alt="indicator" />
								</div>
							) : (
								<div className={'indicator_stub'} />
							)}
						</Box>
					</TableCell>
				</TableRow>
			</TableHead>
			<TableBody className="table_body">
				{coins.map((coin) => (
					<TableRow
						className="table_row_style"
						key={coin.uuid}
						onClick={() => history.push(`/coin/${coin.id}`)}
					>
						<TableCell className="table_date currency_style">
							<div className="first_column">
								<div
									className="list_item_link"
									href={coin.websiteUrl}
									target="_blank"
									rel="noopener noreferrer"
								>
									<div className="rank_style">{coin.rank}</div>
									<div className="coin_img">
										<img width="20px" height="30px" src={coin.iconUrl === null ? DefaultIcon : coin.iconUrl} alt={coin.symbol} />
									</div>
									<h3 title={coin.description} style={{ color: coin.color }}>
										{coin.name}
									</h3>
								</div>
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
								<span>{coin.change}</span>
								<div className={'indicator_block'}>
									<img
										className="change_icon"
										src={coin.change >= 0 ? GreenArrow : RedArrow}
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
});
