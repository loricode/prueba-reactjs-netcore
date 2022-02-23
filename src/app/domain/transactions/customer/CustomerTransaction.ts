import {  HttpFactory } from "../../http/HttpFactory"
import * as response from "../../interfaces/customer";
import { Response } from "../../interfaces/response";

export class CustomerTransaction {

  private _http = HttpFactory.service("ProjectService");
  private static _instance: CustomerTransaction;

  public static get service(): CustomerTransaction {
    if (!CustomerTransaction._instance) {
      CustomerTransaction._instance = new CustomerTransaction();
    }

    return CustomerTransaction._instance;
  }

  public async PostCustomers(obj:any) {
    return (
      await this._http.post<Response<response.Customer>>(
        `api/cliente/add`, obj
      )
    );
  }

  public async PutCustomers(obj:any, id:string) {
    return (
      await this._http.put<Response<response.Customer>>(
        `api/cliente/update/${id}`, obj
      )
    );
  }

  public async DeleteCustomers( id:string) {
    return (
      await this._http.delete<Response<response.Customer>>(
        `api/cliente/${id}/delete`
      )
    );
  }
}
