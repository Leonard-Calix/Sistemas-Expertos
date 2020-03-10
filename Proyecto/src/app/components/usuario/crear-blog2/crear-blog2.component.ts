import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

@Component({
  selector: 'app-crear-blog2',
  templateUrl: './crear-blog2.component.html',
  styleUrls: ['./crear-blog2.component.css']
})
export class CrearBlog2Component implements OnInit {

  public Editor = ClassicEditor;

  public model = {
    editorData: ''
  };

  galeria:boolean = false;
  shorcouts:boolean = false;

  constructor() { }

  ngOnInit(): void {
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
}s

public editor( { editor }: ChangeEvent ) {
    const data = editor.getData();

    console.log( data );
}

}
