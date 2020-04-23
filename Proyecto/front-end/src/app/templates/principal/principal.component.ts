import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SitioService } from "@services/sitio.service";
import { CargaImagenesService } from '@services/carga-imagenes.service';
import { log } from 'util';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  idSitio: any;
  sitio: any;
  contenido: any;
  informacion: any = [];
  informacionMenu: any= [];


  //=====================================================//

  shortcutsImagen: any;
  shortcutsGaleria: any;
  shortcutsEnlace: any;
  shortcutsMenu: any;
  shortcutsHeaders: any;



  //=====================================================//

  esGaleria: boolean = false;
  esImagen: boolean = false;
  esEnlace: boolean = false;
  esMenu: boolean = false;
  esLogin: boolean = false;
  esHeaders: boolean = false;




  //=====================================================//

  imagen: any;
  imagenes: any[];

  //=====================================================//



  constructor(private ac: ActivatedRoute, private servicio: SitioService, private seviceImagen: CargaImagenesService) {



  }

  ngOnInit(): void {

    this.contenido = this.ac.snapshot.paramMap.get("contenido");
    this.idSitio = this.ac.snapshot.paramMap.get("id");

    this.obtenerUno();

    if (this.contenido.length == 1) {
      this.obtenerShourcouts();
    } else {
      this.infomacionSitio();
      this.obtenerTipos();
    }

    if (this.esImagen) {
      this.obtenerImagen(this.shortcutsImagen.id);
    }
    //console.log( this.shortcutsEnlace );
    
  }

  obtenerUno() {
    this.servicio.ontenerUnSitio(this.idSitio).subscribe((data: any) => {
      //console.log(data);
      this.sitio = data[0];
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
        this.informacionMenu.push(this.informacion[i]);
      }
      if (this.informacion[i].tipo == 'enlace') {
        this.esEnlace = true;
        this.shortcutsEnlace = this.informacion[i];
        this.informacionMenu.push(this.informacion[i]);       
      }
      if (this.informacion[i].tipo == 'menu') {
        this.esMenu = true;
        this.shortcutsMenu = this.informacion[i];
      }
      if (this.informacion[i].tipo == 'login') {
        this.esLogin = true;
        this.informacionMenu.push(this.informacion[i]);

      }
      if (this.informacion[i].tipo == 'header') {
        this.esHeaders = true;
        this.shortcutsHeaders = this.informacion[i];
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

    console.log( this.informacion );

  }


  obtenerImagen(id) {
    this.seviceImagen.getImagen(id).subscribe((data: any) => {
      this.imagen = data[0];
      //console.log(data[0]);
    });
  }

  obtenerShourcouts() {
    this.servicio.obtenerShorcouts(this.idSitio).subscribe((data: any) => {
      //console.log(data);
      if (data) {
        this.contenido = data[0].shortcut;
        this.infomacionSitio();
        this.obtenerTipos();

        if (this.esImagen) {
          this.obtenerImagen(this.shortcutsImagen.id);
        }

      }
    });
  }

  
}
