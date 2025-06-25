import { getProducts,getProductById } from "../lib/services/ProductApiService";
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
function GetByIdBeginActionCreator(id) { 
    return {
        type: productConstants.GetByIdBegin,
        isLoading: true,
        selectedIndex:id
    }
}
function GetByIdEndActionCreator(item) { 
    return {
        type: productConstants.GetByIdEnd, 
        selectedItem: item, 
        isLoading: false,
    }
}
function ErrorActionCreator(errorMessage) { 
    return { type: 'Error', hasError: true, message: errorMessage}
}
const  getAllProducts = async (dispatch) => { 
    dispatch(GetAllBeginActionCreator()); 
    try { 
        var response = await getProducts(); 
        console.log('Response', response); 
        dispatch(GetAllEndActionCreator(response))
    } catch (e) { 
        dispatch(ErrorActionCreator(e))
        throw e;
    }
}
const  getByIdProducts = async (dispatch, id) => { 
    dispatch(GetByIdBeginActionCreator(id)); 
    try { 
        var response = await getProductById(id); 
        //console.log('Response', response); 
        dispatch(GetByIdEndActionCreator(response))
    } catch (e) { 
        dispatch(ErrorActionCreator(e))
        throw e;
    }
}
export const productActions={
    GetAllBeginActionCreator, 
    GetAllEndActionCreator,
    GetByIdBeginActionCreator,
    GetByIdEndActionCreator,
    getAllProducts, 
    getByIdProducts,
    ErrorActionCreator
}
