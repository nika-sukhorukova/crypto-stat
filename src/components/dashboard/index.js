import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import * as actions from './actions';
import { bindActionCreators } from 'redux';
import LoadingIndicator from '../loading-indicator';
import  Table  from './table/index';
import BaseComponent from './base/index';
import StatsComponent from './stats/index';
import {Pagination} from '../pagination/index';



class Dashboard extends React.Component {
     componentDidMount() {
        const { init } = this.props.actions;
        init()
    }
    handlePageChange = ({target}) =>{
        const btnType = target.getAttribute('data-name')
        let { offset } = this.props.result.data.stats;
        switch (btnType) {
            case'next':
                this.updatePage(offset + 1);
                break;
            case 'prev':
                 this.updatePage(offset - 1);
                break;
            // default: null;
        }
    }
    updatePage = () =>{
        const { limit } = this.props.stats;
    }
    render() {
        const { isLoading, result} = this.props;
        const { coins, stats, base } = result.data;
        console.log(result)
        return (
            <main className='wrapper'>
                <div className='content'>
                    <h1 className='cite-descr'>Dashboard</h1>
                    <div className='main-sector'>
                        {isLoading ? <LoadingIndicator /> : 
                            <div className='data-sector'>
                                <BaseComponent base ={base}/>
                                <Pagination onClick={this.handlePageChange} stats={stats}/>
                                <Table coins={coins}/>
                                <StatsComponent stats ={stats}/>
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