import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute ) {
    
    this.activatedRoute.params.subscribe( params => {
      console.log(params['plan'])
    });


   }

  ngOnInit(): void {
  
  }

}
