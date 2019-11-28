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
import { InputForm } from '../input/index';
import { timePeriod, baseCurrency } from './catalog';



class Dashboard extends React.Component {
    componentDidMount() {
        const { init } = this.props.actions;
        init()
    };

    handleSort = ({ target }) => {
        let sortType = target.getAttribute('data-name');
        const { sort } = this.props.actions;
        sort(sortType);
    };

    handlePeriodChange = ({ target: { value } }) => {
        const { setTimePeriod } = this.props.actions;
        const { symbol } = this.props.result.data.base;
        setTimePeriod(value, symbol);
    };

    handleCurencyChange = ({ target: { value } }) => {
        const { setCurency } = this.props.actions;
        const { curentTimePeriod } = this.props;
        setCurency(value, curentTimePeriod);
    };

    handleInputChange = ({ target: { value } }) => {
        const { setLimit } = this.props.actions;
        setLimit(+value);
    };

    handleInputClick = () => {
        const { getLimit } = this.props.actions;
        const { limit } = this.props;
        const { symbol } = this.props.result.data.base;
        getLimit(limit, symbol)
    };
    handlePageChange = ({ target }) => {
        let btnType = target.getAttribute('data-name');
        let { offset, limit, page } = this.props;
        const { symbol } = this.props.result.data.base;
        let { changePage } = this.props.actions;
        switch (btnType) {
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
        changePage(offset, symbol, limit, page)
    }

    render() {
        const { isLoading, result, limit, page } = this.props;
        const { coins, stats } = result.data;
        console.log(result)
        return (
            <main className='wrapper'>
                <div className='content'>
                    <h1 className='site-description'>Dashboard</h1>
                    <div className='filters'>
                        <SelectComponent options={timePeriod} onChange={this.handlePeriodChange} />
                        <SelectComponent options={baseCurrency} onChange={this.handleCurencyChange} />
                        <InputForm onChange={this.handleInputChange} onClick={this.handleInputClick} />
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