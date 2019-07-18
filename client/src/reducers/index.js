import { combineReducers } from 'redux';
import studentsReducer from './studentsReducer';
import errorsReducer from './errorsReducer';
import modalReducer from './modalReducer';

export default combineReducers({
    student: studentsReducer,
    errors: errorsReducer,
    showModal: modalReducer
});