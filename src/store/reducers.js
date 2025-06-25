import { counterInitialState, Decrement, errorInitialState, Increment, productConstants } from "./constants";

//Counter Reducers 
export function CounterReducer(state, action) { 
    console.log('Inside Counter reducer'); 
    switch(action.type){ 
        case Increment:
            return {...state, counter: state.counter + action.payload}
        case Decrement: 
            return {...state, counter: state.counter - action.payload}
        case 'Reset': 
            return {...state, counter: 0}
        default: 
            return counterInitialState;
    }
}

export function ErrorReducer(state, action) { 
    state=state||errorInitialState; 
    if(action.type=='Error')
        return {...state, hasError: action.hasError, message: action.message}
    else 
        return state;
}

export const ProductReducer = (state, action) => { 
    state = state || productConstants.productInitialState;
    switch (action.type) { 
        case productConstants.GetAllBegin: 
            return { 
                ...state,
                items:[], 
                isLoading: true,
                loadingState: {isLoading:true, action:'All'}
            }
        case productConstants.GetAllEnd: 
            return { 
                ...state,
                items: action.items,
                isLoading:false, 
                hasError: false,
                loadingState: {isLoading:false, action:'All'}
            }
            case productConstants.GetByIdBegin: 
            return { 
                ...state,
                selectedIndex:action.selectedIndex, 
                isLoading: true,
                loadingState: {isLoading:true, action:'ById'}
            }
        case productConstants.GetByIdEnd: 
            return { 
                ...state,
                selectedItem: action.selectedItem,
                isLoading:false, 
                hasError: false,
                loadingState: {isLoading:false, action:'ById'}
            }
        default: 
            return state;
    }
}