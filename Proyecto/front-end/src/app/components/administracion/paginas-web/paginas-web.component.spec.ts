import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginasWebComponent } from './paginas-web.component';

describe('PaginasWebComponent', () => {
  let component: PaginasWebComponent;
  let fixture: ComponentFixture<PaginasWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginasWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginasWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
