import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Homepage from '../pages/Homepage';
import Product from '../pages/Product';

const Content = () => {
   return (
      <Router>
         <Switch>

            <Route path="/" exact >
               <Homepage />
            </Route>

            <Route path="/produkt/:id" >
               <Product />
            </Route>

         </Switch>
      </Router>
   );
};

export default Content;
