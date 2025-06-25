
//Counter Constants
export const counterInitialState={counter:0};
export const Increment='Increment'; 
export const Decrement='Decrement';


//Product Constants 
const productInitialState = { 
    items: [], 
    selectedItem: {},
    selectedIndex:0,
    isLoading: false,
    loadingState: {isLoading:false, action:'All'},
    hasError: false
}
const GetAllBegin = 'BeginGetAll',
      GetAllEnd='EndGetAll',
      GetByIdBegin="BeginGetById",
      GetByIdEnd='EndGetById'; 

export const productConstants= {
    GetAllBegin, 
    GetAllEnd, 
    GetByIdBegin,
    GetByIdEnd,
    productInitialState
};

export const errorInitialState = { 
    hasError: false, 
    message: ''
}

