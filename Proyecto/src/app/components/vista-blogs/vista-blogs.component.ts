import { Component, OnInit } from '@angular/core';
import { BlogService } from '@services/blog.service';

@Component({
  selector: 'app-vista-blogs',
  templateUrl: './vista-blogs.component.html',
  styleUrls: ['./vista-blogs.component.css']
})
export class VistaBlogsComponent implements OnInit {
  blogs:any = [];

  constructor( private servicioBlogs :BlogService ) { }

  ngOnInit(): void {

    this.obtenerBlog();

  }

  obtenerBlog(){
    this.servicioBlogs.obtenerBlogs().subscribe( (data:any) => {
      this.blogs = data;
      console.log(data);
    });
  }


}
