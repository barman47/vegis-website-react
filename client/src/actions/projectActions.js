import { GET_ERRORS, CLEAR_ERRORS, ADD_PROJECT } from '../actions/types';
import axios from 'axios';
import M from 'materialize-css';

export const addProject = (project) => (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS,
        payload: {}
    });
    axios.post('/api/projects/add', project)
        .then(res => {
            dispatch({
                type: ADD_PROJECT,
                payload: project
            });
            M.toast({
                html: 'Upload Successful',
                classes: 'success-toast'
            });
        })
        .catch(err => {
            console.error('there are errors ', err);
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}