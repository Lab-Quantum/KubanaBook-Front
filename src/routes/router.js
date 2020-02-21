import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Routes = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <BrowserRouter>
    {/* <NavBar /> */}
    <Switch>
      {/* <Route path="/" exact component={Home} /> */}
      <Route path="/" exact />
    </Switch>
  </BrowserRouter>
);

export default Routes;
