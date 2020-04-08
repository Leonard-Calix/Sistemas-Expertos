import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  autenticacion:Boolean;

  constructor( private auth: AuthenticationService, private router:Router ) {

    //this.autenticacion = Boolean(window.localStorage.getItem('EsCliente'));
    
    this.autenticacion = this.auth.esCliente;


  }

  ngOnInit(): void {


    console.log(this.autenticacion);

  }

  logout(){
    this.auth.logoutCliente();

    this.router.navigate(['/login']);


  }

}
