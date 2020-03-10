import { Component, OnInit } from '@angular/core';
import { UsuarioService } from "@services/usuario.service";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  id:String = '5e67f7a2a85d65168874c68e';
  usuario:any;

  constructor( private servicio: UsuarioService ) { }

  ngOnInit(): void {
    this.obtenerUsuario()
  }


  obtenerUsuario(){
    this.servicio.obtenerUsuario(this.id).subscribe((data:any) =>{
      this.usuario = data;
      console.log(this.usuario);
    });
  }

}