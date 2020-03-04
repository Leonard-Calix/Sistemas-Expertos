import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Usuario } from "../interfaces/usuario";

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
    confirmacion: null
  }

  constructor( private activatedRoute: ActivatedRoute ) { 
    
    this.activatedRoute.params.subscribe( params => {
      console.log(params['plan'])
    });
   }

   


  ngOnInit(): void {
  
  }

  guardar(formulario:NgForm){
    console.log("foma completa" , formulario);
    //console.log("foma valores" , formulario.value);

    
  }

}
