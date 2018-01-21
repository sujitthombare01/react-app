import React from "react";
import ReactDOM from "react-dom";

import Layout from "./components/Layout";
import { Provider } from 'react-redux';
import { createStore ,applyMiddleware } from 'redux';


import reducers from './redux-store/appreducers';

import  logger from 'redux-logger';
import thunk from 'redux-thunk';


let store = createStore(reducers,{},applyMiddleware(logger,thunk));

//let store = createStore(reducers);

const app = document.getElementById('app');
ReactDOM.render(
    <Provider store={store}>
        <Layout />
    </Provider>
    , app);


store.subscribe(() => {
 //   console.log('Store updated !!!', store.getState());
});

