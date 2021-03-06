import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './appContainer';
import Home from './home/homeContainer';
import Contact from './contact/contactComponent';

const routes =
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/contact" component={Contact}/>
  </Route>;

export default routes;