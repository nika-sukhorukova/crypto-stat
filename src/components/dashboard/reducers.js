import * as c from './constants';

const initialState = {
    text: 'initialization in processing',
    isLoading: true,
    result: {
        data: {
            base: {},
            coins: [],
            stats: {}
        },
        status: '',
    }
};

const DashReducer = (state = initialState, action) => {
    switch (action.type) {
        case c.SET_FETCHING_RESULT:
            return {
                ...state,
                text: action.text,
                result: {
                    data: {
                        base: action.result.data.base,
                        coins: action.result.data.coins,
                        stats: action.result.data.stats
                    },
                    status: action.result.status
                },
                isLoading: false
            };
        default:
            return state;
    }
};

export default DashReducer;