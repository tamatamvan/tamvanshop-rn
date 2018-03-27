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
      const updatedItems = [ ...state.items, action.payload ];
      const updatedTotal = state.total + action.payload.price;
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
