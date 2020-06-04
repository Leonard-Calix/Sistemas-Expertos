import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  url = 'https://blogerweb.herokuapp.com/comentario';

  constructor( private http: HttpClient ) { }


  agregarComentarios(comentario){
    return this.http.post(`${this.url}`, comentario);
  }

  obtenerComentarios(desde){
    return this.http.get(`${this.url}?inicio=${desde}`);
  }

  obtenerComentariosBlog(blog){
    return this.http.get(`${this.url}/${blog}`);
  }

  eliminarComentario(id){
    return this.http.delete(`${this.url}/${id}`);
  }

  realizarBusqueda(parametro){
    return this.http.get(`https://blogerweb.herokuapp.com/busqueda/${parametro}`);
  }
}
