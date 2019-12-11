import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import * as actions from './actions';
import { bindActionCreators } from 'redux';
import LoadingIndicator from '../auxiliary-components/loading-indicator';
import Table from './table/index';
import StatsComponent from './stats/index';
import { Pagination } from '../auxiliary-components/pagination/index';
import { SelectComponent } from '../auxiliary-components/select/index';
import { timePeriod, baseCurrency, limitValue } from './catalog';
import * as c from './constants';

class Dashboard extends React.Component {
	componentDidMount() {
		const { init } = this.props.actions;
		init();
	}

	handleSort = ({ target }, sortType) => {
		let { baseSymbol, timePeriod, limit, offset, order, sort } = this.props;

		if (sort === sortType && order === 'desc') {
			order = 'asc';
		} else if (sort !== sortType || order !== 'desc') {
			order = 'desc';
		}
		const { loadData } = this.props.actions;
		loadData({
			data: {
				sort: sortType,
				activeColumn: sortType,
				order
			},
			url: `${c.BASE_PATH}${c.CURRENCY_PATH}${baseSymbol}${c.TIME_PERIOD_PATH}${timePeriod}${c.SORT_PATH}${sortType}${c.ORDER_PATH}${order}${c.LIMIT_PATH}${limit}${c.CHANGE_PAGE_PATH}${offset}`
		});
	};

	handlePeriodChange = ({ target: { value } }) => {
		const { loadData } = this.props.actions;
		const { baseSymbol, limit, offset, sort, order } = this.props;
		loadData({
			data: {
				timePeriod: value
			},
			url: `${c.BASE_PATH}${c.CURRENCY_PATH}${baseSymbol}${c.TIME_PERIOD_PATH}${value}${c.SORT_PATH}${sort}${c.LIMIT_PATH}${limit}${c.CHANGE_PAGE_PATH}${offset}${c.ORDER_PATH}${order}`
		});
	};

	handleCurrencyChange = ({ target: { value } }) => {
		const { loadData } = this.props.actions;
		const { timePeriod, limit, offset, sort, order } = this.props;
		loadData({
			data: {
				baseSymbol: value
			},
			url: `${c.BASE_PATH}${c.CURRENCY_PATH}${value}${c.TIME_PERIOD_PATH}${timePeriod}${c.SORT_PATH}${sort}${c.LIMIT_PATH}${limit}${c.CHANGE_PAGE_PATH}${offset}${c.ORDER_PATH}${order}`
		});
	};

	handleLimitChange = ({ target: { value } }) => {
		const { loadData } = this.props.actions;
		const { baseSymbol, timePeriod, offset, sort, order } = this.props;
		loadData({
			data: {
				limit: +value
			},
			url: `${c.BASE_PATH}${c.CURRENCY_PATH}${baseSymbol}${c.TIME_PERIOD_PATH}${timePeriod}${c.SORT_PATH}${sort}${c.LIMIT_PATH}${+value}${c.CHANGE_PAGE_PATH}${offset}${c.ORDER_PATH}${order}`
		});
	};

	handlePageChange = ({ target }, button) => {
		let { baseSymbol, timePeriod, limit, offset, sort, order, stats: { total } } = this.props;
		let { loadData } = this.props.actions;
		switch (button) {
			case 'prev':
				offset -= limit;
				break;
			case 'next':
				offset += limit;
				break;
			case 'first':
				offset = 0;
				break;
			case 'last':
				offset = limit * Math.floor(total / limit);
				break;
			default:
				offset = button * limit;
		}
		loadData({
			data: {
				offset
			},
			url: `${c.BASE_PATH}${c.CURRENCY_PATH}${baseSymbol}${c.TIME_PERIOD_PATH}${timePeriod}${c.SORT_PATH}${sort}${c.LIMIT_PATH}${limit}${c.CHANGE_PAGE_PATH}${offset}${c.ORDER_PATH}${order}`
		});
	};

	render() {
		const {
			isLoading,
			limit,
			currentTimePeriod,
			baseSymbol,
			order,
			coins,
			stats,
			offset,
			activeColumn
		} = this.props;
		return (
			<main className="wrapper">
				<div className="content">
					<h1 className="site-description">Dashboard</h1>
					<div className="filters">
						<SelectComponent
							options={timePeriod}
							onChange={this.handlePeriodChange}
							defaultValue={currentTimePeriod}
						/>
						<SelectComponent
							className="currency_style"
							options={baseCurrency}
							onChange={this.handleCurrencyChange}
							defaultValue={baseSymbol}
						/>
						<SelectComponent options={limitValue} onChange={this.handleLimitChange} defaultValue={limit} />
					</div>
					<div className="main-sector">
						{isLoading ? (

							<LoadingIndicator />

						) : (
							<div className="data-sector">
								<Pagination
									onClick={this.handlePageChange}
									total={stats.total}
									limit={limit}
									offset={offset}
								/>
								<Table
									onClick={this.handleSort}
									coins={coins}
									order={order}
									activeColumn={activeColumn}
								/>
								<Pagination
									onClick={this.handlePageChange}
									total={stats.total}
									limit={limit}
									offset={offset}
								/>
								<StatsComponent stats={stats} />
							</div>
						)}
					</div>
				</div>
			</main>
		);
	}
}

export default connect(
	(state) => state.dashboard,
	(dispatch) => ({
		actions: bindActionCreators(actions, dispatch)
	})
)(Dashboard);
