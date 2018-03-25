import { createStore, combineReducers } from 'redux';
import productsReducers from './products/products.reducers';

const reducers = combineReducers({
  products: productsReducers,
});

const store = createStore(reducers);

export default store;
