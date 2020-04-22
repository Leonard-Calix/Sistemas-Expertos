import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiSitiosComponent } from './mi-sitios.component';

describe('MiSitiosComponent', () => {
  let component: MiSitiosComponent;
  let fixture: ComponentFixture<MiSitiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiSitiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiSitiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
