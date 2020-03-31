import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor( private http: HttpClient ) { }

  link:string = 'http://localhost:4300/categoria/';

  obtenerCategorias(){
    return this.http.get(`${this.link}obtener`);
  }

  guardarCategorias(categoria){
    return this.http.post(`${this.link}agregar`, categoria);
  }
}
