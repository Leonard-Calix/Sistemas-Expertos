import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  esLogeado: boolean = false;
  esAdmin: boolean = false;
  esCliente: boolean = false;
  userId: string ='';
  localStorage = window.localStorage;

  constructor( private http: HttpClient ) {

    this.getUsuario();
    this.getEsAdmin();
    this.getEsCliente();

  }


  logoutAdmin(){
    this.localStorage.removeItem('usuario');
    this.localStorage.removeItem('EsAdmin');
    this.esAdmin = false;
  }

  loginAdmin(user){
    return this.http.post('http://localhost:4300/usuario/admin/login', user);
  }

  setEsAdmin(){
    this.localStorage.setItem('EsAdmin', 'true');
  }

  getEsAdmin(){
    this.esAdmin = Boolean(this.localStorage.getItem('EsAdmin'));
  }

  setUsuario(id: string){
    this.localStorage.setItem('usuario', id);
  }
  getUsuario(){
    this.userId = this.localStorage.getItem('usuario');
  }

  /////////////////////////////////////////////////////////////////////////////////////

  loginCliente(user){
    return this.http.post('http://localhost:4300/usuario/cliente/login', user);
  }

  getEsCliente(){
    this.esCliente = Boolean(this.localStorage.getItem('EsCliente'));
  }

  setEsCliente(){
    this.localStorage.setItem('EsCliente', 'true');
  }

  logoutCliente(){
    this.localStorage.removeItem('usuario');
    this.localStorage.removeItem('EsCliente');
    this.esCliente = false;
  }


}
