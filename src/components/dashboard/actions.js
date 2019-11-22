import * as c from './constants';

export const setFetchingResult = (result) => ({
    type: c.SET_FETCHING_RESULT,
    result,
    text: 'Prices of all cryptocurrencies'
});

