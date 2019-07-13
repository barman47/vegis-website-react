import { combineReducers } from 'redux';
import studentsReducer from './studentsReducer';
import errorsReducer from './errorsReducer';

export default combineReducers({
    student: studentsReducer,
    errors: errorsReducer
});