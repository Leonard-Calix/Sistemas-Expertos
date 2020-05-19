import { Component, OnInit } from '@angular/core';
import { UsuarioService } from "@services/usuario.service";
import { AuthenticationService } from '@services/authentication.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario:any;

  constructor( private servicio: UsuarioService, private auth: AuthenticationService) {
    this.auth.getUsuario();
   }

  ngOnInit(): void {
    this.obtenerUsuario();
  }


  obtenerUsuario(){
    this.servicio.obtenerUsuario(this.auth.userId ).subscribe((data:any) =>{
      this.usuario = data[0];
      //console.log(this.usuario);
    });
  }

}