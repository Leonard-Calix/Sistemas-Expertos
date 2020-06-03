import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor( private http: HttpClient ) { }

  link:string = 'https://blogerweb.herokuapp.com/categoria';

  obtenerCategorias(){
    return this.http.get(`${this.link}`);
  }

  guardarCategorias(categoria){
    return this.http.post(`${this.link}`, categoria);
  }

  eliminarCategoria(id){
    return this.http.delete(`${this.link}/${id}`);
  }
}
