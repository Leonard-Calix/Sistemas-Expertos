import { Component, OnInit, Input, Sanitizer } from '@angular/core';
import { CargaImagenesService } from '@services/carga-imagenes.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-enlace',
  templateUrl: './enlace.component.html',
  styleUrls: ['./enlace.component.css']
})
export class EnlaceComponent implements OnInit {

  @Input() enlace:any;
  archivo:any;
  url: any;
  
  constructor( private servicio: CargaImagenesService, private sanitizer: DomSanitizer ) {

   }

  ngOnInit(): void {

    console.log('Informacion enlace : ', this.enlace );
    this.obtenerArchivo();


  }

  obtenerArchivo(){
    this.servicio.obtenerImagen(this.enlace.id).subscribe((data:any) => {
      this.archivo = data;
      console.log('Archivo : ',  this.archivo);
      this.url = this.sanitizer.bypassSecurityTrustUrl(`https://blogerweb.herokuapp.com/archivos/${data.nombre}`);

    });
  }

}
