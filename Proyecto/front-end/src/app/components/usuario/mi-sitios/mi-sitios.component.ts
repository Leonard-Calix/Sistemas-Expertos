import { Component, OnInit } from '@angular/core';
import { BlogService } from '@services/blog.service';
import { SitioService } from '@services/sitio.service';
import { AuthenticationService } from '@services/authentication.service';

@Component({
  selector: 'app-mi-sitios',
  templateUrl: './mi-sitios.component.html',
  styleUrls: ['./mi-sitios.component.css']
})
export class MiSitiosComponent implements OnInit {
  usuarioAuntenticado: string;
  sitios: any [];

  constructor( private servicio: SitioService, private auth: AuthenticationService ) { }

  ngOnInit(): void {

    this.usuarioAuntenticado = this.auth.userId;
    this.obtenerSitios();    
    console.log( 'Usuario : ' , this.usuarioAuntenticado );
    
  }

  obtenerSitios(){
    this.servicio.obtenerSitioUsuario(this.usuarioAuntenticado).subscribe( (data: any) => {
      this.sitios = data;
      console.log('Sitios :', data);
    });
  }


}
