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
 
 

  public model = {
    editorData: '<p>{"tipo":"imagen","url":"../../../assets/img/login.jpg"}</p>'
  };

  sitio: string ;
  
  galeria: boolean = false;
  shorcouts: boolean = false;

  constructor(private servicio: SitioService, private servicioImagenes: CargaImagenesService, private ac: ActivatedRoute) { 
    this.sitio = this.ac.snapshot.paramMap.get("id");

    console.log( this.sitio );
    
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
}

