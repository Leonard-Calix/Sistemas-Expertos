import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  url = 'http://localhost:4300/comentario/';

  constructor( private http: HttpClient ) { }


  agregarComentarios(comentario){
    return this.http.post(`${this.url}agregar`, comentario);
  }

  obtenerComentarios(){
    return this.http.get(`${this.url}obtener`);
  }

  obtenerComentariosBlog(blog){
    return this.http.get(`${this.url}obtener/${blog}`);
  }

  eliminarComentario(id){
    return this.http.delete(`${this.url}eliminar/${id}`);
  }
}
