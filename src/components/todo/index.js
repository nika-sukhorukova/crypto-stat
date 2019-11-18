import React from 'react';
import ToDoList from './todo-list';
import ToDoInput from './todo-input';
import ToDoFilter from './todo-filter';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';
import './style.css';
import { Button } from '../buttons/button/index';


class ToDo extends React.Component {
    state = {
    }
    handleInputChange = ({ target: { value } }) => {
        this.setState({
            taskText: value
        })
    };
    addTask = () => {
        const { taskText } = this.state;
        const { addTask } = this.props.actions;

        addTask(taskText);

        this.setState({
            taskText: ''
        })
    }

    filterTasks = (tasks, activeFilter) => {
        switch (activeFilter) {
            case 'completed':
                return tasks.filter(task => task.isCompleted === true);
                break;
            case 'active':
                return tasks.filter(task => task.isCompleted === false);
                break;
            default:
                return tasks;
        }
    }
    handleInputChange = ({ target: { value } }) => {
        this.setState({
            searchText: value
        })
    };
    searchTask = () => {
        const { searchTask } = this.props.actions;
        const { searchText } = this.state;

        searchTask(searchText);

    }

    getActiveTasksCounter = tasks => tasks.filter(task => !task.isCompleted).length;

    render() {
        const { taskText } = this.state;
        const { searchText } = this.state;
        const { tasks, base_filter } = this.props;
        const { deleteTask, completeTask, changeFilter, searchTask } = this.props.actions
        const isTasksExist = tasks && tasks.length > 0;
        const filteredTasks = this.filterTasks(tasks, base_filter);
        const taskCounter = this.getActiveTasksCounter(tasks);
        return (
            <div className='todo content' >
                {isTasksExist && <ToDoFilter
                    amount={taskCounter}
                    activeFilter={base_filter}
                    changeFilter={changeFilter} />}
                <div className='todo-input'>
                    <ToDoInput onChange={this.handleInputChange} value={taskText} />
                    < Button onClick={this.addTask} value="Add" />
                </div>
                {isTasksExist && <ToDoList
                    tasksList={filteredTasks}
                    deleteTask={deleteTask}
                    completeTask={completeTask} />}
                <div className='todo-input'>
                    <ToDoInput onChange={this.handleInputChange} value={searchText} />
                    <Button onClick={this.searchTask} value='Search' />
                </div>
            </div>
        )
    }
};
export default connect(
    state => state.tasks,
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(ToDo);

