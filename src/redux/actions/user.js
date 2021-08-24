import { SET_CURRENT_USER } from "../constants/user";

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});
