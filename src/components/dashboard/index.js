import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import * as actions from './actions';
import { bindActionCreators } from 'redux';
import LoadingIndicator from '../loading-indicator';
import * as c from './constants';
import  List  from './list/index';
import BaseComponent from './base/index';
import StatsComponent from './stats/index';



class Dashboard extends React.Component {
     componentDidMount() {
        const { setFetchingResult } = this.props.actions;
        fetch(c.BASE_PATH)
            .then(res => res.json())
            .then(result => setFetchingResult(result))
            .catch(error => error);
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
                                <List coins={coins}/>
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