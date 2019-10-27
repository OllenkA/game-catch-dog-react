import {createStore, combineReducers, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk';
import reducer from "./reducer";


let reducers = combineReducers({
    main: reducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

// window.store = store;

export default store;