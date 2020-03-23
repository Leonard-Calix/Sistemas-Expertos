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

  obtenerSitioUsuario(usuario: String){
    return this.peticion.get('http://localhost:4300/sitio/buscar/'+usuario);
  }

  guardarSitio(sitio){
    return this.peticion.post('http://localhost:4300/sitio/agregar', sitio);
  }

}
