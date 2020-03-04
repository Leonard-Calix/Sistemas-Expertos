import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-sitio2',
  templateUrl: './crear-sitio2.component.html',
  styleUrls: ['./crear-sitio2.component.css']
})
export class CrearSitio2Component implements OnInit {

  galeria:boolean = false;
  shorcouts:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  modalGaleria(){
    this.shorcouts = false;
    this.galeria = true;
  }

  modalShorcouts(){
    this.galeria = false;
    this.shorcouts = true;
  }
}
