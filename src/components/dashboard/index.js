import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import * as actions from './actions';
import { bindActionCreators } from 'redux';
import LoadingIndicator from '../loading-indicator';


class Dashboard extends React.Component {
    componentDidMount() {
        const { init } = this.props.actions;

        init();
    }

    render() {
        const { text, isLoading } = this.props;

        return (
            <main className='wrapper'>
                <div className='content'>
                    <h1 className='cite-descr'>Dashboard</h1>
                    <div className='main-sector'>{isLoading ? <LoadingIndicator /> : text}</div>
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