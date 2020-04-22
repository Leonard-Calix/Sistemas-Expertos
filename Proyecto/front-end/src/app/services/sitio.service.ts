import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SitioService {

  constructor( private peticion: HttpClient  ) { }

  ontenerUnSitio(sitio: String){
    return this.peticion.get('http://localhost:4300/sitio/obtener/'+sitio);
  }

  obtenerSitios(){
    return this.peticion.get('http://localhost:4300/sitios');
  }

  obtenerSitioUsuario(usuario: String){
    return this.peticion.get('http://localhost:4300/sitio/buscar/'+usuario);
  }

  guardarSitio(sitio){
    return this.peticion.post('http://localhost:4300/sitio/agregar', sitio);
  }

  guardarShorcouts(sitio){
    return this.peticion.post('http://localhost:4300/shortcuts/sitio/agregar', sitio);
  }

  obtenerShorcouts(idSitio){
    return this.peticion.get('http://localhost:4300/shortcuts/sitio/obtener/'+idSitio);
  }

}
