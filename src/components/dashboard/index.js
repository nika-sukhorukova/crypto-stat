import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import * as actions from './actions';
import { bindActionCreators } from 'redux';
import LoadingIndicator from '../loading-indicator';
import  Table  from './table/index';
import BaseComponent from './base/index';
import StatsComponent from './stats/index';



class Dashboard extends React.Component {
     componentDidMount() {
        const { init } = this.props.actions;
        init()
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
                            <div>
                                <BaseComponent base ={base}/>
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