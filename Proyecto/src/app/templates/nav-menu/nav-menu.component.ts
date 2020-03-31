import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  //@Input() tituloMenu:any;
  @Input() sitio:any;
  @Input() menu:any;



  constructor() { }

  ngOnInit(): void {
    console.log(this.menu);
  }

}
