import { types } from "../types/types";
const initState = {
  logged: false,
};
export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        logged: true,
        user: action.payload,
      };
    case types.logout:
      return {
        ...state,
        logged: false,
        user: null,
      };
    default:
      return state;
  }
};
