import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SitioService } from "@services/sitio.service";
import { CargaImagenesService } from '@services/carga-imagenes.service';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  sitio: any;
  contenido: any;
  informacion: any = [];

  //=====================================================//

  shortcutsImagen: any;
  shortcutsGaleria: any;
  shortcutsEnlace: any;

  //=====================================================//

  esGaleria: boolean;
  esImagen: boolean;
  esEnlace: boolean;

  //=====================================================//

  imagen: any;
  imagenes: any[];

  //=====================================================//



  constructor(private ac: ActivatedRoute, private servicio: SitioService, private seviceImagen: CargaImagenesService) {

    this.contenido = this.ac.snapshot.paramMap.get("contenido");
    this.sitio = this.ac.snapshot.paramMap.get("id");

  }

  ngOnInit(): void {

    if (this.contenido.length == 1) {
      this.obtenerShourcouts(this.sitio);
    }

    this.obtenerUno();
    this.infomacionSitio();
    this.obtenerTipos();

    if (this.esImagen) {
      this.obtenerImagen(this.shortcutsImagen.id);
    }
    //console.log( this.shortcutsEnlace );

  }

  obtenerUno() {
    this.servicio.ontenerUnSitio(this.sitio).subscribe((data: any) => {
      //console.log(data);
      this.sitio = data;
    });
  }

  obtenerTipos() {
    for (let i = 0; i < this.informacion.length; i++) {
      if (this.informacion[i].tipo == 'imagen') {
        this.esImagen = true;
        this.shortcutsImagen = this.informacion[i];
      }
      if (this.informacion[i].tipo == 'galeria') {
        this.esGaleria = true;
        this.shortcutsGaleria = this.informacion[i];
      }
      if (this.informacion[i].tipo == 'enlace') {
        this.esEnlace = true;
        this.shortcutsEnlace = this.informacion[i];
      }
    }
  }

  infomacionSitio() {

    let inicio = 0;
    let fin = 0;
    let c = 0;

    while (this.contenido.length != 0) {
      // statement
      if (this.contenido[inicio] == '{') {
        fin = this.contenido.indexOf('}', inicio);
        this.informacion[c] = JSON.parse(this.contenido.substring(inicio, fin + 1));
        inicio = fin;
        c++;
      }
      this.contenido = this.contenido.substring(fin + 1, this.contenido.length);

      fin = 0;
      inicio = 0;
    }

    //console.log( this.informacion );

  }


  obtenerImagen(id) {
    this.seviceImagen.getImagen(id).subscribe((data: any) => {
      console.log(data);
      this.imagen = data;
    });
  }

  obtenerShourcouts(sitio) {
    this.servicio.obtenerShorcouts(sitio).subscribe((data: any) => {
      console.log( this.contenido);
      if (data) {
        this.contenido = data[0].shortcut;
        this.infomacionSitio();
        this.obtenerTipos();
      }
    });
  }


}
