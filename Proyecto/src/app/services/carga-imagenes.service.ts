import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class CargaImagenesService {

  private CARPETA_IMAGENES = 'img';

  constructor(private httpCient:HttpClient) { }

  ngOnInit(): void {
  }


  cargarImagenes(archivo){

    let url = 'http://localhost:4300/cargarImagen';
    this.httpCient.post(url, archivo ).subscribe(datos => console.log(datos));
    
  }

  getImagenes(){
    
    let url = 'http://localhost:4300/getImagenes';
    this.httpCient.get(url).subscribe(datos => console.log(datos));
    
  }



}
