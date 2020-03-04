import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-blog2',
  templateUrl: './crear-blog2.component.html',
  styleUrls: ['./crear-blog2.component.css']
})
export class CrearBlog2Component implements OnInit {

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
