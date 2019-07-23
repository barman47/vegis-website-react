import { combineReducers } from 'redux';
import studentsReducer from './studentsReducer';
import errorsReducer from './errorsReducer';
import modalReducer from './modalReducer';
import networkReducer from './networkReducer';

export default combineReducers({
    student: studentsReducer,
    errors: errorsReducer,
    showModal: modalReducer,
    network: networkReducer
});