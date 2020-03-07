import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Usuario } from "../interfaces/usuario";
import { UsuarioService } from "@services/usuario.service";


@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  usuario:Usuario = {
    nombre: null,
    apellido: null,
    direccion: null,
    correo: null,
    contrasena: null,
    confirmacion: null,
    acepta: false,
  }

  constructor( private activatedRoute: ActivatedRoute, private router:Router, private servicesUsuario:UsuarioService ) { 
    
  }

  ngOnInit(): void {
  
  }

  guardar(formulario:NgForm){
    //console.log("foma completa" , formulario);
    //console.log("foma valores" , formulario.value);
    //console.log(this.usuario);

     this.servicesUsuario.addUser(this.usuario).subscribe(ServerRes =>{
      //this.respuesta = ServerRes
      console.log(ServerRes);

    });

    this.router.navigate(['/index/perfil']);

  }

}
