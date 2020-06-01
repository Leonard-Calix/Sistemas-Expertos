import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '@services/usuario.service';
import { UsuarioInterface } from "../../interfaces/usuario.Interface";
import { Router } from "@angular/router";
//import swal from 'sweetalert';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit  {

  usuarios: any = [];

  usuario:UsuarioInterface = {
    nombre: '',
    apellido: '',
    direccion: '',
    correo: '',
    contrasenia: '',
    confirmacion: '',
    role : 'admin',
    acepta: false

  }

  inicio = 0;

  constructor(private servicioUsuario:UsuarioService, private router:Router )   {
  }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(){
    this.servicioUsuario.obtenerUsuarios(this.inicio).subscribe(( data: any) => {
      this.usuarios = data 
      console.log(data);
    });
  }

  eliminar(idUsuario){
    console.log('metodo para eliminar' , idUsuario );
    this.servicioUsuario.eliminarUsuario(idUsuario).subscribe( (data:any) => {
      console.log(data);
      if (data.ok) {
        this.inicio = 0 ;
        //swal('Importante','Usuario eliminado con exito', 'success');
        this.getUsuarios();
      }
    });
  }
  guardarAdmin(){
    console.log(this.usuario);
    this.servicioUsuario.agregarUsuario(this.usuario).subscribe((data: any) => {
      console.log(data);
      if(data.id){
        //this.router.navigate(['/admin/usuarios']);
        //swal('Importante',`Usuario ${ this.usuario.nombre } guardado con exito`, 'success');

        this.getUsuarios();
        this.limpiarUsuario(this.usuario);
        this.inicio = 0;
        this.getUsuarios();
      }
    });
  }

  limpiarUsuario(usuario: UsuarioInterface){
    this.usuario.nombre = null;
    this.usuario.apellido = null;
    this.usuario.direccion = null;
    this.usuario.correo = null;
    this.usuario.contrasenia = null;  
  }

}
