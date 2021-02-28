import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from '../pages/Homepage';
import Product from '../pages/Product';

const Content = () => {
   return (
      <Switch>

         <Route path="/" exact >
            <Homepage />
         </Route>

         <Route path="/produkt/:id" >
            <Product />
         </Route>

      </Switch>
   );
};

export default Content;
