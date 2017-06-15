import { SET_CART_QUANTITY } from '../actions/cartActions';

const initialState = {
  quantity: 5
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART_QUANTITY:
      return action.quantity
  }
  return state;
};

export default cartReducer;