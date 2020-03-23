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

  archivo: File;
  res: any;
  imagenes: any[];


  constructor( private _cargaImagenes: CargaImagenesService ) { }

  ngOnInit(): void {

  }

  subir(){

    const formData = new FormData(); 
		formData.append('archivo', this.archivo[0], this.archivo[0].name); 
		
    this._cargaImagenes.cargarImagenes(formData).subscribe((res) => {
      console.log(res);
      this.res = res
    });
  }

  files(e){
    //console.log(e);
    this.archivo = e.target.files
    //console.log( e.target.files);
  }


}
