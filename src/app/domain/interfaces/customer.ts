export interface Customer{
  id:string;
  nombre:string;
  apellido:string;
  identificacion:string;
  telefono:string;
  telefonoOtros:string;
  direccion:string;
  fechaNacimiento:string;
  fechaAfiliacion:string;
  sexo:string;
  imagen:string;
  resenaPersonal:string;
  intereses:string;
}

export interface Interes{
  id:number;
  descripcion:string;
  valor:string;
}

