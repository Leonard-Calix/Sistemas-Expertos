import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {

  albunes = ["facebook", "instagram", "Spotify", "Youtube"];


  constructor() {
   }

  ngOnInit(): void {
  }

}
