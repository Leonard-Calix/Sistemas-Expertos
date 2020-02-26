import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    console.log(this.div);
  }

  boton:string = '<a class="btn btn-sm " routerLink="">Prueba</a>';

  div = document.getElementById("contenido");

}
