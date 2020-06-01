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
  cantidad: any;
  desde: any;

  ngOnInit(): void {

    this.obtenerComentarios();
    this.desde = 0;
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
    this.serviceComentario.obtenerComentarios(this.desde).subscribe( (data:any) =>{
      this.comentarios = data.comentarios;
      this.cantidad = data.cantidad;

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

 
  cambiar(valor : number){
    let temp = this.desde + valor;

    if (temp >= this.cantidad) {
      return;
    }

    if (temp < 0) {
      return;
    }
 
    this.desde += valor;
    this.obtenerComentarios();

  }

}
