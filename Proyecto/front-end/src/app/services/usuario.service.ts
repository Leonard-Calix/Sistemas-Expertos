import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UsuarioInterface } from "../components/interfaces/usuario.Interface";



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  utl:string = 'https://blogerweb.herokuapp.com';

  usuario:UsuarioInterface = {
    nombre: null,
    apellido: null,
    direccion: null,
    correo: null,
    contrasenia: null,
    confirmacion: null,
    role : 'usuario',
    acepta: false,

  }
  

  constructor( private http:HttpClient ) { }
  
  obtenerUsuarios(data){
    return this.http.get(`${ this.utl }/usuario`);
  }

  agregarUsuario(data){
    return this.http.post(`${ this.utl }/usuario`, data );
  }

  obtenerUsuario(id){
    return this.http.get(`${ this.utl }/usuario/`+id);
  }

  eliminarUsuario(id){
    return this.http.delete(`${ this.utl }/usuario/`+id );
  }

  
 
}
