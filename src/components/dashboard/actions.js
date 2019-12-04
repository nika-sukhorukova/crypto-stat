import * as c from './constants';

export const init = () =>
    dispatch => {
        fetch(c.BASE_PATH)
            .then(res => res.json())
            .then(result => dispatch({
                type: c.INIT,
                initial: result.data
            })
        );
    };

export const loadData = ({data, url}) =>
dispatch => {
    fetch(url)
    .then(res => res.json())
    .then(result => 
        dispatch({
            type: c.LOAD_DATA,
            initial: result.data,
            data
        })
    );
};

