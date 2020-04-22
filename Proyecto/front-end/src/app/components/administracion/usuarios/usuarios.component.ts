import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '@services/usuario.service';
import { UsuarioInterface } from "../../interfaces/usuario.Interface";
import { Router } from "@angular/router";
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit  {

  usuarios: any[]= [];

  usuario:UsuarioInterface = {
    nombre: null,
    apellido: null,
    direccion: null,
    correo: null,
    contrasena: null,
    confirmacion: null,
    role : 'admin',
    acepta: false,

  }

  constructor(private servicioUsuario:UsuarioService, private router:Router )   {
  }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(){
    this.servicioUsuario.getUsuarios().subscribe(( data: any) => (this.usuarios = data  ) );
  }

  eliminar(){
    console.log('metodo para eliminar');
  }
  guardarAdmin(){
    console.log(this.usuario);
    this.servicioUsuario.addUsuario(this.usuario).subscribe((data: any) => {
      //console.log(data);
      if(data.Ok){
        this.router.navigate(['/admin/usuarios']);
        this.getUsuarios();
        this.limpiarUsuario(this.usuario);
      }
    });
  }

  limpiarUsuario(usuario: UsuarioInterface){
    this.usuario.nombre = null;
    this.usuario.apellido = null;
    this.usuario.direccion = null;
    this.usuario.correo = null;
    this.usuario.contrasena = null;  
  }

}
