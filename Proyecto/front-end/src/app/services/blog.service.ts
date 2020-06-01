import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor( private servicio:HttpClient ) { }

  obtenerBlogUsuario(usuario: String){
    return this.servicio.get('http://192.168.0.16:4300/blog/usuario/'+usuario);
  }

  guardarBlog(blog){
    return this.servicio.post('http://192.168.0.16:4300/blog', blog);
  }

  obtenerBlog(blog){
    return this.servicio.get(`http://192.168.0.16:4300/blog/${blog}`);
  }

  obtenerBlogs(){
    return this.servicio.get(`http://192.168.0.16:4300/blog`);
  }

  obtenerShorcustBlog(blog){
    return this.servicio.get(`http://192.168.0.16:4300/shortcuts/blog/${blog}`);
  }

  guardarShorcustBlog(shortcuts){
    return this.servicio.post(`http://192.168.0.16:4300/shortcuts/blog`, shortcuts);
  }

  editarShorcustBlog(blog){
    return this.servicio.put(`http://192.168.0.16:4300/shortcuts/blog`, blog);
  }

  obtenerBlogCategoria(categoria){
    return this.servicio.get(`http://192.168.0.16:4300/blog/categoria/${categoria}`);
  }
  
}
