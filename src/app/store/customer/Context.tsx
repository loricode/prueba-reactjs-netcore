import { createContext, useReducer, ReactNode } from "react";
import { Customer, Action } from "./customer.interface";
import { customerReducer, initialState } from "./reducer";


type Props = { children: ReactNode };

type ContextDispatch = (action: Action) => void;

type Context = { data: Customer };

export const MyContextCustomer = createContext<Context>({
  data:{customers:[], customer:{ 
  id:"",
  nombre:"",
  apellido:"",
  identificacion:"",
  telefono:"",
  direccion:"",
  intereses:"",
  fechaAfiliacion:"",
  fechaNacimiento:"",
  imagen:"",
  telefonoOtros:"",
  resenaPersonal:"",
  sexo:"",}}
});

export const MyContextDispatch = createContext<ContextDispatch>(() => {});

export const CustomerContext = ({ children }: Props) => {
  const [data, dispatch] = useReducer(customerReducer, initialState);

  return (
    <MyContextDispatch.Provider value={dispatch}>
      <MyContextCustomer.Provider value={{ data }}>
        {children}
      </MyContextCustomer.Provider>
    </MyContextDispatch.Provider>
  );
};
