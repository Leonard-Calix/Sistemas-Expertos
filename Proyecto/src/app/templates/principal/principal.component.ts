import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SitioService } from "@services/sitio.service";


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  sitio:any;

  constructor( private ac:ActivatedRoute, private servicio : SitioService  ) { }

  ngOnInit(): void {
    
    console.log( this.ac.snapshot.params.id );
    this.obtenerUno();
  }

  obtenerUno(){
    this.servicio.ontenerUnSitio(this.ac.snapshot.params.id).subscribe((data:any) =>{
      //console.log(data);
      this.sitio = data;
    });
  }

}
