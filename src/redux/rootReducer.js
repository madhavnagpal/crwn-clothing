import { combineReducers } from "redux";
import user from "./reducers/user";
import cart from "./reducers/cart";

export default combineReducers({
  user,
  cart,
});
