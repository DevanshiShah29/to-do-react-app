import { combineReducers } from 'redux';
import Task from './taskReducer';
import Time from './timeReducer';
import crud from './CRUDReducer';

const rootReducer = combineReducers({
    title: Task,
    time: Time,
    crud: crud
});

export default rootReducer;