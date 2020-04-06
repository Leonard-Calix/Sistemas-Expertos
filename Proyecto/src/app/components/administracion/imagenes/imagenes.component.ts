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

    this.obtenerImagenes();

    setTimeout(() => {
      this.loading = false;
    }, 1500);


  }

  obtenerImagenes() {
      this._cargaImagenes.getImagenes().subscribe((data: any) => {
        this.imagenes = data;
        console.log(data)
      });
  }






}
