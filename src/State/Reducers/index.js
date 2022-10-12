import {combineReducers} from "redux";
import transReducer  from "./reducer";
 const reducers = combineReducers({
    transaction: transReducer
})
export default reducers;