import * as c from './constants';

export const init = (id) => 
    (dispatch) => {
        fetch(`${c.BASE_PATH}${id}`)
        .then((res) => res.json()).then((result) =>
		    dispatch({
                type: c.INIT,
                data: result.data,
                status: result.status
            })
	    );
    };


export const getHistory = (path) =>
    (dispatch) => {
        fetch(path)
        .then((res) => res.json()).then((result) =>
            dispatch({
                type: c.GET_HISTORY,
                result: result.data
            })
        );
    };

export const setTimeFrame = (period) => ({
    type: c.SET_TIMEFRAME,
    period
});