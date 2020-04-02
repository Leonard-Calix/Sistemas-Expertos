import { Component, OnInit } from '@angular/core';
import { BlogService } from '@services/blog.service';

@Component({
  selector: 'app-mi-blogs',
  templateUrl: './mi-blogs.component.html',
  styleUrls: ['./mi-blogs.component.css']
})
export class MiBlogsComponent implements OnInit {

  blogs: any[] = [];
  usuarioAuntenticado:string = '5e67f7a2a85d65168874c68e';

  constructor( private servicio: BlogService  ) { }

  ngOnInit(): void {

    this.obtenerBlogs();

  }

  obtenerBlogs(){
    this.servicio.obtenerBlogs().subscribe( (data: any) => {
      this.blogs = data;
      console.log(data);
    });
  }

}
