import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import { bindActionCreators } from 'redux';
import './style.css';
import LoadingIndicator from '../auxiliary-components/loading-indicator';
import RedditIcon from './img/svg/redit-icon.svg';
import ExplorerIcon from './img/svg/explorer-icon.svg';
import WebsiteIcon from './img/svg/site-icon.svg';
import GitIcon from './img/svg/git-icon.svg';
import Twitter from './img/svg/twitter-icon.svg';
import BitTalkIcon from './img/svg/bit-talk-icon.svg';
import FbIcon from './img/svg/fb-icon.svg';
import YoutubeIcon from './img/svg/youtube-icon.svg';
import Medium from './img/svg/medium-icon.svg';
import CoinChart from './chart';
import * as c from './constants.js';
import { TimeFrameDisplay } from './timeframe-buttons';
import { Stats } from './coin-page-stats';
import { SelectComponent } from './../auxiliary-components/select';
import { baseCurrency } from './../dashboard/catalog';

class CoinPage extends React.Component {
	componentDidMount() {
		const { init, getHistory } = this.props.actions;
		const { timeframe } = this.props;
		init(this.props.match.params.id);
		getHistory(`https://api.coinranking.com/v1/public/coin/${this.props.match.params.id}/history/${timeframe}`);
	}
	getImage = ({ type }) => {
		let imgPath = WebsiteIcon;
		switch (type) {
			case c.REDDIT:
				imgPath = RedditIcon;
				break;
			case c.GITHUB:
				imgPath = GitIcon;
				break;
			case c.EXPLORER:
				imgPath = ExplorerIcon;
				break;
			case c.FACEBOOK:
				imgPath = FbIcon;
				break;
			case c.YOUTUBE:
				imgPath = YoutubeIcon;
				break;
			case c.TWITTER:
				imgPath = Twitter;
				break;
			case c.BITCOINTALK:
				imgPath = BitTalkIcon;
				break;
			case c.MEDIUM:
				imgPath = Medium;
				break;
			default:
				return imgPath;
		}
		return imgPath;
	};

	setTimeperiod = ({ target }, timeOption) => {
		const { setTimeFrame, getHistory } = this.props.actions;
		const { baseSymbol } = this.props
		setTimeFrame(timeOption);
		getHistory(`${c.BASE_PATH}${this.props.match.params.id}${c.HISTORY_PATH}${timeOption}${c.SYMBOL_PATH}${baseSymbol}`);
	};

	handleCurrencyChange = ({ target: { value } }) => {
		// const { , setBaseSymbol } = this.props.actions;
		// const { timeframe } = this.props;
		// setBaseSymbol(value);
		// (`https://api.coinranking.com/v1/public/coin/${this.props.match.params.id}${c.SYMBOL_PATH}${value}&timePeriod=${timeframe}`);
	}

	render() {
		const { coin, isLoading, coinHistory, timeframe, base, baseSymbol } = this.props;
		const { links } = coin;
		const { history } = coinHistory;
		let arrHistory = [];
		let historyPeriod = [];
		if (history !== undefined) {
			history.forEach((coin) => {
				arrHistory.push(Number(coin.price));
				historyPeriod.push(new Date(coin.timestamp));
			});
		}
		return (
			<main className="wrapper">
				<div className="content">
					{isLoading ? (
						<LoadingIndicator />
					) : (
						<div className="main">
							<div className="main-top">
								<div className="coin">
									<div>
										<img width="40" height="40" src={coin.iconUrl} alt={coin.symbol} />
									</div>
									<div className="coin_info">
										<div className="coin-info-text">{coin.symbol}</div>
										<div className="name">{coin.name}</div>
									</div>
									<div>
										<div className="coin-info-text">PRICE</div>
										<div className="price_text">
											{Number(coin.price).toLocaleString('ru-RU', {
												maximumFractionDigits: 2
											})}
										</div>
									</div>
								</div>
								<div>
									<SelectComponent
										options={baseCurrency}
										onChange={this.handleCurrencyChange}
										defaultValue={baseSymbol}
									/>
								</div>
								<div>
									<TimeFrameDisplay timeframe={timeframe} onClick={this.setTimeperiod} />
								</div>
							</div>
							<div className="chart-container">
								<CoinChart periodType={timeframe} labels={historyPeriod} historyData={arrHistory} />
							</div>
							<Stats coin={coin} base={base} />
							<div className="information">
								{coin.description !== null && (
									<div className="description">
										<h2 className="description_title">{`What is ${coin.name}?`}</h2>
										<p className="description-info">{coin.description}</p>
										<div className="description-link">
											<a
												target="_blank"
												rel="noopener noreferrer"
												href={coin.websiteUrl}
											>{`Visit ${coin.websiteUrl}`}</a>
										</div>
									</div>
								)}
								<div className="project-links">
									<h2 className="project-links-title">Project links</h2>
									<div>
										{links.map((link, i) => (
											<a
												className="coin-link-container"
												target="_blank"
												rel="noopener noreferrer"
												href={link.url}
												key={i}
											>
												<img
													className="project-link-icon"
													src={this.getImage(link)}
													alt={link.type}
												/>
												{link.name}
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
