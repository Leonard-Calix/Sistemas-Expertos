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
 
  

  cargarImagenes(formData){

    return this.httpCient.post('http://localhost:4300/cargarImage' , formData );
    
  }

  getImagenes(){
    
    let url = 'http://localhost:4300/getImagenes';
    this.httpCient.get(url).subscribe(datos =>{
      this.respuesta = datos;
    });
    return this.respuesta;
  }

}
