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
  contenido:any;
  informacion:any = [];
  shortcutsImagen:any;
  shortcutsGaleria:any;
  shortcutsEnlace:any;
  galeria:boolean;
  imagen:boolean;
  enlace:boolean;

  constructor( private ac:ActivatedRoute, private servicio : SitioService  ) {
    this.contenido =  this.ac.snapshot.params.contenido;
   }

  ngOnInit(): void {
    
    this.obtenerUno();
    this.infomacionSitio();
    this.obtenerTipos();

    
  }

  obtenerUno(){
    this.servicio.ontenerUnSitio(this.ac.snapshot.params.id).subscribe((data:any) =>{
      //console.log(data);
      this.sitio = data;
    });
  }

  obtenerTipos(){
    for(let i = 0 ; i < this.informacion.length ; i++ ){
      if(this.informacion[i].tipo=='imagen'){
        this.imagen = true;
        this.shortcutsImagen = this.informacion[i];
      }
      if(this.informacion[i].tipo=='galeria'){
        this.galeria = true;
        this.shortcutsGaleria = this.informacion[i];
      }
      if(this.informacion[i].tipo=='enlace'){
        this.enlace = true;
        this.shortcutsEnlace = this.informacion[i];
      }
    }
  }

  infomacionSitio(){

    let inicio = 0;
    let fin = 0;
    let c = 0;

    while (this.contenido.length!=0) {
      // statement
     if (this.contenido[inicio]=='{') {
       fin = this.contenido.indexOf( '}', inicio );
       this.informacion[c] = JSON.parse(this.contenido.substring( inicio, fin+1));
       inicio = fin;
       c++;
     }
     this.contenido = this.contenido.substring( fin+1, this.contenido.length );
 
     fin = 0;
     inicio = 0;
   }

    console.log( this.informacion );

  }

}
