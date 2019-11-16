import { combineReducers } from 'redux';
import dashboard from '../components/dashboard/reducers';
import tasks from '../components/todo/reducers/tasks'


const rootReduser = combineReducers({
    dashboard,
    tasks
 });

export default rootReduser