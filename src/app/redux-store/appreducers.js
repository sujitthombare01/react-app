
import { combineReducers } from 'redux';
//import userReducer from './reducers/userReducer';
//import calciReducer from './reducers/calciReducer';
import userFormReducer from './redux-form/rf-user/userFormReducer';
import { reducer as form } from 'redux-form';

//const reducers = combineReducers({userReducer,calciReducer,userFormReducer,form});
const reducers = combineReducers({userFormReducer,form});

export default reducers;