import { INIT } from './constants';

const initialState = {
    text: 'initialization in processing',
    isLoading: true
}

const DashReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT:
            return {
                ...state,
                text: action.text,
                isLoading: false
            };
        default:
            return state;
    }
};

export default DashReducer;