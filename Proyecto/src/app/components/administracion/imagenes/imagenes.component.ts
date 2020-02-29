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

  archivo:FileItem[] = [];

  albunes = ["Facebook", "Instagram", "Spotify", "Youtube", "Tik-tok"];


  constructor(private http: HttpClient, private _cargaImagenes: CargaImagenesService) {
    this.http.get('http://localhost:4300/usuario').subscribe(datos => console.log(datos))
    //this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(datos => console.log(datos))
   }

  ngOnInit(): void {
  }


  



}
