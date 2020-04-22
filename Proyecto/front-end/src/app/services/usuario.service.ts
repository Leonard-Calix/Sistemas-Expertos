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
    contrasena: null,
    confirmacion: null,
    role : 'usuario',
    acepta: false,

  }
  

  constructor( private http:HttpClient ) { }
  
  getUsuarios(){

    return this.http.get('http://localhost:4300/usuarios');
      
  }

  addUsuario(usuario){
    return this.http.post('http://localhost:4300/usuario/agregar', usuario );
  }

  obtenerUsuario(id){
    return this.http.get(`http://localhost:4300/usuario/obtener/`+id);
  }

  eliminar(id){
    return this.http.delete('http://localhost:4300/usuario/eliminar/'+id );
  }
 
}
