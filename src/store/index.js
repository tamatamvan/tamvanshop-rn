import { createStore, combineReducers } from 'redux';
import productsReducers from './products/products.reducers';
import cartsReducers from './carts/carts.reducers';

const reducers = combineReducers({
  products: productsReducers,
  carts: cartsReducers,
});

const store = createStore(reducers);

export default store;
