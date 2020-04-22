import { Component, OnInit } from '@angular/core';
import { ComentariosService } from '@services/comentarios.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  constructor( private serviceComentario: ComentariosService) { }

  comentarios:any;

  ngOnInit(): void {

    this.obtenerComentarios();
  }


  eliminar(id){
    console.log("borrando " + id);
  }

  obtenerComentarios(){
    this.serviceComentario.obtenerComentarios().subscribe( (data:any) =>{
      this.comentarios = data;
    });;
  }

}
