import axios from 'axios';
import M from 'materialize-css';
import { 
    APPLICATION_SUCCESS, 
    ACTIVATED_STUDENT,
    CLEAR_ERRORS,
    CLEAR_STUDENT,
    GET_ERRORS, FOUND_STUDENT, 
    STUDENT_NOT_FOUND, 
    USER_EXISTS 
} from './types';

export const registerStudent = (studentData) => (dispatch) => {
    axios.post('/api/students/registerStudent', studentData)
        .then(res => dispatch({
                type: APPLICATION_SUCCESS,
                payload: res.data
            }))
        .catch(err => {
            if (err.response.status === 400) {
                M.toast({
                    html: 'Invalid Form Fields',
                    classes: 'invalid-toast'
                });
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            }
            
            if (err.response.status === 401) { 
                dispatch({
                    type: USER_EXISTS,
                    payload: err.response.data
                }); 
            }            
        });
};

export const activateStudent = (studentInfo) => (dispatch) => {
    axios.post('/api/students/activateStudent', studentInfo)
        .then(res => dispatch({
            type: ACTIVATED_STUDENT,
            payload: res.data
        }))
        .catch(err => {
            if (err.response.status === 400) {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            }

            if (err.response.status === 404) {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            }
        });
};

export const findStudent = (data, history) => (dispatch) => {
    axios.post('/api/students/findStudent', data)
        .then(res => {
            dispatch({
                type: FOUND_STUDENT,
                payload: res.data
            });
            console.log(res.data);
            history.push('/api/students/findStudent');
        })
        .catch(err => {
            switch (err.response.status) {
                case 400:
                    dispatch({
                        type: GET_ERRORS,
                        payload: err.response.data
                    });
                    break;
                
                case 404:
                    dispatch({
                        type: STUDENT_NOT_FOUND,
                        payload: err.response.data
                    });
                    break;
                
                default:
                    break;
            }
        });
};

export const clearStudent = () => (dispatch) => {
    dispatch({
        type: CLEAR_STUDENT,
        payload: {}
    });
};

export const clearErrors = () => (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS,
        payload: {}
    });
};