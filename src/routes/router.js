import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from '../components/navBar';
import Home from '../pages/home';
import Profile from '../pages/profile';
import Feed from '../pages/feed';
import Notify from '../pages/notify';
import Post from '../pages/post';

const Routes = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/feed" exact component={Feed} />
      <Route path="/notify" exact component={Notify} />
      <Route path="/post" exact component={Post} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
