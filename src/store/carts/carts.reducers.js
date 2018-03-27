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
      const updatedItems = [ ...state.items, payload.item ];
      const updatedTotal = state.total + payload.item.price;
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
