import { combineReducers } from 'redux';
import dashboard from '../components/dashboard/reducers';
import tasks from '../components/todo/reducers'


const rootReduser = combineReducers({
    dashboard,
    tasks
 });

export default rootReduser