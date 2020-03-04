import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisSitiosComponent } from './mis-sitios.component';

describe('MisSitiosComponent', () => {
  let component: MisSitiosComponent;
  let fixture: ComponentFixture<MisSitiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisSitiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisSitiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
