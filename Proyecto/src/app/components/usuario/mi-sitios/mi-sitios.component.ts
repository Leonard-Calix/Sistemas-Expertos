import { Component, OnInit } from '@angular/core';
import { BlogService } from '@services/blog.service';
import { SitioService } from '@services/sitio.service';

@Component({
  selector: 'app-mi-sitios',
  templateUrl: './mi-sitios.component.html',
  styleUrls: ['./mi-sitios.component.css']
})
export class MiSitiosComponent implements OnInit {
  usuarioAuntenticado: string = '5e7d0d16fac96b05a48d9d45';
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
