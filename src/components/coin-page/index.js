import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import { bindActionCreators } from 'redux';
import './style.css';
import LoadingIndicator from '../auxiliary-components/loading-indicator';
import Button from '@material-ui/core/Button';

class CoinPage extends React.Component {
	componentDidMount() {
		const { init } = this.props.actions;
		init(this.props.match.params.id);
	}
	render() {
		const { coin, isLoading } = this.props;
		const { allTimeHigh } = coin;
		const { links } = coin;
		return (
			<main className="wrapper">
				<div className="content">
					{isLoading ? (
						<LoadingIndicator />
					) : (
						<div className="main">
							<div className="coin">
								<div>
									<img width="40" height="40" src={coin.iconUrl} alt={coin.symbol} />
								</div>
								<div className="coin_info">
									<div className="symbol">{coin.symbol}</div>
									<div className="name">{coin.name}</div>
								</div>
								<div>
									<div className="text">PRICE</div>
									<div className="price_text">
										{Number(coin.allTimeHigh.price).toLocaleString('ru-RU', {
											maximumFractionDigits: 2
										})}
									</div>
								</div>
							</div>
							<div>{`${coin.name} price chart`}</div>
							<div className="buttons" />
							<div>
								<div className="statistics">
									<h2 className="text">Statistics</h2>
									<span className="stats_rank">Rank: {coin.rank}</span>
								</div>
								<div className="stats">
									<div className="stats_items">
										MARKET CAP{' '}
										{Number(coin.marketCap).toLocaleString('ru-RU', { maximumFractionDigits: 2 })}
									</div>
									<div className="stats_items">
										TOTAL SUPPLY{' '}
										{Number(coin.totalSupply).toLocaleString('ru-RU', { maximumFractionDigits: 2 })}
									</div>
									<div className="stats_items">
										CIRCULATING SUPPLY{' '}
										{Number(coin.circulatingSupply).toLocaleString('ru-RU', {
											maximumFractionDigits: 2
										})}
									</div>
									<div className="stats_items">CHANGE {coin.change}</div>
									<div className="stats_items">
										ALL-TIME HIGH{' '}
										{Number(allTimeHigh.price).toLocaleString('ru-RU', {
											maximumFractionDigits: 2
										})}
									</div>
									<div className="stats_items">
										PRICE{' '}
										{Number(coin.price).toLocaleString('ru-RU', {
											maximumFractionDigits: 2
										})}
									</div>
								</div>
							</div>
							<div className="information">
								{coin.description !== null && (
									<div className="description">
										<h2 className="description_title">{`What is ${coin.name}?`}</h2>
										<p className="description-info">{coin.description}</p>
									</div>
								)}
								<div className="project-links">
									<h2>Project links</h2>
									<div>
										{links.map((link, i) => (
											<Button style={{ margin: 10 }} variant="contained" key={i}>
												<a href={link.url}>{link.name}</a>
											</Button>
										))}
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</main>
		);
	}
}

export default connect(
	(state) => state.coin,
	(dispatch) => ({
		actions: bindActionCreators(actions, dispatch)
	})
)(CoinPage);
