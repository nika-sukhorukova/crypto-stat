import { combineReducers } from 'redux';
import dashboard from '../components/dashboard/reducers';
import { routerReducer } from 'react-router-redux';

const rootReduser = combineReducers({
    dashboard,
    routing: routerReducer
});

export default rootReduser