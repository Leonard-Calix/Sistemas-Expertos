import { Component, OnInit, Input } from '@angular/core';
import { SitioService } from '@services/sitio.service';
import { CargaImagenesService } from '@services/carga-imagenes.service';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {

  @Input() sitio:any;
  @Input() imagen:any;
  info:any;
  img:any;


  constructor( private servicio: SitioService, private servicioImagen: CargaImagenesService ) {




   }

  ngOnInit(): void {

    //console.log(this.sitio);
    //console.log(this.imagen);

    this.obtenerInfo();
    this.obtenerImagen();
  }

  obtenerInfo(){
    this.servicio.ontenerUnSitio(this.sitio).subscribe((data:any) => {
      this.info = data[0];
      console.log(data[0]);
    });
  }

  obtenerImagen(){
    this.servicioImagen.obtenerImagen(this.imagen.id).subscribe( (data:any) => {
      this.img = 'https://blogerweb.herokuapp.com/'+data.url;
      //console.log(this.img);

    }
    );
  }



}
