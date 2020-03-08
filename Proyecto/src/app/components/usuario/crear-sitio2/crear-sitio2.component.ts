import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

@Component({
  selector: 'app-crear-sitio2',
  templateUrl: './crear-sitio2.component.html',
  styleUrls: ['./crear-sitio2.component.css']
})
export class CrearSitio2Component implements OnInit {

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
}
