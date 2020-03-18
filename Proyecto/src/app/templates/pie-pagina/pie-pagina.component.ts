import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pie-pagina',
  templateUrl: './pie-pagina.component.html',
  styleUrls: ['./pie-pagina.component.css']
})
export class PiePaginaComponent implements OnInit {

  @Input() sitio:any;

  constructor() { }

  ngOnInit(): void {
  }

}
