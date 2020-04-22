import { Component, OnInit } from '@angular/core';
import { FileItem } from "../modelo/file-item";
import { CargaImagenesService } from "@services/carga-imagenes.service";



@Component({
  selector: 'app-subir-imagen',
  templateUrl: './subir-imagen.component.html',
  styleUrls: ['./subir-imagen.component.css']
})
export class SubirImagenComponent implements OnInit {

  archivo: File;
  res: any;
  imagenes: any = [];
  carga: boolean = false;
  progreso: number;

  file: any = {
    nombre: '',
    tamaño: '',
    tipo: ''
  }


  constructor(private _cargaImagenes: CargaImagenesService) { }

  ngOnInit(): void {

  }

  subir() {
       
      const formData = new FormData();
      formData.append('archivo', this.archivo[0], this.archivo[0].name);

      this._cargaImagenes.cargarImagenes(formData).subscribe((res) => {
        console.log(res);
        this.res = res
        this.progreso = 100;

      });
      
  }

  files(e) {
    //console.log(e);
    this.archivo = e.target.files
    console.log(e.target.files);
    this.carga = true;
    this.file.nombre = this.archivo[0].name;
    this.file.tamano = this.archivo[0].size;
    this.file.tipo = this.archivo[0].type;

  }
  cancelar() {
    this.carga = false;
  }

  conteo(inicio){
    let c = inicio;
    inicio = inicio + 10;
  }

}
