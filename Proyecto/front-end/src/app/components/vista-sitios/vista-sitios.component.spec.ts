import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaSitiosComponent } from './vista-sitios.component';

describe('VistaSitiosComponent', () => {
  let component: VistaSitiosComponent;
  let fixture: ComponentFixture<VistaSitiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaSitiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaSitiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
