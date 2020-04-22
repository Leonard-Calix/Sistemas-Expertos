import { Component, OnInit } from '@angular/core';
import { CargaImagenesService } from "@services/carga-imagenes.service";





@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {

  imagenes: any[];
  loading:boolean;

  constructor(private _cargaImagenes: CargaImagenesService) {

    this.loading = true;

  }

  ngOnInit(): void {


    setTimeout(() => {

    this.loading = false;



    }, 1500);


    this.obtenerImagenes();


  }

  obtenerImagenes() {
      this._cargaImagenes.getImagenes().subscribe((data: any) => {
        this.imagenes = data;
        console.log(data)
      });
  }






}
