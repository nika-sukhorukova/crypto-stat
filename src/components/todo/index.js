import React from 'react';
import ToDoList from './components/todolist';
import ToDoInput from './components/todoInput';
import ToDoFilter from './components/todo-filter';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';
import './style.css'


class ToDo extends React.Component {
    state = {
        activeFilter: 'all',
    }
    handleInputChange = ({ target: { value } }) => {
        this.setState({
            taskText: value
        })
    }
    addTask = () => {
        const { taskText } = this.state;
        const { addTask } = this.props.actions;

        addTask(taskText);

        this.setState({
            taskText: ''
        })
    }

    render() {
        const { activeFilter, taskText } = this.state;
        const { tasks } = this.props;
        const { deleteTask } = this.props.actions
        const isTasksExist = tasks && tasks.length > 0;
        return (
            <div className='todo content' >
                {isTasksExist && <ToDoFilter amount={tasks.length} activeFilter={activeFilter} />}
                <ToDoInput onChange={this.handleInputChange} value={taskText} />
                <button className='button' onClick={this.addTask}> Add</button>
                {isTasksExist && <ToDoList tasksList={tasks} deleteTask={deleteTask} />}

            </div>
        )
    }
}
export default connect(
    state => state.tasks,
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(ToDo);

