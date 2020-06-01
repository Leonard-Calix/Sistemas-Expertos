import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BlogService } from '@services/blog.service';
import { CargaImagenesService } from '@services/carga-imagenes.service';
import swal from 'sweetalert';


@Component({
  selector: 'app-crear-blog2',
  templateUrl: './crear-blog2.component.html',
  styleUrls: ['./crear-blog2.component.css']
})
export class CrearBlog2Component implements OnInit {

  post = {
    titulo: ' ',
    imagen: '',
    posts: '',
    blog: ''
  };

  coleccion = [
    {
      nombre: 'Imagen',
      etuqueta: '{"tipo":"imagen","id":"5e743527beb9b00b04e8616d"}'
    },
    {
      nombre: 'Galeria',
      etuqueta: '{"tipo":"galeria","imagenes":["5e743527beb9b00b04e8616d", "5e729ca392c34821805f3053"]}'
    },
    {
      nombre: 'Enlaces de descarga de archivos',
      etuqueta: '{"tipo":"enlace","id":"5e743527beb9b00b04e8616d","titulo":"Descargar archivo" }'
    },
    {
      nombre: 'Login',
      etuqueta: '{"tipo":"login","id":"5e743527beb9b00b04e8616d"}'
    },
    {
      nombre: 'Post/Entrada',
      etuqueta: '{"tipo":"entrada","id":"5e743527beb9b00b04e8616d"}'
    },
    {
      nombre: 'Menú',
      etuqueta: '{"tipo":"menu","id":"5e743527beb9b00b04e8616d"}'
    },
    {
      nombre: 'Breadcrumb',
      etuqueta: '{"tipo":"imagen","id":"5e743527beb9b00b04e8616d"}'
    },
    {
      nombre: 'Headers',
      etuqueta: '{"tipo":"header","id":"5e743527beb9b00b04e8616d"}'
    }

  ];

  idBlog: string;
  accion: string;
  imagenes: any;
  cantidadImagenes:number;
  informacion: any = [];
  info:any = [];
  inicio:number;
  
  public Editor = ClassicEditor;

  public model = {
    editorData: '<p> </p>'
  };


  galeria: boolean = false;
  shorcouts: boolean = false;

  constructor(private ac: ActivatedRoute, 
              private serviceBlog: BlogService, private router: Router, private servicioImagenes: CargaImagenesService) {
    this.idBlog = this.ac.snapshot.paramMap.get("id");
    this.accion = this.ac.snapshot.paramMap.get("accion");

    //console.log( this.idBlog );

  }

  ngOnInit(): void {

    if (this.accion == 'pre-visualizar') {

    }

    this.inicio = 0;
    this.obtenerImagenes();

  }

  modalGaleria() {
    this.shorcouts = false;
    this.galeria = true;
  }

  modalShorcouts() {
    this.galeria = false;
    this.shorcouts = true;
  }

  public ready(editor) {
    editor.ui.getEditableElement().parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.getEditableElement()
    );
  }

  public editor({ editor }: ChangeEvent) {
    const data = editor.getData();

    //console.log(data);
  }

  agregarShorcouts(indice) {

    if (this.model.editorData.length < 7) {

      let etiqueta = this.coleccion[indice].etuqueta;
      this.model.editorData = `<p>${etiqueta}</p>`;

    } else {

      let actual = this.model.editorData.substring(0, this.model.editorData.length - 4);
      let etiqueta = this.coleccion[indice].etuqueta;
      this.model.editorData = `${actual}${etiqueta}</p>`;
    }

    //console.log(this.model.editorData);
  }


  guardar() {


    //console.log( 'Contenido:  ' ,this.obtenerImagenPosts(this.model.editorData));

    this.obtenerImagenPosts(this.model.editorData);

    let imagen:any = JSON.parse(this.info[0]);

    console.log(this.info);

    this.post.imagen = imagen.id;
    this.post.posts = this.info[1];
    this.post.blog = this.idBlog;

    console.log( 'Contenido: a enviar ' ,this.post);

    
    this.serviceBlog.guardarShorcustBlog(this.post).subscribe((data:any) => {
      if (data) {
        this.router.navigate(['/index/blogsUsuario']);
        //console.log(data);
      }
    });;


  }

  guardarCambios() {
    let parrafos = this.model.editorData.split('</p>');
    let imagen;
    //console.log(this.model.editorData);

   

    for (var i = 0; i < parrafos.length; i++) {
      if (parrafos[i] != "") {
        this.informacion.push(parrafos[i].substr(3, parrafos[i].length));
      }
    }
    imagen = JSON.parse(this.informacion[0]);
    this.informacion.splice(0, 1);


    this.post.posts = this.informacion;
    this.post.blog = this.idBlog;
    this.post.imagen = imagen.id;
    this.post.blog = this.idBlog;
    

    //console.log(post);

    this.serviceBlog.guardarShorcustBlog(this.post).subscribe((data:any) => {
      console.log('respuesta');
      //console.log(data);
      
      swal('Importante',`Nuevo post agregado con exito`, 'success');


      if(data){
        this.router.navigate(['/index/blogsUsuario']);
      }
    });

  }

  obtenerImagenes() {
    this.servicioImagenes.obtenerImagenes(this.inicio).subscribe((data: any) => {
      this.imagenes = data.imagenes;
      this.cantidadImagenes = data.cantidad; 
    });
  }

  obtenerImagenPosts(data){

    var parrafo = data.split('</p>');

    for (var i = 0; i < parrafo.length; i++) {
      if (parrafo[i] != "") {
        this.info.push( parrafo[i].substr(3, parrafo[i].length));
      }
    }
  }

  cambiar(valor : number){
    let desde = this.inicio + valor;

    if (desde >= this.cantidadImagenes) {
      return;
    }

    if (desde < 0) {
      return;
    }
 
    this.inicio += valor;
    this.obtenerImagenes();

  }
  
  
}
