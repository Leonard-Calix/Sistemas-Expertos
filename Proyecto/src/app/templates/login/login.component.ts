import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login2',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class Login2Component implements OnInit {

  @Input() nombre:any;

  usuario = {
    correo: ' ',
    contrasenia: ' '
  }

  constructor() { }

  ngOnInit(): void {
  }

  login(){
    console.log( this.usuario );
  }

}
