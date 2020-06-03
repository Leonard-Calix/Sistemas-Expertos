import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SitioService {

  urlServicios: any = 'https://blogerweb.herokuapp.com';

  constructor( private peticion: HttpClient  ) { }

  ontenerUnSitio(sitio: String){
    return this.peticion.get(`${ this.urlServicios }/sitio/${ sitio }`);
  }

  obtenerSitios(){
    return this.peticion.get(`${ this.urlServicios }/sitio`);
  }

  obtenerSitioUsuario(usuario: String){
    return this.peticion.get(`${ this.urlServicios }/sitio/usuario/${ usuario } `);
  }

  guardarSitio(sitio){
    return this.peticion.post(`${ this.urlServicios }/sitio`, sitio);
  }

  guardarShorcouts(sitio){
    return this.peticion.post(`${ this.urlServicios }/shortcuts/sitio`, sitio);
  }

  obtenerShorcouts(idSitio){
    return this.peticion.get(`${ this.urlServicios }/shortcuts/sitio/${ idSitio }`);
  }

}
