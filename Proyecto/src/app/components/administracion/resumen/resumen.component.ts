import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {

  constructor(private renderer:Renderer2, private elemento:ElementRef) { }

  ngOnInit(): void {

    let targeta = `<div class="card" style="width: 18rem;">
                  <img class="card-img-top" src="..." alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>`;

    let div = this.renderer.createElement('div');
    let card = this.renderer.createElement(targeta);

  
    this.renderer.appendChild(div, card);
    this.renderer.appendChild(this.elemento.nativeElement, div);

   




    
  }

}
