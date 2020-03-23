import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FileItem } from "../modelo/file-item";
import { CargaImagenesService } from "@services/carga-imagenes.service";


@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {

  imagenes:any[];

  constructor(private _cargaImagenes: CargaImagenesService) {
    
   }

  ngOnInit(): void {

    this.obtenerImagenes();
  }

  obtenerImagenes(){
    this._cargaImagenes.getImagenes().subscribe((data: any) => {
      this.imagenes = data;
      console.log(data)
    });
  }

  



}
