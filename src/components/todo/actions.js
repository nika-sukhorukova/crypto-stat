import * as c from './constans'


export const addTask = (text) => ({
    type: c.ADD_TASK,
    text,
});

export const deleteTask = (id) => ({
    type: c.DELETE_TASK,
    id
})