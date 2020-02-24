import { Component, OnInit } from '@angular/core';
import { NavbarService } from "@services/navbar.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  autenticacion:Boolean = false;

  constructor( private http: HttpClient) {

    this.http.get('http://localhost:4300/usuario').subscribe(datos => console.log(datos))
    //this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(datos => console.log(datos))
    
  }

  ngOnInit(): void {
  }

}
