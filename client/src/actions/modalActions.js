import { HIDE_MODAL, SHOW_MODAL } from './types';

export const hideModal = () => (dispatch) => (
    dispatch({
        type: HIDE_MODAL,
        payload: false
    })
);

export const showModal = () => (dispatch) => (
    dispatch({
        type: SHOW_MODAL,
        payload: true
    })
);