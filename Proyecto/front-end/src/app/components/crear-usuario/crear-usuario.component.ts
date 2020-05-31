import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioInterface } from "../interfaces/usuario.Interface";
import { UsuarioService } from "@services/usuario.service";
import { AuthenticationService } from '@services/authentication.service';


@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  res:any;

  usuario:UsuarioInterface = {
    nombre: null,
    apellido: null,
    direccion: null,
    correo: null,
    contrasena: null,
    confirmacion: null,
    role : 'normal',
    acepta: false,

  }

  constructor( private activatedRoute: ActivatedRoute, private router:Router, private servicesUsuario:UsuarioService, private auth:AuthenticationService ) { 
    
  }

  ngOnInit(): void {
  
  }

  guardar(formulario:NgForm){
    //console.log("foma completa" , formulario);
    //console.log("foma valores" , formulario.value);
    //console.log(this.usuario);

    this.servicesUsuario.agregarUsuario(this.usuario).subscribe((res: any )=> {
      if (res) {
        console.log(res.id);

        this.auth.setEsCliente();
        this.auth.setUsuario(res.id);
        this.auth.getEsCliente();
        this.auth.getUsuario();
        
        this.router.navigate(['/index/perfil']);   
      }
    });

  }

}
