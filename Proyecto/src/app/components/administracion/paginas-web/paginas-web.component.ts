import { Component, OnInit } from '@angular/core';
import { SitioService } from '@services/sitio.service';

@Component({
  selector: 'app-paginas-web',
  templateUrl: './paginas-web.component.html',
  styleUrls: ['./paginas-web.component.css']
})
export class PaginasWebComponent implements OnInit {

  sitios:any;

  constructor( private S_service: SitioService ) { }

  ngOnInit(): void {

    this.obtnerSitio();
  }

  obtnerSitio(){
    this.S_service.obtenerSitios().subscribe((data:any) => {
      this.sitios = data;
      console.log(data);
    });
  }

}
