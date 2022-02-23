import { useContext } from "react";
import { MyContextAuth, MyContextDispatch } from "../store/auth/Context";

export const useAuth = () => useContext(MyContextAuth);

export const useAuthDispatch = () => useContext(MyContextDispatch);
