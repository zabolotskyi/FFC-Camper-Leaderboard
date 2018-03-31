import { combineReducers } from 'redux';
import alltime from './alltime';
import recent from './recent';

export default combineReducers({
    alltime,
    recent
});