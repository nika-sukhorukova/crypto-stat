import * as c from './constans';
import nanoid from 'nanoid';

const initialState = {
    input_text: '',
    base_filter: 'SHOW_ALL',
    tasks: [{
        id: nanoid(),
        text: 'learn react',
        isCompleted: false
    },
    {
        id: nanoid(),
        text: 'learn redux',
        isCompleted: false
    },
    {
        id: nanoid(),
        text: 'learn learn learn',
        isCompleted: true
    }
    ]
};

const tasks = (state = initialState, action) => {
    switch (action.type) {
        case c.ADD_TASK:
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    {
                        id: nanoid(),
                        text: action.text,
                        isCompleted: false
                    }
                ]
            };
        case c.DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.id)
            };
        case c.COMPLETE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === action.id) {
                        task.isCompleted = !task.isCompleted;
                    }
                    return task;
                })
            };
        case c.CHANGE_FILTER: {
            return {
                ...state,
                base_filter: action.activeFilter
            };
        }
        case c.SEARCH_TASK: {
            return {
                ...state,
                tasks: state.tasks.filter(task => task.text.includes(action.text))
            };
        }
        case c.HENDLER: {
            return {
                ...state,
                input_text: action.text
            }
        };
        default:
            return state;
    }
};

export default tasks;