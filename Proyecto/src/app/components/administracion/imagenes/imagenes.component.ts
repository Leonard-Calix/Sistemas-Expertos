import { Component, OnInit } from '@angular/core';
import { CargaImagenesService } from "@services/carga-imagenes.service";





@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {

  imagenes: any[];
  archivos: any[];
  videos: any[];



  constructor(private _cargaImagenes: CargaImagenesService) {

  }

  ngOnInit(): void {

    this.obtenerImagenes();
    this.obtenerArchivos();
    this.obtenerVideo();
  }

  obtenerImagenes() {

    setTimeout(() => {
      this._cargaImagenes.getImagenes().subscribe((data: any) => {
        this.imagenes = data;
        console.log(data)
      });
    }, 4000);


  }

  obtenerArchivos() {

    this._cargaImagenes.getArchivos().subscribe((data: any) => {
      this.archivos = data;
      console.log(data)
    });
  }

  obtenerVideo() {
    this._cargaImagenes.getVideo().subscribe((data: any) => {
      this.videos = data;
      console.log(data)
    });
  }


}
