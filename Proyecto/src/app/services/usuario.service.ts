import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Usuario } from "../components/interfaces/usuario";



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor( private http:HttpClient) { 

  }
  url = 'https://localhost:4300/';


  getUser(){
    return this.http.get('http://localhost:4300/obtenerUsuario');
    //return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  buscarUsuario(){
    return this.http.get('http://localhost:4300/addUser');
  }

  addUser(user:Usuario){
    return this.http.post('http://localhost:4300/addUser', user);
  }
}
