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
  cantidadRegistros;

  constructor(private _cargaImagenes: CargaImagenesService) {

    this.loading = false;

  }

  ngOnInit(): void {


    setTimeout(() => {

    this.loading = false;



    }, 1500);

    this.desde = 0;
    this.obtenerImagenes();
    this.cantidadRegistros = this.imagenes.length;


  }

  siguiente(){
    this.desde += 3;

   
    this.obtenerImagenes();
    

  }

  anterior(){
    this.desde -= 3;

    this.obtenerImagenes();
    

  }


  obtenerImagenes() {
    this.imagenes = []
      this._cargaImagenes.obtenerImagenes(this.desde).subscribe((data: any) => {
        this.imagenes = data;
        console.log(data)
      });
  }

  detalle(imagen){
    this.imagenSelecionada = imagen
  }




}
