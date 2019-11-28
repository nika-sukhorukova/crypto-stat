import * as c from './constants';

const initialState = {
    isLoading: true,
    curentTimePeriod: '24h',
    limit: 50,
    offset: 0,
    page: 1,
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
        case c.SORT:
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
        case c.SET_TIME_PERIOD:
            return {
                ...state,
                curentTimePeriod: action.timePeriod,
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
        case c.SET_CURRENCY:
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
        case c.SET_LIMIT:
            return {
                ...state,
                limit: action.limit
            };
        case c.GET_LIMIT:
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
        case c.CHANGE_PAGE:
            return {
                ...state,
                offset: action.offset,
                page: action.page,
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