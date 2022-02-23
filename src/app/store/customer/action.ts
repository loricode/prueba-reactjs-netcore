export const LIST_CUSTOMER="LIST_CUSTOMER";
export const SAVE_CUSTOMER="SAVE_CUSTOMER";

export const listCustomer = (payload:any) => {
   return { type:LIST_CUSTOMER, payload }
}

export const saveCustomer = (payload:any) => {
   return { type:SAVE_CUSTOMER, payload }
}