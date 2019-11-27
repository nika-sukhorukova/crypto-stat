import * as c from './constants';

const initialState = {
    text: 'initialization in processing',
    isLoading: true,
    curentTimePeriod: '24h',
    limit: 50,
    timePeriod: [
        {
            value: '24h',
            label: '24h'
        },
        {
            value: '7d',
            label: '7d'
        },
        {
            value: '30d',
            label: '30d'
        }
    ],
    baseCurency: [
        {
            value: 'USD',
            label: 'USD'
        },
        {
            value: 'EUR',
            label: 'EUR'
        },
        {
            value: 'JPY',
            label: 'JPY'
        },
        {
            value: 'BTC',
            label: 'BTC'
        },
        {
            value: 'ETH',
            label: 'ETH'
        }
    ],
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
        case c.SORT:
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
        case c.SET_TIME_PERIOD:
            return {
                ...state,
                curentTimePeriod: action.timePeriod,
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
        case c.SET_CURENCY:
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
        case c.SET_LIMIT:
            return {
                ...state,
                limit: action.limit
            };
        case c.GET_LIMIT:
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