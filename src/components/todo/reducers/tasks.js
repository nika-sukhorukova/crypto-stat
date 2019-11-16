import { ADD_TASK } from '../constans'

const initialState = {
    {
        id: 1,
        text: 'learn react',
        isCompleted: false
    },
    {
        id: 2,
        text: 'learn redux',
        isCompleted: false
    }
};


const tasks= (state= initialState, action) => {
    switch(action.type) {
        case ADD_TASK :
            return {
                ...state,
                    id: action.id,
                    text: action.text,
                    isCompleted: action.isCompleted
                           };
        default:
            return state;
    }
}

export default tasks;