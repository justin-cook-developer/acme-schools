import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bulma/css/bulma.css';

import store from './store';

const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <hr />
    </Router>
  </Provider>,
  root
);
