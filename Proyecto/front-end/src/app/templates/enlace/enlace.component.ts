import { Component, OnInit, Input } from '@angular/core';
import { CargaImagenesService } from '@services/carga-imagenes.service';

@Component({
  selector: 'app-enlace',
  templateUrl: './enlace.component.html',
  styleUrls: ['./enlace.component.css']
})
export class EnlaceComponent implements OnInit {

  @Input() enlace:any;
  archivo:any;

  constructor( private servicio: CargaImagenesService ) {

   }

  ngOnInit(): void {

    console.log( this.enlace.titulo );
    this.obtenerArchivo();

  }

  obtenerArchivo(){
    this.servicio.getImagen(this.enlace.id).subscribe((data:any) => {
      this.archivo = data;
      console.log( data);
      
    });
  }

}
