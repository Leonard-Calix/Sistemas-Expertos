import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CargaImagenesService {

  private CARPETA_IMAGENES = 'img';

  urlServicio:string = 'http://localhost:4300/';

  constructor(private httpCient:HttpClient) { }

  respuesta:any = '';


  ngOnInit(): void {
  }
 
  

  cargarImagenes(archivo){

    let url = 'http://localhost:4300/cargarImagen';
    this.httpCient.post(this.urlServicio+'cargarImagen' , archivo ).subscribe(datos => {
      this.respuesta = datos;
    });
    return this.respuesta;
    
  }

  getImagenes(){
    
    let url = 'http://localhost:4300/getImagenes';
    this.httpCient.get(url).subscribe(datos =>{
      this.respuesta = datos;
    });
    return this.respuesta;
  }

}
