import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-sitio',
  templateUrl: './crear-sitio.component.html',
  styleUrls: ['./crear-sitio.component.css']
})
export class CrearSitioComponent implements OnInit {

  sitio:any = {
    titulo : null,
    tituloMenu : null,
    descripcion : null,
    url : null,
    emcabezado : null,
    menu : null,
    footer : null,
    breadcrumb :null
  }
  

  constructor( ) { }

  ngOnInit(): void {
  }

  guardar(){
/*
    this.servicio.guardar(this.sitio).subscribe( (data:any) => {
      console.log(data)
    });
*/
    //console.log( this.sitio );
  }

  //routerLink="/index/crearSitioShourcouts"
}
