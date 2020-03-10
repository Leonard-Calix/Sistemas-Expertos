import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '@services/usuario.service';
import { UsuarioInterface } from '@components/interfaces/usuario.Interface';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:UsuarioInterface = {
    nombre: null,
    apellido: null,
    direccion: null,
    correo: null,
    contrasena: null,
    confirmacion: null,
    role: null,
    acepta: false,
    
  }

  constructor( private servicio: UsuarioService) { }

  ngOnInit(): void {
  }

  

  login(formulario:NgForm){

    console.log("foma completa" , formulario);
    //console.log("foma valores" , formulario.value);

    //this.servicio.getUser();

  }

}
