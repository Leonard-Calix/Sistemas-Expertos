import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSitio2Component } from './crear-sitio2.component';

describe('CrearSitio2Component', () => {
  let component: CrearSitio2Component;
  let fixture: ComponentFixture<CrearSitio2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearSitio2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearSitio2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
