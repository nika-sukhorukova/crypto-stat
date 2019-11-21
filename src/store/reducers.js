import { combineReducers } from 'redux';
import dashboard from '../components/dashboard/reducers';



const rootReduser = combineReducers({
    dashboard
 });

export default rootReduser