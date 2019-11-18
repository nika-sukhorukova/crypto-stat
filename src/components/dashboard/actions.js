import { INIT } from './constants';

export const init = () => (dispatch) => {
    setTimeout(() => {
        dispatch({
            type: INIT,
            text: 'Initialization is complete',
        });
    }, 10000);

};



