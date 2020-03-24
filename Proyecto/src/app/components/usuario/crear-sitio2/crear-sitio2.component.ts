import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { SitioService } from "@services/sitio.service";
import { ActivatedRoute, Params } from '@angular/router';
import { CargaImagenesService } from '@services/carga-imagenes.service';

@Component({
  selector: 'app-crear-sitio2',
  templateUrl: './crear-sitio2.component.html',
  styleUrls: ['./crear-sitio2.component.css']
})
export class CrearSitio2Component implements OnInit {

  public Editor = ClassicEditor;
  imagenes:any[];

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
      etuqueta: '{"tipo":"galeria","id":"5e743527beb9b00b04e8616d"}'  
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
    }
    
  ];
 
 

  public model = {
    //editorData: '<p>{"tipo":"imagen","id":"5e743527beb9b00b04e8616d"}</p>'
    editorData: '<p> </p>'

  };

  sitio: string ;
  
  galeria: boolean = false;
  shorcouts: boolean = false;

  constructor(private servicio: SitioService, private servicioImagenes: CargaImagenesService, private ac: ActivatedRoute) { 
    this.sitio = this.ac.snapshot.paramMap.get("id");

    console.log( this.coleccion );
    
   }

  ngOnInit(): void {
    this.obtenerUno();
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

  obtenerUno() {
    this.servicio.ontenerUnSitio(this.sitio).subscribe((data: any) => {
      console.log(data);
    });
  }

  obtenerImagenes(){
    this.servicioImagenes.getImagenes().subscribe((data:any) =>{
      this.imagenes = data;
    });
  }

  agregarShorcouts(indice){

    if(this.model.editorData.length < 7 ){

      let etiqueta = this.coleccion[indice].etuqueta;
      this.model.editorData = `<p>${etiqueta}</p>`;

    }else{

      let actual = this.model.editorData.substring(0, this.model.editorData.length - 4);
      let etiqueta = this.coleccion[indice].etuqueta;
      this.model.editorData = `${actual}${etiqueta}</p>`;
    }
    
    console.log(this.model.editorData);
  }

  guardarShorcouts(){

    


  }


}

