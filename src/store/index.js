import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import productsReducers from './products/products.reducers';
import cartsReducers from './carts/carts.reducers';

const reducers = combineReducers({
  products: productsReducers,
  carts: cartsReducers,
});

const store = createStore(
  reducers,
  applyMiddleware(logger)
);

export default store;
