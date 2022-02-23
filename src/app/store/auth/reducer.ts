import { AUTHENTICATED, LOGOUT } from "./action";
import { ActionAuth, Auth } from "./user.interface";

export const initialState:Auth = {
  username: "",
  token: "",
  roles: [],
};

export const authReducer = (state = initialState, action: ActionAuth) => {
  switch (action.type) {
    case AUTHENTICATED:
      return { ...action.payload }
    case LOGOUT:
      return { ...action.payload }

    default:
      return state;
  }
};
