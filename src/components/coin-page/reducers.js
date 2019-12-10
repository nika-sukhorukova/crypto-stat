import * as c from './constants';

const InitialState = {
	base: {},
    coin: {},
    isLoading: true,
};

const CoinReducer = (state = InitialState, action) => {
	switch (action.type) {
		case c.INIT:
			return {
				...state,
                ...action.data,
                isLoading: (action.status !== 'success')
			};
		default:
			return state;
	}
};

export default CoinReducer;
