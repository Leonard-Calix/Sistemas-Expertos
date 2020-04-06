import { Component, OnInit } from '@angular/core';
import { CargaImagenesService } from '@services/carga-imagenes.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  videos: any[];
  constructor(private _cargaImagenes: CargaImagenesService) { }

  ngOnInit(): void {
    this.obtenerVideo();

  }
  obtenerVideo() {
    this._cargaImagenes.getVideo().subscribe((data: any) => {
      this.videos = data;
      console.log(data)
    });
  }
}
