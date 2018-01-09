import React from "react";
import ReactDOM from "react-dom";

import Layout from "./components/Layout";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initalState = {
    result : 10 ,
    lastValues : []
};

var reducer = (state=initalState, action) => {
    switch (action.type) {

        case 'ADD': state = {...state ,
                              result : state.result + action.value ,
                             
                            lastValues :[...state.lastValues , action.value]

                            }
                         
                            ; break;
        case 'SUB': state = {...state ,
            result : state.result - action.value ,
    
                             
            lastValues :[...state.lastValues , action.value]
        };

            break;
    }

    return state;
}

let store = createStore(reducer);

const app = document.getElementById('app');
ReactDOM.render(
    <Provider store={store}>
        <Layout />
    </Provider>
    , app);


store.subscribe(() => {
    console.log('Store updated !!!', store.getState());
});
store.dispatch({ type: 'ADD', value: 10 });
store.dispatch({ type: 'ADD', value: 10 });
store.dispatch({ type: 'ADD', value: 10 });

store.dispatch({ type: 'SUB', value: 10 });
store.dispatch({ type: 'SUB', value: 10 });
