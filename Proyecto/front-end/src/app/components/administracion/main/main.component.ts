import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor( private service:AuthenticationService, private router: Router ) { }

  ngOnInit(): void {
  }

  buscar(termino){
    console.log('El termino de busqueda es ' + termino );
  }

  cerrarSecion(){
    this.service.logoutAdmin();
    this.router.navigate(['/loginAdmin']);
  }

}
