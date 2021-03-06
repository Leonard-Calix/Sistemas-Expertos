import { Component, OnInit, Input } from '@angular/core';
import { CargaImagenesService } from '@services/carga-imagenes.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  @Input() galeria:any[];
  imagenes:any[] = [];

  constructor(  private servicioImagenes: CargaImagenesService ) { }

  ngOnInit(): void {


    //console.log( this.galeria );

    this.obtenerImagenes();

  }

  obtenerImagenes(){

    for (let i = 0; i < this.galeria.length; i++) {
      this.servicioImagenes.obtenerImagen(this.galeria[i]).subscribe((imagen:any) => {
        console.log(imagen);
        //temp.push(imagen[0]);
        this.imagenes.push(imagen);
        //console.log(this.imagenes);
      });
    };
  }
  

}
