import { Component, OnInit } from '@angular/core';
import { SitioService } from '@services/sitio.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crear-sitio',
  templateUrl: './crear-sitio.component.html',
  styleUrls: ['./crear-sitio.component.css']
})
export class CrearSitioComponent implements OnInit {

  usuarioAutenticado:String = '5e67f7a2a85d65168874c68e';

  sitio:any = {
    titulo : null,
    tituloMenu : null,
    descripcion : null,
    url : null,
    encabezado : null,
    menu : null,
    footer : null,
    breadcrumb :null,
    usuario: this.usuarioAutenticado
  }
  

  constructor( private servicio: SitioService, private router: Router ) { }

  ngOnInit(): void {
  }

  guardar(){

    //console.log( this.sitio );

    this.servicio.guardarSitio(this.sitio).subscribe( (data:any) => {
      console.log(data)

      if( data._id ){
        this.router.navigate(['/index/crearSitioShourcouts', data._id]);
      }

    });

    
  }

}
