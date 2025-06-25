import React, { useReducer } from 'react';

import Home from './UI/Home';
import ProductHome from './Products/ProductHome';
import SiteHeader from './UI/SiteHeader';

import {Grommet} from 'grommet';
import {hpe} from 'grommet-theme-hpe';
import Error from './UI/Error';
import { Route, Routes } from 'react-router';
import routes from './lib/AppRoutes';
import ProductContext, { productInitialState, productReducer } from './StateManagement/ProductContext';


function App() {
 const[hasError, setHasError] = React.useState(false);
 const[errorMessage, setErrorMessage] = React.useState('');
const [state, dispatch] = useReducer(productReducer, productInitialState);
 if(hasError) {
  return (
    <Grommet theme={hpe} full>
      <SiteHeader/>
      <Error message={errorMessage} />
    </Grommet>
  );
 }
  return (
    <Grommet theme={hpe} full>
        <SiteHeader/>
        <ProductContext.Provider value={{state, dispatch}}>
        <Routes>
            {/* <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductHome setErrorStatus={setHasError} setErrorMessage={setErrorMessage} />} />
            <Route path='/routed/list' element={<RoutedList/>}/>
            <Route path='/routed/details/:id' element={<RoutedDetails/>}/>
            <Route path="/error" element={<Error message={errorMessage} />} />
            <Route path="*" element={<NotFound />} /> */}
            {
              routes.map((value,index)=>(
                <Route key={index} path={value.path} element={value.element} />
              ))
            }

        </Routes>
        </ProductContext.Provider>
        {/* <ProductHome setErrorStatus={setHasError} setErrorMessage={setErrorMessage} /> */}
        {/* <Home /> */}
    </Grommet>
  );
}

export default App;
