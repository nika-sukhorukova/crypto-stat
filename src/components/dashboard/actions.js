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

export const loadData = (currencyType, timePeriod, limit, offset, page, sortQuerry, order) =>
dispatch => {
    fetch(`${c.BASE_PATH}${c.CURRENCY_PATH}${currencyType}${c.TIME_PERIOD_PATH}${timePeriod}${c.SORT_PATH}${sortQuerry}${c.LIMIT_PATH}${limit}${c.CHANGE_PAGE_PATH}${offset}${c.ORDER_PATH}${order}`)
    .then(res => res.json())
    .then(result => dispatch({
            type: c.LOAD_DATA,
            result,
            timePeriod,
            limit,
            offset, 
            page,
            currencyType,
            sortQuerry,
            order
        })
    );
};

