import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor( private servicio:HttpClient ) { }

  obtenerBlogUsuario(usuario: String){
    return this.servicio.get('http://localhost:4300/blog/buscar/'+usuario);
  }

  guardarBlog(blog){
    return this.servicio.post('http://localhost:4300/blog/agregar', blog);
  }

  obtenerBlog(blog){
    return this.servicio.get(`http://localhost:4300/blog/obtener/${blog}`);
  }

  obtenerBlogs(){
    return this.servicio.get(`http://localhost:4300/blogs`);
  }

  obtenerShorcustBlog(blog){
    return this.servicio.get(`http://localhost:4300/shortcuts/blog/obtener/${blog}`);
  }

  guardarShorcustBlog(shortcuts){
    return this.servicio.post(`http://localhost:4300/shortcuts/blog/agregar`, shortcuts);
  }

  editarShorcustBlog(blog){
    return this.servicio.post(`http://localhost:4300/shortcuts/blog/editar`, blog);
  }
  
}
