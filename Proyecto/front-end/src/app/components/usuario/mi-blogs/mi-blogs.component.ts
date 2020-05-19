import { Component, OnInit } from '@angular/core';
import { BlogService } from '@services/blog.service';
import { AuthenticationService } from '@services/authentication.service';


@Component({
  selector: 'app-mi-blogs',
  templateUrl: './mi-blogs.component.html',
  styleUrls: ['./mi-blogs.component.css']
})
export class MiBlogsComponent implements OnInit {

  blogs: any[] = [];
  usuarioAuntenticado:string;

  constructor( private servicio: BlogService, private auth: AuthenticationService  ) { }

  ngOnInit(): void {

    this.usuarioAuntenticado = this.auth.userId;

    this.obtenerBlogs();

  }

  obtenerBlogs(){
    this.servicio.obtenerBlogUsuario(this.usuarioAuntenticado).subscribe( (data: any) => {
      this.blogs = data;
      //console.log(data);
    });
  }

}
