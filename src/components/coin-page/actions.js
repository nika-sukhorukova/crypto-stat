import * as c from './constants';

export const init = (url) => 
    (dispatch) => {
        fetch(`${c.BASE_PATH}${url}`)
        .then((res) => res.json()).then((result) =>
		    dispatch({
                type: c.INIT,
                data: result.data
            })
	    );
    };
