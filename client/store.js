import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';
import reducer from './reducers/index';

const middlewares = [loggerMiddleware, thunk.withExtraArgument(axios)];

const store = createStore(reducer, applyMiddleware(...middlewares));

export default store;
