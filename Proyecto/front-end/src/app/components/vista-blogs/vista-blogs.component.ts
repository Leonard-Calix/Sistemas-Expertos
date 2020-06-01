import { Component, OnInit } from '@angular/core';
import { BlogService } from '@services/blog.service';
import { CategoriaService } from '@services/categoria.service';


@Component({
  selector: 'app-vista-blogs',
  templateUrl: './vista-blogs.component.html',
  styleUrls: ['./vista-blogs.component.css']
})
export class VistaBlogsComponent implements OnInit {
  blogs:any [] = [];
  categorias:any = [];

  constructor( private servicioBlogs :BlogService, private ServiceCategoria: CategoriaService, private blogService:BlogService ) { }

  ngOnInit(): void {

    this.obtenerBlog();
    this.obtenerCategorias();
    
  }

  obtenerBlog(){
    this.servicioBlogs.obtenerBlogs().subscribe( (data:any) => {
      this.blogs = data;
      //console.log(data);
    });
  }

  cambiarCategoria(categoria){
    console.log('Categoria seleccionada : ' , categoria);
    this.blogService.obtenerBlogCategoria(categoria).subscribe( (data:any) => {
      this.blogs = data;
      console.log(data);
      
    });
    
  }

  mostrarTodo(){
    this.obtenerBlog();
  }

  obtenerCategorias(){
    this.ServiceCategoria.obtenerCategorias().subscribe((data:any) =>{
      this.categorias = data;
      //console.log(data);
            
    });
  }


}
