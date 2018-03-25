import {
  LOAD_PRODUCTS_SUCCESS,
} from './products.actionTypes';

const initialState = [
  { id: 0, name: 'Elephone E-1 in Ear', price: 700, image: 'https://doki.co.id/image/cache/data/Handphone/Motorola/Moto%20z/Motorola-moto-z-black-500x500.jpg' },
  { id: 1, name: 'JBL Wireless Earphone', price: 500, image: 'https://doki.co.id/image/cache/data/Handphone/xiaomi/Note%205A/Redmi-note-5a-Grey-500x500.jpg' },
  { id: 2, name: 'Xiaomi Mi A1', price: 1000, image: 'https://doki.co.id/image/cache/data/Accessories/Tempered Glass/Tempered-Samsung-Galaxy-s8-s8+-500x500h.jpg' },
  { id: 3, name: 'Samsung Galaxy S8', price: 7000, image: 'https://doki.co.id/image/cache/data/Handphone/Elephone/s1/Elephone-s1-black-doki-500x500.jpg' },
];

const productsReducers = (state=[...initialState], action) => {
  switch (action.type) {
    case LOAD_PRODUCTS_SUCCESS:
      return state;
    default:
      return state;
  }
}

export default productsReducers;