import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css']
})
export class ImagenComponent implements OnInit {

  @Input() urlImage;

  constructor() { }

  ngOnInit(): void {

    console.log(this.urlImage);

  }

}
