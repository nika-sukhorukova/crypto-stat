import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import { bindActionCreators } from 'redux';
import './style.css';
import LoadingIndicator from '../auxiliary-components/loading-indicator';
import ReditIcon from './img/svg/redit-icon.svg';
import ExplorerIcon from './img/svg/explorer-icon.svg';
import WebsiteIcon from './img/svg/site-icon.svg';
import GitIcon  from './img/svg/git-icon.svg';
import Twitter from './img/svg/twitter-icon.svg';
import BitTalkIcon from './img/svg/bit-talk-icon.svg';
import FbIcon from './img/svg/fb-icon.svg';
import YoutubeIcon from './img/svg/youtube-icon.svg';

class CoinPage extends React.Component {
	componentDidMount() {
		const { init } = this.props.actions;
		init(this.props.match.params.id);
    }
    getImage = () => {
        const { links } = this.props.coin;
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
								<div className="coin-type">
									<div>
										<img width="40" height="40" src={coin.iconUrl} alt={coin.symbol} />
									</div>
									<div className="coin_info">
										<div className="symbol">{coin.symbol}</div>
										<div className="name">{coin.name}</div>
									</div>
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
							<div className='chart-container'>
								<div className="chart-title">{`${coin.name} price chart`}</div>
							</div>
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
										{Number(allTimeHigh.price).toLocaleString('ru-RU', {
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
							<div className="information">
								{coin.description !== null && (
									<div className="description">
										<h2 className="description_title">{`What is ${coin.name}?`}</h2>
										<p className="description-info">{coin.description}</p>
										{links.map(
											(link, i) =>
												link.type === 'website' && (
													<div className="decription-link" key={i}>
														<a
															target="_blank"
															rel="noopener noreferrer"
															href={link.url}
														>{`Visit ${link.name}`}</a>
													</div>
												)
										)}
									</div>
								)}
								<div className="project-links">
									<h2 className="project-links-tytle">Project links</h2>
									<div>
										{links.map((link, i) => (
											<a
												className="coin-link-container"
												target="_blank"
												rel="noopener noreferrer"
                                                href={link.url}
                                                key={i}
											>
                                            <img src={this.getImage()}/>	{link.name}
											</a>
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
