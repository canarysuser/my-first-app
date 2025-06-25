
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
    hasError: false
}
const GetAllBegin = 'BeginGetAll',
      GetAllEnd='EndGetAll'; 

export const productConstants= {GetAllBegin, GetAllEnd, productInitialState};

export const errorInitialState = { 
    hasError: false, 
    message: ''
}

