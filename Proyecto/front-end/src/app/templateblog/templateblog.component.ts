import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '@services/blog.service';
import { UsuarioService } from '@services/usuario.service';
import { ComentariosService } from '@services/comentarios.service';
import { CargaImagenesService } from '@services/carga-imagenes.service';

@Component({
  selector: 'app-templateblog',
  templateUrl: './templateblog.component.html',
  styleUrls: ['./templateblog.component.css']
})
export class TemplateblogComponent implements OnInit {

  idBlog: String;
  blog:any;
  contenido: String;
  informacion: any = [];
  usuarioAutenticado = '5e8413332644382b2ce9d1cc';
  informacionUsuario: any;
  comentarios: any;
  posts: any = [];
  header:any;

  comentario = {
    descripcion: '',
    blog: '',
    usuario: ''
  }

  post = {
    titulo: '',
    imagen: '',
    posts: '',
    idBlog: this.idBlog
  }

  constructor(private ac: ActivatedRoute, private servuceBlog: BlogService, private servicesUsuario: UsuarioService, private servicioComentario: ComentariosService, private imagenService: CargaImagenesService) {
    this.idBlog = this.ac.snapshot.paramMap.get("id");
    this.contenido = this.ac.snapshot.paramMap.get("contenido");

  }

  ngOnInit(): void {

    this.obtenerBlog();
    /*
        if (this.contenido == 'visualizar') {
          this.obtenerPost();
        }
    
        if (this.contenido != 'visualizar') {
          this.obtenerPost();
        }
    */
    this.obtenerPost();
    this.obtenerUsuario();

  }

  obtenerBlog() {
    this.servuceBlog.obtenerBlog(this.idBlog).subscribe((data: any) => {
      this.blog = data[0];
      //console.log(this.blog)
      this.obtenerComentariosBlog(this.blog.nombre);

      this.obtenerImagenHeader(data[0].urlImagen);
    });
  }

  obtenerUsuario() {
    this.servicesUsuario.obtenerUsuario(this.usuarioAutenticado).subscribe((data: any) => {
      this.informacionUsuario = data[0];
      //console.log(this.informacionUsuario);
    });
  }

  procesarInformacion() {
    let parrafos = this.contenido.split('</p>');

    for (var i = 0; i < parrafos.length; i++) {
      if (parrafos[i] != "") {

        this.informacion.push(parrafos[i].substr(3, parrafos[i].length));
      }
    }
    console.log(this.informacion);
  }

  publicar() {
    this.comentario.blog = this.blog.nombre;
    this.comentario.usuario = this.informacionUsuario.nombre;
    //console.log(this.comentario);

    this.servicioComentario.agregarComentarios(this.comentario).subscribe((data: any) => {

      if (data) {
        this.comentarios.push(this.comentario);
        //console.log(data);
      }

    });
  }

  obtenerComentariosBlog(blog) {
    this.servicioComentario.obtenerComentariosBlog(blog).subscribe((data: any) => {
      this.comentarios = data;
      //console.log(data);
    });
  }

  obtenerPost() {

    this.servuceBlog.obtenerShorcustBlog(this.idBlog).subscribe((data: any) => {

      if (data.length != 0) {
        this.posts = data;
      }

      if (this.contenido != 'visualizar') {
        this.procesarData();
      }

      //console.log(data);

    });
  }

  procesarData() {

    let parrafos = this.contenido.split('</p>');
    let imagen;

    for (var i = 0; i < parrafos.length; i++) {
      if (parrafos[i] != "") {
        this.informacion.push(parrafos[i].substr(3, parrafos[i].length));
      }
    }

    imagen = JSON.parse(this.informacion[0]);
    this.informacion.splice(0, 1);

    this.obtenerImagen(imagen.id);

    this.post.posts = this.informacion;
    this.post.idBlog = this.idBlog;
    this.post.titulo = this.ac.snapshot.paramMap.get("titulo");

    this.posts.push(this.post);

    console.log(this.posts);

  }

  obtenerImagen(id) {
    this.imagenService.getImagen(id).subscribe((data: any) => {
      this.post.imagen = data[0].url;
    });
  }

  obtenerImagenHeader(id) {
    this.imagenService.getImagen(id).subscribe((data: any) => {
      this.header = data[0].url;
      //console.log(data);
    });
  }


}
