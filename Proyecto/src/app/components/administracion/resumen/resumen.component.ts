import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { AuthenticationService } from '@services/authentication.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {

  constructor(private servicio:AuthenticationService) {
    
   }

  ngOnInit(): void {


  }

}
