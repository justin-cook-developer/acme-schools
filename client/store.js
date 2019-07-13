import { createStore, applyMiddleware, compose } from 'redux';
import loggerMiddleware from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

import reducer from './reducers/index';

const middlewares = [loggerMiddleware, thunk.withExtraArgument(axios)];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
