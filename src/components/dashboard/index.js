import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import * as actions from './actions';
import { bindActionCreators } from 'redux';
import LoadingIndicator from '../loading-indicator';
import * as c from './constants';
import  List  from './list/index';


class Dashboard extends React.Component {
     componentDidMount() {
        const { setFetchingResult } = this.props.actions;
        fetch(c.BASE_PATH)
            .then(res => res.json())
            .then(result => (setFetchingResult(result)))
            .catch(error => error);
    }
    render() {
        const { text, isLoading, result} = this.props;
        const { coins, stats, base } = result.data;
        console.log(result)
        return (
            <main className='wrapper'>
                <div className='content'>
                    <h1 className='cite-descr'>Dashboard</h1>
                    <div className='main-sector'>{isLoading ? <LoadingIndicator /> : <List coins={coins}/>}</div>
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