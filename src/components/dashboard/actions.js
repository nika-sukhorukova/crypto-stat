import * as c from './constants';

export const init = () => dispatch => {
    return fetch(c.BASE_PATH)
        .then(res => res.json())
        .then(result => dispatch({
                type: c.INIT,
                result
            })
        )
    }