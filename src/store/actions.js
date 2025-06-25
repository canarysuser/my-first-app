import { getProducts } from "../lib/services/ProductApiService";
import { Increment,Decrement, productConstants } from "./constants";

//Counter Action Creators 
export function IncrementAction(value) { 
    return { type: Increment, payload: value};
}
export function DecrementAction(value) { 
    return { type: Decrement, payload: value};
}

//Product Action Creators

function GetAllBeginActionCreator() { 
    return {
        type: productConstants.GetAllBegin,
        isLoading: true
    }
}
function GetAllEndActionCreator(items) { 
    return {
        type: productConstants.GetAllEnd, 
        items: items, 
        isLoading: false
    }
}
function ErrorActionCreator(errorMessage) { 
    return { type: 'Error', hasError: true, message: errorMessage}
}
const  getAllProducts = async (dispatch) => { 
    dispatch(GetAllBeginActionCreator()); 
    try { 
        var response = await getProducts(); 
        //console.log('Response', response); 
        dispatch(GetAllEndActionCreator(response))
    } catch (e) { 
        dispatch(ErrorActionCreator(e))
    }
}
export const productActions={
    GetAllBeginActionCreator, 
    GetAllEndActionCreator,
    getAllProducts, 
    ErrorActionCreator
}
