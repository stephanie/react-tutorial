import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/combineReducers';

import App from 'views/App';
import Home from 'views/Home';
import About from 'views/About';

const store = createStore(
  reducer
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={ browserHistory }>
      <Route path='/' component={App}>
        <IndexRoute component={ Home } />
        <Route path='about' component={ About } />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app') // eslint-disable-line
);
