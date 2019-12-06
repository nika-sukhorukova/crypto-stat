import * as c from './constants';

const initialState = {
    isLoading: true,
    timePeriod: '24h',
    limit: 50,
    offset: 0,
    baseSymbol: 'USD',
    sort: 'coinranking',
    order: 'desc',
    activeColumn:'coinranking',
    base: {},
    coins: [],
    stats: {}
};

const DashReducer = (state = initialState, action) => {
    switch (action.type) {
        case c.INIT:
            return {
                ...state,
                ...action.data,
                isLoading: false
            };
        case c.LOAD_DATA:
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
};

export default DashReducer;