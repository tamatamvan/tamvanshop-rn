import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
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
    case REMOVE_FROM_CART:
      const { items } = state;
      const id = action.payload;
      const idx = items.findIndex(item => item.id === id);
      const subtotal = idx !== -1 ? items[idx].subtotal : 0;
      return ({
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
        total: state.total - subtotal,
      })
    default:
      return state
  }
}

export default cartsReducers
