import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '@services/usuario.service';
import { AuthenticationService } from '@services/authentication.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:any = {
    correo: '',
    contrasenia: ''  
  }
  error = false;

  constructor( private servicio: UsuarioService, private auth: AuthenticationService, private router:Router ) { }

  ngOnInit(): void {
  }

  

  login(){

    console.log(this.usuario);

    this.auth.loginCliente(this.usuario).subscribe( (data:any) => {
      if(data.ok){
        console.log(data);
        this.auth.setEsCliente();
        this.auth.setUsuario(data.id);

        this.auth.getUsuario();
        this.auth.getEsCliente();

        this.router.navigate(['/index/perfil']);


      }else{
        console.log(data);
        this.error = true;
      }

    });;



  }

}
