import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor(private http: HttpClient) { }

  prueba() {
    let url = 'https://localhost:4300/usuario';
    return this.http.get(url);
  }

}


