import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '@services/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

categoria = {
  nombre: '',
  descripcion: ''
}

categorias:any= [];

  constructor( private servicio:CategoriaService ) { }

  ngOnInit(): void {

    this.obtenerCategorias();
  }
  
  guardarCatgoria(){
    console.log(this.categoria);  

    this.servicio.guardarCategorias(this.categoria).subscribe((data:any) => {
      if(data){
        this.categorias.push(data.categoria);
        console.log(data);
        this.categoria.descripcion = '';
        this.categoria.nombre = '';
      }
    });



  }

  eliminarCatgoria(id, indice){
    this.servicio.eliminarCategoria(id).subscribe( (data:any) => {
      if(data){
        this.categorias.slice(indice, 1);
      }
      this.obtenerCategorias();
    });
  }

  obtenerCategorias(){
    this.servicio.obtenerCategorias().subscribe((data:any) => {
      this.categorias = data;
    });
  }

  
}
