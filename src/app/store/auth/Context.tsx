import { createContext, useReducer, ReactNode } from "react";
import { ActionAuth, Auth } from "./user.interface";
import { authReducer, initialState } from "./reducer";

const init = () => {
  const hasData = localStorage.getItem("user");
  if (hasData === null) {
    return initialState;
  }

  return JSON.parse(hasData);
};

type Props = { children: ReactNode };

type ContextDispatch = (action: ActionAuth) => void;

type Context = { auth: Auth };

export const MyContextAuth = createContext<Context>({
  auth: { username: "", token: "", roles: [] },
});

export const MyContextDispatch = createContext<ContextDispatch>(() => {});

export const AuthContext = ({ children }: Props) => {
  const [auth, dispatch] = useReducer(authReducer, initialState, init);

  return (
    <MyContextDispatch.Provider value={dispatch}>
      <MyContextAuth.Provider value={{ auth }}>
        {children}
      </MyContextAuth.Provider>
    </MyContextDispatch.Provider>
  );
};
