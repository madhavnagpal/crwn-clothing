import { TOGGLE_CART_HIDDEN, ADD_ITEM } from "../constants/cart";

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN,
});

export const addItemToCart = (item) => ({
  type: ADD_ITEM,
  payload: item,
});
