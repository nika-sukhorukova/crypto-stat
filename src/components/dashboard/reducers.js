import * as c from './constants';

const initialState = {
    isLoading: true,
    timePeriod: '24h',
    limit: 50,
    offset: 0,
    page: 1,
    baseSymbol: 'USD',
    sort: 'coinranking',
    order: 'desc',
    base: {},
    coins: [],
    stats: {}
};

const DashReducer = (state = initialState, action) => {
    switch (action.type) {
        case c.INIT:
            return {
                ...state,
                ...action.initial,
                isLoading: false
            };
        case c.LOAD_DATA:
            return {
                ...state,
                ...action.initial,
                ...action.data
            };
        default:
            return state;
    }
};

export default DashReducer;