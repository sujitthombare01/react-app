
import { combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import calciReducer from './reducers/calciReducer';
import userFormReducer from './redux-form/rf-user/userFormReducer';
import { reducer as fromReducer } from 'redux-form';

const reducers = combineReducers({userReducer,calciReducer,userFormReducer,fromReducer});


export default reducers;