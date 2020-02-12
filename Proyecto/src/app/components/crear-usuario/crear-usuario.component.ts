import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  constructor( private _ac: ActivatedRoute ) { }

  ngOnInit(): void {
    /*
    this._ac.paramMap.subscribe( params => {
      const idPlan = params.get('plan')
    })
*/
  }

}
