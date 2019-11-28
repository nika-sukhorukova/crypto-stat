import * as c from './constants';

export const init = () =>
    dispatch => {
        fetch(c.BASE_PATH)
            .then(res => res.json())
            .then(result => dispatch({
                type: c.INIT,
                result
            })
        );
    };

export const sort = (sortQuerry) =>
    dispatch => {
        fetch(`${c.BASE_PATH}${c.SORT_PATH}${sortQuerry}`)
            .then(res => res.json())
            .then(result => dispatch({
                type: c.SORT,
                result
            })
        );
    };

export const setTimePeriod = (timePeriod, symbol) =>
    dispatch => {
        fetch(`${c.BASE_PATH}${c.CURRENCY_PATH}${symbol}${c.TIME_PERIOD_PATH}${timePeriod}`)
            .then(res => res.json())
            .then(result => dispatch({
                type: c.SET_TIME_PERIOD,
                timePeriod,
                result
            })
        );
    };

export const setCurency = (curencyType, curentTimePeriod) =>
    dispatch => {
        fetch(`${c.BASE_PATH}${c.CURRENCY_PATH}${curencyType}${c.TIME_PERIOD_PATH}${curentTimePeriod}`)
            .then(res => res.json())
            .then(result => dispatch({
                type: c.SET_CURRENCY,
                curencyType,
                result
            })
        );
    };

export const setLimit = (limit) => ({
    type: c.SET_LIMIT,
    limit
});

export const getLimit = (limit, symbol) =>
    dispatch => {
        fetch(`${c.BASE_PATH}${c.CURRENCY_PATH}${symbol}${c.LIMIT_PATH}${limit}`)
            .then(res => res.json())
            .then(result => dispatch({
                type: c.GET_LIMIT,
                result
            })
        );
    };

export const changePage = (offset, symbol, limit, page) =>
    dispatch => {
        fetch(`${c.BASE_PATH}${c.CURRENCY_PATH}${symbol}${c.LIMIT_PATH}${limit}${c.CHANGE_PAGE_PATH}${offset}`)
            .then(res => res.json())
            .then(result => dispatch({
                type: c.CHANGE_PAGE,
                result,
                offset,
                page
            })
        );
    };