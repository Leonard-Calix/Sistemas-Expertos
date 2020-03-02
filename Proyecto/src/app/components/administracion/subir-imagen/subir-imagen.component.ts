import { Component, OnInit } from '@angular/core';
import { FileItem } from "../modelo/file-item";
import { CargaImagenesService } from "@services/carga-imagenes.service";
import { timer } from 'rxjs';

@Component({
  selector: 'app-subir-imagen',
  templateUrl: './subir-imagen.component.html',
  styleUrls: ['./subir-imagen.component.css']
})
export class SubirImagenComponent implements OnInit {

  archivo: FileItem;
  mensaje:any='';
  seGuardo:boolean = false;

  constructor( private _cargaImagenes: CargaImagenesService ) { }

  ngOnInit(): void {

    this.getImagenes();

  }

  cargarImagen(e){

    let archivo = { nombre: e.target.files[0].name, tipo: e.target.files[0].type }
    //console.log(archivo);
    this.mensaje = this._cargaImagenes.cargarImagenes(archivo);
    this.seGuardo = true;
    
    console.log(this.mensaje);

    setTimeout(() => {
      this.seGuardo = false;;
    }, 2000)
  }

  getImagenes(){
    this._cargaImagenes.getImagenes();
  }

}
