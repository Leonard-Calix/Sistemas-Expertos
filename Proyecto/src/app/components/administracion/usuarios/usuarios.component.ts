import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '@services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private servicio:UsuarioService ) {

    this.buscar()

  }

  
  ngOnInit(): void {
  }

  obtenerUsuario(){

    this.servicio.getUser().subscribe(datos => console.log(datos));

  }

  buscar(){

    this.servicio.buscarUsuario().subscribe(datos => console.log(datos));

  }

}
