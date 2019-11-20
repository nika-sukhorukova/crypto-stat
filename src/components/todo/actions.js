import * as c from './constans';


export const addTask = (text) => ({
    type: c.ADD_TASK,
    text,
});

export const deleteTask = (id) => ({
    type: c.DELETE_TASK,
    id
});

export const completeTask = (id) => ({
    type: c.COMPLETE_TASK,
    id
});

export const changeFilter = (activeFilter) => ({
    type: c.CHANGE_FILTER,
    activeFilter
});

export const searchTask = (text) => ({
    type: c.SEARCH_TASK,
    text
});

export const handleInputChangeR = (text) => ({
    type: c.HENDLER,
    text
})