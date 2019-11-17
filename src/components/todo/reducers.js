import * as c from './constans';
import nanoid from 'nanoid';

const initialState = {
    tasks: [{
        id: 1,
        text: 'learn react',
        isCompleted: false
    },
    {
        id: 2,
        text: 'learn redux',
        isCompleted: false
    }
    ]
};


const tasks = (state = initialState, action) => {
    switch (action.type) {
        case c.ADD_TASK:
            const idTask = nanoid()
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    {
                        id: idTask,
                        text: action.text,
                        isCompleted: false
                    }
                ]
            }
        case c.DELETE_TASK:
            return {
                ...state,
                tasks: [...state.tasks].filter(task => task.id !== action.id)
            }
        default:
            return state;
    }
}

export default tasks;