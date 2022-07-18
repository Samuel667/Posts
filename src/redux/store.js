import { createStore,applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import  reducers  from'./reducers/ReducerIndex.js';
// const middleware = [thunk];
const store = createStore(
    reducers,
    {},
applyMiddleware(thunk),   
);
export default store;