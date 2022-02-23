import { LIST_CUSTOMER, SAVE_CUSTOMER } from "./action";
import { Action, Customer } from "./customer.interface";

export const initialState: Customer = {
  customers: [],
  customer: {
    id: "",
    nombre: "",
    apellido: "",
    identificacion: "",
    telefono: "",
    telefonoOtros:"",
    direccion: "",
    intereses: "",
    sexo: "",
    fechaAfiliacion:"",
    fechaNacimiento:"",
    imagen:"",
    resenaPersonal:""
  },
};

export const customerReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case LIST_CUSTOMER:
      return {
        customers: [...action.payload],
        customer: { ...state.customer },
      };
    case SAVE_CUSTOMER:
      return {
        customers: [...state.customers],
        customer: { ...action.payload },
      };

    default:
      return state;
  }
};
