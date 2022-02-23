import {  HttpFactory } from "../../http/HttpFactory"
import * as response from "../../interfaces/customer";
import { Response } from "../../interfaces/response";

export class CustomerRepository {

  private _http = HttpFactory.service("ProjectService");
  private static _instance: CustomerRepository;

  public static get service(): CustomerRepository {
    if (!CustomerRepository._instance) {
      CustomerRepository._instance = new CustomerRepository();
    }

    return CustomerRepository._instance;
  }

  public async getCustomers() {
    return (
      await this._http.get<Response<response.Customer>>(
        `api/cliente`
      )
    );
  }

  public async getInteres() {
    return (
      await this._http.get<Response<any>>(
        `api/cliente/interes`
      )
    ).data;
  }
  public async getCustomerId(id:string) {
    return (
      await this._http.get<Response<any>>(
        `api/cliente/${id}/id`
      )
    ).data;
  }
}
