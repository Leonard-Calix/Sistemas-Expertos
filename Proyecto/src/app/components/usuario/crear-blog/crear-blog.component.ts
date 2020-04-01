import { Component, OnInit } from '@angular/core';
import { CargaImagenesService } from '@services/carga-imagenes.service';
import { Router } from '@angular/router';
import { BlogService } from '@services/blog.service';
import { CategoriaService } from '@services/categoria.service';

@Component({
  selector: 'app-crear-blog',
  templateUrl: './crear-blog.component.html',
  styleUrls: ['./crear-blog.component.css']
})
export class CrearBlogComponent implements OnInit {

  galeria:boolean = false;
  shorcouts:boolean = false;
  archivo: File;
  categorias: any;
  usuarioAutenticado:String = '5e67f7a2a85d65168874c68e';

  blog:any = {
    nombre: null,
    comentario: 'true',
    categorias: '0',
    urlImagen: null,
    usuario: this.usuarioAutenticado
  }


  constructor( private _cargaImagenes: CargaImagenesService, private serviceCategorias: CategoriaService, private router: Router, private blogServices: BlogService  ) { }

  ngOnInit(): void {

    this.obtenerCategorias();

  }

  modalGaleria(){
    this.shorcouts = false;
    this.galeria = true;
  }

  modalShorcouts(){
    this.galeria = false;
    this.shorcouts = true;
  }

  subirImagen(e){

    this.archivo = e.target.files;
    const formData = new FormData(); 

    formData.append('archivo', this.archivo[0], this.archivo[0].name); 

    this._cargaImagenes.cargarImagenes(formData).subscribe((res :any) => {
      console.log(res);
      this.blog.urlImagen = res.UrlImagen;
    });

    console.log(this.blog);

  }

  guardarBlog(){
    console.log(this.blog);

    this.blogServices.guardarBlog(this.blog).subscribe((data:any)=>{
      console.log(data);

      if(data.id){
        this.router.navigate(['/index/crearBlogShourcouts', data.id, 'completar' ]);
      }
    });

  }

  obtenerCategorias(){
    this.serviceCategorias.obtenerCategorias().subscribe((data:any) => {
      this.categorias = data;
    });
  }

}