import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargaImagenesService {

  urlServicio:string = 'http://192.168.0.16:4300/';

  constructor(private httpCient:HttpClient) { }

  ngOnInit(): void {
  }
 
  

  cargarImagenes(formData){

    return this.httpCient.post('http://192.168.0.16:4300/archivos' , formData );
    
  }

  obtenerImagenes(data):Observable<any>{
  
    return this.httpCient.get('http://192.168.0.16:4300/archivos/imagenes?inicio='+data);

  }

  getVideo(){
  
    return this.httpCient.get('http://192.168.0.16:4300/archivos/videos');

  }

  obtenerArchivos(){
  
    return this.httpCient.get('http://192.168.0.16:4300/archivos/documentos');

  }

  obtenerImagen(id){
    return this.httpCient.get(`http://localhost:4300/archivos/imagen/${id}`);
  }

}
