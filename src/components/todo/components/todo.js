import React from 'react';
import ToDoList from './todolist';
import ToDoInput from './todoInput';
import ToDoFooter from './todo-footer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import './style.css'


class ToDo extends React.Component {
    state = {
        activeFilter: 'all',
        taskText: ''
    }
    handleInputChange = ({target: {value}}) =>{
        this.setState({
            taskText: value
        })
    }

    render() {
        const { activeFilter, taskText } = this.state;
        const { tasks } = this.props;
        const isTasksExist = tasks && tasks.length > 0;
        return (
            <div className='todo' >
                <ToDoInput onChange={this.handleInputChange} value={taskText} />
                {isTasksExist && <ToDoList tasksList={tasks} />}
                {isTasksExist && <ToDoFooter amount={tasks.length} activeFilter={activeFilter} />}
            </div>
        )
    }
}
export default connect(
    state => state.taks,
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(ToDo);

