import  reducer  from "./Reducers";
import {createStore} from "redux";
import {applyMiddleware} from "redux";
import thunk from "redux-thunk";
const store=createStore(reducer, {}, applyMiddleware(thunk));
console.log(store);
export default store;