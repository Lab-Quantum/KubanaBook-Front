import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from '../components/navBar';
import Home from '../pages/home';

const Routes = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
