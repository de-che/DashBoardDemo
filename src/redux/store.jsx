import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import healthDataReducer from './healthDataReducer';

const middleware = [
  thunk,
];
const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(healthDataReducer, withDevTools(
  applyMiddleware(...middleware),
));

export default store;
