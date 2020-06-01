import { Component, OnInit } from '@angular/core';
import { CargaImagenesService } from "@services/carga-imagenes.service";

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {

  imagenes: any[] = [];
  loading:boolean;
  imagenSelecionada :any;
  desde:number;
  cantidadImagenes;
  inicio;

  constructor(private _cargaImagenes: CargaImagenesService) {

    this.loading = false;

  }

  ngOnInit(): void {


    setTimeout(() => {

    this.loading = false;



    }, 1500);

    this.desde = 0;
    this.obtenerImagenes();


  }

  cambiar(valor : number){
    let desde = this.desde + valor;

    if (desde >= this.cantidadImagenes) {
      return;
    }

    if (desde < 0) {
      return;
    }
 
    this.desde += valor;
    this.obtenerImagenes();

  }

  obtenerImagenes() {
    this.imagenes = []
      this._cargaImagenes.obtenerImagenes(this.desde).subscribe((data: any) => {
        this.imagenes = data.imagenes;
        this.cantidadImagenes = data.cantidad;
        console.log(data)
      });
  }

  detalle(imagen){
    this.imagenSelecionada = imagen
  }




}
