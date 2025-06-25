import {thunk} from "redux-thunk";
import {logger} from "redux-logger";
import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import { CounterReducer, ErrorReducer, ProductReducer } from "./reducers";


const middlewares=[
    thunk, logger
]
const enhancers = []; 
const reducers = {
    counter: CounterReducer,
    products: ProductReducer, 
    errors: ErrorReducer
}

export default function storeConfig() { 
    const store = legacy_createStore(
        combineReducers({...reducers}),
        compose(applyMiddleware(...middlewares, ...enhancers))
    )
    return store;
}
