
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import loggerMiddleware from 'config/logger-middleware';
import rootReducer from './root-reducer';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();
const defaultMiddlewares = [
  sagaMiddleware,
  loggerMiddleware
];

const composedMiddlewares = (middlewares: any) =>
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(...defaultMiddlewares, ...middlewares))
    : compose(applyMiddleware(...defaultMiddlewares, ...middlewares));

const initialize = (initialState?: any, middlewares = []) => {
  const store = createStore(rootReducer, initialState, composedMiddlewares(middlewares));
  sagaMiddleware.run(rootSaga);
  return store;
};

const store = initialize();

export default store;