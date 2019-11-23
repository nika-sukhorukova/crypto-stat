import * as c from './constants';

export const setFetchingResult = (result) => ({
    type: c.SET_FETCHING_RESULT,
    result,
    text: 'Prices of all cryptocurrencies'
});

// export const init = (result) => {
//     return dispatch => {
//     return fetch(c.BASE_PATH)
//         .then(res => res.json())
//         .then(result => dispatch({
//             type: c.INIT,
//             result
//         })
//     }