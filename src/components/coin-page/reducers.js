import * as c from './constants';

const InitialState = {
	base: {},
	coin: {}
};

const CoinReducer = (state = InitialState, action) => {
	switch (action.type) {
		case c.INIT:
			return {
				...state,
				...action.data
			};
		default:
			return state;
	}
};

export default CoinReducer;
