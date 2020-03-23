import { Component, OnInit } from '@angular/core';
import { BlogService } from '@services/blog.service';
import { SitioService } from '@services/sitio.service';

@Component({
  selector: 'app-mi-sitios',
  templateUrl: './mi-sitios.component.html',
  styleUrls: ['./mi-sitios.component.css']
})
export class MiSitiosComponent implements OnInit {
  usuarioAuntenticado: string = '5e67f7a2a85d65168874c68e';
  sitios: any [];

  constructor( private servicio: SitioService ) { }

  ngOnInit(): void {

    this.obtenerSitios();

  }

  obtenerSitios(){
    this.servicio.obtenerSitioUsuario(this.usuarioAuntenticado).subscribe( (data: any) => {
      this.sitios = data;
      console.log(data);
    });
  }


}
