import { useContext } from "react";
import {
  MyContextCustomer,
  MyContextDispatch,
} from "../store/customer/Context";

export const useCustomer = () => useContext(MyContextCustomer);

export const useDispatch = () => useContext(MyContextDispatch);
