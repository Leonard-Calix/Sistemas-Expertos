
import { Component, OnInit } from '@angular/core';
import { SitioService } from '@services/sitio.service';

@Component({
  selector: 'app-vista-sitios',
  templateUrl: './vista-sitios.component.html',
  styleUrls: ['./vista-sitios.component.css']
})
export class VistaSitiosComponent implements OnInit {

  sitios:any [];

  constructor( private sitioService: SitioService ) { 

    this.obtenerSitios();

  }

  ngOnInit(): void {
  }

  obtenerSitios(){
    this.sitioService.obtenerSitios().subscribe((data:any) => {
      this.sitios = data;
      console.log(data);
    });
  }

}
