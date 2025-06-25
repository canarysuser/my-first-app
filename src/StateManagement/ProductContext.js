import React from 'react'
export const productInitialState={
    items: [], 
    item: {},
    itemIndex:0,
    isLoading:false, 
    hasError:false
}

export const All='ALL', 
    Details='Details',
    Create='Create',
    Update='Update';

export function allProductsAction(items) { 
    return {type: All, payload:items};
}
export function detailsAction(item) { 
    return {type: Details, payload:item};
}
export function createAction(item) { 
    return {type: Create, payload:item};
}
export function updateAction(item) { 
    return {type: Update, payload:item};
}
export function errorAction(hasError) { 
    return {type: 'Error', payload:hasError};
}

export const productReducer = (state, action) => { 
    state=state|productInitialState; 
    switch(action.type) {
        case All: return {...state, items:action.payload}
        case Details: return {...state, item:action.payload}
        case Create: return {...state, item:action.payload}
        case Update: return {...state, item:action.payload}
        default: return {...state}
    }
}


const ProductContext = React.createContext(); 


export default ProductContext;




