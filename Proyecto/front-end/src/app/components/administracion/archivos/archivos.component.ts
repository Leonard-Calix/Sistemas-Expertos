import { Component, OnInit } from '@angular/core';
import { CargaImagenesService } from '@services/carga-imagenes.service';

@Component({
  selector: 'app-archivos',
  templateUrl: './archivos.component.html',
  styleUrls: ['./archivos.component.css']
})
export class ArchivosComponent implements OnInit {
  archivos: any[];

  constructor(private _cargaImagenes: CargaImagenesService) { }

  ngOnInit(): void {
    this.obtenerArchivos();


  }
  
  obtenerArchivos() {

    this._cargaImagenes.obtenerArchivos().subscribe((data: any) => {
      this.archivos = data;
      console.log(data)
    });
  }

}
