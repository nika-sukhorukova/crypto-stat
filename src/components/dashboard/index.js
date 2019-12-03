import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import * as actions from './actions';
import { bindActionCreators } from 'redux';
import LoadingIndicator from '../loading-indicator';
import Table from './table/index';
import StatsComponent from './stats/index';
import { Pagination } from '../pagination/index';
import { SelectComponent } from '../select/index';
import { timePeriod, baseCurrency, limitValue } from './catalog';



class Dashboard extends React.Component {
    componentDidMount() {
        const { init } = this.props.actions;
        init()
    };

    handleSort = ({ target }) => {
        let sortType = target.getAttribute('data-name');
        let { baseSymbol, currentTimePeriod, limit, offset, page, order } = this.props;
        if (sortType === 'coinranking' && order === 'desc') {
            order = 'asc'; 
        } else if(sortType === 'coinranking' && order === 'asc'){
            order = 'desc';
        }
        const { loadData } = this.props.actions;
        loadData(baseSymbol, currentTimePeriod, limit, offset, page, sortType, order);
    };

    handlePeriodChange = ({ target: { value } }) => {
        const { loadData } = this.props.actions;
        const { baseSymbol, limit, offset, page, sort, order} = this.props;
        loadData(baseSymbol, value, limit, offset, page, sort, order);
    };

    handleCurencyChange = ({ target: { value } }) => {
        const { loadData } = this.props.actions;
        const { currentTimePeriod, limit, offset, page, sort, order} = this.props;
        loadData(value, currentTimePeriod, limit, offset, page, sort, order);
    };

    handleLimitChange = ({ target: { value } }) => {
        const { loadData } = this.props.actions;
        const { baseSymbol, currentTimePeriod, offset, page, sort, order } = this.props;
        loadData(baseSymbol, currentTimePeriod, +value, offset, page, sort, order)
    };

    handlePageChange = ({ target }) => {
        let { baseSymbol, currentTimePeriod, limit, offset, page, sort, order } = this.props;
        let { loadData } = this.props.actions;
        switch (target.getAttribute('data-name')) {
            case ('prev'):
                offset = offset - limit;
                page--
                break
            case ('next'):
                offset = offset + limit;
                page++
                break
            default:
                return offset
        }
        loadData(baseSymbol, currentTimePeriod, limit, offset, page,  sort, order)
    }

    render() {
        const { isLoading, result, limit, page, currentTimePeriod, baseSymbol } = this.props;
        const { coins, stats } = result.data;
        console.log(result)
        return (
            <main className='wrapper'>
                <div className='content'>
                    <h1 className='site-description'>Dashboard</h1>
                    <div className='filters'>
                        <SelectComponent options={timePeriod} onChange={this.handlePeriodChange} defaultValue={currentTimePeriod} />
                        <SelectComponent options={baseCurrency} onChange={this.handleCurencyChange} defaultValue={baseSymbol} />
                        <SelectComponent options={limitValue} onChange={this.handleLimitChange} defaultValue={limit}/>
                    </div>
                    <div className='main-sector'>
                        {isLoading ? <LoadingIndicator /> :
                            <div className='data-sector'>
                                <Pagination onClick={this.handlePageChange} stats={stats} limit={limit} page={page} />
                                <Table onClick={this.handleSort} coins={coins} />
                                <StatsComponent stats={stats} />
                            </div>}
                    </div>
                </div>
            </main>
        )
    }
};

export default connect(
    state => state.dashboard,
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(Dashboard);