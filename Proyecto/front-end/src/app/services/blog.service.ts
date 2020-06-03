import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor( private servicio:HttpClient ) { }

  urlServivicios: string = 'https://blogerweb.herokuapp.com';
  


  obtenerBlogUsuario(usuario: String){
    return this.servicio.get(`${ this.urlServivicios }/blog/usuario/${ usuario }`);
  }

  guardarBlog(blog){
    return this.servicio.post(`${ this.urlServivicios }/blog`, blog);
  }

  obtenerBlog(blog){
    return this.servicio.get(`${ this.urlServivicios }/blog/${blog}`);
  }

  obtenerBlogs(){
    return this.servicio.get(`${ this.urlServivicios }/blog`);
  }

  obtenerShorcustBlog(blog){
    return this.servicio.get(`${ this.urlServivicios }/shortcuts/blog/${blog}`);
  }

  guardarShorcustBlog(shortcuts){
    return this.servicio.post(`${ this.urlServivicios }/shortcuts/blog`, shortcuts);
  }

  editarShorcustBlog(blog){
    return this.servicio.put(`${ this.urlServivicios }/shortcuts/blog`, blog);
  }

  obtenerBlogCategoria(categoria){
    return this.servicio.get(`${ this.urlServivicios }/blog/categoria/${categoria}`);
  }
  
}
