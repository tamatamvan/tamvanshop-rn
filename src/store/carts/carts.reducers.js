import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from './carts.actionTypes';

const initialState = {
  items: [],
  total: 0,
}

const idxInCart = (id, arr) => arr.findIndex(data => data.id === id)

const cartsReducers = (state={ ...initialState }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const itemIdx = idxInCart(action.payload.id, state.items);
      let item;
      let updatedItems;
      let updatedTotal;
      if (itemIdx > -1) {
        const selectedItem = state.items[itemIdx];
        const additionalSubtotal = action.payload.price * action.payload.qty;
        item = {
          ...selectedItem,
          qty: selectedItem.qty + action.payload.qty,
          subtotal: selectedItem.subtotal + additionalSubtotal,
        }
        updatedItems =  [ ...state.items ];
        updatedItems.splice(itemIdx, 1, item)
        updatedTotal = state.total - state.items[itemIdx].subtotal + item.subtotal;
      } else {
        item = {
          ...action.payload,
          subtotal: action.payload.price * action.payload.qty,
        };
        updatedItems =  [ ...state.items, item ];
        updatedTotal = state.total + item.subtotal;
      }
      
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
