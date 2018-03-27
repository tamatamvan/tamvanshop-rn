import {
  ADD_TO_CART,
} from './carts.actionTypes';

const initialState = {
  items: [],
  total: 0,
}

const cartsReducers = (state={ ...initialState }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = {
        ...action.payload,
        subtotal: action.payload.price * action.payload.qty,
      };
      const updatedItems = [ ...state.items, item ];
      const updatedTotal = state.total + item.subtotal;
      return ({
        ...state,
        items: updatedItems,
        total: updatedTotal,
      });
    default:
      return state
  }
}

export default cartsReducers
