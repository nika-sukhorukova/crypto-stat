import * as c from './constants';

export const init = () => dispatch => {
    return fetch(c.BASE_PATH)
        .then(res => res.json())
        .then(result => dispatch({
            type: c.INIT,
            result
        })
        );
};

export const sort = (sortQuerry) => dispatch => {
    return fetch(`${c.BASE_PATH}${c.SORT_PATH}${sortQuerry}`)
        .then(res => res.json())
        .then(result => dispatch({
            type: c.SORT,
            result
        })
        );
};

export const setTimePeriod = (timePeriod, symbol) => dispatch => {
    return fetch(`${c.BASE_PATH}${c.CURENCY_PATH}${symbol}${c.TIME_PERIOD_PATH}${timePeriod}`)
        .then(res => res.json())
        .then(result => dispatch({
            type: c.SET_TIME_PERIOD,
            timePeriod,
            result
        })
        );
};

export const setCurency = (curencyType, curentTimePeriod) => dispatch => {
    return fetch(`${c.BASE_PATH}${c.CURENCY_PATH}${curencyType}${c.TIME_PERIOD_PATH}${curentTimePeriod}`)
        .then(res => res.json())
        .then(result => dispatch({
            type: c.SET_CURENCY,
            curencyType,
            result
        })
        );
};

export const setLimit = (limit) => ({
    type: c.SET_LIMIT,
    limit
});

export const getLimit = (limit, symbol) => dispatch => {
    return fetch(`${c.BASE_PATH}${c.CURENCY_PATH}${symbol}${c.LIMIT_PATH}${limit}`)
        .then(res => res.json())
        .then(result => dispatch({
            type: c.GET_LIMIT,
            result
        })
        );
};