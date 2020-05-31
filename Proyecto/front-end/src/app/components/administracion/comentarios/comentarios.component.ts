import { Component, OnInit } from '@angular/core';
import { ComentariosService } from '@services/comentarios.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  constructor( private serviceComentario: ComentariosService) { }

  comentarios:any = [];

  ngOnInit(): void {

    this.obtenerComentarios();
  }


  eliminar(id){
    console.log("borrando " + id);
    this.serviceComentario.eliminarComentario(id).subscribe((data:any)=>{
      console.log(data);
      if (data.ok) {
        this.obtenerComentarios();
      }
      
    });
  }

  obtenerComentarios(){
    this.serviceComentario.obtenerComentarios().subscribe( (data:any) =>{
      this.comentarios = data;
      console.log(data);
      
    });;
  }

  busqueda(parametro: string){
    //console.log(parametro);

    if (parametro.length == 0) {
      this.obtenerComentarios();
    }else{
      this.serviceComentario.realizarBusqueda(parametro).subscribe( (data:any) => {
        this.comentarios = data
        console.log(data);  
      });
    }


    
    

    
    
  }

}
