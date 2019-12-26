import * as c from './constants';

const InitialState = {
	base: {},
	coin: {},
	isLoading: true,
	coinHistory: [],
	timeframe: '24h',
	baseSymbol: 'USD'
};

const CoinReducer = (state = InitialState, action) => {
	switch (action.type) {
		case c.INIT:
			return {
				...state,
				...action.data,
				isLoading: action.status !== 'success'
			};
		case c.GET_HISTORY:
			return {
				...state,
				coinHistory: action.result
			};
		case c.SET_TIMEFRAME:
			return {
				...state,
				timeframe: action.period
			};
		case c.SET_SYMBOL:
			return {
				...state,
				baseSymbol: action.symbol
			};
		default:
			return state;
	}
};

export default CoinReducer;
