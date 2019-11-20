import React from 'react';
import ToDoList from './todo-list';
import ToDoInput from './todo-input';
import ToDoFilter from './todo-filter';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';
import './style.css';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';


class ToDo extends React.Component {
    state = {
        taskText: '',
        searchText: ''
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

    filterTasks = (tasks, base_filter) => {
        switch (base_filter) {
            case 'completed':
                return tasks.filter(task => task.isCompleted === true);
            case 'active':
                return tasks.filter(task => task.isCompleted === false);
            default:
                return tasks;
        }
    }
    handleSearchChange = ({ target: { value } }) => {
        this.setState({
            searchText: value
        })
    };
    searchTask = (tasks) => {
        const { searchTask } = this.props.actions;
        const { searchText } = this.state;
        const { search_text } = this.props;

        searchTask(searchText)
        // const result = tasks.filter(task => task.text.includes(search_text));
        // return result
    }

    getActiveTasksCounter = tasks => tasks.filter(task => !task.isCompleted).length;

    render() {
        const { taskText } = this.state;
        const { searchText } = this.state;
        const { tasks, base_filter } = this.props;
        const { deleteTask, completeTask, changeFilter } = this.props.actions;
        const isTasksExist = tasks && tasks.length > 0;
        const filteredTasks = this.filterTasks(tasks, base_filter);
        const taskCounter = this.getActiveTasksCounter(tasks);
        return (
            <div className='todo content' >
                {isTasksExist && <ToDoFilter
                    amount={taskCounter}
                    activeFilter={base_filter}
                    changeFilter={changeFilter} />}
                <Box m={5}>
                    <div className='todo-input'>
                        <ToDoInput name='task' labelValue='Task' onChange={this.handleInputChange} value={taskText} />
                        <Button variant="contained" style={{ backgroundColor: '#b3e5fc' }} onClick={this.addTask}>Add</Button>
                    </div>
                    {isTasksExist && <ToDoList
                        tasksList={filteredTasks}
                        deleteTask={deleteTask}
                        completeTask={completeTask} />}
                    <div className='todo-input'>
                        <ToDoInput labelValue='Search' onChange={this.handleSearchChange} value={searchText} />
                        <Button variant="contained" style={{ backgroundColor: '#b3e5fc' }} onClick={this.searchTask}> Sreach</Button>
                    </div>
                </Box>
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

