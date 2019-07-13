import axios from 'axios';
import M from 'materialize-css';
import { APPLICATION_SUCCESS, GET_ERRORS, USER_EXISTS } from './types';

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