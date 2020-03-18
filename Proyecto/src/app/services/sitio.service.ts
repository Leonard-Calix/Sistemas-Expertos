import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SitioService {

  constructor( private http: HttpClient  ) { }

  ontenerUnSitio(sitio: String){
    return this.http.get('http://localhost:4300/sitio/obtener/'+sitio);
  }

}
