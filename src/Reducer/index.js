import { combineReducers } from 'redux';
import Task from './taskReducer';
import Time from './timeReducer';

const rootReducer = combineReducers({
    title: Task,
    time: Time
});

export default rootReducer;