import {configureStore, createSlice} from "@reduxjs/toolkit"
import { productConstants } from "./constants"
import logger from "redux-logger";

const pSlice = createSlice({
    name:'products',
    initialState: productConstants.productInitialState,
    reducers: {
        getAllBegin : (state, {payload}) => {
            state.isLoading = true
        }, 
        getAllEnd : (state, {payload}) => {
            state.items = payload.items;
            state.isLoading=false;
        }
    }
})

export const {
    getAllBegin: getAllBeginActionCreator,
    getAllEnd: getAllEndActionCreator
} = pSlice.actions

const reducer = { 
    products: pSlice.reducer
}

const store = configureStore({
    reducer, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV!=='production'
});

export default store;