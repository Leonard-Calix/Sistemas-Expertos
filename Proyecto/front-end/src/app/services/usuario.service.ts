import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UsuarioInterface } from "../components/interfaces/usuario.Interface";



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

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
    return this.http.get('http://192.168.0.16:4300/usuario');
  }

  agregarUsuario(data){
    return this.http.post('http://192.168.0.16:4300/usuario', data );
  }

  obtenerUsuario(id){
    return this.http.get(`http://192.168.0.16:4300/usuario/`+id);
  }

  eliminarUsuario(id){
    return this.http.delete('http://192.168.0.16:4300/usuario/'+id );
  }

  
 
}
