import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
    


@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {

  albunes = ["facebook", "instagram", "Spotify", "Youtube"];


  constructor(private http: HttpClient) {
    //this.http.get('http://localhost:4300/imagenes').subscribe(datos => console.log(datos))
    //this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(datos => console.log(datos))


   }

  ngOnInit(): void {
  }

}
