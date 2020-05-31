import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SitioService {

  constructor( private peticion: HttpClient  ) { }

  ontenerUnSitio(sitio: String){
    return this.peticion.get('http://192.168.0.16:4300/sitio/'+sitio);
  }

  obtenerSitios(){
    return this.peticion.get('http://192.168.0.16:4300/sitio');
  }

  obtenerSitioUsuario(usuario: String){
    return this.peticion.get('http://192.168.0.16:4300/sitio/usuario/'+usuario);
  }

  guardarSitio(sitio){
    return this.peticion.post('http://192.168.0.16:4300/sitio', sitio);
  }

  guardarShorcouts(sitio){
    return this.peticion.post('http://192.168.0.16:4300/shortcuts/sitio', sitio);
  }

  obtenerShorcouts(idSitio){
    return this.peticion.get('http://192.168.0.16:4300/shortcuts/sitio/'+idSitio);
  }

}
