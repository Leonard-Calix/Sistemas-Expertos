import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargaImagenesService {

  urlServicio:string = 'https://blogerweb.herokuapp.com';

  constructor(private httpCient:HttpClient) { }

  ngOnInit(): void {
  }
 
  

  cargarImagenes(formData){

    return this.httpCient.post(` ${ this.urlServicio }/upload` , formData );
    
  }

  obtenerImagenes(data):Observable<any>{
  
    return this.httpCient.get(`${ this.urlServicio }/archivos/imagenes?inicio=${ data }`);

  }

  getVideo(){
  
    return this.httpCient.get(` ${ this.urlServicio }/archivos/videos`);

  }

  obtenerArchivos(){
  
    return this.httpCient.get(`${ this.urlServicio }/archivos/documentos`);

  }

  obtenerImagen(id){
    return this.httpCient.get(`${ this.urlServicio }/archivos/imagen/${id}`);
  }

}
