import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BlogService } from '@services/blog.service';


@Component({
  selector: 'app-crear-blog2',
  templateUrl: './crear-blog2.component.html',
  styleUrls: ['./crear-blog2.component.css']
})
export class CrearBlog2Component implements OnInit {

  idBlog:string;
  accion:string;

  public Editor = ClassicEditor;

  public model = {
    editorData: '<p> </p>'
  };

  blogBase = {
    shortcut: this.model.editorData,
    blog : this.idBlog 
  }

  galeria:boolean = false;
  shorcouts:boolean = false;

  constructor(private ac: ActivatedRoute, private serviceBlog: BlogService, private router: Router) {
    this.idBlog = this.ac.snapshot.paramMap.get("id");
    this.accion = this.ac.snapshot.paramMap.get("accion");

    //console.log( this.idBlog );

   }

  ngOnInit(): void {

    if( this.accion == 'editar'){
      console.log("editar");
      this.obtenerShorcoutBlog();
    }

  }

  modalGaleria(){
    this.shorcouts = false;
    this.galeria = true;
  }

  modalShorcouts(){
    this.galeria = false;
    this.shorcouts = true;
  }

  public ready( editor ) {
    editor.ui.getEditableElement().parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
    );
}

public editor( { editor }: ChangeEvent ) {
    const data = editor.getData();

    console.log( data );
}

prueba(){
  console.log(this.model.editorData);
}

guardar(){

  this.blogBase.shortcut = this.model.editorData;
  this.blogBase.blog = this.idBlog;

  console.log(this.blogBase);

  this.serviceBlog.guardarShorcustBlog(this.blogBase).subscribe( (data:any) => {

    if(data){
      this.router.navigate(['/index/blogsUsuario']);
    }
    console.log(data);
  });
  
}

guardarCambios(){

  this.blogBase.shortcut = this.model.editorData;
  this.blogBase.blog = this.idBlog;

  this.serviceBlog.editarShorcustBlog(this.blogBase).subscribe((data:any) => {
    if(data.ok){
      this.router.navigate(['/index/blogsUsuario']);
    }
  });
}

obtenerShorcoutBlog(){
  this.serviceBlog.obtenerShorcustBlog(this.idBlog).subscribe( (data:any) =>{
    this.model.editorData = data[0].shortcut;
    console.log(data);
  });
}

}
