import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@services/authentication.service';
import { Router } from '@angular/router';
import { UsuarioService } from '@services/usuario.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  autenticacion:Boolean;
  usuario:any;

  constructor( private auth: AuthenticationService, private router:Router, private servicioUsuario: UsuarioService ) {

    //this.autenticacion = Boolean(window.localStorage.getItem('EsCliente'));
    
    this.autenticacion = this.auth.esCliente;


  }

  ngOnInit(): void {


    //console.log(this.autenticacion);
    this.obtenerUsuario();

  }

  logout(){
    this.auth.logoutCliente();

    this.router.navigate(['/login']);


  }

  obtenerUsuario(){
   this.servicioUsuario.obtenerUsuario(this.auth.userId).subscribe( (data:any) => {
     this.usuario = data[0];
     console.log(this.usuario)
   });; 
  }

}
