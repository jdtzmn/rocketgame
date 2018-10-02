import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Welcome from '../pages/Welcome/Welcome';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Welcome} />
    </Switch>
  </BrowserRouter>
);

export default Router;
