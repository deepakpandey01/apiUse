import { combineReducers } from 'redux';
import LoginDetails from './LoginDetails';

export default combineReducers({
    auth: LoginDetails,
});