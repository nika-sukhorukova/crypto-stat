import { combineReducers } from 'redux';
import dashboard from '../components/dashboard/reducers';
import coin from '../components/coin-page/reducers';

const rootReduser = combineReducers({
    dashboard,
    coin
});

export default rootReduser