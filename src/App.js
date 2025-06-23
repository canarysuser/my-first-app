import React from 'react';

import Home from './UI/Home';
import ProductHome from './Products/ProductHome';
import SiteHeader from './UI/SiteHeader';

import {Grommet} from 'grommet';
import {hpe} from 'grommet-theme-hpe';

function App() {

  return (
    <Grommet theme={hpe} full>
        <SiteHeader/>
        <ProductHome/>
    </Grommet>
  );
}

export default App;
