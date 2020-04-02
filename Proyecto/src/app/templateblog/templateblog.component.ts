import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '@services/blog.service';
import { UsuarioService } from '@services/usuario.service';
import { ComentariosService } from '@services/comentarios.service';

@Component({
  selector: 'app-templateblog',
  templateUrl: './templateblog.component.html',
  styleUrls: ['./templateblog.component.css']
})
export class TemplateblogComponent implements OnInit {

  idBlog: String;
  blog: any;
  contenido: String;
  informacion:any= []; 
  usuarioAutenticado = '5e8413332644382b2ce9d1cc';
  informacionUsuario:any;
  comentarios:any;

  comentario = {
    descripcion: '',
    blog: '', 
    usuario: ''
  }

  constructor(private ac: ActivatedRoute, private servuceBlog: BlogService, private servicesUsuario: UsuarioService, private servicioComentario: ComentariosService) {
    this.idBlog = this.ac.snapshot.paramMap.get("id");
    this.contenido = this.ac.snapshot.paramMap.get("contenido");

  }

  ngOnInit(): void {

    this.obtenerBlog();
   
    if (this.contenido == 'visualizar') {
      this.obtenerShorcuts();
    }

    if(this.contenido!= 'visualizar'){
      this.procesarInformacion();
    }

    this.obtenerUsuario();

  }

  obtenerBlog() {
    this.servuceBlog.obtenerBlog(this.idBlog).subscribe((data: any) => {
      this.blog = data[0];
      console.log(this.blog)
      this.obtenerComentariosBlog(this.blog.nombre);

    });
  }

  obtenerUsuario(){
    this.servicesUsuario.obtenerUsuario(this.usuarioAutenticado).subscribe( (data:any) => {
      this.informacionUsuario = data[0];
      console.log(this.informacionUsuario);
    });
  }

  procesarInformacion() {
    let parrafos = this.contenido.split('</p>');

    for (var i = 0; i < parrafos.length; i++) {
      if (parrafos[i] != "") {

        this.informacion.push( parrafos[i].substr(3, parrafos[i].length)  );
      }
    }
    console.log(this.informacion);
  }

  publicar(){
    this.comentario.blog = this.blog.nombre;
    this.comentario.usuario = this.informacionUsuario.nombre; 
    console.log(this.comentario);

    this.servicioComentario.agregarComentarios(this.comentario).subscribe((data:any) =>{
      
      if(data){
        this.comentarios.push(this.comentario);
        console.log(data);
      }

    });
  }

  obtenerComentariosBlog(blog){
    this.servicioComentario.obtenerComentariosBlog(blog).subscribe( (data:any) => {
      this.comentarios = data;
      console.log(data);
    } );
  }

  obtenerShorcuts(){
   this.servuceBlog.obtenerShorcustBlog(this.idBlog).subscribe((data:any) => {
     this.contenido = data[0].shortcut;

     this.procesarInformacion();
   });
  }

  
}
