import {
    SET_ALERT,
    REMOVE_ALERT,
} from './types';


export const setAlert = (msg, alertColor, timeout = 5000) => dispatch => {
    dispatch({
        type: SET_ALERT,
        payload: { msg, alertColor }
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT }), timeout);
}