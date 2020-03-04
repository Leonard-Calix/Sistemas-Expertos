import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearBlog2Component } from './crear-blog2.component';

describe('CrearBlog2Component', () => {
  let component: CrearBlog2Component;
  let fixture: ComponentFixture<CrearBlog2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearBlog2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearBlog2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
