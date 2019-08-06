import { combineReducers } from 'redux';
import studentsReducer from './studentsReducer';
import errorsReducer from './errorsReducer';
import modalReducer from './modalReducer';
import networkReducer from './networkReducer';
import courseReducer from './courseReducer';

export default combineReducers({
    course: courseReducer,
    student: studentsReducer,
    errors: errorsReducer,
    showModal: modalReducer,
    network: networkReducer
});