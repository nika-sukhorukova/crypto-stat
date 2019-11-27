import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import * as actions from './actions';
import { bindActionCreators } from 'redux';
import LoadingIndicator from '../loading-indicator';
import Table from './table/index';
import BaseComponent from './base/index';
import StatsComponent from './stats/index';
import { Pagination } from '../pagination/index';
import { Select } from '../select/index';



class Dashboard extends React.Component {
    componentDidMount() {
        const { init } = this.props.actions;
        init()
    }
    handleClick = ({ target }) => {
        let sortType = target.getAttribute('data-name');
        const { sort } = this.props.actions;
        sort(sortType);
    }
    handlePeriodChange = ({target: { value }}) => {
        const periodValue = value;
        const { setTimePeriod } = this.props.actions;
        const { symbol } = this.props.result.data.base;
        setTimePeriod(periodValue, symbol);
        
    }
    handleCurencyChange = ({target: { value }}) => {
        const curencyType = value;
        const { setCurency } = this.props.actions;
        const { curentTimePeriod } =this.props;
        setCurency(curencyType , curentTimePeriod);
        
    }
    render() {
        const { isLoading, result, timePeriod, baseCurency, curentTimePeriod} = this.props;
        const { coins, stats, base } = result.data;
        console.log(result)
        return (
            <main className='wrapper'>
                <div className='content'>
                    <h1 className='cite-descr'>Dashboard</h1>
                    <div className='filters'>
                        <Select options={timePeriod} onChange={this.handlePeriodChange} value={curentTimePeriod}/>
                        <Select options={baseCurency} onChange={this.handleCurencyChange} />
                    </div>
                    <div className='main-sector'>
                        {isLoading ? <LoadingIndicator /> :
                            <div className='data-sector'>
                                <BaseComponent base={base} />
                                <Pagination onClick={this.handlePageChange} stats={stats} />
                                <Table onClick={this.handleClick} coins={coins} />
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