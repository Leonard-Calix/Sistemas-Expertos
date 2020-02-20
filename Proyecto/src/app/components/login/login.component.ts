import { Component, OnInit } from '@angular/core';
import { NavbarService } from '@services/navbar.service';
import { UsuarioService } from '@services/usuario.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private servicio: UsuarioService) { }

  ngOnInit(): void {
  }

  usuarios = {}

  login(){

    this.servicio.getUser();

  }

}
