import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { SitioService } from "@services/sitio.service";
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-crear-sitio2',
  templateUrl: './crear-sitio2.component.html',
  styleUrls: ['./crear-sitio2.component.css']
})
export class CrearSitio2Component implements OnInit {

  public Editor = ClassicEditor;
  contenido: string[] = [];
  pruebas: any[] = [];
  data: any;

  public model = {
    editorData: '<p>{"tipo":"enlace","url":"assets/doc.xls"} {"tipo":"imagen","url":"assets/doc.xls"}</p>'
  };

  sitio: string = '5e69c9ec851701175435090e';



  galeria: boolean = false;
  shorcouts: boolean = false;

  constructor(private servicio: SitioService, private ac: ActivatedRoute) { }

  ngOnInit(): void {
    this.obtenerUno();

  }

  modalGaleria() {
    this.shorcouts = false;
    this.galeria = true;
  }

  modalShorcouts() {
    this.galeria = false;
    this.shorcouts = true;
  }

  obtenerUno() {
    this.servicio.ontenerUnSitio(this.sitio).subscribe((data: any) => {
      console.log(data);
    });
  }

  guargar() {
    this.obtenerShorcouts();
  }

  obtenerShorcouts() {

    this.contenido = this.model.editorData.split(' ');

    console.log( this.model.editorData );


    for (var i = 0; i < this.contenido.length; i++) {
      this.contenido[i] = this.contenido[i].substr(3);
      if (this.contenido[i] == '') {
        this.contenido.splice(i, 1);
      }
    }

    //console.log( JSON.parse( this.contenido ) );
    console.log( this.contenido  );


    for (let i = 0; i < this.contenido.length; i++) {
        this.data = JSON.parse( this.contenido[i] );
        this.pruebas[i] = this.data;
        this.data = null;
    }


    //console.log(this.pruebas);

  }
}

//var str = "Apples are round, and apples are juicy."; 
//var splitted = str.split(" ", 3); 
//console.log(splitted)

//{_tipo: "image",id: "2323"},

//{_tipo: "image",id: "2323"},

//{_tipo: "image",id: "2323"},