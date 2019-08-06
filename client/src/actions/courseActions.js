import { CLEAR_COURSE, SET_COURSE } from './types';

export const applyForCourse = (courseDetails) => (dispatch) => {
    dispatch({
        type: SET_COURSE,
        payload: courseDetails
    });
};

export const clearCourse = () => (dispatch) => (
    dispatch({
        type: CLEAR_COURSE,
        payload: {}
    })
);