
import { combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import calciReducer from './reducers/calciReducer';


const reducers = combineReducers({userReducer,calciReducer});


export default reducers;