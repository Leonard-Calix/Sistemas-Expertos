import { Component, OnInit } from '@angular/core';
import { SitioService } from '@services/sitio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '@services/authentication.service';

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
    encabezado : null,
    menu : null,
    footer : null,
    breadcrumb :null,
    usuario: ''
  }
  

  constructor( private servicio: SitioService, private router: Router, private auth: AuthenticationService ) { }

  ngOnInit(): void {
  }

  guardar(){
    this.sitio.usuario =  this.auth.userId;

    //console.log( this.sitio );

    this.servicio.guardarSitio(this.sitio).subscribe( (data:any) => {
      console.log(data)

      if( data._id ){
        this.router.navigate(['/index/crearSitioShourcouts', data._id]);
      }

    });

    
  }

}
