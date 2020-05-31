import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { SitioService } from "@services/sitio.service";
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CargaImagenesService } from '@services/carga-imagenes.service';

@Component({
  selector: 'app-crear-sitio2',
  templateUrl: './crear-sitio2.component.html',
  styleUrls: ['./crear-sitio2.component.css']
})
export class CrearSitio2Component implements OnInit {

  public Editor = ClassicEditor;
  imagenes: any[];
  videos: any[];
  archivos: any[];

  coleccion = [
    {
      nombre: 'Imagen',
      etuqueta: '{"tipo":"imagen","id":"5e743527beb9b00b04e8616d"}'
    },
    {
      nombre: 'Galeria',
      etuqueta: '{"tipo":"galeria","imagenes":["5e743527beb9b00b04e8616d", "5e729ca392c34821805f3053"]}'
    },
    {
      nombre: 'Enlaces de descarga de archivos',
      etuqueta: '{"tipo":"enlace","id":"5e743527beb9b00b04e8616d","titulo":"Descargar archivo" }'
    },
    {
      nombre: 'Login',
      etuqueta: '{"tipo":"login","id":"5e743527beb9b00b04e8616d"}'
    },
    {
      nombre: 'Post/Entrada',
      etuqueta: '{"tipo":"entrada","id":"5e743527beb9b00b04e8616d"}'
    },
    {
      nombre: 'Menú',
      etuqueta: '{"tipo":"menu","id":"5e743527beb9b00b04e8616d"}'
    },
    {
      nombre: 'Breadcrumb',
      etuqueta: '{"tipo":"imagen","id":"5e743527beb9b00b04e8616d"}'
    },
    {
      nombre: 'Headers',
      etuqueta: '{"tipo":"header","id":"5e743527beb9b00b04e8616d"}'
    }

  ];


  public model = {
    //editorData: '<p>{"tipo":"imagen","id":"5e743527beb9b00b04e8616d"}</p>'
    editorData: '<p> </p>'

  };

  sitio: string;
  res: string;
  informacion: any = [];


  galeria: boolean = false;
  shorcouts: boolean = false;

  sitioDB: any = {
    shortcut: this.model.editorData,
    sitio: this.sitio
  };

  constructor(private servicio: SitioService, private servicioImagenes: CargaImagenesService, private ac: ActivatedRoute, private router: Router) {

    this.sitio = this.ac.snapshot.paramMap.get("id");

    //console.log(this.coleccion);

  }




  ngOnInit(): void {

    this.obtenerUno();
    this.obtenerImagenes();
    this.obtenerArchivos();
    this.obtenerVideo();

  }

  modalGaleria() {
    this.shorcouts = false;
    this.galeria = true;
  }

  modalShorcouts() {
    this.galeria = false;
    this.shorcouts = true;
  }

  obtenerUno() {
    this.servicio.ontenerUnSitio(this.sitio).subscribe((data: any) => {
      //console.log(data);
    });
  }

  obtenerImagenes() {
    this.servicioImagenes.obtenerImagenes(0).subscribe((data: any) => {
      this.imagenes = data;
    });
  }

  obtenerArchivos() {
    this.servicioImagenes.obtenerArchivos().subscribe((data: any) => {
      this.archivos = data;
    });
  }

  obtenerVideo() {
    this.servicioImagenes.getVideo().subscribe((data: any) => {
      this.videos = data;
    });
  }

  agregarShorcouts(indice) {

    if (this.model.editorData.length < 7) {

      let etiqueta = this.coleccion[indice].etuqueta;
      this.model.editorData = `<p>${etiqueta}</p>`;

    } else {

      let actual = this.model.editorData.substring(0, this.model.editorData.length - 4);
      let etiqueta = this.coleccion[indice].etuqueta;
      this.model.editorData = `${actual}${etiqueta}</p>`;
    }

    console.log(this.model.editorData);
  }

  guardarShorcouts() {


    this.sitioDB.shortcut = this.model.editorData;
    this.sitioDB.sitio = this.sitio;

    //console.log(this.sitioDB);


    this.servicio.guardarShorcouts(this.sitioDB).subscribe((data: any) => {
      console.log(data);


      if (data) {
        this.router.navigate(['/index/sitiosUsuario']);
      }
    });

  }


 


}

