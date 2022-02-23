export interface Action{
   type:string;
   payload:any;
}

export interface Customer {
  customers:Data[]
  customer:Data;
}

export interface Data {
  id:string;
  nombre:string;
  apellido:string;
  identificacion:string;
  telefonoOtros:string;
  telefono:string;
  direccion:string;
  intereses:string;
  fechaNacimiento: string,
  fechaAfiliacion: string,
  imagen: string,
  resenaPersonal:string;
  sexo:string;
}