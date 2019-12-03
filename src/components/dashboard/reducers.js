import * as c from './constants';

const initialState = {
    isLoading: true,
    currentTimePeriod: '24h',
    limit: 50,
    offset: 0,
    page: 1,
    baseSymbol: 'USD',
    sort:'coinranking',
    order: 'desc',
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
        case c.INIT:
            return {
                ...state,
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
        case c.LOAD_DATA:
            return {
                ...state,
                baseSymbol:action.currencyType,
                currentTimePeriod: action.timePeriod,
                sort: action.sortQuerry,
                limit: action.limit,
                offset: action.offset, 
                page: action.page,
                order: action.order,
                result: {
                    data: {
                        base: action.result.data.base,
                        coins: action.result.data.coins,
                        stats: action.result.data.stats
                    },
                    status: action.result.status
                },
            };
        default:
            return state;
    }
};

export default DashReducer;