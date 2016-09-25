// Import the render method from react-dom so we can mount our
// component onto an html element
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from '../app/route';
import {Provider} from 'react-redux';
import createStore from '../app/redux/store';


const reduxState = window.__INITIAL_STATE__ || undefined;
const store = createStore(reduxState);

render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory}/>
  </Provider>,
  document.getElementById('reactDiv')
);
